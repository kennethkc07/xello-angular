"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var tooltipcontainer_directive_1 = require("../directives/tooltipcontainer.directive");
//Created a Tooltip component to pass the content dynamically into ng-content
var TooltipComponent = (function () {
    function TooltipComponent(config) {
        this.config = config;
    }
    //Calculated the position using the injector provider for the tooltip component
    TooltipComponent.prototype.ngOnInit = function () {
        var top = this.config.host.getBoundingClientRect().top;
        var height = this.tooltipContainer.nativeElement.getBoundingClientRect().height;
        //Deducted 0.99px to create some gap between the control and the tooltip
        this.top = top - height - 0.99 + "px";
        this.left = this.config.host.offsetLeft + "px";
    };
    return TooltipComponent;
}());
__decorate([
    core_1.ViewChild(tooltipcontainer_directive_1.TooltipContainerDirective, { read: core_1.ElementRef }),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "tooltipContainer", void 0);
TooltipComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"tooltip\" [ngStyle]=\"{'top': top, 'left': left}\">\n      <ng-content></ng-content>\n    </div>\n  ",
        styles: [
            "\n      .tooltip {\n        position: absolute !important;\n        display: inline-block !important;\n        background-color: black !important;\n        color: #fff !important;\n        text-align: center !important;\n        border-radius: 6px !important;\n        border-color: black transparent transparent transparent !important;\n        z-index: 1 !important;\n        opacity: 0.6 !important;\n        padding: 0.25% !important;\n        font-size: small !important;\n      }\n    "
        ]
    }),
    __param(0, core_1.Inject('tooltipConfig')),
    __metadata("design:paramtypes", [Object])
], TooltipComponent);
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=tooltip.component.js.map