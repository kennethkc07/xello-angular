import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipContainerDirective } from './directives/tooltipcontainer.directive';

import { TooltipComponent } from './components/tooltip.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TooltipDirective,
    TooltipComponent,
    TooltipContainerDirective
  ],
  entryComponents: [TooltipComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
