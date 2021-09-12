import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() loaded:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  changeNavComponent(value:string){
    if(value === 'recpie'){
      this.loaded.emit('recpie')
    }else{
      this.loaded.emit('shopping-list')
    }
  }
  ngOnInit(): void { }

}

