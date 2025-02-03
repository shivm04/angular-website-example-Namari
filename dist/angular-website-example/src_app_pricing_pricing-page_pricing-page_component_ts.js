"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_pricing_pricing-page_pricing-page_component_ts"],{

/***/ 4112:
/*!******************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingBlockComponent: () => (/* binding */ PricingBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _pricing_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-block.component.html?ngResource */ 528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let PricingBlockComponent = class PricingBlockComponent {
  static #_ = this.propDecorators = {
    plan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
PricingBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-pricing-block',
  template: _pricing_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], PricingBlockComponent);


/***/ }),

/***/ 8736:
/*!****************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingPageComponent: () => (/* binding */ PricingPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _pricing_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-page.component.html?ngResource */ 560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _pricing_block_pricing_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pricing-block/pricing-block.component */ 4112);







let PricingPageComponent = class PricingPageComponent {
  constructor(config) {
    this.config = config;
    this.pricing$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.plans$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 5);
    this.getBlockData('plans');
  }
  getPageData(database, id) {
    this.pricing$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  getBlockData(database) {
    this.plans$ = this.config.getSettings(database).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
PricingPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-pricing-page',
  template: _pricing_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_pricing_block_pricing_block_component__WEBPACK_IMPORTED_MODULE_2__.PricingBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
})], PricingPageComponent);


/***/ }),

/***/ 528:
/*!*******************************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<!--Pricing Block-->\n<div\n\tclass=\"pricing-block col-3 wow fadeInUp\"\n\tdata-wow-delay=\"0.4s\"\n\t[class.featured]=\"plan.featured\">\n\t<div class=\"pricing-block-content\">\n\t\t<h3>{{ plan.title }}</h3>\n\t\t<p class=\"pricing-sub\">{{ plan.subtitle }}</p>\n\t\t<div class=\"pricing\">\n\t\t\t<div class=\"price\">\n\t\t\t\t<span>{{ plan.currency }}</span\n\t\t\t\t>{{ plan.price }}\n\t\t\t</div>\n\t\t\t<p>{{ plan.description }}</p>\n\t\t</div>\n\t\t<ul>\n\t\t\t<li>{{ plan.downloads }}</li>\n\t\t\t<li>{{ plan.extensions }}</li>\n\t\t\t<li>{{ plan.tutorials }}</li>\n\t\t\t<li>{{ plan.support }}</li>\n\t\t\t<li>{{ plan.updates }}</li>\n\t\t</ul>\n\t\t<a href=\"{{ plan.buttonlink }}\" class=\"button\">{{ plan.buttontext }}</a>\n\t</div>\n</div>\n<!--End Pricing Block-->\n";

/***/ }),

/***/ 560:
/*!*****************************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix\">\n  <div class=\"row clearfix\">\n    @if (pricing$ | async; as pricing) {\n      <div class=\"section-heading\">\n        <h3 class=\"pull-down\">{{ pricing.tagline }}</h3>\n        <h2 class=\"section-title\">{{ pricing.title }}</h2>\n      </div>\n    }\n\n    @for (plan of plans$ | async; track plan; let i = $index) {\n      <div>\n        <app-pricing-block [plan]=\"plan\"></app-pricing-block>\n      </div>\n    }\n  </div>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pricing_pricing-page_pricing-page_component_ts.js.map