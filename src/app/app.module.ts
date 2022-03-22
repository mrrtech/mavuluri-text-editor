import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWigModule } from 'ngx-wig';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [AppComponent, EditorComponent],
  imports: [BrowserModule, NgxWigModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
