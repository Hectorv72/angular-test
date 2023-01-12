import { Injectable } from '@angular/core';
// Importamos el mock que simula ser una api
import { CONTACTS } from '../mocks/contacts.mock'
import { IContact } from '../models/interfaces/contact.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor() { }

  public getContacts(): Promise<IContact[]> {
    return Promise.resolve(CONTACTS)  // nos devuelve el listado de contacto
  }

  public getContactById(id: number): Observable<IContact> | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id)

    // Creamos observable
    const observable: Observable<IContact> = new Observable(observer => {
      observer.next(contact); // Emitir el valor a todo componente que este suscrito
      observer.complete();
    })

    return contact ? observable : undefined
  }
}
