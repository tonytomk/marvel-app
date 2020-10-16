import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() characters;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSideAssigned(charInfo): void {
    this.sideAssigned.emit(charInfo);
  }


}
