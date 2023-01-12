import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  public contacts: IContact[] = [];
  public contactSelected: IContact | undefined
  // Subscripcion de Servicio
  public subscription: Subscription | undefined;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.setContacts()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public async setContacts(): Promise<void> {
    // obtener la lista de contactos del service
    this.contacts = await this.contactService.getContacts()

  }

  public selectContact(id: number): void {
    this.subscription = this.contactService.getContactById(id)?.subscribe(
      (contact: IContact) => this.contactSelected = contact
    )
  }
}
