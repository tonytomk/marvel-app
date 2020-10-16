import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  characters = [
    {
      name: 'Thor', side: ''
    },
    {
      name: 'Iron Man', side: ''
    },
    {
    name: 'Thanos', side: ''
    }
  ];

  chosenList = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onChoose(side) {
  this.chosenList = side;
  }

  // tslint:disable-next-line:typedef
  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) =>  {
      return char.side === this.chosenList;
    });
  }

  onSideChosen(charInfo): void {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    console.log(charInfo);
  }
}
