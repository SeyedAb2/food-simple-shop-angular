import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changeNav :boolean = true;
  navigation(event: string){
    //console.log(event)
    if(event==='recpie'){
      this.changeNav = true;
    }else{
      this.changeNav = false;
    }
  }
}
