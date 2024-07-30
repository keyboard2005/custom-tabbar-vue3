(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/custom-tab-bar/index.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/custom-tab-bar/index.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_ef8866ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ef8866ca */ "./src/custom-tab-bar/index.vue?vue&type=template&id=ef8866ca");
/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ "./src/custom-tab-bar/index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_ef8866ca_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss */ "./src/custom-tab-bar/index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss");
/* harmony import */ var C_Users_user_Desktop_custom_tabbar_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
/* harmony import */ var C_Users_user_Desktop_custom_tabbar_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Desktop_custom_tabbar_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/C_Users_user_Desktop_custom_tabbar_vue3_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_index_vue_vue_type_template_id_ef8866ca__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/custom-tab-bar/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/custom-tab-bar/index.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/custom-tab-bar/index.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");



/* harmony default export */ __webpack_exports__["a"] = ({
  __name: 'index',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = Object(vuex__WEBPACK_IMPORTED_MODULE_2__[/* useStore */ "b"])();
    var selected = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* computed */ "b"])(function () {
      return store.getters.getSelected;
    });
    var color = '#000000';
    var selectedColor = '#DC143C';
    var list = [{
      pagePath: '/pages/index/index',
      selectedIconPath: '../images/tabbar_home_on.png',
      iconPath: '../images/tabbar_home.png',
      text: '首页'
    }, {
      pagePath: '/pages/cate/index',
      selectedIconPath: '../images/tabbar_cate_on.png',
      iconPath: '../images/tabbar_cate.png',
      text: '分类'
    }, {
      pagePath: '/pages/cart/index',
      selectedIconPath: '../images/tabbar_cart_on.png',
      iconPath: '../images/tabbar_cart.png',
      text: '购物车'
    }, {
      pagePath: '/pages/my/index',
      selectedIconPath: '../images/tabbar_my_on.png',
      iconPath: '../images/tabbar_my.png',
      text: '个人中心'
    }];

    function switchTab(index, url) {
      setSelected(index);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.switchTab({
        url: url
      });
    }

    function setSelected(index) {
      store.dispatch('setSelected', index);
    }

    var __returned__ = {
      store: store,
      selected: selected,
      color: color,
      selectedColor: selectedColor,
      list: list,
      switchTab: switchTab,
      setSelected: setSelected,

      get Taro() {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a;
      },

      computed: vue__WEBPACK_IMPORTED_MODULE_1__[/* computed */ "b"],

      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_2__[/* useStore */ "b"];
      }

    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/custom-tab-bar/index.vue?vue&type=template&id=ef8866ca":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/custom-tab-bar/index.vue?vue&type=template&id=ef8866ca ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  class: "tab-bar"
};

var _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "e"])("cover-view", {
  class: "tab-bar-border"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = ["onTap"];
var _hoisted_4 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "j"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "d"])("cover-view", _hoisted_1, [_hoisted_2, (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "j"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "d"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "a"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "m"])($setup.list, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "e"])("cover-view", {
      key: index,
      class: "tab-bar-item",
      onTap: function onTap($event) {
        return $setup.switchTab(index, item.pagePath);
      }
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "e"])("cover-image", {
      src: $setup.selected === index ? item.selectedIconPath : item.iconPath
    }, null, 8
    /* PROPS */
    , _hoisted_4), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "e"])("cover-view", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* normalizeStyle */ "h"])({
        color: $setup.selected === index ? $setup.selectedColor : $setup.color
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* toDisplayString */ "n"])(item.text), 5
    /* TEXT, STYLE */
    )], 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_3);
  }), 64
  /* STABLE_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/custom-tab-bar/index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/custom-tab-bar/index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/custom-tab-bar/index.vue":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.vue ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/custom-tab-bar/index.vue");


var inst = Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createComponentConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'custom-tab-bar/index'))



/***/ }),

/***/ "./src/custom-tab-bar/index.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/custom-tab-bar/index.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/custom-tab-bar/index.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/custom-tab-bar/index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss":
/*!***********************************************************************************!*\
  !*** ./src/custom-tab-bar/index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_ef8866ca_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!../../node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/custom-tab-bar/index.vue?vue&type=style&index=0&id=ef8866ca&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_ef8866ca_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_ef8866ca_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/custom-tab-bar/index.vue?vue&type=template&id=ef8866ca":
/*!********************************************************************!*\
  !*** ./src/custom-tab-bar/index.vue?vue&type=template&id=ef8866ca ***!
  \********************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_ef8866ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=ef8866ca */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/custom-tab-bar/index.vue?vue&type=template&id=ef8866ca");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_ef8866ca__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/custom-tab-bar/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map