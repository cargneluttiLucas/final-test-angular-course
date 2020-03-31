import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  clickEventButton(event) {
    if (event && !this.disabled) {
      this.clickButton.next(true);
    }
  }

}
