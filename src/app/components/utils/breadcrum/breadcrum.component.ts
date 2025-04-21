import { Component, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

type Crumb = { label: string; url: string };

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav *ngIf="crumbs().length" class="bg-gray-50 px-4 py-2 text-sm border-b">
      <ol class="flex flex-wrap items-center gap-1">
        <li
          *ngFor="let c of crumbs(); let last = last"
          class="flex items-center"
        >
          <a
            *ngIf="!last"
            [routerLink]="c.url"
            class="text-blue-600 hover:underline"
          >
            {{ c.label }}
          </a>

          <span *ngIf="last" class="text-gray-700 font-medium">
            {{ c.label }}
          </span>

          <span *ngIf="!last" class="mx-1">/</span>
        </li>
      </ol>
    </nav>
  `,
})
export class BreadcrumComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // 2) signal mutable en lugar de computed
  private readonly _crumbs = signal<Crumb[]>([]);
  crumbs = () => this._crumbs(); // getter que usa la plantilla

  constructor() {
    // recalcular en cada navegación terminada
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(
        () => this._crumbs.set(this.build(this.route.root)) // set() ≠ update()
      );
  }

  private build(route: ActivatedRoute, url = '', out: Crumb[] = []): Crumb[] {
    const label = route.snapshot.data['breadcrumb'];
    const path = route.snapshot.routeConfig?.path ?? '';

    const nextUrl = path ? `${url}/${path}` : url;
    if (label) out.push({ label, url: nextUrl });

    return route.firstChild ? this.build(route.firstChild, nextUrl, out) : out;
  }
}
