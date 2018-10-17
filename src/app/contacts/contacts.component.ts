import { Component, OnInit } from '@angular/core';
import { Contact } from 'server/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    this.contacts = await this.contactService.getContacts();
  }
}
