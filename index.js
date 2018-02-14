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

//function called deepest child
//pulls out the most deeply nested child
//id div #grand-node
//looks along one parent-child branch, no siblings







