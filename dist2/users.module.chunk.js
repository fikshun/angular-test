webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/main/content/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(afs) {
        this.afs = afs;
        this.onUsersChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    UserService.prototype.resolve = function (route, state) {
        return this.getUsers();
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('users').snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ id: c.payload.doc.id }, c.payload.doc.data())); });
            }).subscribe(function (users) {
                _this.users = users;
                _this.onUsersChanged.next(_this.users);
                resolve(users);
            }, reject);
        });
    };
    UserService.prototype.unBlockUser = function (user) {
        return this.afs.doc("users/" + user.id).update({
            isBlocked: false
        });
    };
    UserService.prototype.deleteUser = function (user) {
        return this.afs.doc("users/" + user.id).delete();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"users\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <div class=\"top-bg mat-accent-bg\"></div>\n  \n    <div class=\"center\">\n  \n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n  \n            <div class=\"logo my-12 m-sm-0\"\n                   fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">people</mat-icon>\n                  <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Users</span>\n              </div>\n  \n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input id=\"search\" matInput #filter placeholder=\"Search\">\n                </mat-form-field>\n            </div>\n  \n        </div>\n  \n        <div class=\"content-card mat-white-bg\">\n            <div class=\"toolbar px-24 py-8\">\n  \n                <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                    <button mat-button [matMenuTriggerFor]=\"selectMenu\" class=\"text-capitalize\">\n                        {{selectedCategory ? selectedCategory + ' Users' : 'Select Category'}}\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\" *ngFor=\"let category of categories\" \n                                (click)=\"filterByCategory(category)\">{{category}} Users</button>\n                    </mat-menu>\n                    \n                    <div fxFlex=\"row\" fxLayoutAlign=\"end center\" *ngIf=\"!selection.isEmpty()\">\n                        <div class=\"toolbar-separator\"></div>\n                        <button mat-button (click)=\"unBlockSelected()\">\n                            <mat-icon>check</mat-icon>\n                            Unblock\n                        </button>\n      \n                        <button mat-button (click)=\"deleteSelected()\" >\n                            <mat-icon>delete</mat-icon>\n                            Delete\n                        </button>\n                    </div>\n                </div>\n            </div>\n  \n            <mat-table class=\"users-table\"\n                        #table [dataSource]=\"dataSource\"\n                        matSort\n                        [@animateStagger]=\"{value:'50'}\" fusePerfectScrollbar>\n  \n                <ng-container cdkColumnDef=\"checkbox\">\n                    <mat-header-cell *cdkHeaderCellDef>\n                      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                    [checked]=\"isAllSelected()\"\n                                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox>\n                    </mat-header-cell>\n                    <mat-cell *cdkCellDef=\"let user\">\n                      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                    (change)=\"$event ? selection.toggle(user) : null\"\n                                    [checked]=\"selection.isSelected(user)\"></mat-checkbox>\n                    </mat-cell>\n                </ng-container>\n  \n                <ng-container cdkColumnDef=\"email\">\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header>Email</mat-header-cell>\n                    <mat-cell *cdkCellDef=\"let user\">\n                        <p class=\"text-truncate\">{{user.email}}</p>\n                    </mat-cell>\n                </ng-container>\n  \n                <ng-container cdkColumnDef=\"location\">\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxShow.gt-xs>Location</mat-header-cell>\n                    <mat-cell *cdkCellDef=\"let user\" fxShow.gt-xs>\n                        <p class=\"\">\n                            <!-- {{user.location && user.location.city || ''}} -->\n                            {{getLocationString(user.location)}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n  \n                <ng-container cdkColumnDef=\"active\">\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxShow.gt-md>Active</mat-header-cell>\n                    <mat-cell *cdkCellDef=\"let user\" fxHide fxShow.gt-md>\n                        <mat-icon *ngIf=\"!user.isBlocked\" class=\"active-icon mat-green-600-bg s-16\">check</mat-icon>\n                        <mat-icon *ngIf=\"user.isBlocked\" class=\"active-icon mat-red-500-bg s-16\">close</mat-icon>\n                    </mat-cell>\n                </ng-container>\n  \n                <ng-container cdkColumnDef=\"block_reason\">\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Block Reason</mat-header-cell>\n                    <mat-cell *cdkCellDef=\"let user\" fxHide fxShow.gt-xs>\n                        <p class=\"price text-truncate\">\n                            {{user.isBlocked && user.block && user.block.reason || ''}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n  \n                <ng-container cdkColumnDef=\"block_comment\">\n                    <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Block Comment</mat-header-cell>\n                    <mat-cell *cdkCellDef=\"let user\" fxHide fxShow.gt-xs>\n                        <p class=\"price text-truncate\">\n                            {{user.isBlocked && user.block && user.block.comment || ''}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n  \n                <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  \n                <mat-row *cdkRowDef=\"let user; columns: displayedColumns;\"\n                          class=\"user\"\n                          matRipple>\n                </mat-row>\n  \n            </mat-table>\n  \n            <mat-paginator #paginator\n                            [length]=\"dataSource.filteredData.length\"\n                            [pageIndex]=\"0\"\n                            [pageSize]=\"10\"\n                            [pageSizeOptions]=\"[5, 10, 25, 100]\">\n            </mat-paginator>\n  \n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/main/content/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n:host .users-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto; }\n:host .users-table .mat-header-row {\n    min-height: 64px; }\n:host .users-table .mat-header-cell {\n    overflow: visible; }\n:host .users-table .mat-cell {\n    min-width: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: visible; }\n:host .users-table .mat-column-checkbox {\n    max-width: 54px; }\n:host .users-table .mat-column-active {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 160px;\n            flex: 0 1 160px;\n    padding: 0 12px; }\n:host .users-table .active-icon {\n    border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* unused harmony export UsersDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fuse_animations__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fuse_utils__ = __webpack_require__("../../../../../src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_service__ = __webpack_require__("../../../../../src/app/main/content/users/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, snackBar) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.displayedColumns = ['checkbox', 'email', 'location', 'active', 'block_reason', 'block_comment'];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories = [
            'all',
            'blocked'
        ];
        this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    UsersComponent.prototype.filterByCategory = function (category) {
        var _this = this;
        this.dataSource.category = this.selectedCategory = category;
        setTimeout(function () {
            if (!_this.dataSource.filteredData || !_this.dataSource.filteredData.length) {
                _this.selection.clear();
            }
        });
    };
    UsersComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length === this.dataSource.filteredData.length;
        }
        else {
            return this.selection.selected.length === this.dataSource.filteredData.length;
        }
    };
    UsersComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.filteredData.forEach(function (data) { return _this.selection.select(data); });
        }
        else {
            this.dataSource.filteredData.forEach(function (data) { return _this.selection.select(data); });
        }
    };
    UsersComponent.prototype.unBlockSelected = function () {
        var _this = this;
        this.selection.selected.forEach(function (user) {
            _this.userService.unBlockUser(user).then(function () {
                _this.selection.clear();
                _this.snackBar.open('Operation completed.', null, { duration: 500 });
            });
        });
    };
    UsersComponent.prototype.deleteSelected = function () {
        var _this = this;
        this.selection.selected.forEach(function (user) {
            _this.userService.deleteUser(user).then(function () {
                _this.selection.clear();
                _this.snackBar.open('Operation completed.', null, { duration: 500 });
            });
        });
    };
    UsersComponent.prototype.getLocationString = function (location) {
        if (!location) {
            return '';
        }
        return location.city + ", " + location.state + ", " + location.country + " [" + location.location.latitude + ", " + location.location.longitude + "]";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UsersComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/main/content/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/users/users.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_11__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], UsersComponent);
    return UsersComponent;
}());

var UsersDataSource = /** @class */ (function (_super) {
    __extends(UsersDataSource, _super);
    function UsersDataSource(userService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this._filteredDataChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this._categoryChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this.filteredData = _this.userService.users;
        return _this;
    }
    Object.defineProperty(UsersDataSource.prototype, "filteredData", {
        get: function () {
            return this._filteredDataChange.value;
        },
        set: function (value) {
            this._filteredDataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersDataSource.prototype, "category", {
        get: function () {
            return this._categoryChange.value;
        },
        set: function (category) {
            this._categoryChange.next(category);
        },
        enumerable: true,
        configurable: true
    });
    UsersDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.userService.onUsersChanged,
            this._paginator.page,
            this._filterChange,
            this._sort.sortChange,
            this._categoryChange
        ];
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var data = _this.userService.users.slice();
            data = _this.filterDataByCategory(data, _this.category);
            data = _this.filterData(data);
            _this.filteredData = data.slice();
            data = _this.sortData(data);
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    UsersDataSource.prototype.filterData = function (data) {
        if (!this.filter) {
            return data;
        }
        return __WEBPACK_IMPORTED_MODULE_12__fuse_utils__["a" /* FuseUtils */].filterArrayByString(data, this.filter);
    };
    UsersDataSource.prototype.filterDataByCategory = function (data, category) {
        if (!this.category || this.category === 'all') {
            return data;
        }
        return data.filter(function (item) { return item.isBlocked === true; });
    };
    UsersDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'categories':
                    _c = [a.categories[0], b.categories[0]], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'price':
                    _d = [a.priceTaxIncl, b.priceTaxIncl], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'quantity':
                    _e = [a.quantity, b.quantity], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'active':
                    _f = [a.active, b.active], propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f;
        });
    };
    UsersDataSource.prototype.disconnect = function () {
    };
    return UsersDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/main/content/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_component__ = __webpack_require__("../../../../../src/app/main/content/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/main/content/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]
        }
    }
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatTabsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map