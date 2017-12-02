import { Component } from '@angular/core';
import { TooltipDirective } from '../directives/tooltip.directive';

@Component({
    selector: 'home',
    template: `
  <div class="container">
    <div class="jumbotron">
      <h1>
        <span aria-label="Xello Test">Xello Test</span>
      </h1>
      <p>
        <button
        aria-label="Blue" 
        role="button"
        class="btn btn-md btn-primary" 
        xellotooltip="Popup By Button 1">Button 1
      </button>
      <button 
        aria-label="Green" 
        role="button"
        class="btn btn-md btn-success" 
        xellotooltip="Popup By Button 2">Button 2
      </button>
    </p>
    </div>
  </div>
   
  `,
})
export class HomeComponent { }
/* One only needs to import the "TooltipDirective" directive and apply 
the "xellotooltip" property on a control they wish to provide a tooltip
by assiging a string message on the same. */

/* Alternatively, instead of writing a custom tooltip from scratch, 
one could use the ng-bootstrap library which has all the effects one would want */