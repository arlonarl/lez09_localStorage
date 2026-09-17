import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Dettaglio } from './components/dettaglio/dettaglio';
import { Inserimento } from './components/inserimento/inserimento';
import { Mappa } from './components/mappa/mappa';

export const routes: Routes = [
    { path: "", redirectTo: "lista", pathMatch: "full" },
    { path: "lista", component: Lista },
    { path:"inserimento", component: Inserimento },
    { path: "mappa", component: Mappa },
    { path: "ristorante/:id", component: Dettaglio }
];
