import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: 'app-card-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() expanded = false;
  @Output() clicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clicked.emit(this.contact.id);
  }

}
