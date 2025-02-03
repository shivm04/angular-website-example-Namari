"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_testimonial_testimonial-page_testimonial-page_component_ts"],{

/***/ 1196:
/*!************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackBlockComponent: () => (/* binding */ FeedbackBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _feedback_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-block.component.html?ngResource */ 2000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let FeedbackBlockComponent = class FeedbackBlockComponent {
  static #_ = this.propDecorators = {
    feedback: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
FeedbackBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-feedback-block',
  template: _feedback_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], FeedbackBlockComponent);


/***/ }),

/***/ 5584:
/*!****************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialPageComponent: () => (/* binding */ TestimonialPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _testimonial_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial-page.component.html?ngResource */ 811);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _feedback_block_feedback_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feedback-block/feedback-block.component */ 1196);


/**
 * TestimonialPageComponent class.
 *
 * This component is responsible for displaying testimonials and feedback on a page.
 * It fetches data from the ConfigService and handles any errors that occur.
 *
 * Properties:
 * - testimonials$: An Observable of Testimonial[] that holds the testimonials data.
 * - feedback$: An Observable of Feedback[] that holds the feedback data.
 *
 * Constructor:
 * - Accepts an instance of the ConfigService as a dependency.
 *
 * Methods:
 * - ngOnInit(): Lifecycle hook that is called after the component is initialized. It calls the getData() method to fetch the data.
 * - handleError(error: any): Handles any errors that occur during data fetching. It logs the error and throws it as an Observable.
 * - getData(database: string, id?: number): Fetches the data from the ConfigService based on the provided database and optional id. It assigns the fetched data to the respective properties.
 */





let TestimonialPageComponent = class TestimonialPageComponent {
  constructor(config) {
    this.config = config;
  }
  ngOnInit() {
    this.getData('pages', 4);
    this.getData('feedback');
  }
  handleError(error) {
    console.error('Error fetching feature data:', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
  }
  getData(database, id) {
    if (id) {
      this.testimonials$ = this.config.getSettings(database, id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    } else {
      this.feedback$ = this.config.getSettings(database).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
TestimonialPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-testimonial-page',
  template: _testimonial_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_feedback_block_feedback_block_component__WEBPACK_IMPORTED_MODULE_2__.FeedbackBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
})], TestimonialPageComponent);


/***/ }),

/***/ 2000:
/*!*************************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<blockquote class=\"col-3 testimonial classic\">\n\t<img src=\"assets/images/user-images/{{ feedback.userimage }}\" alt=\"User\" />\n\t<q>{{ feedback.comments }}</q>\n\t<footer>{{ feedback.name }} - {{ feedback.company }}</footer>\n</blockquote>\n";

/***/ }),

/***/ 811:
/*!*****************************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<aside\n\tid=\"testimonials\"\n\tclass=\"scrollto text-center pull-right pull-left\"\n\tdata-enllax-ratio=\".2\">\n\t<div class=\"row clearfix\">\n\t\t@if (testimonials$ | async; as testimonial) {\n\t\t\t<div class=\"section-heading\">\n\t\t\t\t<h3 class=\"pull-down\">{{ testimonial.tagline }}</h3>\n\t\t\t\t<h2 class=\"section-title\">{{ testimonial.title }}</h2>\n\t\t\t</div>\n\t\t}\n\n\t\t<!--User Testimonial-->\n\t\t@for (feedback of feedback$ | async; track feedback; let i = $index) {\n\t\t\t<div>\n\t\t\t\t<app-feedback-block [feedback]=\"feedback\"></app-feedback-block>\n\t\t\t</div>\n\t\t}\n\t\t<!-- End of Testimonial-->\n\t</div>\n</aside>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_testimonial_testimonial-page_testimonial-page_component_ts.js.map