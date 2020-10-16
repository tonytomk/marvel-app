import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAssign(side): void {
    // this.character.side = side;
    this.sideAssigned.emit({name: this.character.name, side});
  }

}
