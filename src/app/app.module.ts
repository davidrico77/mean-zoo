import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ParksComponent } from './components/parks/parks.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

