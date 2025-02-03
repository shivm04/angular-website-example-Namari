"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_clients_clients-page_clients-page_component_ts"],{

/***/ 4388:
/*!****************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsPageComponent: () => (/* binding */ ClientsPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _clients_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-page.component.html?ngResource */ 6584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _companies_block_companies_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies-block/companies-block.component */ 4165);







let ClientsPageComponent = class ClientsPageComponent {
  constructor(config) {
    this.config = config;
    this.clients$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.companies$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 2);
    this.getBlockData('companies');
  }
  getPageData(database, id) {
    this.clients$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  getBlockData(database) {
    this.companies$ = this.config.getSettings(database).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
ClientsPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-clients-page',
  template: _clients_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_companies_block_companies_block_component__WEBPACK_IMPORTED_MODULE_2__.CompaniesBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
})], ClientsPageComponent);


/***/ }),

/***/ 4165:
/*!**********************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompaniesBlockComponent: () => (/* binding */ CompaniesBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _companies_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies-block.component.html?ngResource */ 3188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let CompaniesBlockComponent = class CompaniesBlockComponent {
  static #_ = this.propDecorators = {
    company: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
CompaniesBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-companies-block',
  template: _companies_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], CompaniesBlockComponent);


/***/ }),

/***/ 6584:
/*!*****************************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"clients\" class=\"scrollto clearfix\">\n  <div class=\"row clearfix pull-right\">\n    @if (clients$ | async; as clients) {\n      <div class=\"col-3\">\n        <div class=\"section-heading\">\n          <h3>{{ clients.tagline }}</h3>\n          <h2 class=\"section-title\">{{ clients.title }}</h2>\n          <p class=\"section-subtitle\">{{ clients.description }}</p>\n        </div>\n      </div>\n    }\n\n    <div class=\"col-2-3\">\n      @for (company of companies$ | async; track company; let i = $index) {\n        <div>\n          <app-companies-block [company]=\"company\"></app-companies-block>\n        </div>\n      }\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 3188:
/*!***********************************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<a href=\"{{ company.weblink }}\" class=\"col-3\">\n\t<img\n\t\tsrc=\"assets/images/company-images/{{ company.logo }}\"\n\t\talt=\"{{ company.name }}\" />\n\t<div class=\"client-overlay\">\n\t\t<span>{{ company.name }}</span>\n\t</div>\n</a>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_clients_clients-page_clients-page_component_ts.js.map