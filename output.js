//Mon Oct 06 2025 06:46:10 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function sha256(message) {
  function toUTF8Array(str) {
    var utf8 = [];
    for (var iII111 = 0; iII111 < str.length; iII111++) {
      var Ili1ii = str.charCodeAt(iII111);
      if (Ili1ii < 128) utf8.push(Ili1ii);else {
        if (Ili1ii < 2048) utf8.push(192 | Ili1ii >> 6, 128 | Ili1ii & 63);else Ili1ii < 55296 || Ili1ii >= 57344 ? utf8.push(224 | Ili1ii >> 12, 128 | Ili1ii >> 6 & 63, 128 | Ili1ii & 63) : (iII111++, Ili1ii = 65536 + ((Ili1ii & 1023) << 10 | str.charCodeAt(iII111) & 1023), utf8.push(240 | Ili1ii >> 18, 128 | Ili1ii >> 12 & 63, 128 | Ili1ii >> 6 & 63, 128 | Ili1ii & 63));
      }
    }
    return utf8;
  }
  var utf8Message = toUTF8Array(message),
    Ili11i = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    Il1iI1 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
    IIIllI = utf8Message.length * 8;
  utf8Message.push(128);
  while (utf8Message.length % 64 !== 56) {
    utf8Message.push(0);
  }
  for (var Ill1Ii = 0; Ill1Ii < 8; Ill1Ii++) {
    utf8Message.push(IIIllI >>> (7 - Ill1Ii) * 8 & 255);
  }
  for (var Ill1Il = 0; Ill1Il < utf8Message.length; Ill1Il += 64) {
    {
      var iIIII = [];
      for (var Ill1Ii = 0; Ill1Ii < 16; Ill1Ii++) {
        iIIII[Ill1Ii] = utf8Message[Ill1Il + Ill1Ii * 4] << 24 | utf8Message[Ill1Il + Ill1Ii * 4 + 1] << 16 | utf8Message[Ill1Il + Ill1Ii * 4 + 2] << 8 | utf8Message[Ill1Il + Ill1Ii * 4 + 3];
      }
      for (var Ill1Ii = 16; Ill1Ii < 64; Ill1Ii++) {
        {
          var s0 = rightRotate(iIIII[Ill1Ii - 15], 7) ^ rightRotate(iIIII[Ill1Ii - 15], 18) ^ iIIII[Ill1Ii - 15] >>> 3,
            s1 = rightRotate(iIIII[Ill1Ii - 2], 17) ^ rightRotate(iIIII[Ill1Ii - 2], 19) ^ iIIII[Ill1Ii - 2] >>> 10;
          iIIII[Ill1Ii] = iIIII[Ill1Ii - 16] + s0 + iIIII[Ill1Ii - 7] + s1 >>> 0;
        }
      }
      var Il1iIi = Il1iI1[0],
        Ii1Il = Il1iI1[1],
        Iii1ii = Il1iI1[2],
        l1iiI1 = Il1iI1[3],
        Iii1il = Il1iI1[4],
        lIi1li = Il1iI1[5],
        Ii1Ii = Il1iI1[6],
        Il1iIl = Il1iI1[7];
      for (var Ill1Ii = 0; Ill1Ii < 64; Ill1Ii++) {
        {
          var l1IIiI = rightRotate(Iii1il, 6) ^ rightRotate(Iii1il, 11) ^ rightRotate(Iii1il, 25);
          var i11IiI = Iii1il & lIi1li ^ ~Iii1il & Ii1Ii;
          var temp1 = Il1iIl + l1IIiI + i11IiI + Ili11i[Ill1Ii] + iIIII[Ill1Ii] >>> 0;
          var IlilIi = rightRotate(Il1iIi, 2) ^ rightRotate(Il1iIi, 13) ^ rightRotate(Il1iIi, 22);
          var I1lilI = Il1iIi & Ii1Il ^ Il1iIi & Iii1ii ^ Ii1Il & Iii1ii;
          var temp2 = IlilIi + I1lilI >>> 0;
          Il1iIl = Ii1Ii;
          Ii1Ii = lIi1li;
          lIi1li = Iii1il;
          Iii1il = l1iiI1 + temp1 >>> 0;
          l1iiI1 = Iii1ii;
          Iii1ii = Ii1Il;
          Ii1Il = Il1iIi;
          Il1iIi = temp1 + temp2 >>> 0;
        }
      }
      Il1iI1[0] = Il1iI1[0] + Il1iIi >>> 0;
      Il1iI1[1] = Il1iI1[1] + Ii1Il >>> 0;
      Il1iI1[2] = Il1iI1[2] + Iii1ii >>> 0;
      Il1iI1[3] = Il1iI1[3] + l1iiI1 >>> 0;
      Il1iI1[4] = Il1iI1[4] + Iii1il >>> 0;
      Il1iI1[5] = Il1iI1[5] + lIi1li >>> 0;
      Il1iI1[6] = Il1iI1[6] + Ii1Ii >>> 0;
      Il1iI1[7] = Il1iI1[7] + Il1iIl >>> 0;
    }
  }
  function rightRotate(III1iI, iIIlIl) {
    return III1iI >>> iIIlIl | III1iI << 32 - iIIlIl;
  }
  var hash = "";
  for (var Ill1Ii = 0; Ill1Ii < Il1iI1.length; Ill1Ii++) {
    hash += ("00000000" + Il1iI1[Ill1Ii].toString(16)).slice(-8);
  }
  return hash;
}
function IIiill(message, iIIlIi) {
  var iilIli = 64;
  function stringToBytes(str) {
    var bytes = [];
    for (var i1I11I = 0; i1I11I < str.length; i1I11I++) {
      var Ii1lli = str.charCodeAt(i1I11I);
      if (Ii1lli < 128) bytes.push(Ii1lli);else {
        if (Ii1lli < 2048) {
          bytes.push(192 | Ii1lli >> 6, 128 | Ii1lli & 63);
        } else {
          if (Ii1lli < 55296 || Ii1lli >= 57344) bytes.push(224 | Ii1lli >> 12, 128 | Ii1lli >> 6 & 63, 128 | Ii1lli & 63);else {
            i1I11I++;
            Ii1lli = 65536 + ((Ii1lli & 1023) << 10 | str.charCodeAt(i1I11I) & 1023);
            bytes.push(240 | Ii1lli >> 18, 128 | Ii1lli >> 12 & 63, 128 | Ii1lli >> 6 & 63, 128 | Ii1lli & 63);
          }
        }
      }
    }
    return bytes;
  }
  function bytesToString(bytes) {
    var str = "";
    for (var iIiIil = 0; iIiIil < bytes.length; iIiIil++) {
      str += String.fromCharCode(bytes[iIiIil]);
    }
    return str;
  }
  function hexToBytes(iIiIii) {
    var bytes = [];
    for (var lI1i = 0; lI1i < iIiIii.length; lI1i += 2) {
      bytes.push(parseInt(iIiIii.substr(lI1i, 2), 16));
    }
    return bytes;
  }
  var keyBytes = stringToBytes(iIIlIi);
  if (keyBytes.length > iilIli) {
    var keyHash = sha256(iIIlIi);
    keyBytes = hexToBytes(keyHash);
  }
  while (keyBytes.length < iilIli) {
    keyBytes.push(0);
  }
  var IlIi1I = [],
    i111I = [];
  for (var llIiiI = 0; llIiiI < iilIli; llIiiI++) {
    IlIi1I.push(keyBytes[llIiiI] ^ 54);
    i111I.push(keyBytes[llIiiI] ^ 92);
  }
  var innerHash = sha256(bytesToString(IlIi1I) + message),
    outerInput = bytesToString(i111I) + bytesToString(hexToBytes(innerHash));
  return sha256(outerInput);
}
function liIIii(string) {
  function Ii1llI(IIlli1, ilIiii) {
    var l11IlI = IIlli1[0],
      lIIl = IIlli1[1],
      lIl1i = IIlli1[2],
      Iili1l = IIlli1[3];
    l11IlI = lI1l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[0], 7, -680876936);
    Iili1l = lI1l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[1], 12, -389564586);
    lIl1i = lI1l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[2], 17, 606105819);
    lIIl = lI1l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[3], 22, -1044525330);
    l11IlI = lI1l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[4], 7, -176418897);
    Iili1l = lI1l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[5], 12, 1200080426);
    lIl1i = lI1l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[6], 17, -1473231341);
    lIIl = lI1l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[7], 22, -45705983);
    l11IlI = lI1l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[8], 7, 1770035416);
    Iili1l = lI1l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[9], 12, -1958414417);
    lIl1i = lI1l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[10], 17, -42063);
    lIIl = lI1l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[11], 22, -1990404162);
    l11IlI = lI1l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[12], 7, 1804603682);
    Iili1l = lI1l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[13], 12, -40341101);
    lIl1i = lI1l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[14], 17, -1502002290);
    lIIl = lI1l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[15], 22, 1236535329);
    l11IlI = li11Il(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[1], 5, -165796510);
    Iili1l = li11Il(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[6], 9, -1069501632);
    lIl1i = li11Il(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[11], 14, 643717713);
    lIIl = li11Il(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[0], 20, -373897302);
    l11IlI = li11Il(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[5], 5, -701558691);
    Iili1l = li11Il(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[10], 9, 38016083);
    lIl1i = li11Il(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[15], 14, -660478335);
    lIIl = li11Il(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[4], 20, -405537848);
    l11IlI = li11Il(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[9], 5, 568446438);
    Iili1l = li11Il(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[14], 9, -1019803690);
    lIl1i = li11Il(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[3], 14, -187363961);
    lIIl = li11Il(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[8], 20, 1163531501);
    l11IlI = li11Il(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[13], 5, -1444681467);
    Iili1l = li11Il(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[2], 9, -51403784);
    lIl1i = li11Il(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[7], 14, 1735328473);
    lIIl = li11Il(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[12], 20, -1926607734);
    l11IlI = i1I11l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[5], 4, -378558);
    Iili1l = i1I11l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[8], 11, -2022574463);
    lIl1i = i1I11l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[11], 16, 1839030562);
    lIIl = i1I11l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[14], 23, -35309556);
    l11IlI = i1I11l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[1], 4, -1530992060);
    Iili1l = i1I11l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[4], 11, 1272893353);
    lIl1i = i1I11l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[7], 16, -155497632);
    lIIl = i1I11l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[10], 23, -1094730640);
    l11IlI = i1I11l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[13], 4, 681279174);
    Iili1l = i1I11l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[0], 11, -358537222);
    lIl1i = i1I11l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[3], 16, -722521979);
    lIIl = i1I11l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[6], 23, 76029189);
    l11IlI = i1I11l(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[9], 4, -640364487);
    Iili1l = i1I11l(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[12], 11, -421815835);
    lIl1i = i1I11l(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[15], 16, 530742520);
    lIIl = i1I11l(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[2], 23, -995338651);
    l11IlI = IIlIl1(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[0], 6, -198630844);
    Iili1l = IIlIl1(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[7], 10, 1126891415);
    lIl1i = IIlIl1(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[14], 15, -1416354905);
    lIIl = IIlIl1(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[5], 21, -57434055);
    l11IlI = IIlIl1(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[12], 6, 1700485571);
    Iili1l = IIlIl1(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[3], 10, -1894986606);
    lIl1i = IIlIl1(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[10], 15, -1051523);
    lIIl = IIlIl1(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[1], 21, -2054922799);
    l11IlI = IIlIl1(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[8], 6, 1873313359);
    Iili1l = IIlIl1(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[15], 10, -30611744);
    lIl1i = IIlIl1(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[6], 15, -1560198380);
    lIIl = IIlIl1(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[13], 21, 1309151649);
    l11IlI = IIlIl1(l11IlI, lIIl, lIl1i, Iili1l, ilIiii[4], 6, -145523070);
    Iili1l = IIlIl1(Iili1l, l11IlI, lIIl, lIl1i, ilIiii[11], 10, -1120210379);
    lIl1i = IIlIl1(lIl1i, Iili1l, l11IlI, lIIl, ilIiii[2], 15, 718787259);
    lIIl = IIlIl1(lIIl, lIl1i, Iili1l, l11IlI, ilIiii[9], 21, -343485551);
    IIlli1[0] = l11li1(l11IlI, IIlli1[0]);
    IIlli1[1] = l11li1(lIIl, IIlli1[1]);
    IIlli1[2] = l11li1(lIl1i, IIlli1[2]);
    IIlli1[3] = l11li1(Iili1l, IIlli1[3]);
  }
  function i1I11i(liIiil, l11Il1, Iili1i, IIiIli, s, t) {
    l11Il1 = l11li1(l11li1(l11Il1, liIiil), l11li1(IIiIli, t));
    return l11li1(l11Il1 << s | l11Il1 >>> 32 - s, Iili1i);
  }
  function lI1l(lIl1l, iIlIii, iiI111, lIi111, iIlIi1, s, t) {
    return i1I11i(iIlIii & iiI111 | ~iIlIii & lIi111, lIl1l, iIlIii, iIlIi1, s, t);
  }
  function li11Il(iIi, iI1i, liIiii, l11Ill, IIlliI, s, t) {
    return i1I11i(iI1i & l11Ill | liIiii & ~l11Ill, iIi, iI1i, IIlliI, s, t);
  }
  function i1I11l(ilIil1, iI1l, lIl1I1, I111I1, iIl, s, t) {
    return i1I11i(iI1l ^ lIl1I1 ^ I111I1, ilIil1, iI1l, iIl, s, t);
  }
  function IIlIl1(iiili, iIlIiI, Il1III, l11iI, IIiIil, s, t) {
    return i1I11i(Il1III ^ (iIlIiI | ~l11iI), iiili, iIlIiI, IIiIil, s, t);
  }
  function liII1l(s) {
    {
      var lli1ll = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        IIiIii;
      for (IIiIii = 64; IIiIii <= s.length; IIiIii += 64) {
        Ii1llI(state, Ii1ll1(s.substring(IIiIii - 64, IIiIii)));
      }
      s = s.substring(IIiIii - 64);
      var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (IIiIii = 0; IIiIii < s.length; IIiIii++) tail[IIiIii >> 2] |= s.charCodeAt(IIiIii) << (IIiIii % 4 << 3);
      tail[IIiIii >> 2] |= 128 << (IIiIii % 4 << 3);
      if (IIiIii > 55) {
        {
          Ii1llI(state, tail);
          for (IIiIii = 0; IIiIii < 16; IIiIii++) tail[IIiIii] = 0;
        }
      }
      tail[14] = lli1ll * 8;
      Ii1llI(state, tail);
      return state;
    }
  }
  function Ii1ll1(s) {
    var md5blks = [],
      Ii1lil;
    for (Ii1lil = 0; Ii1lil < 64; Ii1lil += 4) {
      md5blks[Ii1lil >> 2] = s.charCodeAt(Ii1lil) + (s.charCodeAt(Ii1lil + 1) << 8) + (s.charCodeAt(Ii1lil + 2) << 16) + (s.charCodeAt(Ii1lil + 3) << 24);
    }
    return md5blks;
  }
  var IIlIlI = "0123456789abcdef".split("");
  function I1III1(ll11) {
    var s = "",
      lliI1 = 0;
    for (; lliI1 < 4; lliI1++) s += IIlIlI[ll11 >> lliI1 * 8 + 4 & 15] + IIlIlI[ll11 >> lliI1 * 8 & 15];
    return s;
  }
  function iIll1(iiI11l) {
    for (var iiI11i = 0; iiI11i < iiI11l.length; iiI11i++) iiI11l[iiI11i] = I1III1(iiI11l[iiI11i]);
    return iiI11l.join("");
  }
  function l11li1(Il1II1, iiilI) {
    return Il1II1 + iiilI & 4294967295;
  }
  return iIll1(liII1l(string));
}
function generateSign(params) {
  var secretKey = "ZeppGo_SecretKey_2024",
    signParams = {};
  for (var IIiIl1 in params) {
    IIiIl1 !== "sign" && params.hasOwnProperty(IIiIl1) && (signParams[IIiIl1] = params[IIiIl1]);
  }
  var keys = Object.keys(signParams).sort(),
    signStr = "";
  for (var ilII11 = 0; ilII11 < keys.length; ilII11++) {
    var IIiIl1 = keys[ilII11];
    signParams[IIiIl1] !== "" && signParams[IIiIl1] !== null && (signStr !== "" && (signStr += "&"), signStr += IIiIl1 + "=" + signParams[IIiIl1]);
  }
  return IIiill(signStr, secretKey).toUpperCase();
}