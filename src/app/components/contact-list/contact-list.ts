import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactCard } from '../contact-card/contact-card';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule, ContactCard],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'ana martinez',
      email: 'ana.martinez@correo.com',
      company: 'NovaTech',
      status: 'active',
      favorite: false,
    },
    {
      id: 2,
      name: 'bruno diaz',
      email: 'bruno.diaz@correo.com',
      company: 'Globant Solutions',
      status: 'inactive',
      favorite: false,
    },
    {
      id: 3,
      name: 'camila ruiz',
      email: 'camila.ruiz@correo.com',
      company: 'Pixel Lab',
      status: 'active',
      favorite: true,
    },
    {
      id: 4,
      name: 'diego lopez',
      email: 'diego.lopez@correo.com',
      company: 'Data Bridge',
      status: 'active',
      favorite: false,
    },
    {
      id: 5,
      name: 'elena perez',
      email: 'elena.perez@correo.com',
      company: 'Skyline Studio',
      status: 'inactive',
      favorite: false,
    },
  ];

  get activeCount(): number {
    return this.contacts.filter((contact) => contact.status === 'active').length;
  }

  get favoriteCount(): number {
    return this.contacts.filter((contact) => contact.favorite).length;
  }

  trackById(_: number, contact: Contact): number {
    return contact.id;
  }

  onToggleFavorite(contactId: number): void {
    this.contacts = this.contacts.map((contact) =>
      contact.id === contactId
        ? { ...contact, favorite: !contact.favorite }
        : contact
    );
  }
}
