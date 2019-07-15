(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["regExpModule"] = factory();
	else
		root["regExpModule"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "dcfe");
/******/ })
/************************************************************************/
/******/ ({

/***/ "224d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "b71b":
/***/ (function(module, exports) {

let regExpObj = {
  // 校验 URL地址
	checkUrl: function (data) {
		// http://localhost:8080/#/material/materialAdd/?a=123&b=632
		let check = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/\#)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

		return check.test(data)
  },
  // 校验 IP地址
	checkIp: function (data) {
		let check = /\d+\.\d+\.\d+\.\d+/

		return check.test(data)
  },
  // 校检 账号
	checkName: function (data) {
		// 可英文、汉字、长度1-12位、不可输入特殊字符、空格、不能为空
		let check = /^[\u4E00-\u9FA5A-Za-z]{1,12}$/

		return check.test(data)
  },
  // 校检 密码
	checkPwd: function (data) {
		// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
		let check = /^[a-zA-Z]\w{5,17}$/

		return check.test(data)
  },
  // 校检 强密码
	checkPwdStrong: function (data) {
		// 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
		let check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/

		return check.test(data)
  },
  // 校检 手机号
  checkPhone: function (data) {
    let check = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/

    return check.test(data)
  },
  // 校检 固话
  checkTel: function (data) {
    // "XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX"
    let check = /^((\d{3,4}-)|\d{3.4}-)?\d{7,8}$/

    return check.test(data)
  },
  // 校检 身份证
  checkIdCard: function (data) {
    // 第一代身份证，15位。第二代身份证，18位
    let check = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/

    return check.test(data)
  },
  // 校检 邮箱
  checkEmail: function (data) {
    let check = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

    return check.test(data)
  },
  // 校检 只能输入中文
  checkZh: function (data) {
    // ^[u4e00-u9fa5],{0,}$
    let check = /^[\u4e00-\u9fa5]+$/

    return check.test(data)
  },
  // 校检 只能输入英文
  checkEn: function (data, type = 'all') {
    // type: all-大小写到可以(默认)， lower-小写， upper-大写
    let string
    switch (type) {
      case 'all':
        string = '^[a-zA-Z]+$'
        break;
      case 'lower':
        string = '^[a-z]+$'
        break;
      case 'upper':
        string = '^[A-Z]+$'
        break;
      default:
        string = '^[a-zA-Z]+$'
    }
    let check = new RegExp(string)

    return check.test(data)
  },
  // 校检 只能输入数字
  checkNum: function (data) {
    let check = /^\d+$/

    return check.test(data)
  },
  // 校检 英文和数字
  checkEnAndNum: function (data) {
    let check = /^[A-Za-z0-9]+$/

    return check.test(data)
  },
  // 校检 只能输入 num 个数字
  checkNumAmount: function (data, num = 1) {
    let n = num
    let string = `^[0-9]{${n}}$`
    let check = new RegExp(string)

    return check.test(data)
  },
  // 校检 只能输入 startNum 到 endNum 个数字, endNum不指定时表示 只能输入 startNum 个以上的数字
  checkNumArea: function (data, startNum = 1, endNum = '') {
    if (endNum && endNum <= startNum) {
      throw('endNum must be greater than startNum or endNum must be void')
    }
    let startNumber = startNum
    let endNumber = endNum && endNum > 1 ? endNum : ''
    let string = `^[0-9]{${startNumber},${endNumber}}$`
    let check = new RegExp(string)

    return check.test(data)
  },
  // 校检 从 UA（navigator.userAgent） 中判断是否为移动端
  checkIsPhone: function (data) {
    let check = /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i

    return check.test(data)
  },
  // 校检 从 UA 中判断是否为 windows 系统
  checkIsWindows: function (data) {
    let check = /windows/i

    return check.test(data)
  },
  // 校检 从 UA 中判断是否为 Mac OS 系统
  checkIsMac: function (data) {
    let check = /macintosh/i

    return check.test(data)
  },
  // 校检 从 UA 中判断是否为安卓系统
  checkIsAndroid: function (data) {
    let check = /android/i

    return check.test(data)
  },
  // 校检 从 UA 中判断是否为苹果系统
  checkIsIphone: function (data) {
    let check = /iphone/i

    return check.test(data)
  },
  // 校检 微信号，6至20位，以字母开头，字母，数字，减号，下划线
  checkWxName: function (data) {
    let check = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/

    return check.test(data)
  },
  // 校检 新能源车牌号
  checkCarIdNe: function (data) {
    let check = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/

    return check.test(data)
  },
  // 校检 非新能源车牌号
  checkCarId: function (data) {
    let check = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

    return check.test(data)
  },
  // 校检 车牌号(新能源+非新能源)
  checkCarIdAll: function (data) {
    let check = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/

    return check.test(data)
  },
  // 校检 银行卡号（16或19位）
  checkBankCard: function (data) {
    let check = /^([1-9]{1})(\d{15}|\d{18})$/

    return check.test(data)
  }
}

module.exports = regExpObj;

/***/ }),

/***/ "dcfe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("224d");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b71b");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ })

/******/ });
});
//# sourceMappingURL=regExpModule.umd.js.map