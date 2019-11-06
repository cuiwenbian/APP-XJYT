function timer(that) {
  // var that = this;
  let promise = new Promise((resolve, reject) => {
    let setTimer = setInterval(function () {
     
        that.second= that.second - 1
      
      if (that.second <= 0) {
        
          that.send= true,
          that.alreadySend= false,
          that.second= 60
       
        resolve(setTimer)
      }
    }, 1000)
  })
  promise.then((setTimer) => {
    clearInterval(setTimer)
  })
}
function checkEmail(email) {
  let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (str.test(email)) {
    return true
  } else {
    return false
  }
}

function checkPhoneNum(phoneNumber) {
  let str = /^1\d{10}$/
  if (str.test(phoneNumber)) {
    return true
  } else {
    return false
  }
}



function checkIdcard(idcard) {
  let str = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))((\d{4})|\d{3}[Xx])$)$/;
  if (str.test(idcard)) {
    return true
  } else {
    return false
  }
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const formatMonth = data =>{
  const month = data.getMonth()+1
  return month
}
function renderTime(date) {
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
}

module.exports = {
  checkEmail: checkEmail,
  checkPhoneNum: checkPhoneNum,
  // checkPassword: checkPassword,
  checkIdcard: checkIdcard,
  timer:timer,
  formatTime: formatTime,
  formatMonth:formatMonth,
  renderTime:renderTime
}