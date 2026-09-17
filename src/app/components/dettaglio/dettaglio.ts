import { Component } from '@angular/core';
import { Ristorante } from '../../models/ristorante';
import { RistoranteService } from '../../services/ristorante-service';
import { ActivatedRoute } from '@angular/router';
declare const L: any;

@Component({
  selector: 'app-dettaglio',
  imports: [],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css',
})
export class Dettaglio {
  ristorante?: Ristorante;
  private mappa: any;


  constructor( private route: ActivatedRoute, private serviceRistorante: RistoranteService) {

  }

  ngOnInit() {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
    
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.ristorante = this.serviceRistorante.getRistoranteById(id);
    if (this.ristorante?.latitudine != null && this.ristorante?.longitudine != null) {
      this.inizializzaMappa(this.ristorante.latitudine, this.ristorante.longitudine);
    }
  };


  private inizializzaMappa(lat: number, lon: number): void {
    this.mappa = L.map('mappaDettaglio').setView([lat, lon], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.mappa);

    L.marker([lat, lon]).addTo(this.mappa)
      .bindPopup(this.ristorante?.nome ?? '')
      .openPopup();
  }
}

