webpackJsonp(["comments.module"],{

/***/ "../../../../../src/app/main/content/comments/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CommentService = /** @class */ (function () {
    function CommentService(afs) {
        this.afs = afs;
        this.onCommentsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    CommentService.prototype.resolve = function (route, state) {
        return this.getComments();
    };
    CommentService.prototype.getComments = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('messages', function (res) { return res.orderBy('time'); }).snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ id: c.payload.doc.id }, c.payload.doc.data())); });
            }).map(function (res) {
                return res.reverse().map(function (item) {
                    if (item.user) {
                        item.userData = _this.afs.doc("users/" + item.user).valueChanges();
                    }
                    return item;
                });
            }).subscribe(function (comments) {
                _this.comments = comments;
                _this.onCommentsChanged.next(_this.comments);
                resolve(comments);
            }, reject);
        });
    };
    CommentService.prototype.approveComment = function (comment) {
        return this.afs.doc("messages/" + comment.id).update({
            status: 'allow',
            reason: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].FieldValue.delete()
        });
    };
    CommentService.prototype.deleteComment = function (comment) {
        return this.afs.doc("messages/" + comment.id).delete();
    };
    CommentService.prototype.deleteCommentAndBlockUser = function (comment) {
        return Promise.all([
            this.afs.doc("users/" + comment.user).update({
                isBlocked: true,
                block: {
                    comment: comment.msg,
                    reason: comment.reason || null
                }
            }),
            this.afs.doc("messages/" + comment.id).delete(),
            this.deleteCol("messages/" + comment.id + "/readed")
        ]);
    };
    CommentService.prototype.deleteCol = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var batch, qs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batch = this.afs.firestore.batch();
                        return [4 /*yield*/, this.afs.collection(path).ref.get()];
                    case 1:
                        qs = _a.sent();
                        qs.forEach(function (doc) { return batch.delete(doc.ref); });
                        return [2 /*return*/, batch.commit()];
                }
            });
        });
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"comments\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <div class=\"top-bg mat-accent-bg\"></div>\n\n  <div class=\"center\">\n\n      <div class=\"header white-fg\"\n           fxLayout=\"column\" fxLayoutAlign=\"center center\"\n           fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n          <div class=\"logo my-12 m-sm-0\"\n                fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">message</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Comments</span>\n          </div>\n\n          <div class=\"search-input-wrapper mx-12 m-md-0\"\n               fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <label for=\"search\" class=\"mr-8\">\n                  <mat-icon class=\"secondary-text\">search</mat-icon>\n              </label>\n              <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                  <input id=\"search\" matInput #filter placeholder=\"Search\">\n              </mat-form-field>\n          </div>\n\n      </div>\n\n      <div class=\"content-card mat-white-bg\">\n          <div class=\"toolbar px-24 py-8\">\n\n              <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                  <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                      {{selectedCategory ? selectedCategory : 'Select Category'}}\n                      <mat-icon>arrow_drop_down</mat-icon>\n                  </button>\n                  <mat-menu #selectMenu=\"matMenu\">\n                      <button mat-menu-item class=\"text-capitalize\" *ngFor=\"let category of categories\" \n                              (click)=\"filterByCategory(category)\">{{category}}</button>\n                  </mat-menu>\n                  \n                  <div fxFlex=\"row\" fxLayoutAlign=\"end center\" *ngIf=\"!selection.isEmpty()\">\n                      <div class=\"toolbar-separator\"></div>\n                      <button mat-button (click)=\"approveSelected()\">\n                          <mat-icon>check</mat-icon>\n                          Approve\n                      </button>\n    \n                      <button mat-button (click)=\"deleteSelected()\" >\n                          <mat-icon>delete</mat-icon>\n                          Delete\n                      </button>\n    \n                      <button mat-button (click)=\"deleteAndBlockSelected()\">\n                          <mat-icon>delete_forever</mat-icon>\n                          Delete & Block User\n                      </button>\n                  </div>\n              </div>\n          </div>\n\n          <mat-table class=\"comments-table\"\n                      #table [dataSource]=\"dataSource\"\n                      matSort\n                      [@animateStagger]=\"{value:'50'}\" fusePerfectScrollbar>\n\n              <ng-container cdkColumnDef=\"checkbox\">\n                  <mat-header-cell *cdkHeaderCellDef>\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                  [checked]=\"isAllSelected()\"\n                                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox>\n                  </mat-header-cell>\n                  <mat-cell *cdkCellDef=\"let comment\">\n                    <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                  (change)=\"$event ? selection.toggle(comment) : null\"\n                                  [checked]=\"selection.isSelected(comment)\"></mat-checkbox>\n                  </mat-cell>\n              </ng-container>\n\n              <ng-container cdkColumnDef=\"comments\">\n                  <mat-header-cell *cdkHeaderCellDef mat-sort-header>Comments</mat-header-cell>\n                  <mat-cell *cdkCellDef=\"let comment\">\n                      <p>{{comment.msg}}</p>\n                  </mat-cell>\n              </ng-container>\n\n              <ng-container cdkColumnDef=\"category\">\n                  <mat-header-cell *cdkHeaderCellDef fxHide mat-sort-header fxShow.gt-md>Category</mat-header-cell>\n                  <mat-cell *cdkCellDef=\"let comment\" fxHide fxShow.gt-md>\n                      <p class=\"category text-truncate\">\n                          {{comment.reason || comment.status}}\n                      </p>\n                  </mat-cell>\n              </ng-container>\n\n              <ng-container cdkColumnDef=\"date\">\n                  <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Date</mat-header-cell>\n                  <mat-cell *cdkCellDef=\"let comment\" fxHide fxShow.gt-xs>\n                      <p class=\"price text-truncate\">\n                          {{comment.time | date: 'medium'}}\n                      </p>\n                  </mat-cell>\n              </ng-container>\n\n              <ng-container cdkColumnDef=\"user\">\n                  <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>User</mat-header-cell>\n                  <mat-cell *cdkCellDef=\"let comment\" fxHide fxShow.gt-xs>\n                      <p class=\"price text-truncate\" *ngIf=\"comment.userData\">\n                          {{(comment.userData | async)?.email || ''}}\n                      </p>\n                  </mat-cell>\n              </ng-container>\n\n              <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n              <mat-row *cdkRowDef=\"let comment; columns: displayedColumns;\"\n                        class=\"comment\"\n                        matRipple>\n              </mat-row>\n\n          </mat-table>\n\n          <mat-paginator #paginator\n                          [length]=\"dataSource.filteredData.length\"\n                          [pageIndex]=\"0\"\n                          [pageSize]=\"10\"\n                          [pageSizeOptions]=\"[5, 10, 25, 100]\">\n          </mat-paginator>\n\n      </div>\n      <!-- / CONTENT CARD -->\n  </div>\n  <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/comments/comments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n:host .comments-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto; }\n:host .comments-table .mat-header-row {\n    min-height: 64px; }\n:host .comments-table .product {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .comments-table .mat-header-cell {\n    overflow: visible; }\n:host .comments-table .mat-cell {\n    min-width: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: visible; }\n:host .comments-table .mat-column-checkbox {\n    max-width: 54px; }\n:host .comments-table .mat-column-image {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 84px;\n            flex: 0 1 84px; }\n:host .comments-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n:host .comments-table .mat-column-buttons {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 80px;\n            flex: 0 1 80px; }\n:host .comments-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n:host .comments-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n:host .comments-table .active-icon {\n    border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* unused harmony export CommentsDataSource */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comment_service__ = __webpack_require__("../../../../../src/app/main/content/comments/comment.service.ts");
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















var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentService, snackBar) {
        this.commentService = commentService;
        this.snackBar = snackBar;
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.displayedColumns = ['checkbox', 'comments', 'category', 'date', 'user'];
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories = [
            'new',
            'allow',
            'Spam',
            'Hateful',
            'Violent/Abusive',
            'Child Abuse',
            'Sexually offensive',
            'All'
        ];
        this.dataSource = new CommentsDataSource(this.commentService, this.paginator, this.sort);
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
    CommentsComponent.prototype.filterByCategory = function (category) {
        var _this = this;
        this.selectedCategory = category;
        this.dataSource.category = (category === 'All') ? '' : category;
        setTimeout(function () {
            if (!_this.dataSource.filteredData || !_this.dataSource.filteredData.length) {
                _this.selection.clear();
            }
        });
    };
    CommentsComponent.prototype.isAllSelected = function () {
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
    CommentsComponent.prototype.masterToggle = function () {
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
    CommentsComponent.prototype.approveSelected = function () {
        var _this = this;
        this.selection.selected.forEach(function (comment) {
            _this.commentService.approveComment(comment).then(function () {
                _this.selection.clear();
                _this.snackBar.open('Operation completed.', null, { duration: 500 });
            });
        });
    };
    CommentsComponent.prototype.deleteSelected = function () {
        var _this = this;
        this.selection.selected.forEach(function (comment) {
            _this.commentService.deleteComment(comment).then(function () {
                _this.selection.clear();
                _this.snackBar.open('Operation completed.', null, { duration: 500 });
            });
        });
    };
    CommentsComponent.prototype.deleteAndBlockSelected = function () {
        var _this = this;
        this.selection.selected.forEach(function (comment) {
            _this.commentService.deleteCommentAndBlockUser(comment).then(function () {
                _this.selection.clear();
                _this.snackBar.open('Operation completed.', null, { duration: 500 });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */])
    ], CommentsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CommentsComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */])
    ], CommentsComponent.prototype, "sort", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/main/content/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/comments/comments.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_11__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__comment_service__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], CommentsComponent);
    return CommentsComponent;
}());

var CommentsDataSource = /** @class */ (function (_super) {
    __extends(CommentsDataSource, _super);
    function CommentsDataSource(commentService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.commentService = commentService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this._filteredDataChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this._categoryChange = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this.filteredData = _this.commentService.comments;
        return _this;
    }
    Object.defineProperty(CommentsDataSource.prototype, "filteredData", {
        get: function () {
            return this._filteredDataChange.value;
        },
        set: function (value) {
            this._filteredDataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsDataSource.prototype, "category", {
        get: function () {
            return this._categoryChange.value;
        },
        set: function (category) {
            this._categoryChange.next(category);
        },
        enumerable: true,
        configurable: true
    });
    CommentsDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.commentService.onCommentsChanged,
            this._paginator.page,
            this._filterChange,
            this._sort.sortChange,
            this._categoryChange
        ];
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var data = _this.commentService.comments.slice();
            data = _this.filterDataByCategory(data, _this.category);
            data = _this.filterData(data);
            _this.filteredData = data.slice();
            data = _this.sortData(data);
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    CommentsDataSource.prototype.filterData = function (data) {
        if (!this.filter) {
            return data;
        }
        return __WEBPACK_IMPORTED_MODULE_12__fuse_utils__["a" /* FuseUtils */].filterArrayByString(data, this.filter, 'userData');
    };
    CommentsDataSource.prototype.filterDataByCategory = function (data, category) {
        if (!this.category) {
            return data;
        }
        return data.filter(function (item) {
            if (item.reason && item.reason === category) {
                return true;
            }
            return item.status === category;
        });
    };
    CommentsDataSource.prototype.sortData = function (data) {
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
    CommentsDataSource.prototype.disconnect = function () {
    };
    return CommentsDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/main/content/comments/comments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_component__ = __webpack_require__("../../../../../src/app/main/content/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_service__ = __webpack_require__("../../../../../src/app/main/content/comments/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__comments_component__["a" /* CommentsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_6__comment_service__["a" /* CommentService */]
        }
    }
];
var CommentsModule = /** @class */ (function () {
    function CommentsModule() {
    }
    CommentsModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_5__comments_component__["a" /* CommentsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__comment_service__["a" /* CommentService */]
            ]
        })
    ], CommentsModule);
    return CommentsModule;
}());



/***/ })

});
//# sourceMappingURL=comments.module.chunk.js.map