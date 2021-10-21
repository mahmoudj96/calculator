//    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

var curVal,
  prevVal,
  pressedOp,
  newInputToggle,
  display,
  storedOp,
  doTheMath,
  ans,
  displayLength,
  mem;
(curVal = prevVal = storedOp), (calcActive = null);
newInputToggle = true;
displayLength = 9;
mem = 0;
var display = document.getElementById("display");
var num = document.querySelectorAll(".num");
for(var i=0;i<num.length;i++){
  num[i].addEventListener("click",function(){
    if(newInputToggle){
      display.value = "";
      newInputToggle = false;
      calcActive = true;
      storedOp = pressedOp;
      ce.textContent="C";
      
      
    }
    if(display.value.length<9&&this.textContent!=="."){
      display.value=display.value+this.textContent;
    }
    if(this.textContent==="."){
      if((display.value).length===0){
        console.log(display.value);
        display.value=display.value+"0"+this.textContent;
      }
      if(!(display.value).includes(".")){
        display.value=display.value+this.textContent;
      }
    }
    });
}
//لعمل فراغ بين الارقام 
/* function space (str){
  var arr=str.split("").reverse().filter(item => item != ' ');
  if(arr.length>3){
    for(var i=3;i<arr.length;i+=4){
      arr.splice(i, 0, " ");
    }
  }
  return arr.reverse().join("");
} */
var opr = document.querySelectorAll(".opr");
for(var i=0;i<opr.length;i++){
  opr[i].addEventListener("click",function(){
    pressedOp=this.textContent;
    newInputToggle=true;
    if (!prevVal) {
      prevVal = Number(display.value);
      calcActive = false;
    } 
    else if (calcActive) {
      curVal = Number(display.value);
      ans = doTheMath[storedOp](prevVal, curVal)
      display.value=truncateAns(ans);
      calcActive = false;
    }
    if (pressedOp === '=') {
        prevVal = null;
      } else {
        prevVal = Number(display.value);
      }
    });
}
doTheMath = {
  '+': function(a, b) {
    return a + b;
  },
  '-': function(a, b) {
    return a - b;
  },
  '×': function(a, b) {
    return a * b;
  },
  '÷': function(a, b) {
    return a / b;
  },
  '=': function(a, b) {
    return b;
  }
};
function truncateAns(num) {
  if (num === Infinity){
    return '8008135'
  } else if (num > Math.pow(10, displayLength - 1)) {
    return num.toExponential(displayLength - 5).toString().
    replace(/\.0+e/, 'e');
  } else if (num.toString().length >= displayLength) {
    return num.toFixed(displayLength - Math.round(num).toString().length - 1).
    toString().
    replace(/\.0+e/, 'e');
  } else {
    return num;
  }
}


var ce = document.querySelector(".ce");
ce.addEventListener("click",function(){
  curVal = prevVal = storedOp = null;
  newInputToggle = true;
  display.value='0';
  ce.textContent="CE";
});


var memkey = document.querySelectorAll(".mem-key");
for(var i=0;i<memkey.length;i++){
  memkey[i].addEventListener("click",function(){
    var pressedmem = this.textContent
    
 switch (pressedmem) {     
    case 'M+':
      mem += Number(display.value);
      newInputToggle = true;
      break;
    case 'M-':
      mem -= Number(display.value);
      newInputToggle=true;
      break;
    case 'MC':
      mem = 0;
      break;
    case 'MR':
      display.value=mem;
      newInputToggle=true;
      calcActive = true;
      storedOp = pressedOp;
  }
  });
}
var plusmins = document.querySelector(".plusmins");
plusmins.addEventListener("click",function(){
display.value=0 - display.value;
  

});
var opr1 = document.querySelectorAll(".opr1");
for(var i=0;i<opr1.length;i++){
  opr1[i].addEventListener("click",function(){
    var storedopr1=this.textContent;
    ans=doTheMath1[storedopr1](display.value);
    display.value=truncateAns(ans)
  })
}
var doTheMath1 ={
  "√": function(a){
    return Math.sqrt(a);
  },
  "%": function(a){
    return a/100;
  },
  "1/X": function(a){
    return 1/a;
  },
  "NIS/USD": function(a){
    return a/3.2;
  },
  "USD/NIS": function(a){
    return a*3.2;
  },
  "NIS/EUR": function(a){
    return a/3.74;
  },
  "EUR/NIS": function(a){
    return a*3.74;
  }
}