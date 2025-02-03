"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_home_home-page_home-page_component_ts"],{

/***/ 7836:
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component.html?ngResource */ 7436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);







let HomePageComponent = class HomePageComponent {
  constructor(config) {
    this.config = config;
  }
  ngOnInit() {
    this.getPageData('pages', 7);
  }
  getPageData(database, id) {
    this.header$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-home-page',
  template: _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
})], HomePageComponent);


/***/ }),

/***/ 7436:
/*!********************************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "@if (header$ | async; as header) {\n\t<div>\n\t\t<header\n\t\t\tid=\"banner\"\n\t\t\tclass=\"scrollto clearfix shift-left\"\n\t\t\tdata-enllax-ratio=\".5\"\n\t\t\t[style.background]=\"\n\t\t\t\t'url(../assets/images/banner-images/' +\n\t\t\t\theader.image +\n\t\t\t\t' ) no-repeat center top;'\n\t\t\t\">\n\t\t\t<div id=\"banner-content\" class=\"row clearfix pull-right\">\n\t\t\t\t<div class=\"col-38\">\n\t\t\t\t\t<div class=\"section-heading\">\n\t\t\t\t\t\t<h1>{{ header.tagline }}</h1>\n\t\t\t\t\t\t<h2>{{ header.title }}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a routerLink=\"{{ header.buttonlink }}\" class=\"button\">{{\n\t\t\t\t\t\theader.buttontext\n\t\t\t\t\t}}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t</div>\n}\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home-page_home-page_component_ts.js.map