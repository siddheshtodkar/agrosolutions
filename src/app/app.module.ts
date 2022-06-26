import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SuggestionComponent } from './main/suggestion/suggestion.component';
import { DiseaseComponent } from './main/disease/disease.component';
import { MarketComponent } from './main/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    TranslatePipe,
    FooterComponent,
    MainComponent,
    SuggestionComponent,
    DiseaseComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
