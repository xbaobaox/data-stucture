var a = 1;
var b = {
  c: 1,
  a: 2,
  get: function () {
    return function () {
      return a
    }
  }
}
// b.get()() 
console.log(b.get()())

var xhr = new XMLHttpRequest(); //监听对象 
xhr.open('GET', 'https://www.zhihu.com/api/v4/me?include=ad_type%2Cavailable_message_types%2Cdefault_notifications_count%2Cfollow_notifications_count%2Cvote_thank_notifications_count%2Cmessages_count%2Cdraft_count%2Caccount_status%2Cemail%2Cis_bind_phone%2Cfollowing_question_count%2Cis_force_renamed%2Crenamed_fullname'); //请求数据 
xhr.onreadystatechange = function (xhr) { //监听过程
  console.log(xhr)
}
xhr.send('name')  //发送数据  
