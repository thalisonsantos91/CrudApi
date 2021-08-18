import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ModalModule} from "ngx-bootstrap/modal"
import { NgxMaskModule } from 'ngx-mask';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PessoasService } from './pessoas.service';
import { PessoasComponent } from './components/pessoas/pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false

    }),
    ModalModule.forRoot()

  ],
  providers: [HttpClientModule, PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
