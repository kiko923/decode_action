//Mon Oct 06 2025 06:41:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function md5(string) {
  function _0x53c(x, k) {
    var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];
    a = _0x_0x281(a, b, c, d, k[0], 7, -680876936);
    d = _0x_0x281(d, a, b, c, k[1], 12, -389564586);
    c = _0x_0x281(c, d, a, b, k[2], 17, 606105819);
    b = _0x_0x281(b, c, d, a, k[3], 22, -1044525330);
    a = _0x_0x281(a, b, c, d, k[4], 7, -176418897);
    d = _0x_0x281(d, a, b, c, k[5], 12, 1200080426);
    c = _0x_0x281(c, d, a, b, k[6], 17, -1473231341);
    b = _0x_0x281(b, c, d, a, k[7], 22, -45705983);
    a = _0x_0x281(a, b, c, d, k[8], 7, 1770035416);
    d = _0x_0x281(d, a, b, c, k[9], 12, -1958414417);
    c = _0x_0x281(c, d, a, b, k[10], 17, -42063);
    b = _0x_0x281(b, c, d, a, k[11], 22, -1990404162);
    a = _0x_0x281(a, b, c, d, k[12], 7, 1804603682);
    d = _0x_0x281(d, a, b, c, k[13], 12, -40341101);
    c = _0x_0x281(c, d, a, b, k[14], 17, -1502002290);
    b = _0x_0x281(b, c, d, a, k[15], 22, 1236535329);
    a = _0xf2217g(a, b, c, d, k[1], 5, -165796510);
    d = _0xf2217g(d, a, b, c, k[6], 9, -1069501632);
    c = _0xf2217g(c, d, a, b, k[11], 14, 643717713);
    b = _0xf2217g(b, c, d, a, k[0], 20, -373897302);
    a = _0xf2217g(a, b, c, d, k[5], 5, -701558691);
    d = _0xf2217g(d, a, b, c, k[10], 9, 38016083);
    c = _0xf2217g(c, d, a, b, k[15], 14, -660478335);
    b = _0xf2217g(b, c, d, a, k[4], 20, -405537848);
    a = _0xf2217g(a, b, c, d, k[9], 5, 568446438);
    d = _0xf2217g(d, a, b, c, k[14], 9, -1019803690);
    c = _0xf2217g(c, d, a, b, k[3], 14, -187363961);
    b = _0xf2217g(b, c, d, a, k[8], 20, 1163531501);
    a = _0xf2217g(a, b, c, d, k[13], 5, -1444681467);
    d = _0xf2217g(d, a, b, c, k[2], 9, -51403784);
    c = _0xf2217g(c, d, a, b, k[7], 14, 1735328473);
    b = _0xf2217g(b, c, d, a, k[12], 20, -1926607734);
    a = _0xgf8d(a, b, c, d, k[5], 4, -378558);
    d = _0xgf8d(d, a, b, c, k[8], 11, -2022574463);
    c = _0xgf8d(c, d, a, b, k[11], 16, 1839030562);
    b = _0xgf8d(b, c, d, a, k[14], 23, -35309556);
    a = _0xgf8d(a, b, c, d, k[1], 4, -1530992060);
    d = _0xgf8d(d, a, b, c, k[4], 11, 1272893353);
    c = _0xgf8d(c, d, a, b, k[7], 16, -155497632);
    b = _0xgf8d(b, c, d, a, k[10], 23, -1094730640);
    a = _0xgf8d(a, b, c, d, k[13], 4, 681279174);
    d = _0xgf8d(d, a, b, c, k[0], 11, -358537222);
    c = _0xgf8d(c, d, a, b, k[3], 16, -722521979);
    b = _0xgf8d(b, c, d, a, k[6], 23, 76029189);
    a = _0xgf8d(a, b, c, d, k[9], 4, -640364487);
    d = _0xgf8d(d, a, b, c, k[12], 11, -421815835);
    c = _0xgf8d(c, d, a, b, k[15], 16, 530742520);
    b = _0xgf8d(b, c, d, a, k[2], 23, -995338651);
    a = _0xb512c(a, b, c, d, k[0], 6, -198630844);
    d = _0xb512c(d, a, b, c, k[7], 10, 1126891415);
    c = _0xb512c(c, d, a, b, k[14], 15, -1416354905);
    b = _0xb512c(b, c, d, a, k[5], 21, -57434055);
    a = _0xb512c(a, b, c, d, k[12], 6, 1700485571);
    d = _0xb512c(d, a, b, c, k[3], 10, -1894986606);
    c = _0xb512c(c, d, a, b, k[10], 15, -1051523);
    b = _0xb512c(b, c, d, a, k[1], 21, -2054922799);
    a = _0xb512c(a, b, c, d, k[8], 6, 1873313359);
    d = _0xb512c(d, a, b, c, k[15], 10, -30611744);
    c = _0xb512c(c, d, a, b, k[6], 15, -1560198380);
    b = _0xb512c(b, c, d, a, k[13], 21, 1309151649);
    a = _0xb512c(a, b, c, d, k[4], 6, -145523070);
    d = _0xb512c(d, a, b, c, k[11], 10, -1120210379);
    c = _0xb512c(c, d, a, b, k[2], 15, 718787259);
    b = _0xb512c(b, c, d, a, k[9], 21, -343485551);
    x[0] = _0xd96be(a, x[0]);
    x[1] = _0xd96be(b, x[1]);
    x[2] = _0xd96be(c, x[2]);
    x[3] = _0xd96be(d, x[3]);
  }
  function _0xg33baf(q, a, b, x, s, t) {
    a = _0xd96be(_0xd96be(a, q), _0xd96be(x, t));
    return _0xd96be(a << s | a >>> 32 - s, b);
  }
  function _0x_0x281(a, b, c, d, x, s, t) {
    return _0xg33baf(b & c | ~b & d, a, b, x, s, t);
  }
  function _0xf2217g(a, b, c, d, x, s, t) {
    return _0xg33baf(b & d | c & ~d, a, b, x, s, t);
  }
  function _0xgf8d(a, b, c, d, x, s, t) {
    return _0xg33baf(b ^ c ^ d, a, b, x, s, t);
  }
  function _0xb512c(a, b, c, d, x, s, t) {
    return _0xg33baf(c ^ (b | ~d), a, b, x, s, t);
  }
  function _0x62f2d(s) {
    var n = s['\u006C\u0065\u006E\u0067\u0074\u0068'],
      _0xaf9f9f = [1732584193, -271733879, -1732584194, 271733878],
      i;
    for (i = 64; i <= s['\u006C\u0065\u006E\u0067\u0074\u0068']; i += 64) {
      _0x53c(_0xaf9f9f, _0xg5gd2f(s['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](i - 64, i)));
    }
    s = s['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](i - 64);
    var _0x04a46b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s['\u006C\u0065\u006E\u0067\u0074\u0068']; i++) _0x04a46b[i >> 2] |= s['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](i) << (i % 4 << 3);
    _0x04a46b[i >> 2] |= 128 << (i % 4 << 3);
    if (i > 55) {
      _0x53c(_0xaf9f9f, _0x04a46b);
      for (i = 0; i < 16; i++) _0x04a46b[i] = 0;
    }
    _0x04a46b[14] = n * 8;
    _0x53c(_0xaf9f9f, _0x04a46b);
    return _0xaf9f9f;
  }
  function _0xg5gd2f(s) {
    var _0x78d8e = [],
      i;
    for (i = 0; i < 64; i += 4) {
      _0x78d8e[i >> 2] = s['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](i) + (s['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](i + 1) << 8) + (s['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](i + 2) << 16) + (s['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](i + 3) << 24);
    }
    return _0x78d8e;
  }
  var _0xd7cf0e = 10;
  var _0x34a = "\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0061\u0062\u0063\u0064\u0065\u0066"['\u0073\u0070\u006C\u0069\u0074']('');
  _0xd7cf0e = "bggjhh".split("").reverse().join("");
  function _0x1532g(n) {
    var s = '',
      j = 0;
    for (; j < 4; j++) s += _0x34a[n >> j * 8 + 4 & 15] + _0x34a[n >> j * 8 & 15];
    return s;
  }
  function _0xe6b2ff(x) {
    for (var i = 0; i < x['\u006C\u0065\u006E\u0067\u0074\u0068']; i++) x[i] = _0x1532g(x[i]);
    return x['\u006A\u006F\u0069\u006E']('');
  }
  function _0xd96be(a, b) {
    return a + b & 0xFFFFFFFF;
  }
  return _0xe6b2ff(_0x62f2d(string));
}
function generateSign(params) {
  var _0x1f46d = {};
  for (var key in params) {
    if (key !== "ngis".split("").reverse().join("") && params['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079'](key)) {
      _0x1f46d[key] = params[key];
    }
  }
  var _0x1d944f = 16;
  var _0xf02e = Object['\u006B\u0065\u0079\u0073'](_0x1f46d)['\u0073\u006F\u0072\u0074']();
  _0x1d944f = 10;
  var _0xf9c6g = '';
  for (var i = 0; i < _0xf02e['\u006C\u0065\u006E\u0067\u0074\u0068']; i++) {
    var key = _0xf02e[i];
    _0xf9c6g += key + "\u003D" + _0x1f46d[key] + "\u0026";
  }
  _0xf9c6g += "\u006B\u0065\u0079\u003D\u005A\u0065\u0070\u0070\u0047\u006F\u005F\u0053\u0065\u0063\u0072\u0065\u0074\u004B\u0065\u0079\u005F\u0032\u0030\u0032\u0034";
  return md5(_0xf9c6g)['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']();
}