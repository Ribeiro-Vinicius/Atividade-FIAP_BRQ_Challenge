 // Create a "close" button and append it to each list item
 var myNodelist = document.getElementsByTagName("LI");
 var i;
 for (i = 0; i < myNodelist.length; i++) {
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   myNodelist[i].appendChild(span);
 }
 
 // Click on a close button to hide the current list item
 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }
 
 // Add a "checked" symbol when clicking on a list item
 var list = document.querySelector('ul');
 list.addEventListener('click', function(ev) {
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
   }
 }, false);
 
 // Create a new list item when clicking on the "Add" button
 function newElement() {
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
     alert("Você deve escrever alguma coisa!");
   } else {
     document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";
 
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 } 

/* 
let input = doucment.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = doucment.querySelector('.tasks');

input.addEventListener('keyup', () => {
  if(input.value.trim() != 0){
    addBtn.classList.add('active')
  } else {
    addBtn.classList.remove('active')
  }
} )


addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
      let newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = 
      <><p> ${input.value} </p><div class="item-btn">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-xmark"></i>
        </div></>

    tasks.appendChild(newItem);
    input.value = '';
  } else {
      alert('Please')
  }



  }
) */