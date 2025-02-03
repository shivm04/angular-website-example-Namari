"use strict";
(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["src_app_gallery_gallery-page_gallery-page_component_ts"],{

/***/ 2664:
/*!****************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryPageComponent: () => (/* binding */ GalleryPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _gallery_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-page.component.html?ngResource */ 768);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-block/image-block.component */ 5700);







let GalleryPageComponent = class GalleryPageComponent {
  constructor(config) {
    this.config = config;
    this.images$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getBlockData('images');
  }
  getBlockData(database) {
    this.images$ = this.config.getSettings(database).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
GalleryPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-gallery-page',
  template: _gallery_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_image_block_image_block_component__WEBPACK_IMPORTED_MODULE_2__.ImageBlockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
})], GalleryPageComponent);


/***/ }),

/***/ 5700:
/*!**************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageBlockComponent: () => (/* binding */ ImageBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-block.component.html?ngResource */ 6952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);



let ImageBlockComponent = class ImageBlockComponent {
  static #_ = this.propDecorators = {
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ImageBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-image-block',
  template: _image_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], ImageBlockComponent);


/***/ }),

/***/ 768:
/*!*****************************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"gallery\" class=\"introduction scrollto text-center\">\n\t<div class=\"row clearfix\">\n\t\t<aside id=\"gallery\" class=\"row text-center scrollto clearfix\">\n\t\t\t@for (image of images$ | async; track image; let i = $index) {\n\t\t\t\t<div>\n\t\t\t\t\t<app-image-block [image]=\"image\"></app-image-block>\n\t\t\t\t</div>\n\t\t\t}\n\t\t</aside>\n\t</div>\n</section>\n";

/***/ }),

/***/ 6952:
/*!***************************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<a\n\thref=\"assets/images/gallery-images/{{ image.name }}\"\n\tdata-featherlight=\"image\"\n\tclass=\"col-3 wow fadeIn\"\n\tdata-wow-delay=\"0.1s\">\n\t<img src=\"assets/images/gallery-images/{{ image.name }}\" alt=\"Landing Page\" />\n</a>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_gallery_gallery-page_gallery-page_component_ts.js.map