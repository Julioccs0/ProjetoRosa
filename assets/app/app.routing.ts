import { Routes, RouterModule } from "@angular/router";
import { AUTH_ROUTES } from "./auth/auth.router";
import { MANGA_ROUTES } from "./manga/manga.router";

import { MangaComponent } from "./manga/manga.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [ 
    {path: '', redirectTo: '/manga', pathMatch: 'full'},
    {path: 'manga', component: MangaComponent, children: MANGA_ROUTES},
    {path: 'autenticacao',component: AuthenticationComponent, children: AUTH_ROUTES},
]

export const myrouting = RouterModule.forRoot(APP_ROUTES);