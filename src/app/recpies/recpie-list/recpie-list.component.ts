import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recpie } from '../../shared/models/recpie.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  @Output() recpieListToRecpie = new EventEmitter();
  recpies: Recpie[] = [
    new Recpie("دستور پخت پیتزا" , "یک توضیح برای دستور پخت پیتزا در این قسمت قرار میگیرد.لطفا دستورات را جهت پخت پیتزای مخلوط به دقت رعایت کنید","https://irancook.ir/wp-content/uploads/2012/10/%D9%BE%DB%8C%D8%AA%D8%B2%D8%A7-%D9%85%D8%AE%D9%84%D9%88%D8%B7-%D8%AE%D8%A7%D9%86%DA%AF%DB%8C.jpg"),
    new Recpie("دستور پخت ماکارونی" , "یک توضیح برای دستور پخت ماکارونی در این قسمت قرار میگیرد.اینجانب علاقه خاصی به ماکارونی دارم","https://static1.borna.news/thumbnail/5S7TkZyBpQIJ/yuiQdPxUgyILPypExSqkWVexFSgSRltN2ZvL5vX-_oL5SMFaqVjbXcnvO0GLTcsXUkjZ9tAQYlE,/%D9%85%D8%A7%DA%A9%D8%A7%D8%B1%D9%88%D9%86%DB%8C.jpg"),
    new Recpie("دستور پخت قرمه سبزی" , "یک توضیح برای دستور پخت قرمه سبزی در این قسمت قرار میگیرد.این غذا یکی از محبوب ترین غذا های ایرانی است لطفا برای توسعه دهنده این سایت یک قرمه سبزی پخته شود با تشکر مدیریت اینولینکس","https://static2.shomanews.com/thumbnail/NpZTohK5XrYm/BGmQaTBpfAxAauVSDARFxQNsC4gBAQPzcRzGw6jmw-VtifFcV1tStDZjaPCCOwB7s4ozQKcbCVmogOVBmfOx7Qk3HgW-lbmnwSiEBbYEBcS7shnK3SoCM9BncH_lwbmbUNVYfLfxz4g,/%D8%BA%D9%84%DB%8C%D8%B8-%D8%B4%D8%AF%D9%86-%D9%82%D9%88%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg"),
  ];
  catchRecpieFromItem(event:any){
    this.recpieListToRecpie.emit(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
