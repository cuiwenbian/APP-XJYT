
<script>
	function checkPassword(password) {
	  let str = /^\d{6}$/
	  if (str.test(password)) {
	    return true
	  } else {
	    return false
	  }
	}
	const token='';
	const phone='';
	export default
	  {
		  checkPassword,
	    token,//验证用户身份
		phone,//用户手机号
	  }
</script>

