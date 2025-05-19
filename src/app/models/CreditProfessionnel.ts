import {Credit} from './Credit';

export interface CreditProfessionnel extends Credit {
  motif: string;
  raisonSociale: string;
}
