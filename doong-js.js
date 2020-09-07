//흉둥이

human.onclick = function(){
	human.style.opacity = "0%";
	human_1.style.opacity = "100%";
}

human1_1.onclick = function(){
	human1_1.style.opacity = "100%";
}


//human1-.onclick = function(){	bodyy.style.position = "relative";}

//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
       var url = "https://jjoohee.github.io/battle-of-misfortunes/";
		$(location).attr('href',url);
        
    }
});
