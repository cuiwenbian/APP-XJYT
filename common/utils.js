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
  let str = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;;
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
//防抖
function debounce(fn, wait = 500, isImmediate = false) {
	let timerId = null;
	let flag = true;
	if (isImmediate) {
		return function() {
			clearTimeout(timerId);
			if (flag) {
				fn.apply(this, arguments);
				flag = false
			}
			timerId = setTimeout(() => {
				flag = true
			}, wait)
		}
	}
	return function() {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			fn.apply(this, arguments)
		}, wait)
	}
}


module.exports = {
  checkEmail: checkEmail,
  checkPhoneNum: checkPhoneNum,
  // checkPassword: checkPassword,
  checkIdcard: checkIdcard,
  timer:timer,
  formatTime: formatTime,
  formatMonth:formatMonth,
  renderTime:renderTime,
  debounce
}