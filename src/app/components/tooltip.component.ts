import { Component, Directive, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { TooltipContainerDirective } from '../directives/tooltipcontainer.directive';

//Created a Tooltip component to pass the content dynamically into ng-content
@Component({
    template: `
    <div class="tooltip" [ngStyle]="{'top': top, 'left': left}">
      <ng-content></ng-content>
    </div>
  `,
    styles: [
        `
      .tooltip {
        position: absolute !important;
        display: inline-block !important;
        background-color: black !important;
        color: #fff !important;
        text-align: center !important;
        border-radius: 6px !important;
        border-color: black transparent transparent transparent !important;
        z-index: 1 !important;
        opacity: 0.6 !important;
        padding: 0.25% !important;
        font-size: small !important;
      }
    `
    ]
})
export class TooltipComponent implements OnInit {
    top: string;
    left: string;
    @ViewChild(TooltipContainerDirective, { read: ElementRef }) private tooltipContainer: any;

    constructor( @Inject('tooltipConfig') private config: any) { }
    //Calculated the position using the injector provider for the tooltip component
    ngOnInit() {
        const { top } = this.config.host.getBoundingClientRect();
        const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();
        //Deducted 0.99px to create some gap between the control and the tooltip
        this.top = `${top - height - 0.99}px`;
        this.left = `${this.config.host.offsetLeft}px`;
    }
}
