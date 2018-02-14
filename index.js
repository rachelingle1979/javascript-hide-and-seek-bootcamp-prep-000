function getFirstSelector(selector){
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget(){
  const nestedTargetEl = document.getElementById('nested');
  return nestedTargetEl;
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 
  for (let i = 0; i < list.length; i++) {
    let num = parseInt(n);
    list[i].innerHTML = parseInt(list[i].innerHTML) + num;
  }
  
  return list;
}

function deepestChild(){
  const grandNode = document.querySelector('#grand-node div div div div')
  
  
  return grandNode;
  
}







