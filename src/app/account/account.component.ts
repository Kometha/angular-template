import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Profile } from '../models/profile';
import { AuthSession } from '@supabase/supabase-js';

@Component({
  selector: 'app-account',
  imports: [FormsModule, ReactiveFormsModule],
  template: ` <p>account works!</p> `,
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  loading = false;
  profile!: Profile;
  @Input()
  session!: AuthSession;
  updateProfileForm: FormGroup;

  constructor(
    private readonly supabase: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.updateProfileForm = this.formBuilder.group({
      username: [''],
      website: [''],
      avatar_url: [''],
    });
  }

  async ngOnInit(): Promise<void> {
    await this.getProfile();
    const { username, website, avatar_url } = this.profile;
    this.updateProfileForm.patchValue({
      username: username,
      website: website,
      avatar_url: avatar_url,
    });
  }

  async getProfile() {
    try {
      this.loading = true;
      const { user } = this.session;
      const {
        data: profile,
        error,
        status,
      } = await this.supabase.profile(user);

      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        this.profile = profile as Profile;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loading = false;
    }
  }

  async updateProfile() {
    try {
      this.loading = true;
      const { user } = this.session;
      const username = this.updateProfileForm.value.username as string;
      const website = this.updateProfileForm.value.website as string;
      const avatar_url = this.updateProfileForm.value.avatar_url as string;
      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
      });
      if (error) throw error;
      alert('¡Perfecto! Tu perfil ha sido actualizado');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loading = false;
    }
  }

  async signOut() {
    await this.supabase.signOut();
  }
}
