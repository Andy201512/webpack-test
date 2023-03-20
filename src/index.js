// 通过CommonJS规范导入show函数
const show = require('./show.js');
// 执行show函数
show('Webpack');

// 显式要求引入lodash
import _ from 'lodash';
import "./css/file.css";
import "./css/file.less";
import "./css/file.scss";

function component(){
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'lodash'], ',');

  return element;
}

document.body.appendChild(component());
