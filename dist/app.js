require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.ts":
/*!****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.ts ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);



var App = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createApp */ "c"])({
  onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

});
App.use(_store__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-vue3/dist/runtime */ "./node_modules/@tarojs/plugin-framework-vue3/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.ts */ "./node_modules/babel-loader/lib/index.js!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");









var config = {"pages":["pages/index/index","pages/cate/index","pages/cart/index","pages/my/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"custom":true,"color":"#000000","selectedColor":"#DC143C","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","selectedIconPath":"images/tabbar_home_on.png","iconPath":"images/tabbar_home.png","text":"首页"},{"pagePath":"pages/cate/index","selectedIconPath":"images/tabbar_cate_on.png","iconPath":"images/tabbar_cate.png","text":"分类"},{"pagePath":"pages/cart/index","selectedIconPath":"images/tabbar_cart_on.png","iconPath":"images/tabbar_cart.png","text":"购物车"},{"pagePath":"pages/my/index","selectedIconPath":"images/tabbar_my_on.png","iconPath":"images/tabbar_my.png","text":"个人中心"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_2__[/* createVue3App */ "a"])(_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], vue__WEBPACK_IMPORTED_MODULE_5__[/* h */ "f"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");

var state = {
  selected: 0
};
var mutations = {
  SET_SELECTED: function SET_SELECTED(state, payload) {
    state.selected = payload;
  }
};
var actions = {
  setSelected: function setSelected(context, index) {
    context.commit('SET_SELECTED', index);
  }
};
var getters = {
  getSelected: function getSelected(state) {
    return state.selected;
  }
};
var store = Object(vuex__WEBPACK_IMPORTED_MODULE_0__[/* createStore */ "a"])({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

},[["./src/app.ts","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map