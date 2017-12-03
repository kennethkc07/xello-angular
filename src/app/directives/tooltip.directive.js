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
var core_1 = require("@angular/core");
var tooltip_component_1 = require("../components/tooltip.component");
var TooltipDirective = (function () {
    function TooltipDirective(element, renderer, injector, resolver, vcr) {
        this.element = element;
        this.renderer = renderer;
        this.injector = injector;
        this.resolver = resolver;
        this.vcr = vcr;
    }
    //Reusable function that can be called on any listener within this directive to create a tooltip dynamically
    TooltipDirective.prototype.createTooltip = function () {
        if (this.componentRef)
            return;
        //Created the Component's Factory which is essential to create the component
        var factory = this.resolver.resolveComponentFactory(tooltip_component_1.TooltipComponent);
        //Resolved the provider and created an injector which can calculate the tooltip position in the tooltip component
        var injector = core_1.ReflectiveInjector.resolveAndCreate([
            {
                provide: 'tooltipConfig',
                useValue: {
                    host: this.element.nativeElement
                }
            }
        ]);
        //Created the component using the ViewContainerReference and Stored the reference of the component 
        //which will be used to destroy it on MouseOut or on ngOnDestroy
        this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateNgContent());
    };
    TooltipDirective.prototype.generateNgContent = function () {
        //Checks if the Content is of type string and returns the text message from the xellotooltip property 
        if (typeof this.content === 'string') {
            var element = this.renderer.createText(this.content);
            return [[element]];
        }
        // Else it's a component
        //Created a Component's Factory using the Factory Resolver
        var factory = this.resolver.resolveComponentFactory(this.content);
        //Created the component using the ViewContainerReference and Stored the reference of the component 
        var viewRef = factory.create(this.injector);
        //Created the component and passed it's nativeElement as ng-content
        return [[viewRef.location.nativeElement]];
    };
    //Reviewer can uncomment this code to let the Directive Respond to Mouse Hover Events
    //This will however shadow the effect of the click event and defeat the requirements of the test
    // @HostListener('mouseover')
    // onMouseHover() {
    //     this.createTooltip();
    // }
    //Angular Listener that picks click events registerd with this directive and executes behaviour
    TooltipDirective.prototype.onClick = function () {
        this.createTooltip();
    };
    TooltipDirective.prototype.keyboardInput = function (event) {
        if (event.keyCode == 27) {
            this.destroy();
        }
    };
    //Angular Listener that picks click events registerd with this directive and executes behaviour
    TooltipDirective.prototype.mouseout = function () {
        this.destroy();
    };
    //Removing the previous view else it will append more components to the container
    TooltipDirective.prototype.destroy = function () {
        this.componentRef && this.componentRef.destroy();
        this.componentRef = null;
    };
    //Angular Life cycle hook
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    return TooltipDirective;
}());
__decorate([
    core_1.Input('xellotooltip'),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "content", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "onClick", null);
__decorate([
    core_1.HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "keyboardInput", null);
__decorate([
    core_1.HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "mouseout", null);
TooltipDirective = __decorate([
    core_1.Directive({
        selector: '[xellotooltip]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        core_1.Injector,
        core_1.ComponentFactoryResolver,
        core_1.ViewContainerRef])
], TooltipDirective);
exports.TooltipDirective = TooltipDirective;
//# sourceMappingURL=tooltip.directive.js.map