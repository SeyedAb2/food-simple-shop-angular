import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';
import { Recpie } from 'src/app/shared/models/recpie.model';

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
  @Input() recpieDetailCatched!: Recpie;
   constructor() {  }

  ngOnInit(): void {
  }

}
