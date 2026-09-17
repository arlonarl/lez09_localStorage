import { Injectable } from '@angular/core';
import { Ristorante } from '../models/ristorante';

@Injectable({
  providedIn: 'root',
})
export class RistoranteService {
  private ristoranteList: Ristorante[] = [];

  constructor() {
    let elencoMemory = localStorage.getItem("elenco-ristoranti");
    if (!elencoMemory) {
      localStorage.setItem("elenco-ristoranti", JSON.stringify([]));
    } else {
      this.ristoranteList = JSON.parse(elencoMemory);
    }

     /* this.ristoranteList.push(new Ristorante(
        1,
        "Trattoria Da Maria",
        "Autentica cucina casalinga italiana con pasta fatta in casa e specialità toscane",
        "Via Roma 42, Firenze",
        "+39 055 1234567",
        "www.trattoriadamaria.it",
        "info@trattoriadamaria.it",
        43.7696,
        11.2558
    ));
    
    this.ristoranteList.push(new Ristorante(
        2,
        "Pizzeria Napoletana",
        "Pizza tradizionale napoletana cotta nel forno a legna",
        "Via Napoli 15, Milano",
        "+39 02 9876543",
        "www.pizzeria-napoletana.it",
        "prenotazioni@pizzeria-napoletana.it",
        45.4642,
        9.1900
    ));
    
    this.ristoranteList.push(new Ristorante(
        3,
        "Sushi Sakura",
        "Ristorante giapponese con sushi freschissimo e specialità di pesce",
        "Corso Vittorio Emanuele 88, Roma",
        "+39 06 3456789",
        "www.sushisakura.it",
        "sushi@sakura.it",
        41.9028,
        12.4964
    ));
    
    this.ristoranteList.push(new Ristorante(
        4,
        "Wok Express",
        "Cucina cinese e thailandese con piatti wok e dim sum",
        "Via Garibaldi 27, Bologna",
        "+39 051 2345678",
        "www.wokexpress.it",
        "ordini@wokexpress.it",
        44.4949,
        11.3426
    ));
    
    this.ristoranteList.push(new Ristorante(
        5,
        "El Patio",
        "Tapas e paella spagnola in un ambiente tipicamente andaluso",
        "Piazza Navona 5, Roma",
        "+39 06 4567890",
        "www.elpatio.it",
        "info@elpatio.it",
        41.8994,
        12.4733
    ));
    
    this.ristoranteList.push(new Ristorante(
        6,
        "Le Bistrot",
        "Cucina francese raffinata con piatti della tradizione parigina",
        "Via Montenapoleone 10, Milano",
        "+39 02 5678901",
        "www.lebistrot.it",
        "prenotazioni@lebistrot.it",
        45.4668,
        9.1905
    ));
    
    this.ristoranteList.push(new Ristorante(
        7,
        "Green Garden",
        "Ristorante vegetariano e vegano con ingredienti biologici e locali",
        "Via del Corso 100, Firenze",
        "+39 055 6789012",
        "www.greengarden.it",
        "hello@greengarden.it",
        43.7766,
        11.2477
    ));
    
    this.ristoranteList.push(new Ristorante(
        8,
        "La Cambusa",
        "Specialità di pesce fresco e crudità di mare",
        "Lungomare 20, Genova",
        "+39 010 7890123",
        "www.lacambusa.it",
        "pesce@lacambusa.it",
        44.4056,
        8.9463
    ));
    
    this.ristoranteList.push(new Ristorante(
        9,
        "Il Convivio",
        "Cucina stellata Michelin con menu degustazione e abbinamenti vini",
        "Via Borgognona 45, Roma",
        "+39 06 8901234",
        "www.ilconvivio.it",
        "ristorante@ilconvivio.it",
        41.9047,
        12.4798
    ));
    
    this.ristoranteList.push(new Ristorante(
        10,
        "La Brace",
        "Carni alla griglia e bistecche fiorentine di alta qualità",
        "Via del Ponte 33, Firenze",
        "+39 055 9012345",
        "www.labrace.it",
        "info@labrace.it",
        43.7767,
        11.2500
    )); */
  } 
  
  getRistoranti(): Ristorante[] {
    return this.ristoranteList;
  }

  inserisciRistorante(newRistorante: Ristorante) : boolean {
    if (!newRistorante.nome) { alert("Il nome del ristorante è obbligatorio! Riprova inserendo tutti i dati."); return false; }
    if (!newRistorante.indirizzo) { alert("L'indirizzo del ristorante è obbligatorio! Riprova inserendo tutti i dati."); return false; }
    if (!newRistorante.latitudine || !newRistorante.longitudine){
      alert("La posizione del ristorante è obbligatoria! Riprova inserendo tutti i dati.");
      return false;
    }
    if (this.ristoranteList.some(r => r.nome === newRistorante.nome && r.indirizzo === newRistorante.indirizzo)) {
      alert("Questo ristorante già esiste! Impossibile inserirlo.");
      return false;
    }
    this.ristoranteList.push(newRistorante);
    localStorage.setItem("elenco-ristoranti", JSON.stringify(this.ristoranteList));
    return true;
  }

  rimuoviRistorante(id: number): boolean {
    if (!id) {
      console.log("Id non valido!");
      return false;
    }
    const index = this.ristoranteList.findIndex(r => r.id === id);
    if (index !== -1) {
      if (confirm("Sei sicuro di voler rimuovere questo ristorante?")) {
        this.ristoranteList.splice(index, 1);
        localStorage.setItem("elenco-ristoranti", JSON.stringify(this.ristoranteList));
        alert("Ristorante rimosso con successo!");
      }
      return true;
    } else {
      alert("Ristorante non trovato! Impossibile rimuoverlo.");
      return false;
    }
  }

  getRistoranteById(id: number): Ristorante | undefined {
    return this.ristoranteList.find(r => r.id === id);
  }

  cercaRistorante(id: number | undefined): Ristorante | undefined {
    if (!id) {
      return undefined;
    }
    return this.ristoranteList.find(r => r.id === id);
  }
}

