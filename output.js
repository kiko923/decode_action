//Tue Jul 15 2025 12:14:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function s() {
  var timestamp = t(),
    signData = shareUrl + type + timestamp + "yongzhi",
    sign = md5(signData);
  return sign;
}
function t() {
  var timestamp = new Date().getTime();
  return Math.floor(timestamp / 1000);
}