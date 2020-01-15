(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/order"],{

/***/ 75:
/*!**************************************************************************!*\
  !*** D:/星际云通/APP-XJYT/APP-XJYT/main.js?{"page":"pages%2Forder%2Forder"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _order = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order.vue */ 76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 76:
/*!*******************************************************!*\
  !*** D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=57ab2920& */ 77);
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ 79);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&lang=css& */ 81);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/*!**************************************************************************************!*\
  !*** D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue?vue&type=template&id=57ab2920& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=template&id=57ab2920& */ 78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_57ab2920___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 78:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue?vue&type=template&id=57ab2920& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 79:
/*!********************************************************************************!*\
  !*** D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=script&lang=js& */ 80);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var keyboardPackage = function keyboardPackage() {return __webpack_require__.e(/*! import() | components/keyboard-package/keyboard-package */ "components/keyboard-package/keyboard-package").then(__webpack_require__.bind(null, /*! ../../components/keyboard-package/keyboard-package.vue */ 553));};var passwordInput = function passwordInput() {return __webpack_require__.e(/*! import() | components/password-input/password-input */ "components/password-input/password-input").then(__webpack_require__.bind(null, /*! ../../components/password-input/password-input.vue */ 560));};var _default =










































































































































































{
  data: function data() {
    return {
      tabCurrentIndex: 0,
      data_loading: true,
      navList: [
      {
        state: '[101,102,103,104,105]',
        text: '全部' },

      {
        state: '[101]',
        text: '待付款' },

      {
        state: '[102]',
        text: '待确认' },

      // {
      //   state: '(104)',
      //   text: '待审核'
      // },
      {
        state: '[104,105]',
        text: '历史订单' }],


      orderList: [],
      buy: '所属矿池',
      state: '待付款',
      price: '购买单价',
      numbr: '购买数量',
      pay: '支付金额',
      trading: '交易类型',
      dater: '下单日期',
      shod: true,
      numberList: [],
      length: 6,
      type: 'number',
      passIn: false,
      delShow: false,
      titl: false,
      password: '',
      num: '',
      num1: '',
      num2: '',
      phone: '' };

  },
  components: {
    keyboardPackage: keyboardPackage,
    passwordInput: passwordInput },

  onShow: function onShow() {},
  onLoad: function onLoad() {
    this.orderSource();
  },
  methods: {
    orderSource: function orderSource() {
      var _this = this;
      var state = this.navList[this.tabCurrentIndex].state;
      _this.data_loading = true;
      uni.showLoading({
        title: '加载中...' });

      uni.request({
        url: this.url + 'orderall/',
        method: 'GET',
        header: {
          Authorization: 'JWT' + ' ' + this.global_.token },

        data: {
          orderstatus: state },

        success: function success(res) {
          console.log(res);
          var orderList = (res.data.data || []).map(function (o) {
            switch (o.type) {
              case 9:
                o.type_text = '矿机买入';
                o.type_text_color = '#FFB931';
                break;
              case 10:
                o.type_text = '矿机卖出';
                o.type_text_color = '#FF3131';
                break;
              case 11:
                o.type_text = '矿力买入';
                o.type_text_color = '#3D97D6';
                break;
              case 12:
                o.type_text = '矿力转让';
                o.type_text_color = '#7466FF';
                break;
              default:
                o.type_text = '';
                o.type_text_color = '#888';
                break;}

            switch (o.status) {
              case 101:
                o.state_text = '待付款';
                break;
              case 102:
                o.state_text = '等待卖家收款';
                break;
              case 103:
                o.state_text = '待确认';
                break;
              case 104:
                o.state_text = '已完成';
                break;
              case 105:
                o.state_text = '已取消';
                break;
              default:
                o.state_text = '-';
                break;}

            return o;
          });
          console.log(orderList);
          _this.orderList = orderList.reverse();
          uni.hideLoading();
          _this.data_loading = false;
        },
        fail: function fail() {
          uni.hideLoading();
          _this.data_loading = false;
        } });

    },
    /**
        * 跳转详情页
        * @param order
        */
    handleToDetail: function handleToDetail(order) {
      if (order.status == 101) {
        uni.request({
          url: this.url + 'salemessage/',
          method: 'GET',
          header: {
            Authorization: 'JWT' + ' ' + this.global_.token },

          data: {
            order_num: order.ordernum },

          success: function success(res) {
            var ord = JSON.stringify(res.data.data);
            console.log(ord);
            uni.navigateTo({
              url: "../../mill/staypay/staypay?mvvp=" + ord });

          } });

      }
      if (order.status == 102) {
        uni.request({
          url: this.url + 'salemessage/',
          method: 'GET',
          header: {
            Authorization: 'JWT' + ' ' + this.global_.token },

          data: {
            order_num: order.ordernum },

          success: function success(res) {
            var order = JSON.stringify(res.data.data);
            uni.navigateTo({
              url: '../../mill/salepay/salepay?aser=' + order });

          } });

      }
      if (order.type_text == '矿机卖出' && order.status == 104) {
        uni.request({
          url: this.url + 'salemessage/',
          method: 'GET',
          header: {
            Authorization: 'JWT' + ' ' + this.global_.token },

          data: {
            order_num: order.ordernum },

          success: function success(res) {
            var ksa = JSON.stringify(res.data.data);
            console.log(ksa);
            uni.navigateTo({
              url: '../../mill/salecompleted/salecompleted?cshug=' + ksa });

          } });

      }
      if (order.type_text == '矿机买入' && order.status == 104) {
        uni.request({
          url: this.url + 'salemessage/',
          method: 'GET',
          header: {
            Authorization: 'JWT' + ' ' + this.global_.token },

          data: {
            order_num: order.ordernum },

          success: function success(res) {
            var blone = JSON.stringify(res.data.data);
            uni.navigateTo({
              url: '../../mill/completed/completed?deattr=' + blone });

          } });

      }
    },
    /**
        * 订单支付
        * @param orde
        */
    onBackPress: function onBackPress(option) {
      plus.key.hideSoftKeybord();
    },
    clo: function clo() {
      this.passIn = false;
      this.$refs['number'].close();
      this.numberList.length = 0;
    },
    cloo: function cloo() {
      this.delShow = false;
      this.$refs['numbers'].close();
      this.numberList.length = 0;
    },
    onDelete: function onDelete() {
      this.numberList.pop();
    },
    onChange1: function onChange1(e) {
      if (e.show == false) {
        this.delShow = false;
      }
      this.numberList.length = 0;
    },
    onChange: function onChange(e) {
      if (e.show == false) {
        this.passIn = false;
      }
      this.numberList.length = 0;
    },
    onConfirm: function onConfirm() {
      if (this.numberList.length != 6) {
        uni.showToast({
          title: '请输入六位交易密码！',
          duration: 2000,
          icon: 'none' });

      }
    },
    onInput: function onInput(val) {
      var that = this;
      that.numberList.push(val);
      that.password = that.numberList.join().replace(/,/g, '');
      if (that.numberList.length >= that.length) {
        uni.request({
          url: that.url + 'buyaffirm/',
          method: 'POST',
          data: {
            order_num: that.num,
            password: that.password },

          header: {
            Authorization: 'JWT' + ' ' + that.global_.token },

          success: function success(res) {

            if (res.statusCode == 400) {
              that.numberList.pop();
              that.numberList.length = 0;
              that.$refs.wrong.flag = false;
              var n = res.data.data.err_num;
              var s = 5 - n;
              that.$refs.wrong.tip = '剩余' + s + '次机会';
            }
            if (res.statusCode == 401) {
              that.passIn = false;
              that.$refs['number'].close();
              that.shade = true;
              that.stuse = res.statusCode;
            }
            if (res.statusCode == 423) {
              uni.showToast({
                title: '交易密码已锁定,请在今日24:00后进行交易',
                icon: 'none',
                duration: 2000 });

            }
            if (res.statusCode == 201) {
              that.success = true;
            }
            if (res.statusCode == 200) {
              that.passIn = false;
              that.$refs['number'].close();
              uni.showToast({
                title: '付款完成',
                duration: 3000 });


            }
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
          } });


        this.numberList.length = 0;
      }
    },
    //点击删除按钮
    handleOrderPay: function handleOrderPay(order) {
      console.log(order.ordernum);
      this.num = order.ordernum;
      var that = this;
      this.passIn = true;
      this.$refs['number'].open();
      this.onInput(val);
    },
    /**
        * 取消订单
        * @param orde
        */
    handleOrderCancel: function handleOrderCancel(order) {
      var that = this;
      uni.request({
        url: this.url + 'ordercancel/',
        method: 'POST',
        header: {
          Authorization: 'JWT' + ' ' + this.global_.token },

        data: {
          order_num: order.ordernum },

        success: function success(res) {
          if (res.statusCode == 200) {
            uni.showToast({
              title: '取消成功',
              icon: 'none',
              duration: 2000 });

          } else if (res.statusCode == 400) {
            uni.showToast({
              title: '该订单不可删除',
              icon: 'none',
              duration: 2000 });

          }
          that.orderSource();
        } });

    },
    /**
        * 订单确认收款
        * @param ord
        */
    onInput1: function onInput1(val) {
      var that = this;
      console.log(that.num1);
      that.numberList.push(val);
      that.password = that.numberList.join().replace(/,/g, '');
      if (that.numberList.length >= that.length) {
        uni.request({
          url: that.url + 'saleaffirm/',
          method: 'POST',
          data: {
            order_num: that.num1,
            password: that.password },

          header: {
            Authorization: 'JWT' + ' ' + this.global_.token },

          success: function success(res) {
            if (res.statusCode == 400) {
              that.numberList.pop();
              that.numberList.length = 0;
              that.$refs.wrong.flag = false;
              var n = res.data.data.err_num;
              var s = 5 - n;
              that.$refs.wrong.tip = '剩余' + s + '次机会';
            }
            if (res.statusCode == 423) {
              that.delShow = false;
              that.$refs['numbers'].close();
              uni.showToast({
                title: '交易密码已锁定,请在今日24:00后进行交易',
                icon: 'none',
                duration: 2000 });

            }
            if (res.statusCode == 201) {
              that.success = true;
            }
            if (res.statusCode == 200) {
              that.delShow = false;
              that.$refs['numbers'].close();
              uni.showToast({
                title: '收款完成',
                duration: 2000 });

            }
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad(that.val);
          } });

        this.numberList.length = 0;
      }
    },
    handleOrderConfirm: function handleOrderConfirm(order) {
      this.num1 = order.ordernum;
      console.log(this.num1);
      this.delShow = true;
      this.$refs['numbers'].open();
      this.onInput1(val);
    },
    /**
        * 订单申诉
        * @param order
        */

    changeTab: function changeTab(e) {
      this.tabCurrentIndex = e.target.current;
    },
    tabClick: function tabClick(index) {
      var that = this;
      that.tabCurrentIndex = index;
      that.orderList = [];
      this.orderSource();
    },
    getPhoneValue: function getPhoneValue(e) {
      this.phone = e.detail.value;
      console.log(this.phone);
    },
    handleOrderAppeal: function handleOrderAppeal(order) {
      this.num2 = order.ordernum;
      console.log(order.ordernum);
      this.titl = true;
      this.arr = [];
    },
    deer: function deer() {
      var that = this;
      uni.request({
        url: this.url + 'orderappeal/',
        method: 'POST',
        header: {
          Authorization: 'JWT' + ' ' + this.global_.token },

        data: {
          info: that.phone,
          order_num: that.num2 },

        success: function success(res) {
          console.log(that.phone);
          if (that.phone == ' ') {
            uni.showToast({
              title: '填写内容不能为空',
              icon: 'none' });

          } else
          if (res.statusCode == 200) {
            that.titl = false;
            uni.showToast({
              title: '已提交' });

          } else if (res.statusCode == 400) {
            uni.showToast({
              title: '该订单不可申诉',
              icon: 'none' });

            that.titl = false;
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 81:
/*!****************************************************************************************!*\
  !*** D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=style&index=0&lang=css& */ 82);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/星际云通/APP-XJYT/APP-XJYT/pages/order/order.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[75,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/order.js.map