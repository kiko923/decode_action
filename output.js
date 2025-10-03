//Fri Oct 03 2025 12:10:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
layui.use(["form", "laydate", "layer"], function () {
  var _0x4318f9 = layui.form;
  var _0x1a9e63 = layui.laydate;
  var _0x25c72e = layui.layer;
  _0x1a9e63.render({
    elem: "#timeInput",
    type: "time",
    format: "HH:mm",
    value: "11:00"
  });
  function _0x1bb98e() {
    var _0x47c7af = {
      user: document.getElementById("userInput").value,
      password: document.getElementById("passwordInput").value,
      time: document.getElementById("timeInput").value,
      mode: document.getElementById("modeSelect").value,
      minSteps: document.getElementById("minStepsInput").value,
      maxSteps: document.getElementById("maxStepsInput").value
    };
    localStorage.setItem("zeppFormData", JSON.stringify(_0x47c7af));
  }
  function _0x461a6d() {
    {
      var _0x49a65b = localStorage.getItem("zeppFormData");
      if (_0x49a65b) {
        try {
          var _0x540dfc = JSON.parse(_0x49a65b);
          document.getElementById("userInput").value = _0x540dfc.user || "";
          document.getElementById("passwordInput").value = _0x540dfc.password || "";
          document.getElementById("timeInput").value = _0x540dfc.time || "11:00";
          document.getElementById("modeSelect").value = _0x540dfc.mode || "1";
          document.getElementById("minStepsInput").value = _0x540dfc.minSteps || "15000";
          document.getElementById("maxStepsInput").value = _0x540dfc.maxSteps || "25000";
          _0x4318f9.render();
          _0x33207c(_0x540dfc.mode || "1");
        } catch (_0xb09a2d) {
          {
            console.error("加载缓存数据失败:", _0xb09a2d);
          }
        }
      }
    }
  }
  function _0x5758c9() {
    {
      localStorage.removeItem("zeppFormData");
    }
  }
  function _0x33207c(_0x50daaa) {
    var _0x15de92 = document.getElementById("minStepsField");
    var _0x499bdf = document.getElementById("minStepsLabel");
    var _0x197ef3 = document.querySelector(".layui-elem-quote");
    if (_0x50daaa == "1") {
      {
        _0x15de92.style.display = "block";
        _0x499bdf.textContent = "最低步数";
        _0x197ef3.innerHTML = "说明：定时提交为一次性提交，每天在指定运行时间刷步，步数为最高步数-最低步数之间随机步数。";
      }
    } else {
      {
        _0x15de92.style.display = "block";
        _0x499bdf.textContent = "起始步数";
        _0x197ef3.innerHTML = "说明：模拟走路为叠加提交，每天在指定运行时间开始，从起始步数开始每半个小时叠加刷一次，直到步数高于设置的最高步数结束。";
      }
    }
  }
  _0x461a6d();
  setTimeout(function () {
    var _0x4e7534 = document.getElementById("userInput").value.trim();
    if (_0x4e7534) {
      _0xaf4ef9(_0x4e7534);
    } else {
      _0x39c2ff(false);
    }
  }, 100);
  function _0xaf4ef9(_0x11579d) {
    if (!_0x11579d || _0x11579d.trim() === "") {
      _0x39c2ff(false);
      return;
    }
    fetch("api/auto.php?action=check_user&username=" + encodeURIComponent(_0x11579d), {
      credentials: "include"
    }).then(_0x522c76 => _0x522c76.json()).then(_0x14752b => {
      if (_0x14752b.success) {
        _0x39c2ff(_0x14752b.exists);
      }
    }).catch(_0x269b05 => {
      {
        console.error("检查用户失败:", _0x269b05);
      }
    });
  }
  function _0x39c2ff(_0x530ab5) {
    var _0x4b9f03 = document.getElementById("submitButton");
    if (_0x530ab5) {
      _0x4b9f03.textContent = "保存修改";
      _0x4b9f03.style.backgroundColor = "#1e9fff";
      _0x4b9f03.style.borderColor = "#1e9fff";
    } else {
      _0x4b9f03.textContent = "立即添加";
      _0x4b9f03.style.backgroundColor = "#009688";
      _0x4b9f03.style.borderColor = "#009688";
    }
  }
  function _0x21969a(_0x33af82) {
    var _0x2a4e5c = window.innerWidth <= 768;
    _0x25c72e.open({
      content: kamiNotice + "<input type=\"text\" id=\"keyInput\" class=\"layui-input\" placeholder=\"请输入购买的卡密\">",
      btn: ["确认", "取消"],
      area: _0x2a4e5c ? ["95%", "auto"] : ["auto", "auto"],
      yes: function (_0x5c2f3b, _0x87660d) {
        var _0x2d048f = layui.$("#keyInput").val();
        if (!_0x2d048f || _0x2d048f.trim() === "") {
          {
            _0x25c72e.msg("请输入卡密！", {
              icon: 2
            });
            return false;
          }
        }
        _0x33af82.key = _0x2d048f.trim();
        var _0x42b128 = _0x25c72e.msg("正在添加,请稍后....", {
          icon: 16,
          time: 0,
          shade: 0.01
        });
        fetch("api/auto.php?action=activate_kami", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(_0x33af82)
        }).then(_0x3d5e7e => _0x3d5e7e.json()).then(_0x289c1c => {
          {
            _0x25c72e.close(_0x42b128);
            _0x25c72e.close(_0x5c2f3b);
            if (_0x289c1c.success) {
              _0x25c72e.msg(_0x289c1c.message, {
                icon: 1
              });
              _0x1bb98e();
              _0x39c2ff(true);
              var _0x49c500 = _0x33af82.user;
              if (_0x49c500) {
                {
                  fetch("api/check_expiry.php?type=auto&username=" + encodeURIComponent(_0x49c500), {
                    credentials: "include"
                  }).then(_0x4c41a5 => _0x4c41a5.json()).then(_0x5cdfcf => {
                    {
                      if (_0x5cdfcf.success) {
                        {
                          var _0x1e214a = document.getElementById("autoExpiryInfo");
                          var _0x36f933 = document.getElementById("autoExpiryIcon");
                          var _0x592b99 = document.getElementById("autoExpiryTitle");
                          var _0x50e883 = document.getElementById("autoExpiryText");
                          var _0x5ea223 = document.getElementById("autoExpiryProgress");
                          var _0x2993d0 = _0x1e214a.querySelector("div[style*=\"background: linear-gradient\"]");
                          var _0x29b652 = document.getElementById("renewKamiBtn");
                          if (_0x5cdfcf.is_expired) {
                            {
                              _0x2993d0.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                              _0x36f933.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                              _0x592b99.innerHTML = "账户已过期";
                              _0x50e883.innerHTML = "当前账号：" + _0x49c500 + "<br>到期时间：" + _0x5cdfcf.expiry_date + "<br>已过期： " + Math.abs(_0x5cdfcf.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
                              _0x5ea223.style.background = "rgba(255,255,255,0.8)";
                              _0x5ea223.style.width = "100%";
                              _0x29b652.style.display = "inline-block";
                            }
                          } else {
                            {
                              var _0x5318ba = _0x5cdfcf.mode == 1 ? "定时提交" : "模拟走路";
                              var _0x58957d = _0x5cdfcf.status || "未运行";
                              if (_0x5cdfcf.days_remaining <= 3) {
                                _0x2993d0.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                                _0x36f933.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                                _0x592b99.innerHTML = "账户即将到期";
                                _0x50e883.innerHTML = "当前账号：" + _0x49c500 + "<br>到期时间：" + _0x5cdfcf.expiry_date + "<br>剩余天数： " + _0x5cdfcf.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行模式：" + _0x5318ba;
                                _0x5ea223.style.background = "rgba(255,255,255,0.8)";
                                var _0x185634 = Math.max(10, (3 - _0x5cdfcf.days_remaining) / 3 * 100);
                                _0x5ea223.style.width = _0x185634 + "%";
                                _0x29b652.style.display = "inline-block";
                              } else {
                                {
                                  var _0x1c36a3 = "";
                                  var _0x389922 = "";
                                  switch (_0x58957d) {
                                    case "运行正常":
                                      _0x1c36a3 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                                      _0x389922 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                                      break;
                                    case "密码错误":
                                      _0x1c36a3 = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                                      _0x389922 = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                                      break;
                                    case "等待执行":
                                      _0x1c36a3 = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                                      _0x389922 = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                                      break;
                                    default:
                                      _0x1c36a3 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                                      _0x389922 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                                  }
                                  _0x2993d0.style.background = _0x1c36a3;
                                  _0x36f933.innerHTML = _0x389922;
                                  _0x592b99.innerHTML = "自动托管：" + _0x58957d;
                                  _0x50e883.innerHTML = "当前账号：" + _0x49c500 + "<br>到期时间：" + _0x5cdfcf.expiry_date + "<br>剩余天数： " + _0x5cdfcf.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行模式：" + _0x5318ba + "<br>步数范围：" + _0x5cdfcf.min_steps + "~" + _0x5cdfcf.max_steps + "<br>当前步数：" + (_0x5cdfcf.current_steps || 0);
                                  _0x5ea223.style.background = "rgba(255,255,255,0.8)";
                                  var _0x185634 = Math.max(5, Math.min(30, 100 - _0x5cdfcf.days_remaining / 30 * 100));
                                  _0x5ea223.style.width = _0x185634 + "%";
                                  _0x29b652.style.display = "inline-block";
                                }
                              }
                            }
                          }
                          _0x1e214a.style.display = "block";
                        }
                      }
                    }
                  }).catch(_0x2f7f70 => {
                    console.error("更新自动托管状态失败:", _0x2f7f70);
                  });
                }
              }
            } else {
              {
                _0x25c72e.msg(_0x289c1c.message, {
                  icon: 2
                });
              }
            }
          }
        }).catch(_0x56eebd => {
          _0x25c72e.close(_0x42b128);
          _0x25c72e.close(_0x5c2f3b);
          console.error("Error:", _0x56eebd);
          _0x25c72e.msg("请求失败，请重试", {
            icon: 2
          });
        });
      }
    });
  }
  var _0x32e306 = document.getElementById("userInput");
  var _0x3f0230;
  _0x32e306.addEventListener("input", function () {
    {
      clearTimeout(_0x3f0230);
      var _0x1e7104 = this.value.trim();
      _0x3f0230 = setTimeout(function () {
        _0xaf4ef9(_0x1e7104);
      }, 500);
      _0x1bb98e();
    }
  });
  document.getElementById("passwordInput").addEventListener("input", _0x1bb98e);
  document.getElementById("timeInput").addEventListener("change", _0x1bb98e);
  document.getElementById("minStepsInput").addEventListener("input", _0x1bb98e);
  document.getElementById("maxStepsInput").addEventListener("input", _0x1bb98e);
  _0x4318f9.on("select(modeSelect)", function (_0x3b9e3e) {
    _0x33207c(_0x3b9e3e.value);
    _0x1bb98e();
  });
  _0x4318f9.on("submit(submitBtn)", function (_0x21b037) {
    {
      var _0x39e210 = _0x21b037.field;
      if (!_0x39e210.user || !_0x39e210.ps || !_0x39e210.time || !_0x39e210.moshi || !_0x39e210.g) {
        _0x25c72e.msg("请填写完整信息", {
          icon: 2
        });
        return false;
      }
      var _0x2a9111 = parseInt(_0x39e210.g);
      var _0x54ec40 = parseInt(_0x39e210.d) || 0;
      if (_0x2a9111 < 1 || _0x2a9111 > 100000) {
        _0x25c72e.msg("最高步数必须在1-100000之间", {
          icon: 2
        });
        return false;
      }
      if (_0x54ec40 < 1 || _0x54ec40 > 100000) {
        {
          var _0xdfba60 = _0x39e210.moshi == "1" ? "最低步数" : "起始步数";
          _0x25c72e.msg(_0xdfba60 + "必须在1-100000之间", {
            icon: 2
          });
          return false;
        }
      }
      if (_0x54ec40 >= _0x2a9111) {
        var _0xdfba60 = _0x39e210.moshi == "1" ? "最低步数" : "起始步数";
        _0x25c72e.msg(_0xdfba60 + "必须小于最高步数", {
          icon: 2
        });
        return false;
      }
      var _0x177c5b = _0x25c72e.msg("正在执行,请稍后....", {
        icon: 16,
        time: 0,
        shade: 0.01
      });
      fetch("api/auto.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(_0x39e210)
      }).then(_0x2c4002 => _0x2c4002.json()).then(_0x1bf6f2 => {
        _0x25c72e.close(_0x177c5b);
        if (_0x1bf6f2.success) {
          {
            _0x25c72e.msg(_0x1bf6f2.message, {
              icon: 1
            });
            var _0x4d8439 = _0x39e210.user;
            if (_0x4d8439) {
              fetch("api/check_expiry.php?type=auto&username=" + encodeURIComponent(_0x4d8439), {
                credentials: "include"
              }).then(_0x1490a3 => _0x1490a3.json()).then(_0x78a76b => {
                {
                  if (_0x78a76b.success) {
                    {
                      if (_0x78a76b.config) {
                        if (_0x78a76b.config.run_time) {
                          document.getElementById("timeInput").value = _0x78a76b.config.run_time;
                        }
                        if (_0x78a76b.config.mode) {
                          document.getElementById("modeSelect").value = _0x78a76b.config.mode;
                          updateModeDisplayForAuto(_0x78a76b.config.mode);
                        }
                        if (_0x78a76b.config.min_steps) {
                          document.getElementById("minStepsInput").value = _0x78a76b.config.min_steps;
                        }
                        if (_0x78a76b.config.max_steps) {
                          document.getElementById("maxStepsInput").value = _0x78a76b.config.max_steps;
                        }
                        layui.form.render();
                        if (typeof _0x1bb98e === "function") {
                          _0x1bb98e();
                        }
                      }
                      var _0x4a97a0 = document.getElementById("autoExpiryInfo");
                      var _0x1d5765 = document.getElementById("autoExpiryIcon");
                      var _0x537258 = document.getElementById("autoExpiryTitle");
                      var _0x5692a7 = document.getElementById("autoExpiryText");
                      var _0x2a21bf = document.getElementById("autoExpiryProgress");
                      var _0x11bd55 = _0x4a97a0.querySelector("div[style*=\"background: linear-gradient\"]");
                      var _0x13af03 = document.getElementById("renewKamiBtn");
                      if (_0x78a76b.is_expired) {
                        {
                          _0x11bd55.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                          _0x1d5765.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                          _0x537258.innerHTML = "账户已过期";
                          _0x5692a7.innerHTML = "当前账号：" + _0x4d8439 + "<br>到期时间：" + _0x78a76b.expiry_date + "<br>已过期： " + Math.abs(_0x78a76b.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
                          _0x2a21bf.style.background = "rgba(255,255,255,0.8)";
                          _0x2a21bf.style.width = "100%";
                          _0x13af03.style.display = "inline-block";
                        }
                      } else {
                        var _0x133b52 = _0x78a76b.mode == 1 ? "定时提交" : "模拟走路";
                        var _0x47fbea = _0x78a76b.status || "未运行";
                        if (_0x78a76b.days_remaining <= 3) {
                          {
                            _0x11bd55.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                            _0x1d5765.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                            _0x537258.innerHTML = "账户即将到期";
                            _0x5692a7.innerHTML = "当前账号：" + _0x4d8439 + "<br>到期时间：" + _0x78a76b.expiry_date + "<br>剩余天数： " + _0x78a76b.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行模式：" + _0x133b52;
                            _0x2a21bf.style.background = "rgba(255,255,255,0.8)";
                            var _0x3e1e97 = Math.max(10, (3 - _0x78a76b.days_remaining) / 3 * 100);
                            _0x2a21bf.style.width = _0x3e1e97 + "%";
                            _0x13af03.style.display = "inline-block";
                          }
                        } else {
                          var _0x14c944 = "";
                          var _0x391109 = "";
                          switch (_0x47fbea) {
                            case "运行正常":
                              _0x14c944 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                              _0x391109 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            case "密码错误":
                              _0x14c944 = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                              _0x391109 = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            case "等待执行":
                              _0x14c944 = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                              _0x391109 = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            default:
                              _0x14c944 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                              _0x391109 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                          }
                          _0x11bd55.style.background = _0x14c944;
                          _0x1d5765.innerHTML = _0x391109;
                          _0x537258.innerHTML = "自动托管：" + _0x47fbea;
                          _0x5692a7.innerHTML = "当前账号：" + _0x4d8439 + "<br>到期时间：" + _0x78a76b.expiry_date + "<br>剩余天数： " + _0x78a76b.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行模式：" + _0x133b52 + "<br>步数范围：" + _0x78a76b.min_steps + "~" + _0x78a76b.max_steps + "<br>当前步数：" + (_0x78a76b.current_steps || 0);
                          _0x2a21bf.style.background = "rgba(255,255,255,0.8)";
                          var _0x3e1e97 = Math.max(5, Math.min(30, 100 - _0x78a76b.days_remaining / 30 * 100));
                          _0x2a21bf.style.width = _0x3e1e97 + "%";
                          _0x13af03.style.display = "inline-block";
                        }
                      }
                      _0x4a97a0.style.display = "block";
                    }
                  }
                }
              }).catch(_0x5800c6 => {
                {
                  console.error("更新自动托管状态失败:", _0x5800c6);
                }
              });
            }
            if (!_0x1bf6f2.is_update && !_0x1bf6f2.is_kami_renew) {
              document.getElementById("userInput").value = "";
              document.getElementById("passwordInput").value = "";
              document.getElementById("timeInput").value = "11:00";
              document.getElementById("modeSelect").value = "1";
              document.getElementById("minStepsInput").value = "15000";
              document.getElementById("maxStepsInput").value = "25000";
              _0x4318f9.render();
              _0x39c2ff(false);
              _0x5758c9();
              _0x33207c("1");
            } else {
              if (_0x1bf6f2.is_update) {
                {
                  var _0x599f12 = document.getElementById("autoAccountStatusCard");
                  var _0x4c0e9f = document.getElementById("manualAccountStatusCard");
                  _0x599f12.style.display = "block";
                  _0x4c0e9f.style.display = "none";
                }
              }
            }
          }
        } else {
          if (_0x1bf6f2.need_kami) {
            _0x21969a(_0x39e210);
          } else {
            {
              _0x25c72e.msg(_0x1bf6f2.message, {
                icon: 2
              });
            }
          }
        }
      }).catch(_0x1f4e27 => {
        _0x25c72e.close(_0x177c5b);
        console.error("Error:", _0x1f4e27);
        _0x25c72e.msg("请求失败，请重试", {
          icon: 2
        });
      });
      return false;
    }
  });
});
layui.use(["form", "layer", "element"], function () {
  var _0x1dea15 = layui.form;
  var _0x38d3f3 = layui.layer;
  var _0x34747f = layui.element;
  var _0x240126 = false;
  var _0x24d527 = null;
  function _0x34702d(_0x415ebd) {
    var _0x24b264 = document.getElementById("minStepsField");
    var _0x20452c = document.getElementById("minStepsLabel");
    var _0x38fcbf = document.querySelector(".layui-elem-quote");
    if (_0x415ebd == "1") {
      {
        _0x24b264.style.display = "block";
        _0x20452c.textContent = "最低步数";
        _0x38fcbf.innerHTML = "说明：定时提交为一次性提交，每天在指定运行时间刷步，步数为最高步数-最低步数之间随机步数。";
      }
    } else {
      {
        _0x24b264.style.display = "block";
        _0x20452c.textContent = "起始步数";
        _0x38fcbf.innerHTML = "说明：模拟走路为叠加提交，每天在指定运行时间开始，从起始步数开始每半个小时叠加刷一次，直到步数高于设置的最高步数结束。";
      }
    }
  }
  function _0x1ba4b0() {
    var _0xe22fdc = {
      user1: document.getElementById("user1").value,
      ps1: document.getElementById("ps1").value
    };
    localStorage.setItem("zeppManualFormData", JSON.stringify(_0xe22fdc));
  }
  function _0x41f5e9() {
    {
      var _0x1331b5 = localStorage.getItem("zeppManualFormData");
      if (_0x1331b5) {
        {
          try {
            {
              var _0x4f1d08 = JSON.parse(_0x1331b5);
              document.getElementById("user1").value = _0x4f1d08.user1 || "";
              document.getElementById("ps1").value = _0x4f1d08.ps1 || "";
            }
          } catch (_0x25c6a6) {
            console.error("加载手动模式缓存数据失败:", _0x25c6a6);
          }
        }
      }
    }
  }
  _0x41f5e9();
  function _0x1acfa9(_0x48b3a2) {
    var _0x3b892d = document.getElementById("expiryInfo");
    var _0x44fdd3 = document.getElementById("expiryIcon");
    var _0x637ad = document.getElementById("expiryTitle");
    var _0x385ee2 = document.getElementById("expiryText");
    var _0x20453f = document.getElementById("expiryProgress");
    var _0x7a4ffb = _0x3b892d.querySelector("div[style*=\"background: linear-gradient\"]");
    _0x3b892d.style.display = "block";
    if (!_0x48b3a2 || _0x48b3a2.trim() === "") {
      _0x7a4ffb.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
      _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
      _0x637ad.innerHTML = "请输入账号";
      _0x385ee2.innerHTML = "请在下方输入框中输入您的账号<br>以查看账户状态信息";
      _0x20453f.style.background = "rgba(255,255,255,0.3)";
      _0x20453f.style.width = "0%";
      return;
    }
    Promise.all([fetch("api/check_expiry.php?type=auto&username=" + encodeURIComponent(_0x48b3a2), {
      credentials: "include"
    }).then(_0x1368ed => _0x1368ed.json()), fetch("api/check_expiry.php?username=" + encodeURIComponent(_0x48b3a2), {
      credentials: "include"
    }).then(_0x2b531c => _0x2b531c.json())]).then(([_0x25075b, _0x341dba]) => {
      var _0x4906ba = "";
      var _0x41dd9e = 0;
      var _0xa93a0a = false;
      if (_0x25075b.success && _0x25075b.expiry_date && !_0x25075b.is_expired) {
        _0x4906ba = _0x25075b.expiry_date;
        _0x41dd9e = _0x25075b.days_remaining;
        _0xa93a0a = _0x25075b.is_expired;
      } else {
        if (_0x341dba.success && _0x341dba.type === "expiry") {
          {
            _0x4906ba = _0x341dba.formatted_expiry;
            _0x41dd9e = _0x341dba.days_remaining;
            _0xa93a0a = _0x341dba.is_expired;
          }
        }
      }
      if (_0x341dba.success) {
        {
          _0x24d527 = _0x341dba;
          if (_0x25075b.success && _0x25075b.expiry_date && !_0x25075b.is_expired) {
            {
              if (_0xa93a0a) {
                _0x7a4ffb.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                _0x637ad.innerHTML = "账户已过期";
                _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>到期时间：" + _0x4906ba + "<br>已过期： " + Math.abs(_0x41dd9e) + "<span style=\"margin-left:2px;\">天</span>";
                _0x20453f.style.background = "rgba(255,255,255,0.8)";
                _0x20453f.style.width = "100%";
              } else {
                {
                  if (_0x41dd9e <= 3) {
                    _0x7a4ffb.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                    _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                    _0x637ad.innerHTML = "账户即将到期";
                    _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>到期时间：" + _0x4906ba + "<br>剩余天数： " + _0x41dd9e + "<span style=\"margin-left:2px;\">天</span>";
                    _0x20453f.style.background = "rgba(255,255,255,0.8)";
                    var _0x31c1e2 = Math.max(10, (3 - _0x41dd9e) / 3 * 100);
                    _0x20453f.style.width = _0x31c1e2 + "%";
                  } else {
                    _0x7a4ffb.style.background = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                    _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                    _0x637ad.innerHTML = "账户状态正常";
                    _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>到期时间：" + _0x4906ba + "<br>剩余天数： " + _0x41dd9e + "<span style=\"margin-left:2px;\">天</span>";
                    _0x20453f.style.background = "rgba(255,255,255,0.8)";
                    var _0x41f2b9 = Math.max(5, Math.min(30, 100 - _0x41dd9e / 30 * 100));
                    _0x20453f.style.width = _0x41f2b9 + "%";
                  }
                }
              }
            }
          } else {
            if (_0x341dba.type === "expiry") {
              if (_0xa93a0a) {
                {
                  _0x7a4ffb.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                  _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x637ad.innerHTML = "账户已过期";
                  _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>到期时间：" + _0x4906ba + "<br>已过期： " + Math.abs(_0x41dd9e) + "<span style=\"margin-left:2px;\">天</span>";
                  _0x20453f.style.background = "rgba(255,255,255,0.8)";
                  _0x20453f.style.width = "100%";
                }
              } else {
                if (_0x41dd9e <= 3) {
                  _0x7a4ffb.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                  _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x637ad.innerHTML = "账户即将到期";
                  _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>到期时间：" + _0x4906ba + "<br>剩余天数： " + _0x41dd9e + "<span style=\"margin-left:2px;\">天</span>";
                  _0x20453f.style.background = "rgba(255,255,255,0.8)";
                  var _0x5a346f = Math.max(10, (3 - _0x41dd9e) / 3 * 100);
                  _0x20453f.style.width = _0x5a346f + "%";
                } else {
                  {
                    _0x7a4ffb.style.background = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                    _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                    _0x637ad.innerHTML = "账户状态正常";
                    _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>到期时间：" + _0x4906ba + "<br>剩余天数： " + _0x41dd9e + "<span style=\"margin-left:2px;\">天</span>";
                    _0x20453f.style.background = "rgba(255,255,255,0.8)";
                    var _0xdacfcf = Math.max(5, Math.min(30, 100 - _0x41dd9e / 30 * 100));
                    _0x20453f.style.width = _0xdacfcf + "%";
                  }
                }
              }
            } else {
              if (_0x341dba.type === "usage") {
                {
                  var _0x224c80 = _0x341dba.total_count > 0 ? _0x341dba.used_count / _0x341dba.total_count * 100 : 0;
                  var _0x2b89dd = _0x341dba.step_limit ? "<br>步数限制：1~" + _0x341dba.step_limit + "<span style=\"margin-left:2px;\">步</span>" : "";
                  if (_0x341dba.remaining_count <= 0) {
                    _0x7a4ffb.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                    _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                    _0x637ad.innerHTML = "当日次数已用完";
                    _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>今日使用：" + _0x341dba.used_count + "<span style=\"margin-left:2px;\">次</span><br>总次数：" + _0x341dba.total_count + "<span style=\"margin-left:2px;\">次</span>" + _0x2b89dd;
                    _0x20453f.style.background = "rgba(255,255,255,0.8)";
                    _0x20453f.style.width = "100%";
                  } else {
                    if (_0x341dba.remaining_count <= 3) {
                      {
                        _0x7a4ffb.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                        _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                        _0x637ad.innerHTML = "当日次数即将用完";
                        _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>今日使用：" + _0x341dba.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x341dba.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x2b89dd;
                        _0x20453f.style.background = "rgba(255,255,255,0.8)";
                        _0x20453f.style.width = _0x224c80 + "%";
                      }
                    } else {
                      _0x7a4ffb.style.background = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                      _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                      _0x637ad.innerHTML = "使用状态正常";
                      _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>今日使用：" + _0x341dba.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x341dba.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x2b89dd;
                      _0x20453f.style.background = "rgba(255,255,255,0.8)";
                      _0x20453f.style.width = _0x224c80 + "%";
                    }
                  }
                }
              }
            }
          }
          _0x3b892d.style.display = "block";
        }
      } else {
        _0x7a4ffb.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
        _0x44fdd3.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
        _0x637ad.innerHTML = "账号信息";
        _0x385ee2.innerHTML = "当前账号：" + _0x48b3a2 + "<br>未查询到该账号信息<br>提交后将显示账号状态";
        _0x20453f.style.background = "rgba(255,255,255,0.3)";
        _0x20453f.style.width = "0%";
        _0x3b892d.style.display = "block";
      }
    }).catch(_0xb71871 => {
      {
        console.error("检查到期时间失败:", _0xb71871);
        var _0x4c2f8a = document.getElementById("expiryInfo");
        var _0x58babb = document.getElementById("expiryIcon");
        var _0x23903c = document.getElementById("expiryTitle");
        var _0x1412a5 = document.getElementById("expiryText");
        var _0x3d2e13 = document.getElementById("expiryProgress");
        var _0x8d14ee = _0x4c2f8a.querySelector("div[style*=\"background: linear-gradient\"]");
        _0x8d14ee.style.background = "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)";
        _0x58babb.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
        _0x23903c.innerHTML = "网络连接失败";
        _0x1412a5.innerHTML = "当前账号：" + _0x48b3a2 + "<br>无法连接到服务器<br>请检查网络连接后重试";
        _0x3d2e13.style.background = "rgba(255,255,255,0.3)";
        _0x3d2e13.style.width = "0%";
        _0x4c2f8a.style.display = "block";
      }
    });
  }
  function _0x4792b6() {
    {
      var _0x2e1cf5 = document.getElementById("user1").value.trim();
      fetch("api/check_expiry.php?type=auto&username=" + encodeURIComponent(_0x2e1cf5), {
        credentials: "include"
      }).then(_0x176bb9 => _0x176bb9.json()).then(_0x3b0328 => {
        {
          if (_0x3b0328.success && _0x3b0328.expiry_date && !_0x3b0328.is_expired) {
            console.log("自动托管未过期，跳过动态更新");
            return;
          }
          if (_0x24d527) {
            var _0x438d4b = document.getElementById("expiryInfo");
            var _0x18e866 = document.getElementById("expiryIcon");
            var _0x245834 = document.getElementById("expiryTitle");
            var _0xf65950 = document.getElementById("expiryText");
            var _0x1cb61b = document.getElementById("expiryProgress");
            var _0x475a45 = _0x438d4b.querySelector("div[style*=\"background: linear-gradient\"]");
            if (_0x24d527.type === "usage") {
              _0x24d527.remaining_count = Math.max(0, _0x24d527.remaining_count - 1);
              _0x24d527.used_count = _0x24d527.used_count + 1;
              var _0x107711 = _0x24d527.total_count > 0 ? _0x24d527.used_count / _0x24d527.total_count * 100 : 0;
              var _0x40affd = _0x24d527.step_limit ? "<br>步数限制：1-" + _0x24d527.step_limit + "<span style=\"margin-left:2px;\">步</span>" : "";
              if (_0x24d527.remaining_count <= 0) {
                _0x475a45.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                _0x18e866.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                _0x245834.innerHTML = "当日次数已用完";
                _0xf65950.innerHTML = "当前账号：" + _0x2e1cf5 + "<br>今日使用：" + _0x24d527.used_count + "<span style=\"margin-left:2px;\">次</span><br>总次数：" + _0x24d527.total_count + "<span style=\"margin-left:2px;\">次</span>" + _0x40affd;
                _0x1cb61b.style.background = "rgba(255,255,255,0.8)";
                _0x1cb61b.style.width = "100%";
              } else {
                if (_0x24d527.remaining_count <= 3) {
                  _0x475a45.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                  _0x18e866.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x245834.innerHTML = "当日次数即将用完";
                  _0xf65950.innerHTML = "当前账号：" + _0x2e1cf5 + "<br>今日使用：" + _0x24d527.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x24d527.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x40affd;
                  _0x1cb61b.style.background = "rgba(255,255,255,0.8)";
                  _0x1cb61b.style.width = _0x107711 + "%";
                } else {
                  _0x475a45.style.background = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                  _0x18e866.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x245834.innerHTML = "使用状态正常";
                  _0xf65950.innerHTML = "当前账号：" + _0x2e1cf5 + "<br>今日使用：" + _0x24d527.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x24d527.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x40affd;
                  _0x1cb61b.style.background = "rgba(255,255,255,0.8)";
                  _0x1cb61b.style.width = _0x107711 + "%";
                }
              }
            } else {
              if (_0x24d527.type === "expiry") {
                {
                  _0x1acfa9(_0x2e1cf5);
                }
              }
            }
          } else {
            _0x1acfa9(_0x2e1cf5);
          }
        }
      }).catch(_0x3c50cf => {
        {
          console.error("检查自动托管状态失败:", _0x3c50cf);
          if (_0x24d527) {
            {
              var _0x3f8999 = document.getElementById("expiryInfo");
              var _0x5085c5 = document.getElementById("expiryIcon");
              var _0xd1cc60 = document.getElementById("expiryTitle");
              var _0x445bb8 = document.getElementById("expiryText");
              var _0x3e2ed6 = document.getElementById("expiryProgress");
              var _0x23c586 = _0x3f8999.querySelector("div[style*=\"background: linear-gradient\"]");
              if (_0x24d527.type === "usage") {
                _0x24d527.remaining_count = Math.max(0, _0x24d527.remaining_count - 1);
                _0x24d527.used_count = _0x24d527.used_count + 1;
                var _0x18ecaa = _0x24d527.total_count > 0 ? _0x24d527.used_count / _0x24d527.total_count * 100 : 0;
                var _0x2823b0 = _0x24d527.step_limit ? "<br>步数限制：1-" + _0x24d527.step_limit + "<span style=\"margin-left:2px;\">步</span>" : "";
                if (_0x24d527.remaining_count <= 0) {
                  _0x23c586.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                  _0x5085c5.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                  _0xd1cc60.innerHTML = "当日次数已用完";
                  _0x445bb8.innerHTML = "当前账号：" + _0x2e1cf5 + "<br>今日使用：" + _0x24d527.used_count + "<span style=\"margin-left:2px;\">次</span><br>总次数：" + _0x24d527.total_count + "<span style=\"margin-left:2px;\">次</span>" + _0x2823b0;
                  _0x3e2ed6.style.background = "rgba(255,255,255,0.8)";
                  _0x3e2ed6.style.width = "100%";
                } else {
                  if (_0x24d527.remaining_count <= 3) {
                    {
                      _0x23c586.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                      _0x5085c5.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                      _0xd1cc60.innerHTML = "当日次数即将用完";
                      _0x445bb8.innerHTML = "当前账号：" + _0x2e1cf5 + "<br>今日使用：" + _0x24d527.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x24d527.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x2823b0;
                      _0x3e2ed6.style.background = "rgba(255,255,255,0.8)";
                      _0x3e2ed6.style.width = _0x18ecaa + "%";
                    }
                  } else {
                    _0x23c586.style.background = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                    _0x5085c5.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                    _0xd1cc60.innerHTML = "使用状态正常";
                    _0x445bb8.innerHTML = "当前账号：" + _0x2e1cf5 + "<br>今日使用：" + _0x24d527.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x24d527.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x2823b0;
                    _0x3e2ed6.style.background = "rgba(255,255,255,0.8)";
                    _0x3e2ed6.style.width = _0x18ecaa + "%";
                  }
                }
              } else {
                if (_0x24d527.type === "expiry") {
                  _0x1acfa9(_0x2e1cf5);
                }
              }
            }
          } else {
            _0x1acfa9(_0x2e1cf5);
          }
        }
      });
    }
  }
  function _0x476f5b(_0x229890) {
    {
      var _0x333948 = document.getElementById("autoExpiryInfo");
      var _0x252ff2 = document.getElementById("autoExpiryIcon");
      var _0x43fde3 = document.getElementById("autoExpiryTitle");
      var _0xbc258a = document.getElementById("autoExpiryText");
      var _0x52a8e0 = document.getElementById("autoExpiryProgress");
      var _0x50cc98 = _0x333948.querySelector("div[style*=\"background: linear-gradient\"]");
      var _0x1681ef = document.getElementById("renewKamiBtn");
      _0x333948.style.display = "block";
      if (!_0x229890 || _0x229890.trim() === "") {
        _0x50cc98.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
        _0x252ff2.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
        _0x43fde3.innerHTML = "请输入账号";
        _0xbc258a.innerHTML = "请在下方输入框中输入您的账号<br>以查看自动托管状态信息";
        _0x52a8e0.style.background = "rgba(255,255,255,0.3)";
        _0x52a8e0.style.width = "0%";
        _0x1681ef.style.display = "none";
        return;
      }
      fetch("api/check_expiry.php?type=auto&username=" + encodeURIComponent(_0x229890), {
        credentials: "include"
      }).then(_0x151bd8 => _0x151bd8.json()).then(_0x397ca8 => {
        if (_0x397ca8.success) {
          {
            if (_0x397ca8.config) {
              {
                if (_0x397ca8.config.run_time) {
                  document.getElementById("timeInput").value = _0x397ca8.config.run_time;
                }
                if (_0x397ca8.config.mode) {
                  {
                    document.getElementById("modeSelect").value = _0x397ca8.config.mode;
                    _0x34702d(_0x397ca8.config.mode);
                  }
                }
                if (_0x397ca8.config.min_steps) {
                  {
                    document.getElementById("minStepsInput").value = _0x397ca8.config.min_steps;
                  }
                }
                if (_0x397ca8.config.max_steps) {
                  document.getElementById("maxStepsInput").value = _0x397ca8.config.max_steps;
                }
                layui.form.render();
                if (typeof saveFormData === "function") {
                  {
                    saveFormData();
                  }
                }
              }
            }
            if (_0x397ca8.is_expired) {
              {
                _0x50cc98.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                _0x252ff2.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                _0x43fde3.innerHTML = "账户已过期";
                _0xbc258a.innerHTML = "当前账号：" + _0x229890 + "<br>到期时间：" + _0x397ca8.expiry_date + "<br>已过期： " + Math.abs(_0x397ca8.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
                _0x52a8e0.style.background = "rgba(255,255,255,0.8)";
                _0x52a8e0.style.width = "100%";
                _0x1681ef.style.display = "inline-block";
              }
            } else {
              {
                var _0x524f6a = _0x397ca8.mode == 1 ? "定时提交" : "模拟走路";
                var _0x2e3de9 = _0x397ca8.status || "未运行";
                if (_0x397ca8.days_remaining <= 3) {
                  _0x50cc98.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                  _0x252ff2.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x43fde3.innerHTML = "账户即将到期";
                  _0xbc258a.innerHTML = "当前账号：" + _0x229890 + "<br>到期时间：" + _0x397ca8.expiry_date + "<br>剩余天数： " + _0x397ca8.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行模式：" + _0x524f6a;
                  _0x52a8e0.style.background = "rgba(255,255,255,0.8)";
                  var _0xc2268f = Math.max(10, (3 - _0x397ca8.days_remaining) / 3 * 100);
                  _0x52a8e0.style.width = _0xc2268f + "%";
                  _0x1681ef.style.display = "inline-block";
                } else {
                  var _0x80ab29 = "";
                  var _0x136c9b = "";
                  switch (_0x2e3de9) {
                    case "运行正常":
                      _0x80ab29 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                      _0x136c9b = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    case "密码错误":
                      _0x80ab29 = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                      _0x136c9b = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    case "等待执行":
                      _0x80ab29 = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                      _0x136c9b = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    default:
                      _0x80ab29 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                      _0x136c9b = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                  }
                  _0x50cc98.style.background = _0x80ab29;
                  _0x252ff2.innerHTML = _0x136c9b;
                  _0x43fde3.innerHTML = "自动托管：" + _0x2e3de9;
                  _0xbc258a.innerHTML = "当前账号：" + _0x229890 + "<br>到期时间：" + _0x397ca8.expiry_date + "<br>剩余天数： " + _0x397ca8.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行模式：" + _0x524f6a + "<br>步数范围：" + _0x397ca8.min_steps + "~" + _0x397ca8.max_steps + "<br>当前步数：" + (_0x397ca8.current_steps || 0);
                  _0x52a8e0.style.background = "rgba(255,255,255,0.8)";
                  var _0xc2268f = Math.max(5, Math.min(30, 100 - _0x397ca8.days_remaining / 30 * 100));
                  _0x52a8e0.style.width = _0xc2268f + "%";
                  _0x1681ef.style.display = "inline-block";
                }
              }
            }
            _0x333948.style.display = "block";
          }
        } else {
          _0x50cc98.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
          _0x252ff2.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
          _0x43fde3.innerHTML = "账号信息";
          _0xbc258a.innerHTML = "当前账号：" + _0x229890 + "<br>该账号未添加自动托管<br>点击下方立即添加即可自动托管";
          _0x52a8e0.style.background = "rgba(255,255,255,0.3)";
          _0x52a8e0.style.width = "0%";
          _0x1681ef.style.display = "none";
          _0x333948.style.display = "block";
        }
      }).catch(_0x5cf74e => {
        {
          console.error("检查自动托管状态失败:", _0x5cf74e);
          _0x50cc98.style.background = "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)";
          _0x252ff2.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
          _0x43fde3.innerHTML = "网络连接失败";
          _0xbc258a.innerHTML = "当前账号：" + _0x229890 + "<br>无法连接到服务器<br>请检查网络连接后重试";
          _0x52a8e0.style.background = "rgba(255,255,255,0.3)";
          _0x52a8e0.style.width = "0%";
          _0x1681ef.style.display = "none";
          _0x333948.style.display = "block";
        }
      });
    }
  }
  function _0x240bae(_0x441fcc) {
    {
      var _0x4df967 = window.innerWidth <= 768;
      _0x38d3f3.open({
        content: renewNotice + "<input type=\"text\" id=\"keyInput\" class=\"layui-input\" placeholder=\"请输入购买的卡密\">",
        btn: ["确认", "取消"],
        area: _0x4df967 ? ["95%", "auto"] : ["auto", "auto"],
        yes: function (_0x3c5eb1, _0x5c7553) {
          var _0x1940fe = layui.$("#keyInput").val();
          if (!_0x1940fe || _0x1940fe.trim() === "") {
            _0x38d3f3.msg("请输入卡密！", {
              icon: 2
            });
            return false;
          }
          var _0xe62447 = document.getElementById("renewKamiBtn");
          var _0x59ef78 = _0xe62447.innerHTML;
          _0xe62447.innerHTML = "<i class=\"layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop\" style=\"margin-right: 4px; font-size: 14px;\"></i> 处理中...";
          _0xe62447.style.pointerEvents = "none";
          _0xe62447.style.opacity = "0.7";
          var _0x399773 = _0x38d3f3.msg("正在续费,请稍后....", {
            icon: 16,
            time: 0,
            shade: 0.01
          });
          fetch("api/check_expiry.php?action=renew_kami&username=" + encodeURIComponent(_0x441fcc) + "&kami=" + encodeURIComponent(_0x1940fe.trim()), {
            credentials: "include"
          }).then(_0x242780 => _0x242780.json()).then(_0x588c25 => {
            _0x38d3f3.close(_0x399773);
            _0x38d3f3.close(_0x3c5eb1);
            _0xe62447.innerHTML = _0x59ef78;
            _0xe62447.style.pointerEvents = "auto";
            _0xe62447.style.opacity = "1";
            if (_0x588c25.success) {
              _0x38d3f3.msg(_0x588c25.message, {
                icon: 1,
                time: 3000
              });
              _0x476f5b(_0x441fcc);
            } else {
              {
                _0x38d3f3.msg(_0x588c25.message, {
                  icon: 2
                });
              }
            }
          }).catch(_0x47c3f1 => {
            _0x38d3f3.close(_0x399773);
            _0x38d3f3.close(_0x3c5eb1);
            _0xe62447.innerHTML = _0x59ef78;
            _0xe62447.style.pointerEvents = "auto";
            _0xe62447.style.opacity = "1";
            console.error("Error:", _0x47c3f1);
            _0x38d3f3.msg("请求失败，请重试", {
              icon: 2
            });
          });
        }
      });
    }
  }
  _0x34747f.on("tab(stepTab)", function (_0x233ee1) {
    var _0x10463b = document.getElementById("manualAccountStatusCard");
    var _0x5a7c87 = document.getElementById("autoAccountStatusCard");
    if (_0x233ee1.index == 0) {
      _0x10463b.style.display = "block";
      _0x5a7c87.style.display = "none";
      var _0x2dedc8 = document.getElementById("user1").value.trim();
      _0x1acfa9(_0x2dedc8);
    } else {
      if (_0x233ee1.index == 1) {
        _0x10463b.style.display = "none";
        _0x5a7c87.style.display = "block";
        var _0x2dedc8 = document.getElementById("userInput").value.trim();
        _0x476f5b(_0x2dedc8);
      }
    }
  });
  setTimeout(function () {
    {
      var _0x219ab4 = document.getElementById("manualAccountStatusCard");
      var _0x32e8e4 = document.getElementById("autoAccountStatusCard");
      var _0x4fdb66 = document.querySelector(".layui-tab-title .layui-this");
      if (_0x4fdb66 && _0x4fdb66.textContent.trim() === "手动提交") {
        _0x219ab4.style.display = "block";
        _0x32e8e4.style.display = "none";
        var _0xca8906 = document.getElementById("user1").value.trim();
        _0x1acfa9(_0xca8906);
      } else {
        if (_0x4fdb66 && _0x4fdb66.textContent.trim() === "自动托管") {
          {
            _0x219ab4.style.display = "none";
            _0x32e8e4.style.display = "block";
            var _0xca8906 = document.getElementById("userInput").value.trim();
            _0x476f5b(_0xca8906);
          }
        }
      }
    }
  }, 100);
  document.getElementById("user1").addEventListener("input", function () {
    {
      _0x1ba4b0();
      clearTimeout(window.expiryCheckTimeout);
      window.expiryCheckTimeout = setTimeout(function () {
        _0x1acfa9(this.value.trim());
      }.bind(this), 500);
    }
  });
  document.getElementById("ps1").addEventListener("input", _0x1ba4b0);
  document.getElementById("userInput").addEventListener("input", function () {
    {
      clearTimeout(window.autoExpiryCheckTimeout);
      window.autoExpiryCheckTimeout = setTimeout(function () {
        _0x476f5b(this.value.trim());
      }.bind(this), 500);
    }
  });
  document.getElementById("renewKamiBtn").addEventListener("click", function () {
    {
      var _0x46e68e = document.getElementById("userInput").value.trim();
      if (_0x46e68e) {
        _0x240bae(_0x46e68e);
      } else {
        _0x38d3f3.msg("请先输入账号", {
          icon: 2
        });
      }
    }
  });
  function _0x4cf3df() {
    {
      var _0x3d9c28 = Date.now();
      var _0x1f9ab7 = Math.random().toString(36).substring(2);
      var _0x1f402d = navigator.userAgent.substring(0, 20);
      return btoa(_0x3d9c28 + _0x1f9ab7 + _0x1f402d).substring(0, 16);
    }
  }
  async function _0x58017c(_0x255a8e, _0x3a59b2) {
    const _0xf8704c = Uint8Array.from(atob(_0x3a59b2), _0x32089c => _0x32089c.charCodeAt(0));
    const _0x11c2a1 = await crypto.subtle.importKey("raw", _0xf8704c, {
      name: "AES-GCM"
    }, false, ["encrypt"]);
    const _0x5d9007 = crypto.getRandomValues(new Uint8Array(12));
    const _0x6fd1b5 = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: _0x5d9007,
      tagLength: 128
    }, _0x11c2a1, new TextEncoder().encode(JSON.stringify(_0x255a8e)));
    const _0x215f3c = new Uint8Array(_0x6fd1b5);
    const _0x59035d = new Uint8Array(_0x5d9007.length + _0x215f3c.length);
    _0x59035d.set(_0x5d9007, 0);
    _0x59035d.set(_0x215f3c, _0x5d9007.length);
    return btoa(String.fromCharCode.apply(null, _0x59035d));
  }
  function _0x227378() {
    {
      return new Promise((_0x8aa12f, _0x203a3c) => {
        $.ajax({
          url: "api/bushu.php?action=getkey",
          type: "GET",
          dataType: "json",
          xhrFields: {
            withCredentials: true
          },
          timeout: 10000
        }).done(_0x3a28fa => {
          {
            if (_0x3a28fa.code === 200) {
              {
                _0x8aa12f({
                  key: _0x3a28fa.key,
                  nonce: _0x3a28fa.nonce
                });
              }
            } else {
              _0x203a3c(new Error(_0x3a28fa.msg || "获取密钥失败"));
            }
          }
        }).fail((_0x1aaca8, _0x209232, _0x2c72a6) => {
          {
            let _0x3d0611 = "获取密钥失败";
            if (_0x1aaca8.status === 0) {
              _0x3d0611 = "网络连接失败";
            } else {
              if (_0x1aaca8.status === 403) {
                _0x3d0611 = "访问被拦截";
              } else {
                if (_0x1aaca8.status === 500) {
                  _0x3d0611 = "服务器内部错误";
                } else {
                  if (_0x1aaca8.responseJSON && _0x1aaca8.responseJSON.msg) {
                    _0x3d0611 = _0x1aaca8.responseJSON.msg;
                  }
                }
              }
            }
            _0x203a3c(new Error(_0x3d0611));
          }
        });
      });
    }
  }
  _0x1dea15.on("submit(submitBtn1)", function (_0x2ec9d3) {
    if (_0x240126) {
      {
        _0x38d3f3.msg("请勿重复提交", {
          icon: 2
        });
        return false;
      }
    }
    var _0x48da83 = _0x2ec9d3.field.user1.trim();
    var _0x203759 = _0x2ec9d3.field.ps1.trim();
    var _0x2abb33 = parseInt(_0x2ec9d3.field.bs1);
    if (!_0x48da83 || !_0x203759 || !_0x2abb33) {
      {
        _0x38d3f3.msg("请填写完整信息", {
          icon: 2
        });
        return false;
      }
    }
    if (_0x2abb33 < 1 || _0x2abb33 > 100000 || isNaN(_0x2abb33)) {
      _0x38d3f3.msg("步数必须在1~100000之间", {
        icon: 2
      });
      return false;
    }
    if (!/^[a-zA-Z0-9@._-]+$/.test(_0x48da83)) {
      {
        _0x38d3f3.msg("账号格式不正确", {
          icon: 2
        });
        return false;
      }
    }
    _0x240126 = true;
    var _0x2bb096 = _0x38d3f3.msg("正在提交,请稍后....", {
      icon: 16,
      time: 0,
      shade: 0.01
    });
    (async function () {
      {
        try {
          const _0x4fc716 = await _0x227378();
          var _0x144bfc = Date.now();
          var _0x1ba6c2 = _0x4cf3df();
          var _0x26ae91 = {
            user1: _0x48da83,
            ps1: _0x203759,
            bs1: _0x2abb33,
            nonce: _0x4fc716.nonce,
            timestamp: _0x144bfc,
            rid: _0x1ba6c2,
            userAgent: navigator.userAgent.substring(0, 100),
            screen: screen.width + "x" + screen.height
          };
          const _0x449ccf = await _0x58017c(_0x26ae91, _0x4fc716.key);
          console.log("加密后的数据:", typeof _0x449ccf, _0x449ccf);
          const _0x5600ea = await new Promise((_0x2b1826, _0x164a05) => {
            $.ajax({
              url: "api/bushu.php",
              type: "POST",
              data: "data=" + encodeURIComponent(_0x449ccf),
              dataType: "json",
              xhrFields: {
                withCredentials: true
              },
              timeout: 30000,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).done(_0x2b1826).fail((_0x54d4d3, _0x4d5e8c, _0x538276) => {
              let _0x4f56ea = "请求失败";
              if (_0x54d4d3.status === 0) {
                _0x4f56ea = "网络连接失败";
              } else {
                if (_0x54d4d3.status === 403) {
                  _0x4f56ea = "访问被拦截";
                } else {
                  if (_0x54d4d3.status === 500) {
                    _0x4f56ea = "服务器内部错误";
                  } else {
                    if (_0x54d4d3.responseJSON && _0x54d4d3.responseJSON.msg) {
                      _0x4f56ea = _0x54d4d3.responseJSON.msg;
                    }
                  }
                }
              }
              _0x164a05(new Error(_0x4f56ea));
            });
          });
          _0x38d3f3.msg(_0x5600ea.msg, {
            icon: _0x5600ea.code === 200 ? 1 : 2,
            time: 3000
          });
          if (_0x5600ea.code === 200) {
            _0x4792b6();
          }
        } catch (_0x1a255f) {
          _0x38d3f3.msg(_0x1a255f.message, {
            icon: 2,
            time: 3000
          });
        } finally {
          _0x38d3f3.close(_0x2bb096);
          _0x240126 = false;
        }
      }
    })();
    return false;
  });
});
(function (_0x5e02b5, _0x170e3b, _0x4bb48a) {
  var _0x4b31a8 = function () {
    var _0x132c51 = true;
    return function (_0x2bc6f1, _0xd51764) {
      var _0x3d6186 = _0x132c51 ? function () {
        if (_0xd51764) {
          var _0x63ff86 = _0xd51764.apply(_0x2bc6f1, arguments);
          _0xd51764 = null;
          return _0x63ff86;
        }
      } : function () {};
      _0x132c51 = false;
      return _0x3d6186;
    };
  }();
  var _0x1fc220 = _0x4b31a8(this, function () {
    var _0x2c0be8 = function () {};
    var _0x3cdfed = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x3cdfed.console) {
      {
        _0x3cdfed.console = function (_0x57868d) {
          {
            var _0x4bb48a = {};
            _0x4bb48a.log = _0x57868d;
            _0x4bb48a.warn = _0x57868d;
            _0x4bb48a.debug = _0x57868d;
            _0x4bb48a.info = _0x57868d;
            _0x4bb48a.error = _0x57868d;
            _0x4bb48a.exception = _0x57868d;
            _0x4bb48a.trace = _0x57868d;
            return _0x4bb48a;
          }
        }(_0x2c0be8);
      }
    } else {
      {
        _0x3cdfed.console.log = _0x2c0be8;
        _0x3cdfed.console.warn = _0x2c0be8;
        _0x3cdfed.console.debug = _0x2c0be8;
        _0x3cdfed.console.info = _0x2c0be8;
        _0x3cdfed.console.error = _0x2c0be8;
        _0x3cdfed.console.exception = _0x2c0be8;
        _0x3cdfed.console.trace = _0x2c0be8;
      }
    }
  });
  _0x1fc220();
  _0x4bb48a = "al";
  try {
    _0x4bb48a += "ert";
    _0x170e3b = encode_version;
    if (!(typeof _0x170e3b !== "undefined" && _0x170e3b === "jsjiami.com.v5")) {
      _0x5e02b5[_0x4bb48a]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3a9971) {
    {
      _0x5e02b5[_0x4bb48a]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";