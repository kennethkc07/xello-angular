import { Component } from '@angular/core';
import { TooltipDirective } from './directives/tooltip.directive';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Xello Test</h1>
      <p>
        <button 
        class="btn btn-md btn-primary" 
        xellotooltip="Popup By Button 1">Button 1
      </button>
      <button 
        class="btn btn-md btn-success" 
        xellotooltip="Popup By Button 2">Button 2
      </button>
    </p>
    </div>
  </div>
   
  `,
})
export class AppComponent { }
/* One only needs to import the "TooltipDirective" directive and apply 
the "xellotooltip" property on a control they wish to provide a tooltip
by assiging a string message on the same. */

/* Alternatively, instead of writing a custom tooltip from scratch, 
one could use the ng-bootstrap library which has all the effects one would want */

/* If I have failed to fulfill the requirements of this test or if there are better
approaches to dealing with this challenge, please, kindly share your 
knowledge. I can be reached at kenneth.k.christian@gmail.com

Thank you for your time and consideration :) */