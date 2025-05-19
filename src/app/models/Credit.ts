import {StatutCredit} from './StatutCredit';

export interface Credit {
  id: number;
  dateDemande: Date;
  statut: StatutCredit;
  dateAcceptation?: Date;
  montant: number;
  dureeRemboursement: number;
  tauxInteret: number;
}
