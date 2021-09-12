import { Component, OnInit } from '@angular/core';
import {Ingrediant} from "../shared/models/ingrediant.models"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants : Ingrediant[] = [
    new Ingrediant("بسته ماکارونی",1),
    new Ingrediant("پیاز",3),
    new Ingrediant("بسته سویا",2),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
