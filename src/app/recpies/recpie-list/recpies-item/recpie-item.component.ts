import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Recpie } from '../../../shared/models/recpie.model';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Output() recpieSelectedToList = new EventEmitter() ;
  @Input() recpie!: Recpie;
  constructor() { }

  ngOnInit(): void {
  }
  recpieSelected(){
    this.recpieSelectedToList.emit(this.recpie)
  }
}
