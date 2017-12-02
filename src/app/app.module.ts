import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipContainerDirective } from './directives/tooltipcontainer.directive';

import { TooltipComponent } from './components/tooltip.component';

const routes: Routes=[
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TooltipDirective,
    TooltipComponent,
    TooltipContainerDirective
  ],
  entryComponents: [TooltipComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
