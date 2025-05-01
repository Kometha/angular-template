// src/app/core/breadcrumb.service.ts
import { Injectable, signal, effect } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface Crumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  readonly crumbs = signal<Crumb[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) {
    // Recalcular en cada navegación terminada
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => this.crumbs.set(this.build(this.route.root)));
  }

  private build(route: ActivatedRoute, url: string = '', acc: Crumb[] = []): Crumb[] {
    const data = route.snapshot.data;
    const nextUrl = data['breadcrumb']
      ? `${url}/${route.snapshot.url.map(u => u.path).join('/')}`
      : url;

    if (data['breadcrumb']) {
      acc.push({ label: data['breadcrumb'], url: nextUrl });
    }

    route.children.forEach(child => this.build(child, nextUrl, acc));
    return acc;
  }
}
