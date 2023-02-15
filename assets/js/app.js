const imageWidth = 748;
let currentIndex = 0;
let nIndex = $('.slide').length;
let tempIndex = 0;
function nextSlide() {
    tempIndex = currentIndex + 1;
    if (tempIndex > nIndex -1) {
        tempIndex = 0;
    }
    console.log("next");
    animation(tempIndex, 1);
}
function prevSlide() {
    tempIndex = currentIndex - 1;
    if (tempIndex < 0) {
        tempIndex = nIndex -1;
    }
    console.log("prev");
    animation(tempIndex, -1);
}
function selectSlide(){
    console.log("any");
}
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
function animation(newIndex, way){
    let distance = 0;
    console.log(`new la ${newIndex}, old la ${currentIndex}, nIndex la ${nIndex}`);
    let x = 0;
    if(currentIndex === 0 && newIndex === nIndex-1 || currentIndex === nIndex-1 && newIndex === 0){
        x = 1;
        console.log(true);
    }
    else {
        x = Math.abs(currentIndex - newIndex);
        console.log(false);
    }
        if (way === 1){
            $('.slide').eq(newIndex).css({'left': imageWidth+'px'});
            slides[newIndex].className += ' active';
            dots[newIndex].className += ' active';
            distance = imageWidth;
        }
        else{
            //Prev
            $('.slide').eq(newIndex).css({'left': way*imageWidth+'px'});
            slides[newIndex].className += ' active';
            dots[newIndex].className += ' active';
        }
        console.log((-1)*way*748*x);
        dots[currentIndex].className = dots[currentIndex].className.replace(" active", "");
        $(".slider").animate({left: (-1)*way*748*x+'px' }, 1000, () => {
            $(".slide[currentIndex]").removeClass("active");
            console.log(slides.length);
            slides[currentIndex].className = slides[currentIndex].className.replace(" active", "");
            //dots[currentIndex].className = dots[currentIndex].className.replace(" active", "");
            currentIndex = newIndex;
            $(".slider").css("left", 0);
            $('.slide').eq(newIndex).css({'left': -0});
        });
}
function renderdots(Quantity){
    let dots = "";
    for( let i = 0; i < Quantity; i++) {
        dots += "<span "+(currentIndex===i? "class='dot active'": "class='dot'")+" alt="+i+"></span>";
    }
    $('.dots').html(dots);
}
$(document).ready(function(){
    //Khoi tao dots
    renderdots(nIndex);
    $(".next").click(nextSlide);
    $(".prev").click(prevSlide);
    $(".dots").click(selectSlide);
});
