//Sat Dec 07 2024 00:56:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
function s() {
  var timestamp = t(),
    signData = longUrl + domain + timestamp + "yongzhi",
    sign = md5(signData);
  return sign;
}
function t() {
  var timestamp = new Date().getTime();
  return Math.floor(timestamp / 1000);
}