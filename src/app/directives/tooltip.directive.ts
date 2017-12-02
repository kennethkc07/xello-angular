import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    HostListener,
    Injector,
    Input,
    ReflectiveInjector,
    Renderer2,
    TemplateRef,
    Type,
    ViewContainerRef,
    ViewRef
} from '@angular/core';
import { TooltipComponent } from '../components/tooltip.component';


@Directive({
    selector: '[xellotooltip]'
})

export class TooltipDirective {
    // Created a  Input property of the directive that takes string, template or a component
    @Input('xellotooltip') content: string | Type<any>;
    //Component reference holds the instance of the Tooltip created
    private componentRef: ComponentRef<TooltipComponent>;

    constructor(private element: ElementRef,
        private renderer: Renderer2,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
        private vcr: ViewContainerRef) {
    }

    //Reusable function that can be called on any listener within this directive to create a tooltip dynamically
    createTooltip() {
        if (this.componentRef) return;
        //Created the Component's Factory which is essential to create the component
        const factory = this.resolver.resolveComponentFactory(TooltipComponent);
        //Resolved the provider and created an injector which can calculate the tooltip position in the tooltip component
        const injector = ReflectiveInjector.resolveAndCreate([
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
    }

    generateNgContent() {
        //Checks if the Content is of type string and returns the text message from the xellotooltip property 
        if (typeof this.content === 'string') {
            const element = this.renderer.createText(this.content);
            return [[element]];
        }

        // Else it's a component
        //Created a Component's Factory using the Factory Resolver
        const factory = this.resolver.resolveComponentFactory(this.content);
        //Created the component using the ViewContainerReference and Stored the reference of the component 
        const viewRef = factory.create(this.injector);
        //Created the component and passed it's nativeElement as ng-content
        return [[viewRef.location.nativeElement]];
    }

    //Reviewer can uncomment this code to let the Directive Respond to Mouse Hover Events
    //This will however shadow the effect of the click event and defeat the requirements of the test
    // @HostListener('mouseover')
    // onMouseHover() {
    //     this.createTooltip();
    // }

    //Angular Listener that picks click events registerd with this directive and executes behaviour
    @HostListener('click', ['$event'])
    onClick() {
        this.createTooltip();
    }

    //Angular Listener that picks click events registerd with this directive and executes behaviour
    @HostListener('mouseout')
    mouseout() {
        this.destroy();
    }
    //Removing the previous view else it will append more components to the container
    destroy() {
        this.componentRef && this.componentRef.destroy();
        this.componentRef = null;
    }
    //Angular Life cycle hook
    ngOnDestroy() {
        this.destroy();
    }
}