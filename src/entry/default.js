function component(){
  var element = document.createElement('div');

  element.innerHTML = 'Hello default';

  return element;
}

document.body.appendChild(component());