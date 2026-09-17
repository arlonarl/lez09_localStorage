export class Ristorante {

    id : number;
    nome?: string;
    descrizione?: string;
    indirizzo?: string;
    telefono?: string;
    sito_web?: string;
    email?: string;
    latitudine?: number;
    longitudine?: number;
    
    constructor(varId: number, varNome?: string, varDescrizione?: string, varIndirizzo?: string, varTelefono?: string, varSitoWeb?: string, varEmail?: string, varLatitudine?: number, varLongitudine?: number) {
        this.id = varId;
        this.nome = varNome;
        this.descrizione = varDescrizione;
        this.indirizzo = varIndirizzo;
        this.telefono = varTelefono;
        this.sito_web = varSitoWeb;
        this.email = varEmail;
        this.latitudine = varLatitudine;
        this.longitudine = varLongitudine;
    }
}
