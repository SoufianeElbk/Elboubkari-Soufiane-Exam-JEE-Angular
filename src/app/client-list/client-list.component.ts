import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {Client} from '../models/Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  loading = false;
  error = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.loading = true;
    this.clientService.getAllClients()
      .subscribe({
        next: (data) => {
          this.clients = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Erreur lors du chargement des clients';
          this.loading = false;
          console.error('Error:', error);
        }
      });
  }

  deleteClient(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.clientService.deleteClient(id)
        .subscribe({
          next: () => {
            this.clients = this.clients.filter(client => client.id !== id);
          },
          error: (error) => {
            this.error = 'Erreur lors de la suppression du client';
            console.error('Error:', error);
          }
        });
    }
  }
}
