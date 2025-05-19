import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Credit} from '../models/Credit';
import { CreditPersonnel } from '../models/CreditPersonnel';
import {CreditImmobilier} from '../models/CreditImmobilier';
import {CreditProfessionnel} from '../models/CreditProfessionnel';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiUrl = 'http://localhost:8080/api/credits';

  constructor(private http: HttpClient) { }

  // Méthodes génériques
  getAllCredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.apiUrl);
  }

  // Méthodes pour les crédits personnels
  getAllCreditsPersonnels(): Observable<CreditPersonnel[]> {
    return this.http.get<CreditPersonnel[]>(`${this.apiUrl}/personnel`);
  }

  saveCreditPersonnel(credit: CreditPersonnel): Observable<CreditPersonnel> {
    return this.http.post<CreditPersonnel>(`${this.apiUrl}/personnel`, credit);
  }

  // Méthodes pour les crédits immobiliers
  getAllCreditsImmobiliers(): Observable<CreditImmobilier[]> {
    return this.http.get<CreditImmobilier[]>(`${this.apiUrl}/immobilier`);
  }

  // Méthodes pour les crédits professionnels
  getAllCreditsProfessionnels(): Observable<CreditProfessionnel[]> {
    return this.http.get<CreditProfessionnel[]>(`${this.apiUrl}/professionnel`);
  }
}
