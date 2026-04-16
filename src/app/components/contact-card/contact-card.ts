import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactFormatPipe } from '../../pipes/contact-format-pipe';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule, ContactFormatPipe],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCard {
  @Input({ required: true }) contact!: Contact;
  @Output() toggleFavorite = new EventEmitter<number>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.contact.id);
  }
}
