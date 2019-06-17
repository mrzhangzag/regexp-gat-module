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
  }
}

module.exports = regExpObj;