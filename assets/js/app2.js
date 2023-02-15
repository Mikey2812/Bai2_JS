const imageWidth = 748;
let currentIndex = 0;
let nIndex = $('.slide').length;
let oldIndex = 0;
let isDone = true;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
function nextSlide() { 
    let tempIndex = parseInt(oldIndex);
    tempIndex = tempIndex + 1;
    if (tempIndex > nIndex -1) {
        tempIndex = 0;
    }
    animation(tempIndex, 1, 1);
}
function prevSlide() {
    let tempIndex = parseInt(oldIndex);
    tempIndex = tempIndex - 1;
    if (tempIndex < 0) {
        tempIndex = nIndex - 1;  
    }
    animation(tempIndex, -1, 1);
}
function selectSlide(selectIndex){
    const jump = Math.abs(selectIndex - oldIndex);
    const way = (selectIndex > oldIndex) ? 1 : -1;
    if (jump === 1) {
        if(way === 1) {
            nextSlide();
        }
        else {
            prevSlide();
        }
    }
    else{
        animation(selectIndex, way, jump)
    }
    
}
function animation(newIndex, way, x){
    // Neu index cu = index moi => k chay
    if( parseInt(newIndex) === parseInt(oldIndex)) {
        isDone = true;
        return;
    }
    isDone = false;
    // x la so buoc nhay newIndex: Index moi
    // way: huong di (1: tu phai sang trai, -1 tu trai sang phai)
    
    //Xu Li anh
    let tempIndex = parseInt(oldIndex);
    for(let i = 1; i <= x; i++){
        tempIndex = tempIndex + way;
        if(tempIndex > nIndex-1) tempIndex = 0;
        else if (tempIndex < 0) tempIndex = nIndex - 1;
        $('.slide').eq(tempIndex).css({'left': way*imageWidth*i+'px'});
        slides[tempIndex].className += ' active';
    }
    //Xu ly dot
    dots[newIndex].className += ' active';
    dots[oldIndex].className = dots[oldIndex].className.replace(" active", "");
    // Hieu ung + xu ly anh
    $(".slider").animate({left: (-1)*way*748*x+'px' }, 200, () => {
        for(let i = 1; i <= x; i++) {
            tempIndex = tempIndex - way;
                if(tempIndex < 0) tempIndex = nIndex-1;
                else if (tempIndex > nIndex-1) tempIndex = 0;
            slides[tempIndex].className = slides[tempIndex].className.replace(" active", "");
            $('.slide').eq(newIndex).css({'left': 0});
            $(".slider").css("left", 0);
            oldIndex = newIndex;
            isDone = true;
        }
            
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
    $(".next").click(function(e){
        if (isDone == false) {
            e.preventDefault();
        }
        else {
            nextSlide();
        }
    });
    $(".prev").click(function(e){
        if (isDone == false) {
            e.preventDefault();
        }
        else {
            prevSlide();
        }
    });
    let selectIndex = 0;
    $(".dot").eq(0).click(function(e){
        if (isDone == false) {
            e.preventDefault();
        }
        else {
            selectIndex = $('.dot').eq(0).attr('alt');
            selectSlide(selectIndex);
        }
    });
    $(".dot").eq(1).click(function(e){
        if (isDone == false) {
            e.preventDefault();
        }
        else {
            selectIndex = $('.dot').eq(1).attr('alt');
            selectSlide(selectIndex);
        }
    });
    $(".dot").eq(2).click(function(e){
        if (isDone == false) {
            e.preventDefault();
        }
        else {
            selectIndex = $('.dot').eq(2).attr('alt');
            selectSlide(selectIndex);
        }
    });
});
