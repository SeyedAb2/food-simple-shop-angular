import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recpie } from '../shared/models/recpie.model';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css']
})
export class RecpiesComponent implements OnInit {
  recpieFromLIst!: Recpie;
  catchFromList(event:any){
    this.recpieFromLIst = event;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
