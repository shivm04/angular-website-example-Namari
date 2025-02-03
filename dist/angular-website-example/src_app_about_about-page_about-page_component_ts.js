"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_about_about-page_about-page_component_ts"],{

/***/ 3416:
/*!**********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageComponent: () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _about_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-page.component.html?ngResource */ 1928);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-block/feature-block.component */ 7008);







let AboutPageComponent = class AboutPageComponent {
  constructor(config) {
    this.config = config;
  }
  ngOnInit() {
    this.getPageData('pages', 1);
    this.getBlockData('features');
  }
  getPageData(database, id) {
    this.intro$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching intro data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }));
  }
  getBlockData(database) {
    this.features$ = this.config.getSettings(database).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
AboutPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-about-page',
  template: _about_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_2__.FeatureBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
})], AboutPageComponent);


/***/ }),

/***/ 7008:
/*!****************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureBlockComponent: () => (/* binding */ FeatureBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _feature_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-block.component.html?ngResource */ 6000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let FeatureBlockComponent = class FeatureBlockComponent {
  static #_ = this.propDecorators = {
    feature: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
FeatureBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-feature-block',
  template: _feature_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], FeatureBlockComponent);


/***/ }),

/***/ 1928:
/*!***********************************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "@if (intro$ | async; as intro) {\n\t<section id=\"about\" class=\"introduction scrollto pull-right\">\n\t\t<div class=\"row clearfix\">\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<div class=\"section-heading\">\n\t\t\t\t\t<h3>{{ intro.tagline }}</h3>\n\t\t\t\t\t<h2 class=\"section-title\">{{ intro.title }}</h2>\n\t\t\t\t\t<p class=\"section-subtitle\">{{ intro.description }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t@if (features$) {\n\t\t\t\t<div class=\"col-2-3\">\n\t\t\t\t\t@for (feature of features$ | async; track feature; let i = $index) {\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<app-feature-block [feature]=\"feature\"></app-feature-block>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t}\n\t\t\t\t</div>\n\t\t\t}\n\t\t</div>\n\t</section>\n}\n";

/***/ }),

/***/ 6000:
/*!*****************************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n\t<!--Icon-->\n\t<div class=\"icon\">\n\t\t<i class=\"fa fa-{{ feature.icon }} fa-2x\"></i>\n\t</div>\n\t<!--Icon Block Description-->\n\t<div class=\"icon-block-description\">\n\t\t<h4>{{ feature.title }}</h4>\n\t\t<p>{{ feature.description }}</p>\n\t</div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_about_about-page_about-page_component_ts.js.map