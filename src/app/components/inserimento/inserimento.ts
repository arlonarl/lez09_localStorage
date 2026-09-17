import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ristorante } from '../../models/ristorante';
import { RistoranteService } from '../../services/ristorante-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserimento',
  imports: [FormsModule],
  templateUrl: './inserimento.html',
  styleUrl: './inserimento.css',
})
export class Inserimento {
  ristorante: Ristorante = {} as Ristorante;

  constructor(private ristoranteService: RistoranteService, private router: Router) { }

  onSubmit(): void {
    this.ristorante.id = this.ristoranteService.getRistoranti().length + 1;
    this.ristoranteService.inserisciRistorante(this.ristorante);
    this.router.navigate(['/lista']);
  }

}
