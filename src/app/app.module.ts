import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngelaComponent } from './angela/angela.component';
import { DeleteDirective } from './delete.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { CleanPipe } from './clean.pipe';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { AnimateDirective } from './animate.directive';

@NgModule({
  declarations: [
    AppComponent,
    AngelaComponent,
    DeleteDirective,
    CapitalizePipe,
    CleanPipe,
    DependenciesComponent,
    AnimateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
