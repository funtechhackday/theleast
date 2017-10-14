$(document).ready(function(){
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

var clicked = 0;  

$(".num").click(function(){
	clicked = 1;   
	var tds = document.getElementsByTagName("td");
	var min = Number(tds[0].innerHTML);
	for (var i = 0; i < tds.length; i++) {
		if (min > Number(tds[i].innerHTML)) {
			min = Number(tds[i].innerHTML);
		}
	}
	var clicknum = $(this).html();
	var scorestr = document.getElementById('score').innerHTML;
	var score = Number(scorestr);
	if (clicknum == min) {
		score = score + 10;
		document.getElementById('score').innerHTML = + score;
		var array = [];
		array[0] = randomInteger(0, 25);
		for (i = 1; i < tds.length; i++) {
			array[i] = randomInteger(0, 25);
			for (var j = 0; j < i; j++) {
			if (array[i] == array[j]) {
				array[j] = array[j] + 1 + j;
			}
		}
		
		}
	
		for (i = 0; i < tds.length; i++) {
			tds[i].innerHTML = Number(array[i]);
		}
	} else {
		 //clearInterval(mytimer);
		 $('.game-start').hide();
		 $('.game-over').show();
		 $('.play-again').show();
	}
	
}); 

var mytimer = setInterval(function() {                                 
	if (clicked == 1) {
      clicked = 0;
    } else {
      $('.game-start').hide();
	  $('.game-table').hide();
	  $('.game-over').show();
	  $('.play-again').show();
	  clearInterval(mytimer);
    }
  }, 2000);
});
