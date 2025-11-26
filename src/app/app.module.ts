import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [ //liste des composants associés à ce module
    AppComponent,
    HeaderComponent, FooterComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
