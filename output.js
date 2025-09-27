//Sat Sep 27 2025 13:52:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
layui.use(["form", "layer", "jquery"], function () {
  var _0x4d18fe = layui.form;
  var _0x5aa06e = layui.layer;
  var _0x222b41 = layui.jquery;
  _0x4d18fe.on("submit(submitBtn1)", function (_0x1a6ec5) {
    var _0x1a4318 = _0x1a6ec5.field.user1;
    var _0x15cf1d = _0x1a6ec5.field.ps1;
    var _0x1eacdb = _0x1a6ec5.field.bs1;
    if (!_0x1a4318 || !_0x15cf1d || !_0x1eacdb) {
      _0x5aa06e.msg("请确保各项不能为空", {
        shadeClose: true,
        offset: "auto",
        end: function () {}
      });
      return false;
    }
    var _0x29b565 = _0x5aa06e.msg("正在提交,请稍后....", {
      icon: 16,
      shade: 0.01,
      time: 0
    });
    _0x222b41.get("api/user/check_user.php", {
      user: _0x1a4318
    }, function (_0x16f4bd) {
      {
        var _0x1823fb = JSON.parse(_0x16f4bd);
        var _0x28ea18 = _0x1823fb.code;
        if (_0x28ea18 === 201) {
          _0x5aa06e.confirm(_0x1823fb.msg + "</br>已授权账号为【<span style=\"color: red; font-weight: bold;\">" + _0x1823fb.closestUser + "</span>】", {
            title: "账号有误",
            icon: 3,
            btn: ["继续提交", "快捷修改"],
            shadeClose: true
          }, function () {
            var _0xfa32e9 = _0x5aa06e.msg("正在提交,请稍后....", {
              icon: 16,
              shade: 0.01,
              time: 0
            });
            _0x2bdceb(_0x1a4318, _0x15cf1d, _0x1eacdb, _0xfa32e9);
          }, function () {
            {
              _0x1a4318 = _0x1823fb.closestUser;
              _0x222b41("#user1").val(_0x1a4318);
              window.localStorage.setItem("user1", _0x1a4318);
              var _0x2770e3 = _0x5aa06e.msg("正在提交,请稍后....", {
                icon: 16,
                shade: 0.01,
                time: 0
              });
              _0x2bdceb(_0x1a4318, _0x15cf1d, _0x1eacdb, _0x2770e3);
            }
          });
        } else {
          _0x2bdceb(_0x1a4318, _0x15cf1d, _0x1eacdb, _0x29b565);
        }
      }
    });
    return false;
  });
  function _0x2bdceb(_0x4fc4d4, _0x3f7a59, _0x10318d, _0x5a8fdb) {
    var _0x2a9e5f = "JhyuINycdbpJVm9SL32AvJiwX";
    var _0x510daf = Math.floor(new Date().getTime() / 1000);
    var _0x1ad385 = CryptoJS.HmacSHA256(_0x4fc4d4 + _0x3f7a59 + _0x10318d + _0x510daf, _0x2a9e5f).toString(CryptoJS.enc.Hex);
    _0x222b41.get("api/user/bushu.php", {
      user: _0x4fc4d4,
      ps: _0x3f7a59,
      bs: _0x10318d,
      sign: _0x1ad385 + _0x510daf
    }, function (_0x5c71bc) {
      {
        _0x5aa06e.close(_0x5a8fdb);
        var _0x25c5f6 = JSON.parse(_0x5c71bc);
        var _0x45575b = _0x25c5f6.msg;
        var _0xf6ef85 = _0x25c5f6.code;
        var _0x4d4368 = _0xf6ef85 === 200 ? 1 : 2;
        _0x5aa06e.alert(_0x45575b, {
          icon: _0x4d4368,
          btn: ["赞助与授权", "取消"],
          shadeClose: true,
          yes: function (_0x274a80) {
            _0x5aa06e.close(_0x274a80);
            setTimeout(function () {
              {
                window.location.href = "https://zhuan3.72ke.vip/?cid=1&tid=1";
              }
            }, 100);
          },
          btn2: function (_0x1cde0f) {
            {
              _0x5aa06e.close(_0x1cde0f);
            }
          }
        });
      }
    });
  }
  _0x222b41("#user1").val(window.localStorage.getItem("user1"));
  _0x222b41("#user1").on("input propertychange", function () {
    window.localStorage.setItem("user1", _0x222b41("#user1").val());
  });
  _0x222b41("#ps1").val(window.localStorage.getItem("ps1"));
  _0x222b41("#ps1").on("input propertychange", function () {
    window.localStorage.setItem("ps1", _0x222b41("#ps1").val());
  });
});
(function (_0x35942a, _0x2190da, _0x1001b0) {
  var _0x25a357 = function () {
    var _0x1ef0ad = true;
    return function (_0x3a05a5, _0x18cca0) {
      var _0x56e6cf = _0x1ef0ad ? function () {
        if (_0x18cca0) {
          var _0x26779a = _0x18cca0.apply(_0x3a05a5, arguments);
          _0x18cca0 = null;
          return _0x26779a;
        }
      } : function () {};
      _0x1ef0ad = false;
      return _0x56e6cf;
    };
  }();
  var _0x42d5be = _0x25a357(this, function () {
    var _0x4e8492 = function () {};
    var _0x5d9674 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x5d9674.console) {
      _0x5d9674.console = function (_0x2ec28e) {
        var _0x1001b0 = {};
        _0x1001b0.log = _0x2ec28e;
        _0x1001b0.warn = _0x2ec28e;
        _0x1001b0.debug = _0x2ec28e;
        _0x1001b0.info = _0x2ec28e;
        _0x1001b0.error = _0x2ec28e;
        _0x1001b0.exception = _0x2ec28e;
        _0x1001b0.trace = _0x2ec28e;
        return _0x1001b0;
      }(_0x4e8492);
    } else {
      {
        _0x5d9674.console.log = _0x4e8492;
        _0x5d9674.console.warn = _0x4e8492;
        _0x5d9674.console.debug = _0x4e8492;
        _0x5d9674.console.info = _0x4e8492;
        _0x5d9674.console.error = _0x4e8492;
        _0x5d9674.console.exception = _0x4e8492;
        _0x5d9674.console.trace = _0x4e8492;
      }
    }
  });
  _0x42d5be();
  _0x1001b0 = "al";
  try {
    _0x1001b0 += "ert";
    _0x2190da = encode_version;
    if (!(typeof _0x2190da !== "undefined" && _0x2190da === "jsjiami.com.v5")) {
      {
        _0x35942a[_0x1001b0]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x1fcc52) {
    _0x35942a[_0x1001b0]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";