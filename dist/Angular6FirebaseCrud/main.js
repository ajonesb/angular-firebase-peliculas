(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _layout_regular_layout_regular_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/regular-layout/regular-layout.component */ "./src/app/layout/regular-layout/regular-layout.component.ts");
/* harmony import */ var _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pelicula/pelicula.component */ "./src/app/pelicula/pelicula.component.ts");
/* harmony import */ var _pelicula_list_pelicula_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pelicula-list/pelicula-list.component */ "./src/app/pelicula-list/pelicula-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var appRoutes = [
    // Login layout Only
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // Regular App layout below with Components
    { path: '', component: _layout_regular_layout_regular_layout_component__WEBPACK_IMPORTED_MODULE_0__["RegularLayoutComponent"],
        children: [
            { path: 'pelicula', component: _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_1__["PeliculaComponent"] },
            { path: 'pelicula-list', component: _pelicula_list_pelicula_list_component__WEBPACK_IMPORTED_MODULE_2__["PeliculaListComponent"] },
        ]
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\">\r\n <p style=\"font-size: 20px; color: white\">Cargando Angular + Firebase peliculas...</p>\r\n</ngx-spinner>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: white; }\n\n.home-title {\n  font-size: 36px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #FFF;\n  position: relative;\n  text-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbGFuXFxEZXNrdG9wXFxBbmd1bGFyLU1vdmllcy1DUlVELUFwcFxcQW5ndWxhci03LUFkZHJlc3MtQm9vay1BcHAtV2l0aC1GaXJlYmFzZS1EYXRhYmFzZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkNBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCA4cHggcmdiYSgwLDAsMCwwLjMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'Angular6FirebaseCrud';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 3000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pelicula/pelicula.component */ "./src/app/pelicula/pelicula.component.ts");
/* harmony import */ var _pelicula_list_pelicula_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pelicula-list/pelicula-list.component */ "./src/app/pelicula-list/pelicula-list.component.ts");
/* harmony import */ var _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/main-nav/main-nav.component */ "./src/app/layout/main-nav/main-nav.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_pelicula_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pelicula.service */ "./src/app/shared/pelicula.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _layout_regular_layout_regular_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/regular-layout/regular-layout.component */ "./src/app/layout/regular-layout/regular-layout.component.ts");

/* Firebase Setup */



/* Angular */





/* Spinner */

/* Components */





/* Service */


/* Material Design */




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_11__["PeliculaComponent"],
                _pelicula_list_pelicula_list_component__WEBPACK_IMPORTED_MODULE_12__["PeliculaListComponent"],
                _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__["MainNavComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _layout_regular_layout_regular_layout_component__WEBPACK_IMPORTED_MODULE_20__["RegularLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"]
            ],
            providers: [
                _shared_pelicula_service__WEBPACK_IMPORTED_MODULE_15__["peliculaService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/main-nav/main-nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/main-nav/main-nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container style=\"background: none;\" class=\"sidenav-container\">\r\n  <mat-sidenav \r\n      #drawer \r\n      class=\"sidenav\"\r\n      fixedInViewport=\"false\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"/Dashboard\">Dashboard</a>\r\n      <a mat-list-item href=\"/Peliculas\">Peliculas</a>\r\n      <a mat-list-item href=\"/Turnos\">Turnos</a>\r\n      <a mat-list-item href=\"/Administradores\">Administradores</a>\r\n      <a mat-list-item href=\"/Perfil\">Perfil</a>\r\n      <a mat-list-item href=\"/Perfil\">Cerrar Sesion</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <div id=\"site-logo\">\r\n          <a href=\"http://jonesfrontendwebdev.com/\" rel=\"home\">\r\n            <img class=\"site-logo__image\" src=\"https://www.mbejda.com/content/images/2017/08/AngularJS-Shield.svg\" alt=\"Alan Jones – UI Front End Engineer\">\r\n          </a>\r\n      </div>\r\n      <span class=\"spacer\"></span>\r\n      <div class=\"desktop-nav\">\r\n        <a href=\"/Dashboard\">Dashboard</a>\r\n        <a href=\"/Peliculas\">Peliculas</a>\r\n        <a href=\"/Turnos\">Turnos</a>\r\n        <a href=\"/Administradores\">Administradores</a>\r\n        <a href=\"/Perfil\">Perfil</a>\r\n        <a href=\"/Perfil\">Cerrar Sesion</a>\r\n      </div>\r\n      \r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <!-- <app-login></app-login> \r\n      Do not place app login here because then it will have same layout with menu and nav -->\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/layout/main-nav/main-nav.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/main-nav/main-nav.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  background-color: none !important;\n  overflow-x: hidden; }\n\n.sidenav {\n  width: 200px;\n  position: fixed; }\n\n.sidenav .mat-toolbar {\n    background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0 !important;\n  padding: 64px 0px; }\n\n.spacer {\n  flex: 1 1 auto; }\n\nmat-toolbar a {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  margin: 0px 10px; }\n\n.mat-list-base .mat-list-item {\n  color: white !important;\n  border-bottom: 1px solid grey; }\n\n.mat-drawer {\n  background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0 !important;\n  color: white !important; }\n\n.mat-drawer-content {\n  overflow-x: hidden; }\n\n.desktop-nav a {\n  text-transform: uppercase;\n  font-size: 14px;\n  padding: 5px 15px;\n  font-weight: 400; }\n\n.desktop-nav a:hover {\n    color: #1e73be; }\n\n@media (max-width: 960px) {\n  .desktop-nav {\n    display: none; }\n  #site-logo {\n    text-align: center !important;\n    width: 100%; }\n    #site-logo .site-logo__image {\n      margin: auto !important;\n      width: 24%;\n      height: auto; } }\n\n@media (min-width: 768px) {\n  .sidenav {\n    display: none; }\n  #site-logo .site-logo__image {\n    margin: auto !important;\n    width: 30%;\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW4tbmF2L0M6XFxVc2Vyc1xcQWxhblxcRGVza3RvcFxcQW5ndWxhci1Nb3ZpZXMtQ1JVRC1BcHBcXEFuZ3VsYXItNy1BZGRyZXNzLUJvb2stQXBwLVdpdGgtRmlyZWJhc2UtRGF0YWJhc2Uvc3JjXFxhcHBcXGxheW91dFxcbWFpbi1uYXZcXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUZoQjtJQUlFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNDLGVBQWU7RUFDZixNQUFNO0VBQ04sVUFBVTtFQUNWLGdFQUFnRTtFQUNoRSxpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxjQUFjLEVBQUE7O0FBRWY7RUFFRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFFRSx1QkFBdUI7RUFDdkIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0MsZ0VBQWdFO0VBQ2hFLHVCQUF1QixFQUFBOztBQUV4QjtFQUNDLGtCQUFrQixFQUFBOztBQUVuQjtFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUxsQjtJQU9HLGNBQWMsRUFBQTs7QUFJakI7RUFDQztJQUNDLGFBQWEsRUFBQTtFQUVkO0lBQ0MsNkJBQTZCO0lBQzdCLFdBQVcsRUFBQTtJQUZaO01BSUUsdUJBQXVCO01BQ3ZCLFVBQVU7TUFDVixZQUFZLEVBQUEsRUFDWjs7QUFHSDtFQUNDO0lBQ0MsYUFBYSxFQUFBO0VBRWI7SUFFQyx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uc2lkZW5hdiB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHQubWF0LXRvb2xiYXIge1xyXG5cdFx0YmFja2dyb3VuZDogaW5oZXJpdDtcclxuXHR9XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiA2NHB4IDBweDtcclxufVxyXG4uc3BhY2VyIHtcclxuXHRmbGV4OiAxIDEgYXV0bztcclxufVxyXG5tYXQtdG9vbGJhciB7XHJcblx0YSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRtYXJnaW46IDBweCAxMHB4O1xyXG5cdH1cclxufVxyXG4ubWF0LWxpc3QtYmFzZSB7XHJcblx0Lm1hdC1saXN0LWl0ZW0ge1xyXG5cdFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuXHR9XHJcbn1cclxuLm1hdC1kcmF3ZXIge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KSBub25lIHJlcGVhdCBzY3JvbGwgMCAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1kcmF3ZXItY29udGVudCB7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5kZXNrdG9wLW5hdiB7XHJcblx0YSB7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0cGFkZGluZzogNXB4IDE1cHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGNvbG9yOiAjMWU3M2JlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuXHQuZGVza3RvcC1uYXYge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0I3NpdGUtbG9nbyB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LnNpdGUtbG9nb19faW1hZ2Uge1xyXG5cdFx0XHRtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdFx0d2lkdGg6IDI0JTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHQuc2lkZW5hdiB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjc2l0ZS1sb2dvIHtcclxuXHRcdC5zaXRlLWxvZ29fX2ltYWdlIHtcclxuXHRcdFx0bWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRcdHdpZHRoOiAzMCU7XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/main-nav/main-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/main-nav/main-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/layout/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/layout/main-nav/main-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/regular-layout/regular-layout.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/regular-layout/regular-layout.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\r\n<div style=\"z-index: 2;\">\r\n    <app-main-nav>\r\n        <!--Add content you wanna have on app here -->\r\n        <h2 class=\"home-title\">Angular + Firebase Peliculas</h2>\r\n    \r\n    </app-main-nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layout/regular-layout/regular-layout.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/regular-layout/regular-layout.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-title {\n  font-size: 36px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #fff;\n  position: relative;\n  text-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);\n  margin: 20px auto;\n  text-align: center; }\n  @media (max-width: 768px) {\n    .home-title {\n      font-size: 20px !important;\n      margin: 20px 10px 2px;\n      font-size: 20px !important;\n      text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlZ3VsYXItbGF5b3V0L0M6XFxVc2Vyc1xcQWxhblxcRGVza3RvcFxcQW5ndWxhci1Nb3ZpZXMtQ1JVRC1BcHBcXEFuZ3VsYXItNy1BZGRyZXNzLUJvb2stQXBwLVdpdGgtRmlyZWJhc2UtRGF0YWJhc2Uvc3JjXFxhcHBcXGxheW91dFxccmVndWxhci1sYXlvdXRcXHJlZ3VsYXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBRWxCO0lBVkY7TUFXSSwwQkFBMEI7TUFDMUIscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQixrQkFBa0IsRUFBQSxFQUVyQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZWd1bGFyLWxheW91dC9yZWd1bGFyLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXRpdGxlIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1zaGFkb3c6IDZweCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweCAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/regular-layout/regular-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/regular-layout/regular-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegularLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularLayoutComponent", function() { return RegularLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegularLayoutComponent = /** @class */ (function () {
    function RegularLayoutComponent() {
    }
    RegularLayoutComponent.prototype.ngOnInit = function () {
    };
    RegularLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regular-layout',
            template: __webpack_require__(/*! ./regular-layout.component.html */ "./src/app/layout/regular-layout/regular-layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./regular-layout.component.scss */ "./src/app/layout/regular-layout/regular-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegularLayoutComponent);
    return RegularLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class='login-element container'>\r\n    <div class=\"login-container\">\r\n                               \r\n        <!-- <div class=\"login-box-header\">\r\n            <img alt=\"Alan Jones – UI Front End Engineer\" \r\n            src=\"http://jonesfrontendwebdev.com/wp-content/uploads/2018/05/cropped-cropped-smalllogo-1.png\">\r\n        </div> -->\r\n        <div class=\"login-box-body\">\r\n            <div class=\"col-md-12\">\r\n                <p class=\"login-text text-center\">ANGULAR + Firebase Peliculas</p>\r\n                <mat-card class=\"example-card\">           \r\n                    <mat-card-content>\r\n                      <form class=\"example-form\">\r\n                        <table class=\"example-full-width\" cellspacing=\"0\">\r\n                          <tr>\r\n                            <td>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\r\n                              </mat-form-field>\r\n                            </td>\r\n                          </tr>\r\n                \r\n                          <tr>\r\n                            <td>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\r\n                                </mat-form-field></td>\r\n                          </tr>\r\n                        </table>\r\n                      </form>\r\n                    </mat-card-content>\r\n                 \r\n                   <!--  <mat-card-actions>\r\n                      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\r\n                    </mat-card-actions> -->\r\n                 \r\n                  </mat-card>\r\n                    \r\n                <button mat-raised-button class=\"text-center btn btn-primary align-content-center login-button\" \r\n                name=\"readyBtn\" (click)=\"login()\" title=\"Ready\">\r\n                <mat-icon>input</mat-icon> Login\r\n                </button>\r\n                <hr>\r\n                <!-- <button mat-raised-button class=\"text-center btn btn-primary align-content-center login-button\" \r\n                name=\"signoutBtn\" onclick=\"signOut()\" title=\"SignOut\">\r\n                <mat-icon>input</mat-icon> SignOut\r\n                </button> -->          \r\n            </div>\r\n           \r\n        </div>     \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  color: black !important; }\n\n.login-text {\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #FFF;\n  position: relative;\n  text-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3); }\n\n.login-container .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #3a3a3a !important; }\n\nbutton {\n  margin: auto; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  margin: 0px;\n  background-color: transparent !important; }\n\n.app-header {\n  background-color: #0095da;\n  text-align: center;\n  padding: 1%; }\n\n.login-container {\n  max-width: 500px;\n  height: auto;\n  padding: 0px;\n  background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0 !important;\n  opacity: 0.9;\n  box-shadow: 2px 4px 58px -20px black;\n  border: 1px solid lightgray;\n  margin: 5em auto; }\n\n.login-box-header {\n  width: auto;\n  height: 26%;\n  opacity: 0.9;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 3em;\n  padding: 4%;\n  color: #fff; }\n\n.mat-card .mat-form-field-infix {\n  color: #383838 !important; }\n\n.login-token {\n  border: none; }\n\ninput.mat-input-element {\n  margin-top: 10px 0px; }\n\n.login-box-body {\n  width: auto;\n  height: 100%;\n  padding: 25px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.login-icon {\n  margin-top: -2px; }\n\n.login-button {\n  width: 100%;\n  padding: 1.5% !important;\n  background-color: #274350;\n  font-size: 1.5em;\n  color: #fff !important; }\n\n.abcRioButtonLightBlue {\n  width: 50% !important;\n  margin: 0px auto;\n  padding: 1px; }\n\n.login-element {\n  margin: 10px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBbGFuXFxEZXNrdG9wXFxBbmd1bGFyLU1vdmllcy1DUlVELUFwcFxcQW5ndWxhci03LUFkZHJlc3MtQm9vay1BcHAtV2l0aC1GaXJlYmFzZS1EYXRhYmFzZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csdUJBQXNCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQ0FBd0MsRUFBQTs7QUFHNUM7RUFDSSx5QkFBZ0MsRUFBQTs7QUFHcEM7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0MsaUNBQWlDO0VBQzlCLFdBQVU7RUFDVix3Q0FBd0MsRUFBQTs7QUFHNUM7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdFQUErRDtFQUMvRCxZQUFZO0VBQ1osb0NBQTRDO0VBQzVDLDJCQUEyQjtFQUMzQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDQyxXQUFXO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNDLFdBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUFzQixFQUFBOztBQUd2QjtFQUNDLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLFdBQVc7RUFDWCx3QkFBdUI7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxxQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5sb2dpbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCA4cHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmJvZHl7XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTVkYTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcbiBcclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1OHB4IC0yMHB4IHJnYmEoMCwwLDAsMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBtYXJnaW46IDVlbSBhdXRvO1xyXG59XHJcbiBcclxuLmxvZ2luLWJveC1oZWFkZXJ7XHJcblx0d2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDI2JTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgY29sb3I6IHJnYig1NiwgNTYsIDU2KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbi10b2tlbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggMHB4O1xyXG59XHJcbiBcclxuLmxvZ2luLWJveC1ib2R5e1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHBhZGRpbmc6IDI1cHg7XHJcblx0Y29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxufVxyXG4gXHJcbi5sb2dpbi1pY29ue1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuIFxyXG4ubG9naW4tYnV0dG9ue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6MS41JSAhaW1wb3J0YW50O1x0XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0MzUwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYmNSaW9CdXR0b25MaWdodEJsdWUge1xyXG4gICAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG4ubG9naW4tZWxlbWVudCB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



/* import {MatDialog} from '@angular/material'; */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.username === 'admin' && this.password === 'admin') {
            this.router.navigate(['pelicula']);
            console.log('You logged in successfully.');
        }
        else {
            alert('Invalid credentials');
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pelicula-list/pelicula-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pelicula-list/pelicula-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form class=\"mb-5 form-inline\">\r\n    <mat-form-field style=\"width: 90%;\">\r\n      <input\r\n        matInput\r\n        name=\"searchInput\"\r\n        #searchInput=\"ngModel\"\r\n        [(ngModel)]=\"searchText\"\r\n        style=\"width: 100%;\"\r\n      />\r\n      <mat-placeholder style=\"color: white;\">Buscar Peliculas</mat-placeholder>\r\n    </mat-form-field>\r\n    <button\r\n      class=\"btn btn-outline-primary search-close-x\"\r\n      (click)=\"searchText = ''\"\r\n    >\r\n      X\r\n    </button>\r\n  </form>\r\n  <p style=\"color: white; font-weight: bold;\">Listado de Pelicula:</p>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <th>ID</th>\r\n        <th>Nombre</th>\r\n        <th>F. Publicacion</th>\r\n        <th>Estado</th>\r\n        <th>Edit / Delete</th>\r\n      </thead>\r\n      <ng-container *ngFor=\"let pelicula of peliculaArray\">\r\n        <tr *ngIf=\"filterCondition(pelicula)\">\r\n          <td>{{ pelicula.Id }}</td>\r\n          <td>{{ pelicula.fullName }}</td>\r\n          <td>{{ pelicula.datePicker }}</td>\r\n          <td>{{ pelicula.estado }}</td> \r\n          <td>\r\n            <button\r\n              class=\"btn btn-outline-info\"\r\n              (click)=\"peliculaService.populateForm(pelicula)\"\r\n            >\r\n              Edit\r\n            </button>\r\n            <button\r\n              class=\"btn btn-outline-danger\"\r\n              (click)=\"onDelete(pelicula.$key)\"\r\n            >\r\n              Delete\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n      <div class=\"alert alert-danger\" *ngIf=\"showDeleteMessage\">\r\n        Deleted successfully.\r\n      </div>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pelicula-list/pelicula-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pelicula-list/pelicula-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  color: white !important; }\n  .table tr {\n    color: white !important;\n    padding: 20px; }\n  .table-sm td, .table-sm th {\n  padding: 19px 12px; }\n  @media (min-width: 780px) {\n  .search-close-x {\n    margin-left: 10px; } }\n  @media (max-width: 780px) {\n  .search-close-x {\n    margin: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVsaWN1bGEtbGlzdC9DOlxcVXNlcnNcXEFsYW5cXERlc2t0b3BcXEFuZ3VsYXItTW92aWVzLUNSVUQtQXBwXFxBbmd1bGFyLTctQWRkcmVzcy1Cb29rLUFwcC1XaXRoLUZpcmViYXNlLURhdGFiYXNlL3NyY1xcYXBwXFxwZWxpY3VsYS1saXN0XFxwZWxpY3VsYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssdUJBQXVCLEVBQUE7RUFENUI7SUFJUSx1QkFBdUI7SUFDdkIsYUFBYSxFQUFBO0VBSXJCO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSTtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCO0VBR0w7RUFDSTtJQUNJLFdBQVcsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvcGVsaWN1bGEtbGlzdC9wZWxpY3VsYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxleyAgICBcclxuICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICBcclxuICAgICB0ciB7ICAgICAgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgIH1cclxufSBcclxuXHJcbi50YWJsZS1zbSB0ZCwgLnRhYmxlLXNtIHRoIHtcclxuICAgIHBhZGRpbmc6IDE5cHggMTJweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc4MHB4KSB7XHJcbiAgICAuc2VhcmNoLWNsb3NlLXgge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHtcclxuICAgIC5zZWFyY2gtY2xvc2UteCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pelicula-list/pelicula-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pelicula-list/pelicula-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PeliculaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculaListComponent", function() { return PeliculaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_pelicula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/pelicula.service */ "./src/app/shared/pelicula.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PeliculaListComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function PeliculaListComponent(peliculaService) {
        this.peliculaService = peliculaService;
        this.peliculaArray = [];
        // tslint:disable-next-line:no-inferrable-types
        this.searchText = '';
    }
    PeliculaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peliculaService.getpelicula().subscribe(function (list) {
            _this.peliculaArray = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    };
    PeliculaListComponent.prototype.onDelete = function ($key) {
        var _this = this;
        if (confirm('Are you sure to delete this record?')) {
            this.peliculaService.deletepelicula($key);
            this.showDeleteMessage = true;
            setTimeout(function () { return _this.showDeleteMessage = false; }, 3000);
        }
    };
    PeliculaListComponent.prototype.filterCondition = function (pelicula) {
        return pelicula.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    };
    PeliculaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pelicula-list',
            template: __webpack_require__(/*! ./pelicula-list.component.html */ "./src/app/pelicula-list/pelicula-list.component.html"),
            styles: [__webpack_require__(/*! ./pelicula-list.component.scss */ "./src/app/pelicula-list/pelicula-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_pelicula_service__WEBPACK_IMPORTED_MODULE_1__["peliculaService"]])
    ], PeliculaListComponent);
    return PeliculaListComponent;
}());



/***/ }),

/***/ "./src/app/pelicula/pelicula.component.html":
/*!**************************************************!*\
  !*** ./src/app/pelicula/pelicula.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row components-wrap\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-2 pelicula-component-wrap\">\r\n    <p style=\"color: white; font-weight: bold;\">\r\n      Editar O Añadir Nueva Pelicula:\r\n    </p>\r\n    <form [formGroup]=\"this.peliculaService.form\" (ngSubmit)=\"onSubmit()\">\r\n      <input type=\"hidden\" formControlName=\"$key\" />\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input style=\"color: white;\" matInput formControlName=\"Id\" class=\"form-control\" [ngClass]=\"{\r\n              'is-invalid': submitted && formControls.Id.errors\r\n            }\" />\r\n          <mat-placeholder style=\"color: white;\">ID</mat-placeholder>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.Id.errors\">\r\n            This field is required\r\n          </div>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field>\r\n          <input style=\"color: white;\" matInput formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{\r\n              'is-invalid': submitted && formControls.fullName.errors\r\n            }\" />\r\n          <mat-placeholder style=\"color: white;\">Nombre</mat-placeholder>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.Id.errors\">\r\n            This field is required\r\n          </div>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <!-- <mat-form-field>\r\n          <input \r\n          style=\"color: white;\" \r\n          matInput formControlName=\"datePicker\" \r\n          class=\"form-control\" \r\n          [ngClass]=\"{\r\n              'is-invalid': submitted && formControls.datePicker.errors\r\n            }\" \r\n            />\r\n          <mat-placeholder style=\"color: white;\">F. Publicacion</mat-placeholder>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.datePicker.errors\">\r\n            This field is required\r\n          </div>\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field>\r\n          <input \r\n          style=\"color: white!important;\" \r\n          matInput [matDatepicker]=\"picker\" \r\n          placeholder=\"F. Publicacion\" \r\n          formControlName=\"datePicker\"\r\n          class=\"form-control\" \r\n          [ngClass]=\"{\r\n              'is-invalid': submitted && formControls.datePicker.errors\r\n            }\"\r\n          >\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.datePicker.errors\">\r\n            This field is required\r\n          </div>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group\">    \r\n        <mat-form-field>\r\n          <input style=\"color: white;\" \r\n          matInput formControlName=\"estado\" \r\n          class=\"form-control\" />\r\n          <mat-placeholder style=\"color: white;\">Estado</mat-placeholder>\r\n        </mat-form-field>\r\n        \r\n      </div> \r\n\r\n      \r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n      </div>\r\n    </form>\r\n    <div class=\"alert alert-info\" *ngIf=\"showSuccessMessage\">\r\n      Submitted successfully.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 col-md-12 col-lg-9 pelicula-list-component-wrap\">\r\n    <app-pelicula-list></app-pelicula-list>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pelicula/pelicula.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pelicula/pelicula.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pelicula-component-wrap {\n  background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0 !important;\n  opacity: 0.9;\n  box-shadow: 2px 4px 58px -20px black;\n  border: 1px solid lightgray;\n  margin: 0px 10px;\n  min-width: 20%;\n  padding: 30px; }\n  @media (max-width: 768px) {\n    .pelicula-component-wrap {\n      margin: 30px 0px;\n      padding: 20px 40px; } }\n  .pelicula-list-component-wrap {\n  background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0 !important;\n  opacity: 0.9;\n  box-shadow: 2px 4px 58px -20px black;\n  border: 1px solid lightgray;\n  margin: 0px 10px;\n  padding: 30px; }\n  .home-title {\n  font-size: 36px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #FFF;\n  position: relative;\n  text-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3); }\n  .form-control {\n  padding: 0px !important;\n  border: 0px !important;\n  margin: 0px !important;\n  background: none !important;\n  border-radius: 0px !important;\n  top: 0px !important;\n  bottom: 0px !important;\n  outline: none !important;\n  box-shadow: none !important;\n  height: 17px !important;\n  transition: none !important; }\n  @media (max-width: 768px) {\n  .home-title {\n    font-size: 25px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVsaWN1bGEvQzpcXFVzZXJzXFxBbGFuXFxEZXNrdG9wXFxBbmd1bGFyLU1vdmllcy1DUlVELUFwcFxcQW5ndWxhci03LUFkZHJlc3MtQm9vay1BcHAtV2l0aC1GaXJlYmFzZS1EYXRhYmFzZS9zcmNcXGFwcFxccGVsaWN1bGFcXHBlbGljdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0VBQWdFO0VBQ2hFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ1gsYUFBYSxFQUFBO0VBR2I7SUFWSjtNQVdRLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQSxFQUV6QjtFQUNEO0VBQ0MsZ0VBQWdFO0VBQ2hFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7RUFFZDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkNBQTJDLEVBQUE7RUFJNUM7RUFDQyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7RUFFNUI7RUFDQztJQUNDLDBCQUEwQixFQUFBLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGVsaWN1bGEvcGVsaWN1bGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVsaWN1bGEtY29tcG9uZW50LXdyYXAge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KSBub25lIHJlcGVhdCBzY3JvbGwgMCAwICFpbXBvcnRhbnQ7XHJcblx0b3BhY2l0eTogMC45O1xyXG5cdGJveC1zaGFkb3c6IDJweCA0cHggNThweCAtMjBweCBibGFjaztcclxuXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblx0bWFyZ2luOiAwcHggMTBweDtcclxuXHRtaW4td2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIH1cclxufVxyXG4ucGVsaWN1bGEtbGlzdC1jb21wb25lbnQtd3JhcCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgIWltcG9ydGFudDtcclxuXHRvcGFjaXR5OiAwLjk7XHJcblx0Ym94LXNoYWRvdzogMnB4IDRweCA1OHB4IC0yMHB4IGJsYWNrO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuXHRtYXJnaW46IDBweCAxMHB4O1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmhvbWUtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMzZweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiAjRkZGO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LXNoYWRvdzogNnB4IDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4vLyBEaXNhYmxlIEZvcm0gY29udHJvbCBmcm9tIEJvb3RzdHJhcFxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG5cdHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcblx0Ym90dG9tOiAwcHggIWltcG9ydGFudDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xyXG5cdHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHQuaG9tZS10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pelicula/pelicula.component.ts":
/*!************************************************!*\
  !*** ./src/app/pelicula/pelicula.component.ts ***!
  \************************************************/
/*! exports provided: PeliculaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculaComponent", function() { return PeliculaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_pelicula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/pelicula.service */ "./src/app/shared/pelicula.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PeliculaComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function PeliculaComponent(peliculaService) {
        this.peliculaService = peliculaService;
        this.formControls = this.peliculaService.form.controls;
    }
    PeliculaComponent.prototype.ngOnInit = function () { };
    PeliculaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.peliculaService.form.valid) {
            if (this.peliculaService.form.get('$key').value == null) {
                this.peliculaService.insertpelicula(this.peliculaService.form.value);
            }
            else {
                this.peliculaService.updatepelicula(this.peliculaService.form.value);
            }
            this.showSuccessMessage = true;
            setTimeout(function () { return (_this.showSuccessMessage = false); }, 3000);
            this.submitted = false;
            this.peliculaService.form.reset();
        }
    };
    PeliculaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pelicula',
            template: __webpack_require__(/*! ./pelicula.component.html */ "./src/app/pelicula/pelicula.component.html"),
            styles: [__webpack_require__(/*! ./pelicula.component.scss */ "./src/app/pelicula/pelicula.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_pelicula_service__WEBPACK_IMPORTED_MODULE_1__["peliculaService"]])
    ], PeliculaComponent);
    return PeliculaComponent;
}());



/***/ }),

/***/ "./src/app/shared/pelicula.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pelicula.service.ts ***!
  \********************************************/
/*! exports provided: peliculaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peliculaService", function() { return peliculaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var peliculaService = /** @class */ (function () {
    function peliculaService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            datePicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    peliculaService.prototype.getpelicula = function () {
        this.peliculaList = this.firebase.list('peliculas');
        return this.peliculaList.snapshotChanges();
    };
    peliculaService.prototype.insertpelicula = function (pelicula) {
        this.peliculaList.push({
            Id: pelicula.Id,
            fullName: pelicula.fullName,
            datePicker: pelicula.datePicker,
            estado: pelicula.estado,
        });
    };
    peliculaService.prototype.populateForm = function (pelicula) {
        this.form.patchValue(pelicula);
    };
    peliculaService.prototype.updatepelicula = function (pelicula) {
        this.peliculaList.update(pelicula.$key, {
            Id: pelicula.Id,
            fullName: pelicula.fullName,
            datePicker: pelicula.datePicker,
            estado: pelicula.estado,
        });
    };
    peliculaService.prototype.deletepelicula = function ($key) {
        this.peliculaList.remove($key);
    };
    peliculaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
        // tslint:disable-next-line:class-name
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], peliculaService);
    return peliculaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDL1x_2imWpXdi-u0HWb659_e5QPhtECks",
        authDomain: "fir-crudapp-1a31f.firebaseapp.com",
        databaseURL: "https://fir-crudapp-1a31f.firebaseio.com",
        projectId: "fir-crudapp-1a31f",
        storageBucket: "fir-crudapp-1a31f.appspot.com",
        messagingSenderId: "836840453910"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alan\Desktop\Angular-Movies-CRUD-App\Angular-7-Address-Book-App-With-Firebase-Database\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map