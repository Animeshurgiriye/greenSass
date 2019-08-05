
function progressBar(){
  var elem = document.getElementById("progressBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
      width++; 
      elem.style.width = width + '%'; 
      }
    }
  }


function fadeOut() {
  $('#next').click(function(){
    $('#slideDiv').fadeOut(500);
  });

  $('#prev').click(function(){
    $('#slideDiv').fadeIn(500, function(){
      
    });
  });
}

function animateRight(obj, from, to){
  if(from >= to){         
    obj.style.visibility = 'hidden';
    return;  
  }
  else {
    var box = obj;
    box.style.Right = from + "px";
    setTimeout(function(){
    animateRight(obj, from + 1, to);
    }, 25) 
  }
}
   
function animateMe() {
  animateRight(document.getElementById('slideDiv') , 1, 400);
}


/*$('#next').click(function(){

});

$(document).ready(functio(){
    $('a#next').click(function(){
      $('.slideDiv').toggleClass('slideView');
    });
});


 /*function changeColor(){
  var obj = document.getElementsByClassName("discription1")

 if(obj[0].style.color=='#FFFFFF'){
      obj[0].style.color='#orange';
    } 
  else{
      obj[0].style.color='#orange';
    }
}*/

function moveDiv(divObj,pos){
  if(document.getElementById){
    var moveDiv = document.getElementById(divObj);
    moveDiv.style.right = pos + "px";
    }
}