function index(){
  indexItems = Array.prototype.slice.call( document.getElementsByTagName('h2') )
  indexContainer = document.getElementById('index')
  indexItems.forEach(function(item, index){
    var link = document.createElement('a');
    var li = document.createElement('li');
    var res = item.innerText.split(". ");
    link.innerHTML = res[1];
    li.appendChild(link);
    li.classList.add('rounded-list-item')
    indexContainer.append(li)
    addIdstoHeaders(item, index, link);
    hideNumeralsfromHeaders(item)
    addCirclesToHeaders(item, index);

  });

}
 index();

 function addIdstoHeaders(item, index, link){
   item.id = index;
   link.setAttribute('href', '#' + index);
 }

function hideNumeralsfromHeaders(item){
  sub = item.innerText.split(". ")
  item.innerText = sub[1];
}

function addCirclesToHeaders(item, index){
  var number = document.createElement('span');
  number.innerHTML = index;
  number.classList.add('f6', 'bg-red', 'pa1', 'br-pill', 'white', 'dib', 'tc', 'w1', 'h1', 'mr3')
  item.prepend(number);
}
