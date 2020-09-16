import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { CPipeComponent } from './c-pipe/c-pipe.component';
import { SortPipe } from './c-pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightComponent,
    HighlightDirective,
    CPipeComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
