import { Component, OnInit } from '@angular/core';
import { Contact } from 'server/contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    this.contacts = await this.contactService.getContacts();
  }

  async deleteContact(contact) {
    this.contactService.deleteContact(contact);
  }

  getCargoEmpresa(contact: Contact): string {
    const fields = contact.fields;
    const cargo = fields['cargo'];
    const empresa = fields['empresa'];
    if (cargo && empresa) {
      return cargo + ', ' + empresa;
    }
    if (cargo) {
      return cargo;
    }
    if (empresa) {
      return empresa;
    }
    return '';
  }
}
