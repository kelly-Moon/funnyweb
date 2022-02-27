$(function(){
var posY=new Array();

$(window).load(function(){

posY[0]=0;
posY[1]=760;
posY[2]=1760;
})




	$('#nav_bg > #nav > .menu > ul > li > a').bind('click',function(){	
		idx=$('#nav_bg > #nav > .menu > ul > li > a').index($(this));

		$(this).parent().addClass('active').siblings().removeClass('active');
		$('body,html').animate({scrollTop:posY[idx]})
	})

	$(window).scroll(function(){
		if($(this).scrollTop()==0){
		$('#nav_bg > #nav > .menu > ul > li').eq(0).addClass('active').siblings().removeClass('active');
		}
		else if($(this).scrollTop()>775 && $(this).scrollTop()<posY[1]){
			$('#nav_bg > #nav > .menu > ul > li').eq(1).addClass('active').siblings().removeClass('active');
		}
		else if($(this).scrollTop()>posY[2]){
			$('#nav_bg > #nav > .menu > ul > li').eq(2).addClass('active').siblings().removeClass('active');
		}
	})



})// ready end






