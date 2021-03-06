import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpieListComponent } from './recpies/recpie-list/recpie-list.component';
import { RecpieDetailComponent } from './recpies/recpie-detail/recpie-detail.component';
import { RecpieItemComponent } from './recpies/recpie-list/recpies-item/recpie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ClickHandlerDirective } from './shared/directives/clickhandler.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecpiesComponent,
    RecpieListComponent,
    RecpieDetailComponent,
    RecpieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ClickHandlerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
