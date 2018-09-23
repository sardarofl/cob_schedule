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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n<!-- (activate)=\"routeChanged()\" -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cobtansleyfrnt_cobtansleyfrnt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cobtansleyfrnt/cobtansleyfrnt.component */ "./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.ts");
/* harmony import */ var _components_cobtansleyback_cobtansleyback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cobtansleyback/cobtansleyback.component */ "./src/app/components/cobtansleyback/cobtansleyback.component.ts");
/* harmony import */ var _components_mainback_mainback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mainback/mainback.component */ "./src/app/components/mainback/mainback.component.ts");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/getdata.service */ "./src/app/services/getdata.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "./node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _components_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/guards/auth.guard */ "./src/app/components/guards/auth.guard.ts");
/* harmony import */ var _shorten_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shorten.pipe */ "./src/app/shorten.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    //, canActivate:[AuthGuard]
    { path: 'bemain', component: _components_mainback_mainback_component__WEBPACK_IMPORTED_MODULE_6__["MainbackComponent"],
        children: [
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
            { path: 'cobtansleyback', component: _components_cobtansleyback_cobtansleyback_component__WEBPACK_IMPORTED_MODULE_5__["CobtansleybackComponent"], canActivate: [_components_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: '**', redirectTo: 'login' }
        ]
    },
    { path: 'cobtansleyfront', component: _components_cobtansleyfrnt_cobtansleyfrnt_component__WEBPACK_IMPORTED_MODULE_4__["CobtansleyfrntComponent"] },
    { path: '**', redirectTo: 'bemain' }
];
// const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
//   // Change this to your upload POST address:
//    url: '/additems/csvupload',
//    maxFilesize: 5,
//    autoReset:1,
//    maxFiles:1,
//    acceptedFiles: '.csv'
//  };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_cobtansleyfrnt_cobtansleyfrnt_component__WEBPACK_IMPORTED_MODULE_4__["CobtansleyfrntComponent"],
                _components_cobtansleyback_cobtansleyback_component__WEBPACK_IMPORTED_MODULE_5__["CobtansleybackComponent"],
                _components_mainback_mainback_component__WEBPACK_IMPORTED_MODULE_6__["MainbackComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _shorten_pipe__WEBPACK_IMPORTED_MODULE_17__["ShortenPipe"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ],
            providers: [_services_getdata_service__WEBPACK_IMPORTED_MODULE_7__["GetdataService"], _services_adddata_service__WEBPACK_IMPORTED_MODULE_13__["AdddataService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"], _components_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cobtansleyback/cobtansleyback.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/cobtansleyback/cobtansleyback.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.custom-file-upload {\r\n    border: 2px dashed #1A237E;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    color:black;\r\n    line-height: 50px;\r\n    font-size: 2.0em;\r\n}\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n.full-width {\r\n  width: 100vw;\r\n  position: relative;\r\n  left: 50%;\r\n  right: 50%;\r\n  margin-left: -50vw;\r\n  margin-right: -50vw;\r\n}"

/***/ }),

/***/ "./src/app/components/cobtansleyback/cobtansleyback.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/cobtansleyback/cobtansleyback.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br><br><br><br>\n<div class=\"center\">\n    <form id = \"formNewCSV\" name =\"formNewCSV\" #CSVData = \"ngForm\" >\n        <label class=\"custom-file-upload\"> Click to add COB Tansley CSV file\n        <input id=\"image\" name=\"image\" type=\"file\" (change)=\"addCSV();CSVData.reset() \" placeholder=\"Upload a file...\" multiple ngModel/>\n      </label>\n      <br><br>\n      </form>\n    </div>\n\n\n    \n"

/***/ }),

/***/ "./src/app/components/cobtansleyback/cobtansleyback.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cobtansleyback/cobtansleyback.component.ts ***!
  \***********************************************************************/
/*! exports provided: CobtansleybackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobtansleybackComponent", function() { return CobtansleybackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/adddata.service */ "./src/app/services/adddata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CobtansleybackComponent = /** @class */ (function () {
    function CobtansleybackComponent(elem, adddataService) {
        this.elem = elem;
        this.adddataService = adddataService;
    }
    CobtansleybackComponent.prototype.ngOnInit = function () {
    };
    CobtansleybackComponent.prototype.onUploadSuccess = function (event) {
        console.log(event);
    };
    CobtansleybackComponent.prototype.onUploadError = function (event) {
        console.log(event);
    };
    CobtansleybackComponent.prototype.addCSV = function () {
        var files = this.elem.nativeElement.querySelector('#image').files;
        var formData = new FormData();
        console.log(files[0]);
        formData.append('bodydummy', "dummy");
        formData.append('image', files[0], files[0].name);
        var json_arr = JSON.stringify(formData);
        console.log(formData);
        this.adddataService.sendCSV(formData).subscribe(function (res) { alert("File uploaded"); });
        // for(let i =0; i < files.length; i++){
        //       formData.append('image',files[i],files[i].name);
        //       console.log("appended "+files[i].name);
        // }
        // var json_arr = JSON.stringify(formData);
        // console.log("JSON: "+json_arr);
        //   this.adddataService.addGallery(formData).subscribe
        //   (res =>{ alert("Images are uploaded to Gallery." );
        // }
        //  );
    };
    CobtansleybackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cobtansleyback',
            template: __webpack_require__(/*! ./cobtansleyback.component.html */ "./src/app/components/cobtansleyback/cobtansleyback.component.html"),
            styles: [__webpack_require__(/*! ./cobtansleyback.component.css */ "./src/app/components/cobtansleyback/cobtansleyback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_adddata_service__WEBPACK_IMPORTED_MODULE_1__["AdddataService"]])
    ], CobtansleybackComponent);
    return CobtansleybackComponent;
}());



/***/ }),

/***/ "./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    position:fixed;\r\n    z-index: 10;\r\n    font-size:2.4em;\r\n    color:white;\r\n    margin-top:130px;\r\n    line-height: 88px;\r\n    text-align: center;\r\n}\r\n\r\n.time_column{\r\n    max-width: 390px;\r\n    min-width: 390px;\r\n    width: 390px;\r\n}\r\n\r\n.facility_column{\r\n    max-width: 248px;\r\n    min-width: 248px;\r\n    width: 248px;\r\n}\r\n\r\n.teamevent_column{\r\n    max-width: 531px;\r\n    min-width: 531px;\r\n    width: 531px;\r\n}\r\n\r\n.room_column{\r\n    max-width: 123px;\r\n    min-width: 123px;\r\n    width: 123px;\r\n}\r\n\r\n.team2_column{\r\n    max-width: 435px;\r\n    min-width: 435px;\r\n    width: 435px;\r\n}\r\n\r\n.room2_column{\r\n    max-width: 160px;\r\n    min-width: 160px;\r\n    width: 160px;\r\n}"

/***/ }),

/***/ "./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/cob appleby2.PNG\" height=\"1080\" width=\"1920\" style=\"position:fixed; z-index: -10;\">\n<table class=\"table_style\">\n  <tr *ngFor=\"let item of this.csvgetdata | slice:0:8;\">\n    <td class=\"time_column center\">{{item.StartTime}} - {{item.EndTime}}</td>\n    <td class=\"facility_column center\">{{item.Facility | shorten:9}}</td>\n    <td class=\"teamevent_column center\">{{item.Subject | shorten:29 }}</td>\n    <td class=\"room_column center\">-</td>\n    <td class=\"team2_column center\">{{item.Service | shorten:23 }}</td>\n    <td class=\"room2_column center\">-</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.ts ***!
  \***********************************************************************/
/*! exports provided: CobtansleyfrntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobtansleyfrntComponent", function() { return CobtansleyfrntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CobtansleyfrntComponent = /** @class */ (function () {
    function CobtansleyfrntComponent(getDataService) {
        var _this = this;
        this.getDataService = getDataService;
        this.csvgetdata = [];
        setInterval(function () {
            _this.refreshData();
        }, 15000);
    }
    CobtansleyfrntComponent.prototype.ngOnInit = function () {
        console.log("data");
        this.event_counter = 0;
        this.refreshData();
    };
    CobtansleyfrntComponent.prototype.refreshData = function () {
        var _this = this;
        this.getDataService.getTansleyCSVData("/csvgets/csvgets").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.csvgetdata = [];
            console.log(data);
            for (var i = _this.event_counter; i < data.length; i++) {
                _this.csvgetdata.push(data[i]);
            }
            _this.event_counter = _this.event_counter + 8;
            if (_this.event_counter >= data.length) {
                _this.event_counter = 0;
            }
        });
    };
    CobtansleyfrntComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cobtansleyfrnt',
            template: __webpack_require__(/*! ./cobtansleyfrnt.component.html */ "./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.html"),
            styles: [__webpack_require__(/*! ./cobtansleyfrnt.component.css */ "./src/app/components/cobtansleyfrnt/cobtansleyfrnt.component.css")]
        }),
        __metadata("design:paramtypes", [_services_getdata_service__WEBPACK_IMPORTED_MODULE_1__["GetdataService"]])
    ], CobtansleyfrntComponent);
    return CobtansleyfrntComponent;
}());



/***/ }),

/***/ "./src/app/components/guards/auth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/components/guards/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/bemenu/login']);
            alert("Please login First");
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullwidth{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n\n<mat-card class=\"mt-20\">\n  <mat-card-title>Login</mat-card-title>\n  <hr>\n  <mat-card-content>\n    <div fxLayout=\"column\">\n      <form>\n          <form (submit)=\"login()\">\n              <div class=\"form-group\">\n                <!-- <label>Email</label> -->\n                <input type=\"text\" placeholder=\"Enter your email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <!-- <label>Password</label> -->\n                <input type=\"password\" placeholder=\"Enter your password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n              </div><br>\n              <input type=\"submit\" class=\"btn indigo fullwidth\" value=\"Login\">\n            </form>\n      </form>\n     \n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        if (authService.loggedIn()) {
            this.router.navigate(['/bemain/cobtansleyback']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var userData = {
            email: this.email,
            password: this.password
        };
        this.authService.login(userData).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('menuToken', JSON.stringify(data));
            if (_this.authService.loggedIn()) {
                console.log('logged in');
                _this.router.navigate(['/bemain/cobtansleyback']);
            }
        }, function (err) {
            alert("wrong email or password");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mainback/mainback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/mainback/mainback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar_spacer {\r\n    flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/components/mainback/mainback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/mainback/mainback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <span>COB Tansley Schedule</span>\r\n        <span class=\"toolbar_spacer\"></span>\r\n        <!-- <button mat-button [routerLink]=\"['/bemenu/login']\" *ngIf=\"!isLoggednIn\">login</button> -->\r\n        <!-- <button mat-button>logout</button>  -->\r\n        <button mat-button (click)=\"onLogout()\" *ngIf=\"authenticationService.loggedIn()\">logout</button>\r\n    </mat-toolbar-row>\r\n\r\n</mat-toolbar>\r\n<br>\r\n<div class=\"container\"><router-outlet ></router-outlet></div>"

/***/ }),

/***/ "./src/app/components/mainback/mainback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mainback/mainback.component.ts ***!
  \***********************************************************/
/*! exports provided: MainbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainbackComponent", function() { return MainbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainbackComponent = /** @class */ (function () {
    function MainbackComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    MainbackComponent.prototype.ngOnInit = function () {
    };
    // onLogout(){
    //   this.authenticationService.logout().subscribe(data =>{
    //     localStorage.removeItem('menuToken');
    //     this.router.navigateByUrl('/bemain/login');
    //   })
    // }
    MainbackComponent.prototype.onLogout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/bemain/login']);
        return false;
    };
    MainbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainback',
            template: __webpack_require__(/*! ./mainback.component.html */ "./src/app/components/mainback/mainback.component.html"),
            styles: [__webpack_require__(/*! ./mainback.component.css */ "./src/app/components/mainback/mainback.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainbackComponent);
    return MainbackComponent;
}());



/***/ }),

/***/ "./src/app/services/adddata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/adddata.service.ts ***!
  \*********************************************/
/*! exports provided: AdddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddataService", function() { return AdddataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdddataService = /** @class */ (function () {
    function AdddataService(http) {
        this.http = http;
    }
    AdddataService.prototype.sendCSV = function (formdata) {
        var _url = "/additems/csvupload";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype.setMenu = function (url, data) {
        //let _url:string = "/api/menus";
        console.log(url, data);
        var headers = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-type': 'application/json'
        });
        return this.http.put(url, data, { headers: headers });
    };
    AdddataService.prototype._errorHandler = function (error) {
        console.error('Error occured: ' + error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'some error on server occured');
    };
    AdddataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AdddataService);
    return AdddataService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/register', user, { headers: headers });
    };
    AuthenticationService.prototype.login = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers });
        //;
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers });
    };
    AuthenticationService.prototype.isAdmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers });
    };
    AuthenticationService.prototype.loggedIn = function () {
        return localStorage.getItem('menuToken') ? true : false;
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/getdata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/getdata.service.ts ***!
  \*********************************************/
/*! exports provided: GetdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdataService", function() { return GetdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetdataService = /** @class */ (function () {
    function GetdataService(http) {
        this.http = http;
    }
    GetdataService.prototype.getTansleyCSVData = function (url) {
        return this.http.get(url);
    };
    GetdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GetdataService);
    return GetdataService;
}());



/***/ }),

/***/ "./src/app/shorten.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/shorten.pipe.ts ***!
  \*********************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenPipe = /** @class */ (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (value, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    };
    ShortenPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'shorten'
        })
    ], ShortenPipe);
    return ShortenPipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\cob_schedules\cobschedules\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map