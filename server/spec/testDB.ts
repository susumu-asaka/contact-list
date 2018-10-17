import { Contact } from '../api';

/*
 * Defines test db content, may be used to populate the db.
*/

export const contacts: Contact[] = [{
  name: 'Paul Polman',
  fields: {
    email: 'paul.polman@unilever.com'
  }
}, {
  name: 'Tim Cook',
  fields: {
    telefone: '0800-761-0880'
  }
}, {
  name: 'Mark Parker',
  fields: {
    cargo: 'CEO',
    empresa: 'Nike'
  }
}, {
  name: 'Susumu Asaga',
  fields: {
    email: 'susumu.asaga@gmail.com',
    telefone: '(11)98430-9134',
    cargo: 'Auditor-fiscal',
    empresa: 'Receita Federal do Brasil'
  }
}];