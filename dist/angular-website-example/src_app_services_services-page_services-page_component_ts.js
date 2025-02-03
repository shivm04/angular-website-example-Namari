"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_services_services-page_services-page_component_ts"],{

/***/ 4232:
/*!*******************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesPageComponent: () => (/* binding */ ServicesPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _services_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-page.component.html?ngResource */ 1936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);


/* eslint-disable @typescript-eslint/no-explicit-any */




let ServicesPageComponent = class ServicesPageComponent {
  constructor(config) {
    this.config = config;
    this.services$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 3);
  }
  getPageData(database, id) {
    this.services$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
ServicesPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-services-page',
  template: _services_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
})], ServicesPageComponent);


/***/ }),

/***/ 1936:
/*!********************************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "@if (services$ | async; as services) {\n  <div\n    id=\"services\"\n    class=\"scrollto clearfix\"\n    >\n    <div class=\"row no-padding-bottom clearfix\">\n      <!--Content Left Side-->\n      <div class=\"col-3\">\n        <!--User Testimonial-->\n        <blockquote class=\"testimonial text-right bigtest\">\n          <q\n            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua</q\n            >\n            <footer>— John Doe, Happy Customer</footer>\n          </blockquote>\n          <!-- End of Testimonial-->\n        </div>\n        <!--End Content Left Side-->\n        <!--Content of the Right Side-->\n        <div class=\"col-3\">\n          <div class=\"section-heading\">\n            <h3>{{ services.tagline }}</h3>\n            <h2 class=\"section-title\">{{ services.title }}</h2>\n            <p class=\"section-subtitle\">{{ services.description }}</p>\n          </div>\n          <p>\n            Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab\n            illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n            explicabo.\n          </p>\n          <p>\n            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut\n            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem\n            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n            sit amet!\n          </p>\n          <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n          <a\n            href=\"#\"\n            data-videoid=\"UYJ5IjBRlW8\"\n            data-videosite=\"youtube\"\n            class=\"button video link-lightbox\">\n            WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n        <!--End Content Right Side-->\n        <div class=\"col-3\">\n          <img src=\"assets/images/dancer.jpg\" alt=\"Dancer\" />\n        </div>\n      </div>\n    </div>\n  }\n";

/***/ })

}]);
//# sourceMappingURL=src_app_services_services-page_services-page_component_ts.js.map