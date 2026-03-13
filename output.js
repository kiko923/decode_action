//Fri Mar 13 2026 12:41:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
layui.use(["form", "laydate", "layer"], function () {
  var _0x468eee = layui.form;
  var _0x12c444 = layui.laydate;
  var _0x40ac9d = layui.layer;
  _0x12c444.render({
    "elem": "#timeInput",
    "type": "time",
    "format": "HH:mm",
    "value": "11:00"
  });
  function _0x40bbbf() {
    {
      var _0x84b43a = {
        "user": document.getElementById("userInput").value,
        "password": document.getElementById("passwordInput").value,
        "time": document.getElementById("timeInput").value,
        "mode": document.getElementById("modeSelect").value,
        "minSteps": document.getElementById("minStepsInput").value,
        "maxSteps": document.getElementById("maxStepsInput").value
      };
      localStorage.setItem("zeppFormData", JSON.stringify(_0x84b43a));
    }
  }
  function _0xc0e9f9() {
    {
      var _0x1d3460 = localStorage.getItem("zeppFormData");
      if (_0x1d3460) {
        {
          try {
            {
              var _0x6a5993 = JSON.parse(_0x1d3460);
              document.getElementById("userInput").value = _0x6a5993.user || "";
              document.getElementById("passwordInput").value = _0x6a5993.password || "";
              document.getElementById("timeInput").value = _0x6a5993.time || "11:00";
              document.getElementById("modeSelect").value = _0x6a5993.mode || "1";
              document.getElementById("minStepsInput").value = _0x6a5993.minSteps || "15000";
              document.getElementById("maxStepsInput").value = _0x6a5993.maxSteps || "25000";
              _0x468eee.render();
              _0x3ae88f(_0x6a5993.mode || "1");
            }
          } catch (_0x1e9de1) {
            console.error("加载缓存数据失败:", _0x1e9de1);
          }
        }
      }
    }
  }
  function _0x419bb0() {
    {
      localStorage.removeItem("zeppFormData");
    }
  }
  function _0x3ae88f(_0x165e8b) {
    {
      var _0x59edcc = document.getElementById("minStepsField");
      var _0x54b154 = document.getElementById("minStepsLabel");
      var _0x91c29a = document.querySelector(".layui-elem-quote");
      if (_0x165e8b == "1") {
        {
          _0x59edcc.style.display = "block";
          _0x54b154.textContent = "最低步数";
          _0x91c29a.innerHTML = "说明：定时提交为一次性提交，每天在指定运行时间刷步，步数为最高步数-最低步数之间随机步数。";
        }
      } else {
        _0x59edcc.style.display = "block";
        _0x54b154.textContent = "起始步数";
        _0x91c29a.innerHTML = "说明：模拟走路为叠加提交，每天在指定运行时间开始，从起始步数开始每半个小时叠加刷一次，直到步数高于设置的最高步数结束。";
      }
    }
  }
  _0xc0e9f9();
  setTimeout(function () {
    var _0x531330 = document.getElementById("userInput").value.trim();
    if (_0x531330) {
      {
        _0x312aa5(_0x531330);
      }
    } else {
      {
        _0x4579b5(false);
      }
    }
  }, 100);
  function _0x312aa5(_0x4a89ab) {
    {
      if (!_0x4a89ab || _0x4a89ab.trim() === "") {
        _0x4579b5(false);
        return;
      }
      fetch("api/auto.php?action=check_user&username=" + encodeURIComponent(_0x4a89ab), {
        "credentials": "include"
      }).then(_0x1cbb5e => _0x1cbb5e.json()).then(_0x29827e => {
        if (_0x29827e.success) {
          _0x4579b5(_0x29827e.exists);
        }
      }).catch(_0x2ce633 => {
        console.error("检查用户失败:", _0x2ce633);
      });
    }
  }
  function _0x4579b5(_0x487817) {
    {
      var _0xdeff1 = document.getElementById("submitButton");
      var _0x51c3c5 = document.getElementById("passwordInput");
      if (_0x487817) {
        _0xdeff1.textContent = "保存修改";
        _0xdeff1.style.backgroundColor = "#1e9fff";
        _0xdeff1.style.borderColor = "#1e9fff";
        if (_0x51c3c5) {
          {
            _0x51c3c5.placeholder = "留空则不修改密码";
          }
        }
      } else {
        {
          _0xdeff1.textContent = "立即添加";
          _0xdeff1.style.backgroundColor = "#009688";
          _0xdeff1.style.borderColor = "#009688";
          if (_0x51c3c5) {
            _0x51c3c5.placeholder = "输入Zepp密码";
          }
        }
      }
    }
  }
  function _0x446753(_0x1040f5) {
    {
      var _0x458621 = window.innerWidth <= 768;
      _0x40ac9d.open({
        "content": window.kamiNotice + "<input type=\"text\" id=\"keyInput\" class=\"layui-input\" placeholder=\"请输入购买的卡密\">",
        "btn": ["确认", "取消"],
        "area": _0x458621 ? ["95%", "auto"] : ["auto", "auto"],
        "yes": function (_0x17cbe7, _0x54e106) {
          {
            var _0x450c1f = layui.$("#keyInput").val();
            if (!_0x450c1f || _0x450c1f.trim() === "") {
              {
                _0x40ac9d.msg("请输入卡密！", {
                  "icon": 2
                });
                return false;
              }
            }
            _0x1040f5.key = _0x450c1f.trim();
            var _0x2be894 = _0x40ac9d.msg("正在添加,请稍后....", {
              "icon": 16,
              "time": 0,
              "shade": 0.01
            });
            fetch("api/auto.php?action=activate_kami", {
              "method": "POST",
              "headers": {
                "Content-Type": "application/json"
              },
              "credentials": "include",
              "body": JSON.stringify(_0x1040f5)
            }).then(_0x49efe1 => _0x49efe1.json()).then(_0x4ac98e => {
              _0x40ac9d.close(_0x2be894);
              _0x40ac9d.close(_0x17cbe7);
              if (_0x4ac98e.success) {
                {
                  _0x40ac9d.msg(_0x4ac98e.message, {
                    "icon": 1
                  });
                  _0x40bbbf();
                  _0x4579b5(true);
                  var _0x19f473 = _0x1040f5.user;
                  if (_0x19f473) {
                    fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x19f473), {
                      "credentials": "include"
                    }).then(_0x5e5932 => _0x5e5932.json()).then(_0x4ac98e => {
                      if (_0x4ac98e.success) {
                        if (typeof setToggleButtonStatus === "function") {
                          setToggleButtonStatus(_0x4ac98e.stats);
                        }
                        var _0x335aa3 = document.getElementById("autoExpiryInfo");
                        var _0x16492f = document.getElementById("autoExpiryIcon");
                        var _0x410632 = document.getElementById("autoExpiryTitle");
                        var _0x5a75bb = document.getElementById("autoExpiryText");
                        var _0x172dc2 = document.getElementById("autoExpiryProgress");
                        var _0x529f59 = _0x335aa3.querySelector("div[style*=\"background: linear-gradient\"]");
                        if (_0x4ac98e.is_expired) {
                          _0x529f59.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                          _0x16492f.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                          _0x410632.innerHTML = "账户已过期";
                          _0x5a75bb.innerHTML = "当前账号：" + _0x19f473 + "<br>到期时间：" + _0x4ac98e.expiry_date + "<br>已过期： " + Math.abs(_0x4ac98e.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
                          _0x172dc2.style.background = "rgba(255,255,255,0.8)";
                          _0x172dc2.style.width = "100%";
                        } else {
                          var _0x56c0e9 = _0x4ac98e.mode == 1 ? "定时提交" : "模拟走路";
                          var _0x28af83 = _0x4ac98e.stats === 5 ? "关闭托管" : _0x4ac98e.status || "等待提交";
                          {
                            var _0x329859 = "";
                            var _0x56b467 = "";
                            switch (_0x28af83) {
                              case "关闭托管":
                                _0x329859 = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
                                _0x56b467 = "<i class=\"layui-icon layui-icon-pause\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              case "运行正常":
                                _0x329859 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                                _0x56b467 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              case "密码错误":
                                _0x329859 = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                                _0x56b467 = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              case "等待执行":
                              case "等待提交":
                                _0x329859 = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                                _0x56b467 = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              default:
                                _0x329859 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                                _0x56b467 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                            }
                            _0x529f59.style.background = _0x329859;
                            _0x16492f.innerHTML = _0x56b467;
                            _0x410632.innerHTML = "自动托管：" + _0x28af83;
                            _0x5a75bb.innerHTML = "当前账号：" + _0x19f473 + "<br>到期时间：" + _0x4ac98e.expiry_date + "<br>剩余天数： " + _0x4ac98e.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行时间：" + (_0x4ac98e.run_time || "未设置") + "<br>运行模式：" + _0x56c0e9 + "<br>步数范围：" + _0x4ac98e.min_steps + "~" + _0x4ac98e.max_steps + "<br>当前步数：" + (_0x4ac98e.current_steps || 0);
                            _0x172dc2.style.background = "rgba(255,255,255,0.8)";
                            var _0x13c55e = Math.max(5, Math.min(30, 100 - _0x4ac98e.days_remaining / 30 * 100));
                            _0x172dc2.style.width = _0x13c55e + "%";
                          }
                        }
                        _0x335aa3.style.display = "block";
                      }
                    }).catch(_0x13fa39 => {
                      console.error("更新自动托管状态失败:", _0x13fa39);
                    });
                  }
                }
              } else {
                _0x40ac9d.msg(_0x4ac98e.message, {
                  "icon": 2
                });
              }
            }).catch(_0x3f48a9 => {
              _0x40ac9d.close(_0x2be894);
              _0x40ac9d.close(_0x17cbe7);
              console.error("Error:", _0x3f48a9);
              _0x40ac9d.msg("请求失败，请重试", {
                "icon": 2
              });
            });
          }
        }
      });
    }
  }
  var _0x361e51 = document.getElementById("userInput");
  var _0x5cfef0;
  if (_0x361e51) {
    _0x361e51.addEventListener("input", function () {
      {
        clearTimeout(_0x5cfef0);
        var _0x2643d3 = this.value.trim();
        _0x5cfef0 = setTimeout(function () {
          {
            _0x312aa5(_0x2643d3);
          }
        }, 500);
        _0x40bbbf();
      }
    });
  }
  var _0x28d0e3 = document.getElementById("passwordInput");
  var _0x36d3ad = document.getElementById("timeInput");
  var _0x24b6a7 = document.getElementById("minStepsInput");
  var _0x428fe4 = document.getElementById("maxStepsInput");
  if (_0x28d0e3) _0x28d0e3.addEventListener("input", _0x40bbbf);
  if (_0x36d3ad) _0x36d3ad.addEventListener("change", _0x40bbbf);
  if (_0x24b6a7) _0x24b6a7.addEventListener("input", _0x40bbbf);
  if (_0x428fe4) _0x428fe4.addEventListener("input", _0x40bbbf);
  _0x468eee.on("select(modeSelect)", function (_0x401894) {
    _0x3ae88f(_0x401894.value);
    _0x40bbbf();
  });
  _0x468eee.on("submit(submitKamiBtn)", function (_0x47c8c7) {
    var _0x4f7ca9 = _0x47c8c7.field;
    if (!_0x4f7ca9.kami_user || !_0x4f7ca9.kami_password) {
      {
        _0x40ac9d.msg("请填写完整信息", {
          "icon": 2
        });
        return false;
      }
    }
    var _0x5f516f = _0x40ac9d.msg("正在处理,请稍后....", {
      "icon": 16,
      "time": 0,
      "shade": 0.01
    });
    fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x4f7ca9.kami_user), {
      "credentials": "include"
    }).then(_0x4017b6 => _0x4017b6.json()).then(_0x4a70c7 => {
      if (!_0x4a70c7.success) {
        {
          _0x40ac9d.close(_0x5f516f);
          _0x40ac9d.msg("新用户先在自动托管内添加！", {
            "icon": 2
          });
          return;
        }
      }
      fetch("api/api.php?action=renew_kami&username=" + encodeURIComponent(_0x4f7ca9.kami_user) + "&kami=" + encodeURIComponent(_0x4f7ca9.kami_password), {
        "credentials": "include"
      }).then(_0x21f0fe => _0x21f0fe.json()).then(_0x47c8c7 => {
        {
          _0x40ac9d.close(_0x5f516f);
          if (_0x47c8c7.success) {
            _0x40ac9d.msg(_0x47c8c7.message, {
              "icon": 1
            });
            document.getElementById("kami_user").value = "";
            document.getElementById("kami_password").value = "";
            var _0x5308b6 = _0x4f7ca9.kami_user;
            if (_0x5308b6) {
              {
                fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x5308b6), {
                  "credentials": "include"
                }).then(_0x354a31 => _0x354a31.json()).then(_0x47c8c7 => {
                  {
                    if (_0x47c8c7.success) {
                      {
                        if (typeof setToggleButtonStatus === "function") {
                          setToggleButtonStatus(_0x47c8c7.stats);
                        }
                        var _0x58701c = document.getElementById("autoExpiryInfo");
                        var _0x1b6ebd = document.getElementById("autoExpiryIcon");
                        var _0xb215d0 = document.getElementById("autoExpiryTitle");
                        var _0x519806 = document.getElementById("autoExpiryText");
                        var _0x1a02d4 = document.getElementById("autoExpiryProgress");
                        var _0x42e337 = _0x58701c.querySelector("div[style*=\"background: linear-gradient\"]");
                        if (_0x47c8c7.is_expired) {
                          _0x42e337.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                          _0x1b6ebd.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                          _0xb215d0.innerHTML = "账户已过期";
                          _0x519806.innerHTML = "当前账号：" + _0x5308b6 + "<br>到期时间：" + _0x47c8c7.expiry_date + "<br>已过期： " + Math.abs(_0x47c8c7.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
                          _0x1a02d4.style.background = "rgba(255,255,255,0.8)";
                          _0x1a02d4.style.width = "100%";
                        } else {
                          var _0x3307ca = _0x47c8c7.mode == 1 ? "定时提交" : "模拟走路";
                          var _0x421574 = _0x47c8c7.stats === 5 ? "关闭托管" : _0x47c8c7.status || "等待提交";
                          {
                            var _0x10d69c = "";
                            var _0x19c8da = "";
                            switch (_0x421574) {
                              case "关闭托管":
                                _0x10d69c = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
                                _0x19c8da = "<i class=\"layui-icon layui-icon-pause\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              case "运行正常":
                                _0x10d69c = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                                _0x19c8da = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              case "密码错误":
                                _0x10d69c = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                                _0x19c8da = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              case "等待执行":
                              case "等待提交":
                                _0x10d69c = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                                _0x19c8da = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                                break;
                              default:
                                _0x10d69c = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                                _0x19c8da = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                            }
                            _0x42e337.style.background = _0x10d69c;
                            _0x1b6ebd.innerHTML = _0x19c8da;
                            _0xb215d0.innerHTML = "自动托管：" + _0x421574;
                            _0x519806.innerHTML = "当前账号：" + _0x5308b6 + "<br>到期时间：" + _0x47c8c7.expiry_date + "<br>剩余天数： " + _0x47c8c7.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行时间：" + (_0x47c8c7.run_time || "未设置") + "<br>运行模式：" + _0x3307ca + "<br>步数范围：" + _0x47c8c7.min_steps + "~" + _0x47c8c7.max_steps + "<br>当前步数：" + (_0x47c8c7.current_steps || 0);
                            _0x1a02d4.style.background = "rgba(255,255,255,0.8)";
                            var _0x56b680 = Math.max(5, Math.min(30, 100 - _0x47c8c7.days_remaining / 30 * 100));
                            _0x1a02d4.style.width = _0x56b680 + "%";
                          }
                        }
                        _0x58701c.style.display = "block";
                      }
                    }
                  }
                }).catch(_0x59177c => {
                  {
                    console.error("更新自动托管状态失败:", _0x59177c);
                  }
                });
              }
            }
          } else {
            {
              _0x40ac9d.msg(_0x47c8c7.message, {
                "icon": 2
              });
            }
          }
        }
      }).catch(_0x2a94f4 => {
        _0x40ac9d.close(_0x5f516f);
        console.error("续费请求失败:", _0x2a94f4);
        _0x40ac9d.msg("续费请求失败，请重试", {
          "icon": 2
        });
      });
    }).catch(_0x356805 => {
      {
        _0x40ac9d.close(_0x5f516f);
        console.error("检查用户失败:", _0x356805);
        _0x40ac9d.msg("检查用户失败，请重试", {
          "icon": 2
        });
      }
    });
    return false;
  });
  _0x468eee.on("submit(submitBtn)", function (_0x11cd84) {
    {
      var _0x552f7f = _0x11cd84.field;
      if (!_0x552f7f.user || !_0x552f7f.time || !_0x552f7f.moshi || !_0x552f7f.g) {
        {
          _0x40ac9d.msg("请填写完整信息", {
            "icon": 2
          });
          return false;
        }
      }
      var _0x23838a = parseInt(_0x552f7f.g);
      var _0x1bc529 = parseInt(_0x552f7f.d) || 0;
      if (_0x23838a < 1 || _0x23838a > 100000) {
        {
          _0x40ac9d.msg("最高步数必须在1-100000之间", {
            "icon": 2
          });
          return false;
        }
      }
      if (_0x1bc529 < 1 || _0x1bc529 > 100000) {
        {
          var _0x458b27 = _0x552f7f.moshi == "1" ? "最低步数" : "起始步数";
          _0x40ac9d.msg(_0x458b27 + "必须在1-100000之间", {
            "icon": 2
          });
          return false;
        }
      }
      if (_0x1bc529 >= _0x23838a) {
        var _0x458b27 = _0x552f7f.moshi == "1" ? "最低步数" : "起始步数";
        _0x40ac9d.msg(_0x458b27 + "必须小于最高步数", {
          "icon": 2
        });
        return false;
      }
      var _0x880854 = _0x40ac9d.msg("正在执行,请稍后....", {
        "icon": 16,
        "time": 0,
        "shade": 0.01
      });
      fetch("api/auto.php", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "credentials": "include",
        "body": JSON.stringify(_0x552f7f)
      }).then(_0x306e9a => _0x306e9a.json()).then(_0x11cd84 => {
        {
          _0x40ac9d.close(_0x880854);
          if (_0x11cd84.success) {
            {
              _0x40ac9d.msg(_0x11cd84.message, {
                "icon": 1
              });
              var _0x5a0a2a = _0x552f7f.user;
              if (_0x5a0a2a) {
                fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x5a0a2a), {
                  "credentials": "include"
                }).then(_0x39de54 => _0x39de54.json()).then(_0x11cd84 => {
                  if (_0x11cd84.success) {
                    {
                      if (typeof setToggleButtonStatus === "function") {
                        {
                          setToggleButtonStatus(_0x11cd84.stats);
                        }
                      }
                      if (_0x11cd84.config) {
                        {
                          if (_0x11cd84.config.run_time) {
                            document.getElementById("timeInput").value = _0x11cd84.config.run_time;
                          }
                          if (_0x11cd84.config.mode) {
                            document.getElementById("modeSelect").value = _0x11cd84.config.mode;
                            updateModeDisplayForAuto(_0x11cd84.config.mode);
                          }
                          if (_0x11cd84.config.min_steps) {
                            {
                              document.getElementById("minStepsInput").value = _0x11cd84.config.min_steps;
                            }
                          }
                          if (_0x11cd84.config.max_steps) {
                            {
                              document.getElementById("maxStepsInput").value = _0x11cd84.config.max_steps;
                            }
                          }
                          layui.form.render();
                          if (typeof _0x40bbbf === "function") {
                            {
                              _0x40bbbf();
                            }
                          }
                        }
                      }
                      var _0x268326 = document.getElementById("autoExpiryInfo");
                      var _0x3a6364 = document.getElementById("autoExpiryIcon");
                      var _0x3a1eb6 = document.getElementById("autoExpiryTitle");
                      var _0xbdd78e = document.getElementById("autoExpiryText");
                      var _0x3d4038 = document.getElementById("autoExpiryProgress");
                      var _0x173c87 = _0x268326.querySelector("div[style*=\"background: linear-gradient\"]");
                      if (_0x11cd84.is_expired) {
                        _0x173c87.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                        _0x3a6364.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                        _0x3a1eb6.innerHTML = "账户已过期";
                        _0xbdd78e.innerHTML = "当前账号：" + _0x5a0a2a + "<br>到期时间：" + _0x11cd84.expiry_date + "<br>已过期： " + Math.abs(_0x11cd84.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
                        _0x3d4038.style.background = "rgba(255,255,255,0.8)";
                        _0x3d4038.style.width = "100%";
                      } else {
                        var _0x12a3e3 = _0x11cd84.mode == 1 ? "定时提交" : "模拟走路";
                        var _0x6d4f8b = _0x11cd84.stats === 5 ? "关闭托管" : _0x11cd84.status || "等待提交";
                        {
                          var _0x34e263 = "";
                          var _0x55c29f = "";
                          switch (_0x6d4f8b) {
                            case "关闭托管":
                              _0x34e263 = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
                              _0x55c29f = "<i class=\"layui-icon layui-icon-pause\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            case "运行正常":
                              _0x34e263 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                              _0x55c29f = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            case "密码错误":
                              _0x34e263 = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                              _0x55c29f = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            case "等待执行":
                            case "等待提交":
                              _0x34e263 = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                              _0x55c29f = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                              break;
                            default:
                              _0x34e263 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                              _0x55c29f = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                          }
                          _0x173c87.style.background = _0x34e263;
                          _0x3a6364.innerHTML = _0x55c29f;
                          _0x3a1eb6.innerHTML = "自动托管：" + _0x6d4f8b;
                          _0xbdd78e.innerHTML = "当前账号：" + _0x5a0a2a + "<br>到期时间：" + _0x11cd84.expiry_date + "<br>剩余天数： " + _0x11cd84.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行时间：" + (_0x11cd84.run_time || "未设置") + "<br>运行模式：" + _0x12a3e3 + "<br>步数范围：" + _0x11cd84.min_steps + "~" + _0x11cd84.max_steps + "<br>当前步数：" + (_0x11cd84.current_steps || 0);
                          _0x3d4038.style.background = "rgba(255,255,255,0.8)";
                          var _0x5676a2 = Math.max(5, Math.min(30, 100 - _0x11cd84.days_remaining / 30 * 100));
                          _0x3d4038.style.width = _0x5676a2 + "%";
                        }
                      }
                      _0x268326.style.display = "block";
                    }
                  }
                }).catch(_0x52c298 => {
                  {
                    console.error("更新自动托管状态失败:", _0x52c298);
                  }
                });
              }
              if (!_0x11cd84.is_update && !_0x11cd84.is_kami_renew) {
                document.getElementById("userInput").value = "";
                document.getElementById("passwordInput").value = "";
                document.getElementById("timeInput").value = "11:00";
                document.getElementById("modeSelect").value = "1";
                document.getElementById("minStepsInput").value = "15000";
                document.getElementById("maxStepsInput").value = "25000";
                _0x468eee.render();
                _0x4579b5(false);
                _0x419bb0();
                _0x3ae88f("1");
              } else if (_0x11cd84.is_update) {
                var _0x495011 = document.getElementById("autoAccountStatusCard");
                var _0x26134f = document.getElementById("manualAccountStatusCard");
                _0x495011.style.display = "block";
                _0x26134f.style.display = "none";
              }
            }
          } else if (_0x11cd84.need_kami) {
            _0x446753(_0x552f7f);
          } else {
            _0x40ac9d.msg(_0x11cd84.message, {
              "icon": 2
            });
          }
        }
      }).catch(_0x4b9540 => {
        {
          _0x40ac9d.close(_0x880854);
          console.error("Error:", _0x4b9540);
          _0x40ac9d.msg("请求失败，请重试", {
            "icon": 2
          });
        }
      });
      return false;
    }
  });
});
layui.use(["form", "layer", "element"], function () {
  var _0x104871 = layui.form,
    _0x3b9b2f = layui.layer,
    _0x3736fe = layui.element;
  var _0xdcddef = false;
  var _0x5e583c = null;
  function _0x35bc09(_0x32ffb2) {
    var _0x45e7d3 = document.getElementById("minStepsField");
    var _0x5a027c = document.getElementById("minStepsLabel");
    var _0x53fc89 = document.querySelector(".layui-elem-quote");
    if (_0x32ffb2 == "1") {
      _0x45e7d3.style.display = "block";
      _0x5a027c.textContent = "最低步数";
      _0x53fc89.innerHTML = "说明：定时提交为一次性提交，每天在指定运行时间刷步，步数为最高步数-最低步数之间随机步数。";
    } else {
      {
        _0x45e7d3.style.display = "block";
        _0x5a027c.textContent = "起始步数";
        _0x53fc89.innerHTML = "说明：模拟走路为叠加提交，每天在指定运行时间开始，从起始步数开始每半个小时叠加刷一次，直到步数高于设置的最高步数结束。";
      }
    }
  }
  function _0x1ccbd9() {
    var _0x2b169a = {
      "user1": document.getElementById("user1").value,
      "ps1": document.getElementById("ps1").value
    };
    localStorage.setItem("zeppManualFormData", JSON.stringify(_0x2b169a));
  }
  function _0x21d036() {
    var _0x1db144 = localStorage.getItem("zeppManualFormData");
    if (_0x1db144) {
      try {
        var _0xba0d41 = JSON.parse(_0x1db144);
        document.getElementById("user1").value = _0xba0d41.user1 || "";
        document.getElementById("ps1").value = _0xba0d41.ps1 || "";
      } catch (_0x2ac798) {
        {
          console.error("加载手动模式缓存数据失败:", _0x2ac798);
        }
      }
    }
  }
  _0x21d036();
  function _0x318f9b(_0x36c533) {
    var _0x347f11 = document.getElementById("expiryInfo");
    var _0x3792f9 = document.getElementById("expiryIcon");
    var _0x3c993a = document.getElementById("expiryTitle");
    var _0xf272e = document.getElementById("expiryText");
    var _0x51b6d2 = document.getElementById("expiryProgress");
    var _0xe32efb = _0x347f11.querySelector("div[style*=\"background: linear-gradient\"]");
    _0x347f11.style.display = "block";
    if (!_0x36c533 || _0x36c533.trim() === "") {
      {
        _0xe32efb.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
        _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
        _0x3c993a.innerHTML = "请输入账号";
        _0xf272e.innerHTML = "请在下方输入框中输入您的账号<br>以查看账户状态信息";
        _0x51b6d2.style.background = "rgba(255,255,255,0.3)";
        _0x51b6d2.style.width = "0%";
        return;
      }
    }
    Promise.all([fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x36c533), {
      "credentials": "include"
    }).then(_0x58339c => _0x58339c.json()), fetch("api/api.php?username=" + encodeURIComponent(_0x36c533), {
      "credentials": "include"
    }).then(_0x3f5060 => _0x3f5060.json())]).then(([_0x2a8110, _0x1489c6]) => {
      if (_0x2a8110.success && typeof setToggleButtonStatus === "function") {
        setToggleButtonStatus(_0x2a8110.stats);
      }
      var _0x4895e5 = "";
      var _0x265fe0 = 0;
      var _0x3f163b = false;
      if (_0x2a8110.success && _0x2a8110.expiry_date && !_0x2a8110.is_expired) {
        _0x4895e5 = _0x2a8110.expiry_date;
        _0x265fe0 = _0x2a8110.days_remaining;
        _0x3f163b = _0x2a8110.is_expired;
      } else if (_0x1489c6.success && _0x1489c6.type === "expiry") {
        {
          _0x4895e5 = _0x1489c6.formatted_expiry;
          _0x265fe0 = _0x1489c6.days_remaining;
          _0x3f163b = _0x1489c6.is_expired;
        }
      }
      if (_0x1489c6.success) {
        _0x5e583c = _0x1489c6;
        if (_0x2a8110.success && _0x2a8110.expiry_date && !_0x2a8110.is_expired) {
          {
            if (_0x3f163b) {
              {
                _0xe32efb.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                _0x3c993a.innerHTML = "账户已过期";
                _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>到期时间：" + _0x4895e5 + "<br>已过期： " + Math.abs(_0x265fe0) + "<span style=\"margin-left:2px;\">天</span>";
                _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
                _0x51b6d2.style.width = "100%";
              }
            } else {
              {
                {
                  _0xe32efb.style.background = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                  _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x3c993a.innerHTML = "账户状态正常";
                  _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>到期时间：" + _0x4895e5 + "<br>剩余天数： " + _0x265fe0 + "<span style=\"margin-left:2px;\">天</span>";
                  _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
                  var _0x2b0553 = Math.max(5, Math.min(30, 100 - _0x265fe0 / 30 * 100));
                  _0x51b6d2.style.width = _0x2b0553 + "%";
                }
              }
            }
          }
        } else if (_0x1489c6.type === "expiry") {
          if (_0x3f163b) {
            {
              _0xe32efb.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
              _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
              _0x3c993a.innerHTML = "账户已过期";
              _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>到期时间：" + _0x4895e5 + "<br>已过期： " + Math.abs(_0x265fe0) + "<span style=\"margin-left:2px;\">天</span>";
              _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
              _0x51b6d2.style.width = "100%";
            }
          } else {
            {
              _0xe32efb.style.background = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
              _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
              _0x3c993a.innerHTML = "账户状态正常";
              _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>到期时间：" + _0x4895e5 + "<br>剩余天数： " + _0x265fe0 + "<span style=\"margin-left:2px;\">天</span>";
              _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
              var _0x2b0553 = Math.max(5, Math.min(30, 100 - _0x265fe0 / 30 * 100));
              _0x51b6d2.style.width = _0x2b0553 + "%";
            }
          }
        } else if (_0x1489c6.type === "usage") {
          {
            var _0x1454fa = _0x1489c6.total_count > 0 ? _0x1489c6.used_count / _0x1489c6.total_count * 100 : 0;
            var _0x79fd37 = _0x1489c6.step_limit ? "<br>步数限制：1~" + _0x1489c6.step_limit + "<span style=\"margin-left:2px;\">步</span>" : "";
            if (_0x1489c6.remaining_count <= 0) {
              _0xe32efb.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
              _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
              _0x3c993a.innerHTML = "当日次数已用完";
              _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>今日使用：" + _0x1489c6.used_count + "<span style=\"margin-left:2px;\">次</span><br>总次数：" + _0x1489c6.total_count + "<span style=\"margin-left:2px;\">次</span>" + _0x79fd37;
              _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
              _0x51b6d2.style.width = "100%";
            } else if (_0x1489c6.remaining_count <= 3) {
              {
                _0xe32efb.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                _0x3c993a.innerHTML = "当日次数即将用完";
                _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>今日使用：" + _0x1489c6.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x1489c6.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x79fd37;
                _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
                _0x51b6d2.style.width = _0x1454fa + "%";
              }
            } else {
              _0xe32efb.style.background = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
              _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
              _0x3c993a.innerHTML = "使用状态正常";
              _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>今日使用：" + _0x1489c6.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x1489c6.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x79fd37;
              _0x51b6d2.style.background = "rgba(255,255,255,0.8)";
              _0x51b6d2.style.width = _0x1454fa + "%";
            }
          }
        }
        _0x347f11.style.display = "block";
      } else {
        _0xe32efb.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
        _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
        _0x3c993a.innerHTML = "账号信息";
        _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>未查询到该账号信息<br>提交后将显示账号状态";
        _0x51b6d2.style.background = "rgba(255,255,255,0.3)";
        _0x51b6d2.style.width = "0%";
        _0x347f11.style.display = "block";
      }
    }).catch(_0x1cbf4f => {
      {
        console.error("检查到期时间失败:", _0x1cbf4f);
        var _0x347f11 = document.getElementById("expiryInfo");
        var _0x3792f9 = document.getElementById("expiryIcon");
        var _0x3c993a = document.getElementById("expiryTitle");
        var _0xf272e = document.getElementById("expiryText");
        var _0x51b6d2 = document.getElementById("expiryProgress");
        var _0xe32efb = _0x347f11.querySelector("div[style*=\"background: linear-gradient\"]");
        _0xe32efb.style.background = "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)";
        _0x3792f9.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
        _0x3c993a.innerHTML = "网络连接失败";
        _0xf272e.innerHTML = "当前账号：" + _0x36c533 + "<br>无法连接到服务器<br>请检查网络连接后重试";
        _0x51b6d2.style.background = "rgba(255,255,255,0.3)";
        _0x51b6d2.style.width = "0%";
        _0x347f11.style.display = "block";
      }
    });
  }
  function _0x317a23() {
    {
      var _0x378c9b = document.getElementById("user1").value.trim();
      fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x378c9b), {
        "credentials": "include"
      }).then(_0x480e5e => _0x480e5e.json()).then(_0x342bbc => {
        if (_0x342bbc.success && typeof setToggleButtonStatus === "function") {
          setToggleButtonStatus(_0x342bbc.stats);
        }
        if (_0x342bbc.success && _0x342bbc.expiry_date && !_0x342bbc.is_expired) {
          console.log("自动托管未过期，跳过动态更新");
          return;
        }
        if (_0x5e583c) {
          var _0x1ab89b = document.getElementById("expiryInfo");
          var _0x1bc380 = document.getElementById("expiryIcon");
          var _0x27b601 = document.getElementById("expiryTitle");
          var _0x582ffd = document.getElementById("expiryText");
          var _0x17ed30 = document.getElementById("expiryProgress");
          var _0x5892c0 = _0x1ab89b.querySelector("div[style*=\"background: linear-gradient\"]");
          if (_0x5e583c.type === "usage") {
            {
              _0x5e583c.remaining_count = Math.max(0, _0x5e583c.remaining_count - 1);
              _0x5e583c.used_count = _0x5e583c.used_count + 1;
              var _0x22207b = _0x5e583c.total_count > 0 ? _0x5e583c.used_count / _0x5e583c.total_count * 100 : 0;
              var _0xc3eb6d = _0x5e583c.step_limit ? "<br>步数限制：1~" + _0x5e583c.step_limit + "<span style=\"margin-left:2px;\">步</span>" : "";
              if (_0x5e583c.remaining_count <= 0) {
                _0x5892c0.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                _0x1bc380.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                _0x27b601.innerHTML = "当日次数已用完";
                _0x582ffd.innerHTML = "当前账号：" + _0x378c9b + "<br>今日使用：" + _0x5e583c.used_count + "<span style=\"margin-left:2px;\">次</span><br>总次数：" + _0x5e583c.total_count + "<span style=\"margin-left:2px;\">次</span>" + _0xc3eb6d;
                _0x17ed30.style.background = "rgba(255,255,255,0.8)";
                _0x17ed30.style.width = "100%";
              } else if (_0x5e583c.remaining_count <= 3) {
                {
                  _0x5892c0.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                  _0x1bc380.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x27b601.innerHTML = "当日次数即将用完";
                  _0x582ffd.innerHTML = "当前账号：" + _0x378c9b + "<br>今日使用：" + _0x5e583c.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x5e583c.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0xc3eb6d;
                  _0x17ed30.style.background = "rgba(255,255,255,0.8)";
                  _0x17ed30.style.width = _0x22207b + "%";
                }
              } else {
                _0x5892c0.style.background = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                _0x1bc380.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                _0x27b601.innerHTML = "使用状态正常";
                _0x582ffd.innerHTML = "当前账号：" + _0x378c9b + "<br>今日使用：" + _0x5e583c.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x5e583c.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0xc3eb6d;
                _0x17ed30.style.background = "rgba(255,255,255,0.8)";
                _0x17ed30.style.width = _0x22207b + "%";
              }
            }
          } else if (_0x5e583c.type === "expiry") {
            _0x318f9b(_0x378c9b);
          }
        } else {
          _0x318f9b(_0x378c9b);
        }
      }).catch(_0x684418 => {
        console.error("检查自动托管状态失败:", _0x684418);
        if (_0x5e583c) {
          {
            var _0x14b077 = document.getElementById("expiryInfo");
            var _0x33a848 = document.getElementById("expiryIcon");
            var _0x182a3e = document.getElementById("expiryTitle");
            var _0x39e894 = document.getElementById("expiryText");
            var _0x2ee59b = document.getElementById("expiryProgress");
            var _0x20de61 = _0x14b077.querySelector("div[style*=\"background: linear-gradient\"]");
            if (_0x5e583c.type === "usage") {
              {
                _0x5e583c.remaining_count = Math.max(0, _0x5e583c.remaining_count - 1);
                _0x5e583c.used_count = _0x5e583c.used_count + 1;
                var _0x3a0dec = _0x5e583c.total_count > 0 ? _0x5e583c.used_count / _0x5e583c.total_count * 100 : 0;
                var _0x5c9fc0 = _0x5e583c.step_limit ? "<br>步数限制：1~" + _0x5e583c.step_limit + "<span style=\"margin-left:2px;\">步</span>" : "";
                if (_0x5e583c.remaining_count <= 0) {
                  _0x20de61.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                  _0x33a848.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x182a3e.innerHTML = "当日次数已用完";
                  _0x39e894.innerHTML = "当前账号：" + _0x378c9b + "<br>今日使用：" + _0x5e583c.used_count + "<span style=\"margin-left:2px;\">次</span><br>总次数：" + _0x5e583c.total_count + "<span style=\"margin-left:2px;\">次</span>" + _0x5c9fc0;
                  _0x2ee59b.style.background = "rgba(255,255,255,0.8)";
                  _0x2ee59b.style.width = "100%";
                } else if (_0x5e583c.remaining_count <= 3) {
                  {
                    _0x20de61.style.background = "linear-gradient(135deg, #ffa726 0%, #ff9800 100%)";
                    _0x33a848.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
                    _0x182a3e.innerHTML = "当日次数即将用完";
                    _0x39e894.innerHTML = "当前账号：" + _0x378c9b + "<br>今日使用：" + _0x5e583c.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x5e583c.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x5c9fc0;
                    _0x2ee59b.style.background = "rgba(255,255,255,0.8)";
                    _0x2ee59b.style.width = _0x3a0dec + "%";
                  }
                } else {
                  _0x20de61.style.background = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                  _0x33a848.innerHTML = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                  _0x182a3e.innerHTML = "使用状态正常";
                  _0x39e894.innerHTML = "当前账号：" + _0x378c9b + "<br>今日使用：" + _0x5e583c.used_count + "<span style=\"margin-left:2px;\">次</span><br>今日剩余：" + _0x5e583c.remaining_count + "<span style=\"margin-left:2px;\">次</span>" + _0x5c9fc0;
                  _0x2ee59b.style.background = "rgba(255,255,255,0.8)";
                  _0x2ee59b.style.width = _0x3a0dec + "%";
                }
              }
            } else if (_0x5e583c.type === "expiry") {
              {
                _0x318f9b(_0x378c9b);
              }
            }
          }
        } else {
          _0x318f9b(_0x378c9b);
        }
      });
    }
  }
  function _0xf9eb03(_0x2f4ed1) {
    var _0x540137 = document.getElementById("autoExpiryInfo");
    var _0x52933a = document.getElementById("autoExpiryIcon");
    var _0x5d4c31 = document.getElementById("autoExpiryTitle");
    var _0x4fbb25 = document.getElementById("autoExpiryText");
    var _0xaea470 = document.getElementById("autoExpiryProgress");
    var _0x4b409b = document.getElementById("renewKamiBtn");
    var _0x2186f3 = _0x540137.querySelector("div[style*=\"background: linear-gradient\"]");
    _0x540137.style.display = "block";
    if (!_0x2f4ed1 || _0x2f4ed1.trim() === "") {
      {
        _0x2186f3.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
        _0x52933a.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
        _0x5d4c31.innerHTML = "请输入账号";
        _0x4fbb25.innerHTML = "请在下方输入框中输入您的账号<br>以查看自动托管状态信息";
        _0xaea470.style.background = "rgba(255,255,255,0.3)";
        _0xaea470.style.width = "0%";
        if (_0x4b409b) _0x4b409b.style.display = "none";
        return;
      }
    }
    fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x2f4ed1), {
      "credentials": "include"
    }).then(_0x111324 => _0x111324.json()).then(_0x3e8c75 => {
      {
        if (_0x3e8c75.success) {
          {
            if (typeof setToggleButtonStatus === "function") {
              {
                setToggleButtonStatus(_0x3e8c75.stats);
              }
            }
            if (_0x3e8c75.config) {
              if (_0x3e8c75.config.run_time) {
                {
                  document.getElementById("timeInput").value = _0x3e8c75.config.run_time;
                }
              }
              if (_0x3e8c75.config.mode) {
                document.getElementById("modeSelect").value = _0x3e8c75.config.mode;
                _0x35bc09(_0x3e8c75.config.mode);
              }
              if (_0x3e8c75.config.min_steps) {
                document.getElementById("minStepsInput").value = _0x3e8c75.config.min_steps;
              }
              if (_0x3e8c75.config.max_steps) {
                document.getElementById("maxStepsInput").value = _0x3e8c75.config.max_steps;
              }
              layui.form.render();
              if (typeof saveFormData === "function") {
                saveFormData();
              }
            }
            if (_0x3e8c75.is_expired) {
              _0x2186f3.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
              _0x52933a.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
              _0x5d4c31.innerHTML = "账户已过期";
              _0x4fbb25.innerHTML = "当前账号：" + _0x2f4ed1 + "<br>到期时间：" + _0x3e8c75.expiry_date + "<br>已过期： " + Math.abs(_0x3e8c75.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
              _0xaea470.style.background = "rgba(255,255,255,0.8)";
              _0xaea470.style.width = "100%";
              if (_0x4b409b) _0x4b409b.style.display = "inline-block";
            } else {
              {
                var _0x3a1940 = _0x3e8c75.mode == 1 ? "定时提交" : "模拟走路";
                var _0xc20647 = _0x3e8c75.stats === 5 ? "关闭托管" : _0x3e8c75.status || "等待提交";
                {
                  var _0x4cf6c3 = "";
                  var _0x5e01ad = "";
                  switch (_0xc20647) {
                    case "关闭托管":
                      _0x4cf6c3 = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
                      _0x5e01ad = "<i class=\"layui-icon layui-icon-pause\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    case "运行正常":
                      _0x4cf6c3 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                      _0x5e01ad = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    case "密码错误":
                      _0x4cf6c3 = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                      _0x5e01ad = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    case "等待执行":
                    case "等待提交":
                      _0x4cf6c3 = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
                      _0x5e01ad = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
                      break;
                    default:
                      _0x4cf6c3 = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
                      _0x5e01ad = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
                  }
                  _0x2186f3.style.background = _0x4cf6c3;
                  _0x52933a.innerHTML = _0x5e01ad;
                  _0x5d4c31.innerHTML = "自动托管：" + _0xc20647;
                  _0x4fbb25.innerHTML = "当前账号：" + _0x2f4ed1 + "<br>到期时间：" + _0x3e8c75.expiry_date + "<br>剩余天数： " + _0x3e8c75.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行时间：" + (_0x3e8c75.run_time || "未设置") + "<br>运行模式：" + _0x3a1940 + "<br>步数范围：" + _0x3e8c75.min_steps + "~" + _0x3e8c75.max_steps + "<br>当前步数：" + (_0x3e8c75.current_steps || 0);
                  _0xaea470.style.background = "rgba(255,255,255,0.8)";
                  var _0x5e11f9 = Math.max(5, Math.min(30, 100 - _0x3e8c75.days_remaining / 30 * 100));
                  _0xaea470.style.width = _0x5e11f9 + "%";
                  if (_0x4b409b) _0x4b409b.style.display = "none";
                }
              }
            }
            _0x540137.style.display = "block";
          }
        } else {
          {
            _0x2186f3.style.background = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
            _0x52933a.innerHTML = "<i class=\"layui-icon layui-icon-user\" style=\"color: white; font-size: 18px;\"></i>";
            _0x5d4c31.innerHTML = "账号信息";
            _0x4fbb25.innerHTML = "当前账号：" + _0x2f4ed1 + "<br>该账号未添加自动托管<br>点击下方立即添加即可自动托管";
            _0xaea470.style.background = "rgba(255,255,255,0.3)";
            _0xaea470.style.width = "0%";
            if (_0x4b409b) _0x4b409b.style.display = "none";
            _0x540137.style.display = "block";
          }
        }
      }
    }).catch(_0x484c5f => {
      {
        console.error("检查自动托管状态失败:", _0x484c5f);
        _0x2186f3.style.background = "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)";
        _0x52933a.innerHTML = "<i class=\"layui-icon layui-icon-tips\" style=\"color: white; font-size: 18px;\"></i>";
        _0x5d4c31.innerHTML = "网络连接失败";
        _0x4fbb25.innerHTML = "当前账号：" + _0x2f4ed1 + "<br>无法连接到服务器<br>请检查网络连接后重试";
        _0xaea470.style.background = "rgba(255,255,255,0.3)";
        _0xaea470.style.width = "0%";
        if (_0x4b409b) _0x4b409b.style.display = "none";
        _0x540137.style.display = "block";
      }
    });
  }
  function _0x915198(_0x149fd9) {
    var _0x1f612d = window.innerWidth <= 768;
    var _0x306a14 = "";
    _0x3b9b2f.open({
      "content": window.renewNotice + "<input type=\"text\" id=\"keyInput\" class=\"layui-input\" placeholder=\"请输入购买的卡密\">",
      "btn": ["确认", "取消"],
      "area": _0x1f612d ? ["95%", "auto"] : ["auto", "auto"],
      "yes": function (_0x5a4175, _0x2fabbe) {
        var _0x2c1a81 = layui.$("#keyInput").val();
        if (!_0x2c1a81 || _0x2c1a81.trim() === "") {
          _0x3b9b2f.msg("请输入卡密！", {
            "icon": 2
          });
          return false;
        }
        var _0x444809 = document.getElementById("renewKamiBtn");
        if (_0x444809) {
          _0x306a14 = _0x444809.innerHTML;
          _0x444809.innerHTML = "<i class=\"layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop\" style=\"margin-right: 4px; font-size: 14px;\"></i> 处理中...";
          _0x444809.style.pointerEvents = "none";
          _0x444809.style.opacity = "0.7";
        }
        var _0x367455 = _0x3b9b2f.msg("正在续费,请稍后....", {
          "icon": 16,
          "time": 0,
          "shade": 0.01
        });
        fetch("api/api.php?action=renew_kami&username=" + encodeURIComponent(_0x149fd9) + "&kami=" + encodeURIComponent(_0x2c1a81.trim()), {
          "credentials": "include"
        }).then(_0xb01d09 => _0xb01d09.json()).then(_0x19e253 => {
          _0x3b9b2f.close(_0x367455);
          _0x3b9b2f.close(_0x5a4175);
          if (_0x444809) {
            _0x444809.innerHTML = _0x306a14;
            _0x444809.style.pointerEvents = "auto";
            _0x444809.style.opacity = "1";
          }
          if (_0x19e253.success) {
            _0x3b9b2f.msg(_0x19e253.message, {
              "icon": 1,
              "time": 3000
            });
            _0xf9eb03(_0x149fd9);
          } else {
            _0x3b9b2f.msg(_0x19e253.message, {
              "icon": 2
            });
          }
        }).catch(_0xb67554 => {
          _0x3b9b2f.close(_0x367455);
          _0x3b9b2f.close(_0x5a4175);
          if (_0x444809) {
            _0x444809.innerHTML = _0x306a14;
            _0x444809.style.pointerEvents = "auto";
            _0x444809.style.opacity = "1";
          }
          console.error("Error:", _0xb67554);
          _0x3b9b2f.msg("请求失败，请重试", {
            "icon": 2
          });
        });
      }
    });
  }
  _0x3736fe.on("tab(stepTab)", function (_0x3ad48b) {
    var _0xefcbd6 = document.getElementById("manualAccountStatusCard");
    var _0x49c435 = document.getElementById("autoAccountStatusCard");
    if (_0x3ad48b.index == 0) {
      {
        _0xefcbd6.style.display = "block";
        _0x49c435.style.display = "none";
        var _0x35e375 = document.getElementById("user1").value.trim();
        _0x318f9b(_0x35e375);
      }
    } else if (_0x3ad48b.index == 1) {
      _0xefcbd6.style.display = "none";
      _0x49c435.style.display = "block";
      var _0x35e375 = document.getElementById("userInput").value.trim();
      _0xf9eb03(_0x35e375);
    } else if (_0x3ad48b.index == 2) {
      {
        _0xefcbd6.style.display = "none";
        _0x49c435.style.display = "block";
        var _0x35e375 = document.getElementById("userInput").value.trim();
        if (!_0x35e375) {
          _0x35e375 = document.getElementById("user1").value.trim();
        }
        _0xf9eb03(_0x35e375);
      }
    }
  });
  setTimeout(function () {
    var _0x4867bd = document.getElementById("manualAccountStatusCard");
    var _0x1cae5d = document.getElementById("autoAccountStatusCard");
    var _0x21926a = document.querySelector(".layui-tab-title .layui-this");
    if (_0x21926a && _0x21926a.textContent.trim() === "手动提交") {
      {
        _0x4867bd.style.display = "block";
        _0x1cae5d.style.display = "none";
        var _0x27c1a5 = document.getElementById("user1").value.trim();
        _0x318f9b(_0x27c1a5);
      }
    } else if (_0x21926a && _0x21926a.textContent.trim() === "自动托管") {
      _0x4867bd.style.display = "none";
      _0x1cae5d.style.display = "block";
      var _0x27c1a5 = document.getElementById("userInput").value.trim();
      _0xf9eb03(_0x27c1a5);
    } else if (_0x21926a && _0x21926a.textContent.trim() === "卡密续费") {
      _0x4867bd.style.display = "none";
      _0x1cae5d.style.display = "block";
      var _0x27c1a5 = document.getElementById("userInput").value.trim();
      if (!_0x27c1a5) {
        _0x27c1a5 = document.getElementById("user1").value.trim();
      }
      _0xf9eb03(_0x27c1a5);
    }
  }, 100);
  var _0x20c91e = document.getElementById("user1");
  var _0x32b5cf = document.getElementById("ps1");
  if (_0x20c91e) {
    {
      _0x20c91e.addEventListener("input", function () {
        _0x1ccbd9();
        clearTimeout(window.expiryCheckTimeout);
        window.expiryCheckTimeout = setTimeout(function () {
          _0x318f9b(this.value.trim());
        }.bind(this), 500);
      });
    }
  }
  if (_0x32b5cf) _0x32b5cf.addEventListener("input", _0x1ccbd9);
  var _0x4efea3 = document.getElementById("userInput");
  if (_0x4efea3) {
    _0x4efea3.addEventListener("input", function () {
      clearTimeout(window.autoExpiryCheckTimeout);
      window.autoExpiryCheckTimeout = setTimeout(function () {
        {
          _0xf9eb03(this.value.trim());
        }
      }.bind(this), 500);
    });
  }
  var _0x5975e6 = document.getElementById("renewKamiBtn");
  if (_0x5975e6) {
    _0x5975e6.addEventListener("click", function () {
      var _0x5b00f1 = document.getElementById("userInput").value.trim();
      if (_0x5b00f1) {
        _0x915198(_0x5b00f1);
      } else {
        {
          _0x3b9b2f.msg("请先输入账号", {
            "icon": 2
          });
        }
      }
    });
  }
  function _0x1cfefa() {
    var _0x3d9a61 = Date.now(),
      _0x2b83bd = Math.random().toString(36).substring(2),
      _0x2ba897 = navigator.userAgent.substring(0, 20);
    return btoa(_0x3d9a61 + _0x2b83bd + _0x2ba897).substring(0, 16);
  }
  function _0x18be3c() {
    return location.protocol === "https:";
  }
  async function _0x12ad43(_0x2c82d7, _0x3cc2da) {
    {
      const _0xa346f5 = Uint8Array.from(atob(_0x3cc2da), _0x56ba4e => _0x56ba4e.charCodeAt(0));
      const _0x1940a8 = await crypto.subtle.importKey("raw", _0xa346f5, {
        "name": "AES-GCM"
      }, false, ["encrypt"]);
      const _0x4104fa = crypto.getRandomValues(new Uint8Array(12));
      const _0x71fa78 = await crypto.subtle.encrypt({
        "name": "AES-GCM",
        "iv": _0x4104fa,
        "tagLength": 128
      }, _0x1940a8, new TextEncoder().encode(JSON.stringify(_0x2c82d7)));
      const _0x31068c = new Uint8Array(_0x71fa78);
      const _0x28bfc8 = new Uint8Array(_0x4104fa.length + _0x31068c.length);
      _0x28bfc8.set(_0x4104fa, 0);
      _0x28bfc8.set(_0x31068c, _0x4104fa.length);
      return btoa(String.fromCharCode.apply(null, _0x28bfc8));
    }
  }
  function _0x263f1e(_0x4790d4, _0x40f2d6) {
    var _0x4b5ebf = JSON.stringify(_0x4790d4);
    var _0x4f4780 = _0x421914(_0x40f2d6);
    var _0x281994 = "";
    for (var _0x517091 = 0; _0x517091 < _0x4b5ebf.length; _0x517091++) {
      _0x281994 += String.fromCharCode(_0x4b5ebf.charCodeAt(_0x517091) ^ _0x4f4780.charCodeAt(_0x517091 % _0x4f4780.length));
    }
    return btoa(_0x281994);
  }
  function _0x421914(_0x27c2d7) {
    {
      var _0x4cd8c6 = "";
      for (var _0x53b144 = 0; _0x53b144 < _0x27c2d7.length; _0x53b144++) {
        var _0xa53017 = _0x27c2d7.charCodeAt(_0x53b144);
        _0x4cd8c6 += String.fromCharCode((_0xa53017 * 31 + _0x53b144) % 256);
      }
      while (_0x4cd8c6.length < 32) {
        _0x4cd8c6 += _0x4cd8c6;
      }
      return _0x4cd8c6.substring(0, 32);
    }
  }
  async function _0x10f01d(_0x1caaf7, _0x3eb457) {
    if (_0x18be3c()) {
      {
        return await _0x12ad43(_0x1caaf7, _0x3eb457);
      }
    } else {
      {
        return _0x263f1e(_0x1caaf7, _0x3eb457);
      }
    }
  }
  function _0x449bfb() {
    {
      return new Promise((_0x2798ad, _0x3df89b) => {
        $.ajax({
          "url": "api/bushu.php?action=getkey",
          "type": "GET",
          "dataType": "json",
          "xhrFields": {
            "withCredentials": true
          },
          "timeout": 10000
        }).done(_0x1a3c4c => {
          if (_0x1a3c4c.code === 200) {
            {
              _0x2798ad({
                "key": _0x1a3c4c.key,
                "nonce": _0x1a3c4c.nonce
              });
            }
          } else {
            {
              _0x3df89b(new Error(_0x1a3c4c.msg || "获取密钥失败"));
            }
          }
        }).fail((_0x5b36a5, _0x5f4c67, _0x83b5ec) => {
          let _0x4c17be = "获取密钥失败";
          if (_0x5b36a5.status === 0) _0x4c17be = "网络连接失败";else if (_0x5b36a5.status === 403) _0x4c17be = "访问被拦截";else if (_0x5b36a5.status === 500) _0x4c17be = "服务器内部错误";else if (_0x5b36a5.responseJSON && _0x5b36a5.responseJSON.msg) _0x4c17be = _0x5b36a5.responseJSON.msg;
          _0x3df89b(new Error(_0x4c17be));
        });
      });
    }
  }
  _0x104871.on("submit(submitBtn1)", function (_0x76beae) {
    {
      if (_0xdcddef) {
        {
          _0x3b9b2f.msg("请勿重复提交", {
            "icon": 2
          });
          return false;
        }
      }
      var _0x44e0bf = _0x76beae.field.user1.trim();
      var _0x4970d1 = _0x76beae.field.ps1.trim();
      var _0x23bff2 = parseInt(_0x76beae.field.bs1);
      if (!_0x44e0bf || !_0x4970d1 || !_0x23bff2) {
        _0x3b9b2f.msg("请填写完整信息", {
          "icon": 2
        });
        return false;
      }
      if (_0x23bff2 < 1 || _0x23bff2 > 100000 || isNaN(_0x23bff2)) {
        {
          _0x3b9b2f.msg("步数必须在1~100000之间", {
            "icon": 2
          });
          return false;
        }
      }
      if (!/^[a-zA-Z0-9@._-]+$/.test(_0x44e0bf)) {
        _0x3b9b2f.msg("账号格式不正确", {
          "icon": 2
        });
        return false;
      }
      _0xdcddef = true;
      var _0xcc8512 = _0x3b9b2f.msg("正在提交,请稍后....", {
        "icon": 16,
        "time": 0,
        "shade": 0.01
      });
      (async function () {
        try {
          const _0x1b4920 = await _0x449bfb();
          var _0x37a24f = Date.now();
          var _0x1dcb4f = _0x1cfefa();
          var _0x5410fd = {
            "user1": _0x44e0bf,
            "ps1": _0x4970d1,
            "bs1": _0x23bff2,
            "nonce": _0x1b4920.nonce,
            "timestamp": _0x37a24f,
            "rid": _0x1dcb4f,
            "userAgent": navigator.userAgent.substring(0, 100),
            "screen": screen.width + "x" + screen.height
          };
          const _0x440b5c = await _0x10f01d(_0x5410fd, _0x1b4920.key);
          console.log("加密后的数据:", typeof _0x440b5c, _0x440b5c);
          const _0x32c30f = await new Promise((_0x3dbcfe, _0x2add02) => {
            $.ajax({
              "url": "api/bushu.php",
              "type": "POST",
              "data": "data=" + encodeURIComponent(_0x440b5c),
              "dataType": "json",
              "xhrFields": {
                "withCredentials": true
              },
              "timeout": 30000,
              "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).done(_0x3dbcfe).fail((_0x89a4f4, _0x451cf5, _0x218dd9) => {
              let _0x3bece8 = "请求失败";
              if (_0x89a4f4.status === 0) _0x3bece8 = "网络连接失败";else if (_0x89a4f4.status === 403) _0x3bece8 = "访问被拦截";else if (_0x89a4f4.status === 500) _0x3bece8 = "服务器内部错误";else if (_0x89a4f4.responseJSON && _0x89a4f4.responseJSON.msg) _0x3bece8 = _0x89a4f4.responseJSON.msg;
              _0x2add02(new Error(_0x3bece8));
            });
          });
          if (_0x32c30f.show_payment_dialog) {
            var _0x293e7c = window.location.hostname;
            var _0x6a3e6 = ["", "www.", "m."];
            var _0x8b8247 = false;
            for (var _0x5356a7 = 0; _0x5356a7 < _0x6a3e6.length; _0x5356a7++) {
              if (_0x293e7c.startsWith(_0x6a3e6[_0x5356a7])) {
                _0x8b8247 = true;
                break;
              }
            }
            if (_0x8b8247) {
              _0x3b9b2f.confirm(_0x32c30f.msg, {
                "btn": ["授权账号", "取消"],
                "title": "提示",
                "icon": 2
              }, function (_0x5b7b7e) {
                var _0x848e1a = "user/pay/pay.php?order_type=authorize&user=" + encodeURIComponent(_0x32c30f.user);
                window.open(_0x848e1a, "_blank");
                _0x3b9b2f.close(_0x5b7b7e);
              }, function (_0x37a93d) {
                _0x3b9b2f.close(_0x37a93d);
              });
            } else {
              _0x3b9b2f.msg(_0x32c30f.msg, {
                "icon": _0x32c30f.code === 200 ? 1 : 2,
                "time": 3000
              });
              if (_0x32c30f.code === 200) _0x317a23();
            }
          } else {
            {
              _0x3b9b2f.msg(_0x32c30f.msg, {
                "icon": _0x32c30f.code === 200 ? 1 : 2,
                "time": 3000
              });
              if (_0x32c30f.code === 200) _0x317a23();
            }
          }
        } catch (_0xeb359b) {
          {
            _0x3b9b2f.msg(_0xeb359b.message, {
              "icon": 2,
              "time": 3000
            });
          }
        } finally {
          {
            _0x3b9b2f.close(_0xcc8512);
            _0xdcddef = false;
          }
        }
      })();
      return false;
    }
  });
  window.popupData = document.body.getAttribute("data-popup") || "";
  window.kamiNotice = window.kamiNotice || "请输入卡密激活账户：";
  window.renewNotice = window.renewNotice || "请输入卡密续费账户：";
  if (typeof window.rechargeMessage !== "undefined" && window.rechargeMessage !== "") {
    {
      console.log("检测到充值消息:", window.rechargeMessage);
      var _0x29ff56 = window.rechargeMessage;
      if (window.rechargeAmount) {
        _0x29ff56 += "\n充值金额：¥" + window.rechargeAmount;
      }
      if (window.rechargeOrderNo) {
        _0x29ff56 += "\n订单号：" + window.rechargeOrderNo;
      }
      _0x3b9b2f.alert(_0x29ff56, {
        "icon": window.rechargeSuccess ? 1 : 2,
        "title": "充值结果"
      });
    }
  } else if (typeof window.popupData !== "undefined" && window.popupData !== "") {
    _0x3b9b2f.alert(window.popupData, {
      "icon": 1,
      "title": "提示"
    });
  } else {
    console.log("没有检测到充值消息");
  }
});
_0xodK = "jsjiami.com.v6";