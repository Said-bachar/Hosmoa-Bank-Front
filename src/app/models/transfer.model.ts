import { Account } from "./account.model";

export interface Transfer {
    id?: number;
    compte: Account;
    destCompte: Account;
    montant: string;
    dateDeVirement: Date;
    statut: string;
  
    isSent?: boolean;
  }