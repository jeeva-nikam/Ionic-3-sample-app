import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const appRoutes: Routes = [
  { path: '', component: Comp1Component },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
