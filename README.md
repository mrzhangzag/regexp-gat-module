
使用方法：import rgm from 'regexp-gat-module'
#### 校验URL地址
    rgm.checkUrl('http://localhost:8080/#/test/index/?a=123&b=632') // true
#### 校验 IP地址
    rgm.checkIp('192.168.1.1') // true
#### 校验 账号（可英文、汉字、长度1-12位、不可输入特殊字符、空格、不能为空）
    rgm.checkName('啦啦a') // true
#### 校验 密码（以字母开头，长度在6~18之间，只能包含字母、数字和下划线）
    rgm.checkPwd('A123457') // true
#### 校验 强密码（必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间）
    rgm.checkPwdStrong('Aa1234579') // true
#### 校检 手机号
    rgm.checkPhone('15811111111') // true
#### 校检 固话（"XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX"）
    rgm.checkTel('077-1234567') // true
#### 校检 身份证（第一代身份证，15位。第二代身份证，18位）
    rgm.checkIdCard(xxx)
#### 校检 邮箱
    rgm.checkEmail('zag@zag.com') // true
#### 校检 只能输入中文
    rgm.checkZh('中文') // true
#### 校检 只能输入英文
    1.大小写都可以（默认），第二个参数可不用传 
    rgm.checkEn('aA', 'all') // true
    2.只能是小写英文
    rgm.checkEn('aa', 'lower') // true
    2.只能是大写英文
    rgm.checkEn('AA', 'upper') // true
#### 校检 只能输入数字
    rgm.checkNum('111') // true
#### 校检 英文和数字
    rgm.checkEnAndNum('aZ9') // true
#### 校检 只能输入 num 个数字（第二个参数是数字个数，默认是 1，不传就是指能输入一个数字）
    rgm.checkNumAmount('123', 3) // true
#### 校检 只能输入 startNum 到 endNum 个数字, endNum不指定时表示 表示只能输入 startNum 个以上的数字（第二，第三个参数都为可选参数）
    rgm.checkNumArea('12', 2) // true
    rgm.checkNumArea('1', 2) // false , 第二个参数指定需要2个以上的数字，但是是传了一个数字 "1"
    rgm.checkNumArea('1234', 2, 4) // true ， 指定了需要 2-4 个数字
    rgm.checkNumArea('12345', 2, 4) // false ， 超过了指定的需要 2-4 个数字范围
#### 校检 从 UA（navigator.userAgent） 中判断是否为移动端
    let ua = navigator.userAgent
    rgm.checkIsPhone(ua)
#### 校检 从 UA（navigator.userAgent） 中判断是否为 windows 系统
    let ua = navigator.userAgent
    rgm.checkIsWindows(ua)
#### 校检 从 UA（navigator.userAgent） 中判断是否为 Mac OS 系统
    let ua = navigator.userAgent
    rgm.checkIsMac(ua)
#### 校检 从 UA（navigator.userAgent） 中判断是否为安卓系统
    let ua = navigator.userAgent
    rgm.checkIsAndroid(ua)
#### 校检 从 UA（navigator.userAgent） 中判断是否为苹果系统
    let ua = navigator.userAgent
    rgm.checkIsIphone(ua)
#### 校检 微信号，6至20位，以字母开头，字母，数字，减号，下划线
    rgm.checkWxName('xxx')
#### 校检 新能源车牌号
    rgm.checkCarIdNe('xxx')
#### 校检 非新能源车牌号
    rgm.checkCarId('xxx')
#### 校检 车牌号(新能源+非新能源)
    rgm.checkCarIdAll('xxx')
#### 校检 银行卡号（16或19位）
    rgm.checkBankCard('xxx')