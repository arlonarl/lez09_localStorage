import { Component } from '@angular/core';
import { RistoranteService } from '../../services/ristorante-service';
import { Ristorante } from '../../models/ristorante';
import { Router } from '@angular/router';
declare const L: any;
@Component({
  selector: 'app-mappa',
  imports: [],
  templateUrl: './mappa.html',
  styleUrl: './mappa.css',
})
export class Mappa {
  ristoranti: Ristorante[] = [];

  constructor( private serviceRistorante: RistoranteService, private router: Router ) {
    this.ristoranti = serviceRistorante.getRistoranti();
  }

  ngOnInit() {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
    const map = L.map("map").setView([41.9028, 12.4964], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    for (const ristorante of this.ristoranti) {
      const marker = L.marker([ristorante.latitudine, ristorante.longitudine]).addTo(map);
      const contenutoPopup = ('<b>'+ ristorante.nome + '</b><br>' + ristorante.indirizzo + '<br><button id="detail-button" class="btn btn-outline-secondary btn-sm">Dettagli</button>');
      marker.bindPopup(contenutoPopup);
      marker.on('popupopen', (event : any) => {
        const button = event.popup.getElement().querySelector('#detail-button');
        button?.addEventListener('click', () => {
          this.router.navigate(['/ristorante', ristorante.id]);
        });
      });
    }
  }

  


}
