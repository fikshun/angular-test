webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n}\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n}\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n}\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n    color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/products\">Products</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Products';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_search_product_search_component__ = __webpack_require__("../../../../../src/app/product-search/product-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_search_product_search_component__["a" /* ProductSearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                __WEBPACK_IMPORTED_MODULE_9_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_12__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n}\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n    position: relative;\r\n}\r\n.grid {\r\n    margin: 0;\r\n}\r\n.col-1-4 {\r\n    width: 25%;\r\n}\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607D8B;\r\n    border-radius: 2px;\r\n}\r\n.module:hover {\r\n    background-color: #EEE;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n}\r\n.grid-pad {\r\n    padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n    .module {\r\n        font-size: 10px;\r\n        max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n        margin: 0;\r\n    }\r\n    .module {\r\n        min-width: 60px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Products</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let product of products\" class=\"col-1-4\"\n      routerLink=\"/detail/{{product.id}}\">    \n    <div class=\"module product\">\n      <h4>{{product.name}}</h4>\n    </div>\n  </a>\n</div>\n<app-product-search></app-product-search>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(productService) {
        this.productService = productService;
        this.products = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    DashboardComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 11, name: 'Car' },
            { id: 12, name: 'MacBook' },
            { id: 13, name: 'Camera' },
            { id: 14, name: 'iPhone' },
            { id: 15, name: 'Samsung TV' },
            { id: 16, name: 'Apple Watch' },
            { id: 17, name: 'Samsung Gear' },
            { id: 18, name: 'Shoes' },
            { id: 19, name: 'Jewellery' },
            { id: 20, name: 'Books' }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/product-search/product-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ProductSearch private styles */\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n   \r\n  .search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n   \r\n  .search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n   \r\n  .search-result li a:hover {\r\n    color: white;\r\n  }\r\n  .search-result li a:active {\r\n    color: white;\r\n  }\r\n  #search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n   \r\n   \r\n  ul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-search/product-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Product Search</h4>\n  \n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  \n  <ul class=\"search-result\">\n    <li *ngFor=\"let product of products$ | async\" >\n      <a routerLink=\"/detail/{{product.id}}\">\n        {{product.name}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-search/product-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductSearchComponent = (function () {
    function ProductSearchComponent(productService) {
        this.productService = productService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    ProductSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (term) { return _this.productService.searchProducts(term); }));
    };
    ProductSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-search',
            template: __webpack_require__("../../../../../src/app/product-search/product-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-search/product-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ProductService = (function () {
    function ProductService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.productsUrl = 'api/products'; // URL to web api
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        this.messageService.add('ProductService: fetched products');
        return this.http.get(this.productsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (products) { return _this.log("fetched products"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getProducts', [])));
    };
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        var url = this.productsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched product id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getProduct id=" + id)));
    };
    /** PUT: update the product on the server */
    ProductService.prototype.updateProduct = function (product) {
        var _this = this;
        return this.http.put(this.productsUrl, product, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("updated product id=" + product.id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateProduct')));
    };
    /** POST: add a new product to the server */
    ProductService.prototype.addProduct = function (product) {
        var _this = this;
        return this.http.post(this.productsUrl, product, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (product) { return _this.log("added Product w/ id=" + product.id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('addProduct')));
    };
    /** DELETE: delete the product from the server */
    ProductService.prototype.deleteProduct = function (product) {
        var _this = this;
        var id = typeof product === 'number' ? product : product.id;
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("deleted product id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('dleteProduct')));
    };
    /* GET products whose name contains search term */
    ProductService.prototype.searchProducts = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty products array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/products/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("found products matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('searchProducts', [])));
    };
    /** Log a ProductService message with the MessageService */
    ProductService.prototype.log = function (message) {
        this.messageService.add('ProductService: ' + message);
    };
    ProductService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* productsComponent's private CSS styles */\r\n.products {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .products li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .products li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  \r\n  .products a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  \r\n  .products a:hover {\r\n    color:#607D8B;\r\n  }\r\n  \r\n  .products .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  \r\n  button {\r\n    margin-top: 1em;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n}\r\n\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  \r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Products</h2>\n\n<div>\n    <label>Product name:\n      <input #productName />\n    </label>\n    <!-- (click) passes input value to add() and then clears the input -->\n    <button (click)=\"add(productName.value); productName.value=''\">\n      add\n    </button>\n  </div>\n  \n<ul class=\"products\">\n  <li *ngFor=\"let product of products\">\n    <a routerLink=\"/detail/{{product.id}}\">\n      <span class=\"badge\">{{product.id}}</span> {{product.name}}\n    </a>\n  </li>\n</ul>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.productService.addProduct({ name: name })
            .subscribe(function (product) {
            _this.products.push(product);
        });
    };
    ProductsComponent.prototype.delete = function (product) {
        this.products = this.products.filter(function (h) { return h !== product; });
        this.productService.deleteProduct(product).subscribe();
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map