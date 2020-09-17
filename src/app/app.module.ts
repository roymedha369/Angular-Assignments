import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CPipeComponent } from './c-pipe/c-pipe.component';
import { SortPipe } from './c-pipe/sort.pipe';
import { CompLifecycleComponent } from './comp-lifecycle/comp-lifecycle.component';
import { CAttrbDirectiveComponent } from './c-attrb-directive/c-attrb-directive.component';
import { CDirectiveDirective } from './c-attrb-directive/c-directive.directive';
import { CompLifecycleChildComponent } from './comp-lifecycle-child/comp-lifecycle-child.component';
import { CompInlineStylingComponent } from './comp-inline-styling/comp-inline-styling.component';
import { CompExternalStylingComponent } from './comp-external-styling/comp-external-styling.component';
import { TempStylingComponent } from './temp-styling/temp-styling.component';

@NgModule({
  declarations: [
    AppComponent,
    CPipeComponent,
    SortPipe,
    CompLifecycleComponent,
    CAttrbDirectiveComponent,
    CDirectiveDirective,
    CompLifecycleChildComponent,
    CompInlineStylingComponent,
    CompExternalStylingComponent,
    TempStylingComponent
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
