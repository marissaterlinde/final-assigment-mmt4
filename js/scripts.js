
var player = videojs('player');
var player2 = videojs('player2');
var player3 = videojs('player3');
var player4 = videojs('player4');
var player5 = videojs('player5');
var playBtn = $('#play');
var playBtn2 = $('#play2');
var playBtn3 = $('#play3');
var playBtn4 = $('#play4');
var playBtn5 = $('#play5');
var rewindBtn =$('#rewind')
var rewindBtn2 =$('#rewind2')
var rewindBtn3 =$('#rewind3')
var rewindBtn4 =$('#rewind4')
var rewindBtn5 =$('#rewind5')



$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
    });
  } );




  $("#h3").click(function(){
    if($("#h3").hasClass('active')){
        //uit
        $("#h3").removeClass('active');
        
    } else{
        //aan
        $("#h3").addClass('active');
        
    }
});



player.on('ready', function() {
    playBtn.click( function(){
        if(!player.paused()){
        player.pause();    
        }else{
            player.play();
        }
    });
});

player2.on('ready', function() {
    playBtn2.click( function(){
        if(!player2.paused()){
        player2.pause();    
        }else{
            player2.play();
        }
    });
});

player3.on('ready', function() {
    playBtn3.click( function(){
        if(!player3.paused()){
        player3.pause();    
        }else{
            player3.play();
        }
    });
});

player4.on('ready', function() {
    playBtn4.click( function(){
        if(!player4.paused()){
        player4.pause();    
        }else{
            player4.play();
        }
    });
});

player5.on('ready', function() {
    playBtn5.click( function(){
        if(!player5.paused()){
        player5.pause();    
        }else{
            player5.play();
        }
    });
});



rewindBtn.click( function(){
    var time = player.currentTime();
    player.currentTime(time - 10);
});

rewindBtn2.click( function(){
    var time = player2.currentTime();
    player2.currentTime(time - 10);
});

rewindBtn3.click( function(){
    var time = player3.currentTime();
    player3.currentTime(time - 10);
});

rewindBtn4.click( function(){
    var time = player4.currentTime();
    player4.currentTime(time - 10);
});

rewindBtn5.click( function(){
    var time = player5.currentTime();
    player5.currentTime(time - 10);
});


player.on('ended', function(){
    $("body".css({"background": "green"}));
});

player2.on('ended', function(){
    $("body".css({"background": "green"}));
});

player3.on('ended', function(){
    $("body".css({"background": "green"}));
});

player4.on('ended', function(){
    $("body".css({"background": "green"}));
});

player5.on('ended', function(){
    $("body".css({"background": "green"}));
});


$(document).ready(function(){
    $('ul').click(function(){
        $('li').toggleClass('active')
        $('body').toggleClass('dark')
        $('header').toggleClass('dark')
        $('support').toggleClass('dark')
        $('#accordion-container').toggleClass('dark')
        $('#playlistkop').toggleClass('dark')
        $('#container').toggleClass('dark')
    })



});

$("#modal").click(function(){
	if($(this).css('opacity') == 0.2){
		$(this).animate({opacity:1}, 1000);
	} else{
		$(this).animate({opacity:1}, 1000);
	}
});

$("#modal2").click(function(){
	if($(this).css('opacity') == 0.2){
		$(this).animate({opacity:1}, 1000);
	} else{
		$(this).animate({opacity:1}, 1000);
	}
});

$("#modal22").click(function(){
	if($(this).css('opacity') == 0.2){
		$(this).animate({opacity:1}, 1000);
	} else{
		$(this).animate({opacity:1}, 1000);
	}
});

$("#modal23").click(function(){
	if($(this).css('opacity') == 0.2){
		$(this).animate({opacity:1}, 1000);
	} else{
		$(this).animate({opacity:1}, 1000);
	}
});

$("#modal3").click(function(){
	if($(this).css('opacity') == 0.2){
		$(this).animate({opacity:1}, 1000);
	} else{
		$(this).animate({opacity:1}, 1000);
	}
});

$("#done").click(function(){
	if($('#modal').css('opacity') == 0.2){
		$('#modal').animate({opacity:1}, 1000);
	} else{
		$('#modal').animate({opacity:1}, 1000);
	}
});

$("#done2").click(function(){
	if($('#modal2').css('opacity') == 0.2){
		$('#modal2').animate({opacity:1}, 1000);
	} else{
		$('#modal2').animate({opacity:1}, 1000);
	}
});

$("#done3").click(function(){
	if($('#modal22').css('opacity') == 0.2){
		$('#modal22').animate({opacity:1}, 1000);
	} else{
		$('#modal22').animate({opacity:1}, 1000);
	}
});

$("#done4").click(function(){
	if($('#modal23').css('opacity') == 0.2){
		$('#modal23').animate({opacity:1}, 1000);
	} else{
		$('#modal23').animate({opacity:1}, 1000);
	}
});

$("#done5").click(function(){
	if($('#modal3').css('opacity') == 0.2){
		$('#modal3').animate({opacity:1}, 1000);
	} else{
		$('#modal3').animate({opacity:1}, 1000);
	}
});

