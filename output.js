//Mon Dec 16 2024 19:09:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x49f5c8 = function () {
  var _0x5284d0 = true;
  return function (_0x35a81c, _0xf2551d) {
    var _0x522dc2 = _0x5284d0 ? function () {
      if (_0xf2551d) {
        var _0x4d7b63 = _0xf2551d.apply(_0x35a81c, arguments);
        _0xf2551d = null;
        return _0x4d7b63;
      }
    } : function () {};
    _0x5284d0 = false;
    return _0x522dc2;
  };
}();
(function () {
  _0x49f5c8(this, function () {
    {
      var _0x1630c2 = new RegExp("function *\\( *\\)"),
        _0x3921eb = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x4db912 = _0x46fbb2("init");
      if (!_0x1630c2.test(_0x4db912 + "chain") || !_0x3921eb.test(_0x4db912 + "input")) {
        _0x4db912("0");
      } else _0x46fbb2();
    }
  })();
})();
(function () {
  var _0x50806a = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  _0x50806a.setInterval(_0x46fbb2, 2000);
})();
$(function () {
  var _0x27cec3 = $("meta[name='_t']").attr("content"),
    _0x5e5580 = "<div id=\"jquery_jplayer_1\" class=\"jp-jplayer\"></div><div id=\"jp_container_1\" class=\"jp-audio\"><div class=\"jp-type-single\"><div class=\"jp-gui jp-interface\"><ul class=\"jp-controls\"><li><a href=\"javascript:;\" class=\"jp-play\" tabindex=\"1\">play</a></li><li><a href=\"javascript:;\" class=\"jp-pause\" tabindex=\"1\">pause</a></li><li><a href=\"javascript:;\" class=\"jp-stop\" tabindex=\"1\">stop</a></li><li><a href=\"javascript:;\" class=\"jp-mute\" tabindex=\"1\" title=\"mute\">mute</a></li><li><a href=\"javascript:;\" class=\"jp-unmute\" tabindex=\"1\" title=\"unmute\">unmute</a></li><li><a href=\"javascript:;\" class=\"jp-volume-max\" tabindex=\"1\" title=\"max volume\">max volume</a></li></ul><div class=\"jp-progress\"><div class=\"jp-seek-bar\"><div class=\"jp-play-bar\"></div></div></div><div class=\"jp-volume-bar\"><div class=\"jp-volume-bar-value\"></div></div><div class=\"jp-time-holder\"><div class=\"jp-current-time\"></div><div class=\"jp-duration\"></div><ul class=\"jp-toggles\"><li><a href=\"javascript:;\" class=\"jp-repeat\" tabindex=\"1\" title=\"repeat\">repeat</a></li><li><a href=\"javascript:;\" class=\"jp-repeat-off\" tabindex=\"1\" title=\"repeat off\">repeat off</a></li></ul></div></div><div class=\"jp-title\"><ul><li style=\"position: relative;\"><span style=\"float: right;\"><a href=\"javascript:location.reload();\" style=\"color: #eee;\">刷新</a></span><span style=\"width: 580px;color: #eee;overflow: hidden;display:-webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;\">" + _0x27cec3 + "</span></li></ul></div><div class=\"jp-no-solution\"> <span>Update Required</span> To play the media you will need to either update your browser to a recent version or update your <a href=\"http://get.adobe.com/flashplayer/\" target=\"_blank\">Flash plugin</a>. </div></div>";
  $("#thisbody").html(_0x5e5580);
  $("#jquery_jplayer_1").jPlayer({
    "swfPath": "jplayer",
    "supplied": "mp3,m4a",
    "wmode": "window",
    "useStateClassSkin": true
  });
  _0x53800d();
  $("#jquery_jplayer_1").on($.jPlayer.event.ended, function (_0x24884c) {
    _0x4cb4d4();
  });
  $("#jquery_jplayer_1").on($.jPlayer.event.error, function (_0x6b9c64) {
    $("#tiquma .media").show();
    $(".fixed_bg .tiquma p").html("抱歉,音频加载失败！");
    _0x5dc9f3();
  });
});
function _0x53800d() {
  var _0x57c8fc = $("meta[name='_b']").attr("content"),
    _0x542a03 = $("meta[name='_d']").attr("content"),
    _0x58fea9 = $("meta[name='_p']").attr("content"),
    _0x223166 = Math.round(new Date().getTime() / 1000).toString();
  $(".lred").text("");
  var _0x26f058 = {};
  _0x26f058.sc = $("meta[name='_c']").attr("content");
  _0x26f058.sp = _0x1adbe6($("meta[name='_c']").attr("content"));
  $.ajax({
    "url": "/api/mapi/play",
    "data": {
      "nid": _0x57c8fc,
      "cid": _0x58fea9,
      "sort": _0x542a03
    },
    "dataType": "json",
    "type": "POST",
    "headers": _0x26f058,
    "success": function (_0x8a2754) {
      {
        if (_0x8a2754.status == 200) $("#jquery_jplayer_1").jPlayer("setMedia", {
          "mp3": _0x8a2754.url,
          "m4a": _0x8a2754.url
        }).jPlayer("play");else {
          $("#tiquma .media").show();
          $(".fixed_bg .tiquma p").html(_0x8a2754.msg);
          _0x5dc9f3();
        }
      }
    }
  });
}
function _0x1adbe6(_0x26997f) {
  var _0x4e737a = "PXhw7U1B0a9kQDKZsTjIASmOeNzxYG4CHo1JyRfg2b8FLpEvr3FtVnlqMidu6c",
    _0x31a1c1 = "";
  for (var _0xfcf7a = 0; _0xfcf7a < _0x26997f.length; _0xfcf7a++) {
    var _0x29cd6f = _0x4e737a.indexOf(_0x26997f[_0xfcf7a]);
    if (_0x29cd6f == -1) var _0xcccf3a = _0x26997f[_0xfcf7a];else var _0xcccf3a = _0x4e737a[(_0x29cd6f + 3) % 62];
    var _0x30392b = parseInt(Math.random() * 62, 10);
    var _0x384bb5 = parseInt(Math.random() * 62, 10);
    _0x31a1c1 += _0x4e737a[_0x30392b] + _0xcccf3a + _0x4e737a[_0x384bb5];
  }
  return _0x31a1c1;
}
function _0x4cb4d4() {
  window.location.href = document.getElementById("nexturl").href;
}
$(".shut_tiquma").on("click", function () {
  $("#tiquma .media").hide();
  $("html").removeClass("w_h_100");
  _0x7b044a();
});
function _0x5dc9f3() {
  $("body").css({
    "overflow": "hidden",
    "height": "100%"
  });
  $("html").css({
    "overflow": "hidden",
    "height": "100%"
  });
}
function _0x7b044a() {
  $("body").css({
    "overflow": "scroll"
  });
  $("html").css({
    "overflow": "scroll"
  });
}
$(".ptm-alert-shade").on("click", function () {
  $("#tiquma .media").hide();
  $("html").removeClass("w_h_100");
  _0x7b044a();
});
function _0x46fbb2(_0x1109f7) {
  function _0x290d4c(_0x24fdea) {
    if (typeof _0x24fdea === "string") {
      var _0x5853d8 = function () {
        while (true) {}
      };
      return _0x5853d8();
    } else {
      if (("" + _0x24fdea / _0x24fdea).length !== 1 || _0x24fdea % 20 === 0) {
        a = 12;
      } else {
        adasd = 11;
      }
    }
    _0x290d4c(++_0x24fdea);
  }
  try {
    if (_0x1109f7) return _0x290d4c;else _0x290d4c(0);
  } catch (_0x3de5d2) {}
}