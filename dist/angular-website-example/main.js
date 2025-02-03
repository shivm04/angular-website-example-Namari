(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_home_home-page_home-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home-page/home-page.component */ 7836)).then(mod => mod.HomePageComponent)
}, {
  path: 'about',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_about_about-page_about-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about-page/about-page.component */ 3416)).then(mod => mod.AboutPageComponent)
}, {
  path: 'services',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_services_services-page_services-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./services/services-page/services-page.component */ 4232)).then(mod => mod.ServicesPageComponent)
}, {
  path: 'testimonials',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_testimonial_testimonial-page_testimonial-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./testimonial/testimonial-page/testimonial-page.component */ 5584)).then(mod => mod.TestimonialPageComponent)
}, {
  path: 'gallery',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_gallery_gallery-page_gallery-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gallery/gallery-page/gallery-page.component */ 2664)).then(mod => mod.GalleryPageComponent)
}, {
  path: 'clients',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_clients_clients-page_clients-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./clients/clients-page/clients-page.component */ 4388)).then(mod => mod.ClientsPageComponent)
}, {
  path: 'pricing',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pricing_pricing-page_pricing-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pricing/pricing-page/pricing-page.component */ 8736)).then(mod => mod.PricingPageComponent)
}, {
  path: '404',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notfound_notfound-page_notfound-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notfound/notfound-page/notfound-page.component */ 3148)).then(mod => mod.NotfoundPageComponent)
}, {
  path: '**',
  redirectTo: '/404'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  declarations: []
})], AppRoutingModule);


/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);



let AppComponent = class AppComponent {
  constructor() {
    this.title = 'Namari Website';
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-in-memory-web-api */ 2795);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 6940);
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navmenu/navmenu.component */ 9556);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ 1268);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social/social.component */ 892);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/config.service */ 9344);
/* harmony import */ var _shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/in-memory-data.service */ 3796);






// Components





// Modules

// Services


let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__.HttpClientInMemoryWebApiModule.forRoot(_shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__.InMemoryDataService, {
    dataEncapsulation: false,
    passThruUnknownUrl: true
  }), _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent, _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_2__.NavmenuComponent, _social_social_component__WEBPACK_IMPORTED_MODULE_4__.SocialComponent],
  providers: [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6940:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 4474);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 3560);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social/social.component */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);









let FooterComponent = class FooterComponent {
  constructor(config) {
    this.config = config;
    // footer$: Observable<IFooter> = new Observable<IFooter>();
    this.footer$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
  }
  ngOnInit() {
    this.getPageData('pages', 6);
  }
  getPageData(database, id) {
    this.footer$ = this.config.getSettings(database, id);
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
  }];
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _social_social_component__WEBPACK_IMPORTED_MODULE_3__.SocialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 1268:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component.html?ngResource */ 1036);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.css?ngResource */ 716);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 9344);
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navmenu/navmenu.component */ 9556);







let NavigationComponent = class NavigationComponent {
  constructor(location, config) {
    this.location = location;
    this.config = config;
    this.database = 'menu';
  }
  ngOnInit() {
    this.menuOpen = false;
    this.getMenu();
  }
  toggleMenu(status) {
    this.menuOpen = status;
  }
  getMenu() {
    this.config.getSettings(this.database).subscribe(setting => {
      this.menu = setting;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
  }, {
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
  }];
};
NavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-navigation',
  template: _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__.NavmenuComponent],
  styles: [(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavigationComponent);


/***/ }),

/***/ 9556:
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavmenuComponent: () => (/* binding */ NavmenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navmenu.component.html?ngResource */ 1116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);




let NavmenuComponent = class NavmenuComponent {
  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }
  static #_ = this.propDecorators = {
    menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    menuOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    menuStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  };
};
NavmenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-navmenu',
  template: _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink]
})], NavmenuComponent);


/***/ }),

/***/ 9344:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 9124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8916);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1672);

/* eslint-disable @typescript-eslint/no-explicit-any */





let ConfigService = class ConfigService {
  constructor(http) {
    this.http = http;
    this.config = _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration;
    this.apiUrl = 'api/posts';
  }
  handleError(operation = 'operation', result) {
    return error => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(result);
    };
  }
  getConfig() {
    return this.config;
  }
  getSettings(database, id) {
    const url = id ? `api/${database}/${id}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], ConfigService);


/***/ }),

/***/ 9124:
/*!**************************************************!*\
  !*** ./src/app/shared/services/configuration.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configuration: () => (/* binding */ configuration)
/* harmony export */ });
const configuration = {
  header: {
    heading: 'My website',
    headingtext: 'Namari is a free landing page template you can use for your projects.',
    buttontext: 'do some action',
    buttonlink: 'home'
  }
};

/***/ }),

/***/ 3796:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/in-memory-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


let InMemoryDataService = class InMemoryDataService {
  createDb() {
    const pages = [{
      id: 1,
      name: 'intro',
      tagline: 'SUCCESS',
      title: 'How We Help You To Sell Your Product',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 2,
      name: 'clients',
      tagline: 'TRUST',
      title: 'Companies who use our services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 3,
      name: 'services',
      tagline: 'BELIEVING',
      title: 'Focusing On What Matters Most',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    }, {
      id: 4,
      name: 'testimonials',
      tagline: 'FEEDBACK',
      title: 'What our customers are saying',
      description: ''
    }, {
      id: 5,
      name: 'pricing',
      tagline: 'YOUR CHOICE',
      title: 'We have the right package for you',
      description: ''
    }, {
      id: 6,
      name: 'footer',
      tagline: 'Made with ❤ by',
      developer: 'Bateman Industries',
      developerlink: 'andrewbateman.org'
    }, {
      id: 7,
      name: 'header',
      tagline: 'A FREE AND SIMPLE LANDING PAGE',
      title: 'Namari is free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
      buttontext: 'START CREATING TODAY',
      buttonlink: '/home',
      image: 'banner-image-1.jpg'
    }];
    const features = [{
      id: 1,
      icon: 'html5',
      title: 'HTML5 & CSS3',
      description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'
    }, {
      id: 2,
      icon: 'bolt',
      title: 'Easy to Use',
      description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'
    }, {
      id: 3,
      icon: 'tablet',
      title: 'Fully Responsive',
      description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'
    }, {
      id: 4,
      icon: 'rocket',
      title: 'Parallax Effect',
      description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'
    }];
    const images = [{
      id: 1,
      name: 'gallery-image-1.jpg'
    }, {
      id: 2,
      name: 'gallery-image-2.jpg'
    }, {
      id: 3,
      name: 'gallery-image-3.jpg'
    }, {
      id: 4,
      name: 'gallery-image-4.jpg'
    }, {
      id: 5,
      name: 'gallery-image-5.jpg'
    }, {
      id: 6,
      name: 'gallery-image-6.jpg'
    }];
    const menu = [{
      id: 1,
      title: 'Home',
      link: '/home'
    }, {
      id: 2,
      title: 'About',
      link: '/about'
    }, {
      id: 3,
      title: 'Services',
      link: '/services'
    }, {
      id: 4,
      title: 'Gallery',
      link: '/gallery'
    }, {
      id: 5,
      title: 'Testimonials',
      link: '/testimonials'
    }, {
      id: 6,
      title: 'Clients',
      link: '/clients'
    }, {
      id: 7,
      title: 'Pricing',
      link: '/pricing'
    }];
    const companies = [{
      id: 1,
      name: 'Tree',
      weblink: 'company-logo1.png',
      logo: 'company-logo1.png'
    }, {
      id: 2,
      name: 'Fingerprint',
      weblink: 'company-logo2.png',
      logo: 'company-logo2.png'
    }, {
      id: 3,
      name: 'The Man',
      weblink: 'company-logo3.png',
      logo: 'company-logo3.png'
    }, {
      id: 4,
      name: 'Mustache',
      weblink: 'company-logo4.png',
      logo: 'company-logo4.png'
    }, {
      id: 5,
      name: 'Goat',
      weblink: 'company-logo5.png',
      logo: 'company-logo5.png'
    }, {
      id: 6,
      name: 'Justice',
      weblink: 'company-logo6.png',
      logo: 'company-logo6.png'
    }, {
      id: 7,
      name: 'Ball',
      weblink: 'company-logo7.png',
      logo: 'company-logo7.png'
    }, {
      id: 8,
      name: 'Cold',
      weblink: 'company-logo8.png',
      logo: 'company-logo8.png'
    }, {
      id: 9,
      name: 'Cold',
      weblink: 'company-logo9.png',
      logo: 'company-logo9.png'
    }];
    const feedback = [{
      id: 1,
      name: 'John Doe',
      userimage: 'user-1.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'ABC'
    }, {
      id: 2,
      name: 'Roslyn Doe',
      userimage: 'user-2.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'Happy Customer'
    }, {
      id: 3,
      name: 'Thomas Doe',
      userimage: 'user-3.jpg',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      company: 'Happy Customer'
    }];
    const plans = [{
      id: 1,
      title: 'PERSONAL',
      subtitle: 'The standard version',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '19',
      currency: '₹',
      downloads: '5 Downloads',
      extensions: '2 Extensions',
      tutorials: 'Tutorials',
      support: 'Forum Support',
      updates: '1 year free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: false
    }, {
      id: 2,
      title: 'STUDENT',
      subtitle: 'Most popular choice',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '29',
      currency: '₹',
      downloads: '15 Downloads',
      extensions: '5 Extensions',
      tutorials: 'Tutorials with files',
      support: 'Forum Support',
      updates: '2 year free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: true
    }, {
      id: 3,
      title: 'BUSINESS',
      subtitle: 'For the whole team',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: '49',
      currency: '₹',
      downloads: 'Unlimited Downloads',
      extensions: 'Unlimited Downloads',
      tutorials: 'HD Video Tutorials',
      support: 'Chat Support',
      updates: 'Lifetime free updates',
      buttontext: 'BUY TODAY',
      buttonlink: '#',
      featured: false
    }];
    const websites = [{
      id: 1,
      link: 'https://facebook.com/',
      title: 'Facebook',
      target: '_blank',
      username: 'Thor',
      icon: 'facebook'
    },
    // {
    //   id: 2,
    //   link: "https://googleplus.com/",
    //   title: "Google+",
    //   target: "_blank",
    //   username: "+jagmohan",
    //   icon: "google-plus",
    // },
    {
      id: 3,
      link: 'https://twitter.com/',
      title: 'Twitter',
      target: '_blank',
      username: 'joker',
      icon: 'twitter'
    }, {
      id: 4,
      link: 'https://instagram.com/',
      title: 'Instagram',
      target: '_blank',
      username: 'superman',
      icon: 'instagram'
    }
    // {
    //   id: 5,
    //   link: "https://behance.com/",
    //   title: "Behance",
    //   target: "_blank",
    //   username: "jagmohan",
    //   icon: "behance",
    // },
    ];
    return {
      menu,
      pages,
      features,
      images,
      companies,
      feedback,
      plans,
      websites
    };
  }
};
InMemoryDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], InMemoryDataService);


/***/ }),

/***/ 892:
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1124);
/* harmony import */ var _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.component.html?ngResource */ 9828);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/config.service */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);






let SocialComponent = class SocialComponent {
  constructor(config) {
    this.config = config;
    this.socialsites$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
  }
  ngOnInit() {
    this.getSocialsites();
  }
  getSocialsites() {
    this.socialsites$ = this.config.getSettings('websites').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error fetching feature data:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
  }];
};
SocialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-social',
  template: _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
})], SocialComponent);


/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2675);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 3560:
/*!********************************************************!*\
  !*** ./src/app/footer/footer.component.css?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-social app-social {
  float: right;
  right: 10px;
  margin-right: 0;
  margin-left: 15px;
}
`, "",{"version":3,"sources":["webpack://./src/app/footer/footer.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB","sourcesContent":[".footer-social app-social {\n  float: right;\n  right: 10px;\n  margin-right: 0;\n  margin-left: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 716:
/*!****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 7804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
  margin-top: 15px;
}`, "",{"version":3,"sources":["webpack://./src/app/navigation/navigation.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB","sourcesContent":["#header {\n  margin-top: 15px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 440:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n\t<div\n\t\tclass=\"top-border wow fadeInDown animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInDown\"></div>\n\t<div\n\t\tclass=\"right-border wow fadeInRight animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInRight\"></div>\n\t<div\n\t\tclass=\"bottom-border wow fadeInUp animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInUp\"></div>\n\t<div\n\t\tclass=\"left-border wow fadeInLeft animated\"\n\t\tstyle=\"visibility: visible; animation-name: fadeInLeft\"></div>\n</div>\n<!--Main Content Area-->\n<main id=\"content\">\n\t<app-navigation></app-navigation>\n\t<router-outlet></router-outlet>\n\t<app-footer></app-footer>\n</main>\n<!--End Main Content Area-->\n";

/***/ }),

/***/ 4474:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (footer$ | async; as footer) {\n  <footer id=\"landing-footer\" class=\"clearfix\">\n    <div class=\"row clearfix\">\n      <p id=\"copyright\" class=\"col-2\">\n        {{ footer.tagline }}\n        <a routerLink=\"{{ footer.developerlink }}\">{{ footer.developer }}</a>\n      </p>\n      <!--Social Icons in Footer-->\n      <div class=\"col-2\" style=\"text-align: right\">\n        <app-social></app-social>\n      </div>\n      <!--End of Social Icons in Footer-->\n    </div>\n  </footer>\n}\n";

/***/ }),

/***/ 1036:
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"header\" class=\"nav-collapse nav-solid\">\n  <div class=\"row clearfix\">\n    <div class=\"col-1\">\n      <!--Logo-->\n      <div id=\"logo\">\n        <!--Logo that is shown on the banner-->\n        <img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\" />\n        <!--End of Banner Logo-->\n\n        <!--The Logo that is shown on the sticky Navigation Bar-->\n        <img\n          src=\"assets/images/logo-2.png\"\n          id=\"navigation-logo\"\n          alt=\"Landing Page\" />\n          <!--End of Navigation Logo-->\n        </div>\n        <!--End of Logo-->\n\n        <!-- <aside>\n        <app-social></app-social>\n      </aside> -->\n\n      <!--Main Navigation-->\n      <nav id=\"nav-main\">\n        <app-navmenu [menu]=\"menu\" [menuOpen]=\"true\"></app-navmenu>\n      </nav>\n      <!--End of Main Navigation-->\n\n      <div id=\"nav-trigger\">\n        <span\n          [class.open]=\"menuOpen === true\"\n          (onClick)=\"toggleMenu(!menuOpen)\"\n        (onKeyUp)=\"toggleMenu(!menuOpen)\"></span>\n      </div>\n      <nav id=\"nav-mobile\">\n        @if (menuOpen === true) {\n          <app-navmenu\n            [menu]=\"menu\"\n            (menuStatus)=\"toggleMenu($event)\"\n          [menuOpen]=\"menuOpen\"></app-navmenu>\n        }\n      </nav>\n    </div>\n  </div>\n</div>\n<!--End of Header-->\n";

/***/ }),

/***/ 1116:
/*!***********************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul [class.expanded]=\"menuOpen === true\">\n\t@for (menuItem of menu; track menuItem) {\n\t\t<li>\n\t\t\t<a\n\t\t\t\trouterLink=\"{{ menuItem.link }}\"\n\t\t\t\t(click)=\"toggleMenu()\"\n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions]=\"{ exact: true }\"\n\t\t\t\t>{{ menuItem.title }}</a\n\t\t\t>\n\t\t</li>\n\t}\n</ul>\n";

/***/ }),

/***/ 9828:
/*!*********************************************************!*\
  !*** ./src/app/social/social.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"social-icons\">\n\t@for (website of socialsites$ | async; track website; let i = $index) {\n\t\t<li>\n\t\t\t<a\n\t\t\t\ttarget=\"{{ website.target }}\"\n\t\t\t\ttitle=\"{{ website.title }}\"\n\t\t\t\thref=\"{{ website.link }}{{ website.username }}\">\n\t\t\t\t<i class=\"fa fa-{{ website.icon }} fa-1x\"></i\n\t\t\t\t><span>{{ website.title }}</span>\n\t\t\t</a>\n\t\t</li>\n\t}\n</ul>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map