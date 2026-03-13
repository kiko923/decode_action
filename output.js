//Fri Mar 13 2026 12:44:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let autoStatus = false;
function setToggleButtonStatus(_0xb84fc) {
  const _0x1d5afe = document.getElementById("customToggleSwitch");
  const _0x286ab0 = document.getElementById("toggleKnob");
  autoStatus = _0xb84fc !== 5;
  if (autoStatus) {
    _0x1d5afe.style.background = "#4caf50";
    _0x286ab0.style.left = "28px";
  } else {
    _0x1d5afe.style.background = "#ddd";
    _0x286ab0.style.left = "2px";
  }
}
function updateAutoStatusDisplay(_0x36d1c5) {
  var _0x210656 = document.getElementById("autoExpiryInfo");
  var _0x4e9c03 = document.getElementById("autoExpiryIcon");
  var _0x8444e8 = document.getElementById("autoExpiryTitle");
  var _0x47968a = document.getElementById("autoExpiryText");
  var _0x353d1e = document.getElementById("autoExpiryProgress");
  var _0x520783 = _0x210656.querySelector("div[style*=\"background: linear-gradient\"]");
  if (_0x36d1c5.is_expired) {
    _0x520783.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
    _0x4e9c03.innerHTML = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
    _0x8444e8.innerHTML = "账户已过期";
    _0x47968a.innerHTML = "当前账号：" + _0x36d1c5.username + "<br>到期时间：" + _0x36d1c5.expiry_date + "<br>已过期： " + Math.abs(_0x36d1c5.days_remaining) + "<span style=\"margin-left:2px;\">天</span>";
    _0x353d1e.style.background = "rgba(255,255,255,0.8)";
    _0x353d1e.style.width = "100%";
  } else {
    var _0x1b7da9 = _0x36d1c5.mode == 1 ? "定时提交" : "模拟走路";
    var _0x4ca736 = _0x36d1c5.stats === 5 ? "关闭托管" : _0x36d1c5.status || "等待提交";
    {
      var _0x3bcf1e = "";
      var _0x400749 = "";
      switch (_0x4ca736) {
        case "关闭托管":
          _0x3bcf1e = "linear-gradient(135deg, #9e9e9e 0%, #757575 100%)";
          _0x400749 = "<i class=\"layui-icon layui-icon-pause\" style=\"color: white; font-size: 18px;\"></i>";
          break;
        case "运行正常":
          _0x3bcf1e = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
          _0x400749 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
          break;
        case "密码错误":
          _0x3bcf1e = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
          _0x400749 = "<i class=\"layui-icon layui-icon-close\" style=\"color: white; font-size: 18px;\"></i>";
          break;
        case "等待执行":
        case "等待提交":
          _0x3bcf1e = "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)";
          _0x400749 = "<i class=\"layui-icon layui-icon-time\" style=\"color: white; font-size: 18px;\"></i>";
          break;
        default:
          _0x3bcf1e = "linear-gradient(135deg, #4caf50 0%, #45a049 100%)";
          _0x400749 = "<i class=\"layui-icon layui-icon-ok\" style=\"color: white; font-size: 18px;\"></i>";
      }
      _0x520783.style.background = _0x3bcf1e;
      _0x4e9c03.innerHTML = _0x400749;
      _0x8444e8.innerHTML = "自动托管：" + _0x4ca736;
      _0x47968a.innerHTML = "当前账号：" + _0x36d1c5.username + "<br>到期时间：" + _0x36d1c5.expiry_date + "<br>剩余天数： " + _0x36d1c5.days_remaining + "<span style=\"margin-left:2px;\">天</span><br>运行时间：" + (_0x36d1c5.run_time || "未设置") + "<br>运行模式：" + _0x1b7da9 + "<br>步数范围：" + _0x36d1c5.min_steps + "~" + _0x36d1c5.max_steps + "<br>当前步数：" + (_0x36d1c5.current_steps || 0);
      _0x353d1e.style.background = "rgba(255,255,255,0.8)";
      var _0x58f74d = Math.max(5, Math.min(30, 100 - _0x36d1c5.days_remaining / 30 * 100));
      _0x353d1e.style.width = _0x58f74d + "%";
    }
  }
  _0x210656.style.display = "block";
}
function toggleAutoStatus() {
  const _0x118e57 = document.getElementById("customToggleSwitch");
  const _0x23fbe9 = document.getElementById("toggleKnob");
  let _0x287122 = "";
  const _0x31e233 = ["userInput", "user1", "kami_user"];
  for (let _0x57f02f of _0x31e233) {
    {
      const _0x3e1609 = document.getElementById(_0x57f02f);
      if (_0x3e1609 && _0x3e1609.value.trim()) {
        {
          _0x287122 = _0x3e1609.value.trim();
          break;
        }
      }
    }
  }
  if (!_0x287122) {
    {
      layui.layer.msg("请先输入用户名", {
        "icon": 5,
        "time": 2000
      });
      return;
    }
  }
  fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x287122)).then(_0x438e95 => _0x438e95.json()).then(_0x12c2c7 => {
    if (_0x12c2c7.success) {
      const _0x4b2fd6 = _0x12c2c7.stats;
      const _0x1ce24d = _0x4b2fd6 === 5 ? 0 : 5;
      return fetch("api/api.php?action=update_stats&username=" + encodeURIComponent(_0x287122) + "&stats=" + _0x1ce24d);
    } else {
      throw new Error(_0x12c2c7.message || "获取状态失败");
    }
  }).then(_0x39dd0f => _0x39dd0f.json()).then(_0x44fbd9 => {
    {
      if (_0x44fbd9.success) {
        const _0x3903b0 = _0x44fbd9.stats;
        setToggleButtonStatus(_0x3903b0);
        fetch("api/api.php?type=auto&username=" + encodeURIComponent(_0x287122)).then(_0xe413ff => _0xe413ff.json()).then(_0x3a0efb => {
          console.log("Auto接口调用结果:", _0x3a0efb);
          if (_0x3a0efb.success) {
            {
              updateAutoStatusDisplay(_0x3a0efb);
            }
          }
        }).catch(_0x369c12 => {
          console.error("Auto接口调用失败:", _0x369c12);
        });
      } else {
        throw new Error(_0x44fbd9.message || "更新状态失败");
      }
    }
  }).catch(_0x1960e3 => {
    {
      console.error("Error:", _0x1960e3);
      layui.layer.msg("操作失败：" + _0x1960e3.message, {
        "icon": 2,
        "time": 2000
      });
    }
  });
}
_0xod7 = "jsjiami.com.v6";