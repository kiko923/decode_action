//Fri Mar 13 2026 12:42:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function isUrl(_0x519b5e) {
  var _0x38531f = /^https?:\/\/.+/i;
  return _0x38531f.test(_0x519b5e.trim());
}
function handleButtonClick(_0x180a60) {
  if (isUrl(_0x180a60)) {
    window.open(_0x180a60, "_blank");
  } else {
    {
      showButtonAlert(_0x180a60);
    }
  }
}
function showButtonAlert(_0x3d85e6) {
  layui.use("layer", function () {
    var _0x2a9753 = layui.layer;
    _0x2a9753.alert(_0x3d85e6, {
      "shadeClose": true
    });
  });
}
layui.use("element", function () {
  var _0xb4d9b0 = layui.element;
  $(document).off("click", "#openSubsite").on("click", "#openSubsite", function (_0x3897d3) {
    _0x3897d3.preventDefault();
    _0x3897d3.stopImmediatePropagation();
    window.location.href = "/user/subsite.php";
  });
  $(document).off("click", "li[data-tab-index=\"kami\"]").on("click", "li[data-tab-index=\"kami\"]", function (_0x3c0caa) {
    _0x3c0caa.preventDefault();
    _0x3c0caa.stopImmediatePropagation();
    _0xb4d9b0.tabChange("stepTab", "kami");
    $(".layui-tab-title li").removeClass("layui-this");
    $(this).addClass("layui-this");
    $(".layui-tab-content .layui-tab-item").removeClass("layui-show");
    $(".layui-tab-content .layui-tab-item").eq(2).addClass("layui-show");
  });
});
_0xodz = "jsjiami.com.v6";