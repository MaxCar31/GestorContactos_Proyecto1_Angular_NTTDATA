import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactFormatPipe } from '../../pipes/contact-format-pipe';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule, ContactFormatPipe],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css',
})
export class ContactDetail {
  @Input({ required: true }) contact!: Contact;
}