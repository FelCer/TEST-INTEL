import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';

// Services
import { MessagesService } from '../app/messages.service'

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [
    MessagesService,
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
