// 操作DOM元素，把content显示到网页上
function show(content){
  window.document.getElementById('app').innerText = 'Hello,' + content;
}

// 通过CommonJS规范导出show函数
module.exports = show;