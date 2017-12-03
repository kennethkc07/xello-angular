"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>\n        <span aria-label=\"Xello Test\">Xello Test</span>\n      </h1>\n      <p>\n        <button\n        aria-label=\"Blue\" \n        role=\"button\"\n        class=\"btn btn-md btn-primary\" \n        xellotooltip=\"Popup By Button 1\">Button 1\n      </button>\n      <button \n        aria-label=\"Green\" \n        role=\"button\"\n        class=\"btn btn-md btn-success\" \n        xellotooltip=\"Popup By Button 2\">Button 2\n      </button>\n    </p>\n    </div>\n  </div>\n   \n  ",
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
/* One only needs to import the "TooltipDirective" directive and apply
the "xellotooltip" property on a control they wish to provide a tooltip
by assiging a string message on the same. */
/* Alternatively, instead of writing a custom tooltip from scratch,
one could use the ng-bootstrap library which has all the effects one would want */ 
//# sourceMappingURL=home.component.js.map