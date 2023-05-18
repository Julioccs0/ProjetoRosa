import { Routes } from "@angular/router";
import { CreateComponent } from "./create.component";
import { MangaList } from "./list-component";
import { LivroComponent } from "./livro-component";
import { ReservaComponent } from "./reserva-component";

/* Este Path é relativo a /autenticacao
   Aqui temos as sub-rotas ("child routes") */

export const MANGA_ROUTES: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "create", component: CreateComponent },
  { path: "list", component: MangaList },
  { path: "reserva", component: ReservaComponent },
  { path: ":id", component: LivroComponent },
];
