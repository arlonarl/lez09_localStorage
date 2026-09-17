import { Component } from '@angular/core';
import { Ristorante } from '../../models/ristorante';
import { RistoranteService } from '../../services/ristorante-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  listaRistoranti: Ristorante[] = [];

  constructor(private serviceRistorante: RistoranteService, private router: Router) {
    
  }

  ngOnInit() {
    this.listaRistoranti = this.serviceRistorante.getRistoranti();
  }

  rimuoviRistorante(id: number) {
    this.serviceRistorante.rimuoviRistorante(id);
  }

  
}
