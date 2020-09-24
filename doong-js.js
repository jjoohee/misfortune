
window.onscroll = function(){
        var t =document.documentElement.scrollTop + document.body.scrollTop;
        moniter.innerHTML = t

            if (t > 2800) {
            human1_1.style.opacity = "100%";

            }
            else{
                 human1_1.style.opacity = "";
            }

            if (t > 3400) {
            hand1.style.opacity = "0%";
            hand1.style.right = "300px";
            hand1.style.top = "3150px";
            hand1.style.transform = "rotate(-10deg)";

            hand2.style.opacity = "0%";
            hand2.style.right = "100px";
            hand2.style.top = "3000px";
            hand2.style.transform = "rotate(-30deg)";

            hand1_1.style.opacity = "0%";
            hand1_1.style.left = "250px";
            hand1_1.style.top = "3100px";
            hand1_1.style.transform = "rotate(20deg)";

            hand3.style.opacity = "0%";
            hand3.style.left = "100px";
            hand3.style.top = "3000px";
            hand3.style.transform = "rotate(-30deg)";

            }
            else{
            hand1.style.opacity = "";
            hand1.style.right = "";
            hand1.style.top = "";
            hand1.style.transform = "";

            hand2.style.opacity = "";
            hand2.style.right = "";
            hand2.style.top = "";
            hand2.style.transform = "";

            hand1_1.style.opacity = "";
            hand1_1.style.left = "";
            hand1_1.style.top = "";
            hand1_1.style.transform = "";

            hand3.style.opacity = "";
            hand3.style.left = "";
            hand3.style.top = "";
            hand3.style.transform = "";
            }
    }    

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

//로딩화면

 document.addEventListener("DOMContentLoaded", function() {
    requestAnimationFrame(function() {
            document.getElementById("loadingBar").style.width = "100%";
      });
    });

window.onload = function () {
document.getElementById("loadingIndicator").style.opacity = "0";
setTimeout(function() {
    document.getElementById("loadingIndicator").style.display = "none";}, 450);
}
