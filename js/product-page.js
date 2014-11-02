
$(document).foundation();

var maxImagesNumber = 6;
var imageArray = ["img/phone.jpg", "img/phone2.jpg", "img/phone3.png",
    "img/phone4.jpg", "img/phone3.png", "img/phone4.jpg"];

function initImagesViewer(images){
    var ci = $('#center-image');
    ci.html('<img id="main-img" src="'+ images[0] +'"/>');

    maxImagesNumber = (maxImagesNumber > images.length) ? images.length : maxImagesNumber;

    var leftImages = $('#left-images');
    for(var i = 0; i < maxImagesNumber; i++){
        if(i == 0){
            leftImages.append('<div class="min-img-div choose"><img class = "left-min-img" src="' + images[i] + '"/></div>');
        } else {
            leftImages.append('<div class="min-img-div"><img class = "left-min-img" src="' + images[i] + '"/></div>');
        }
    }

    $('.left-min-img').click(function(event){
        $('.min-img-div').removeClass('choose');
        $(event.target).parent().addClass('choose');
        $('#main-img').attr('src', $(event.target).prop('src'));
    });

    setOptimalImViewerSize();
}

function setOptimalImViewerSize(){
    var ci = $('#center-image');
    var ciWidth = ci.width();
    var ciHeight = ciWidth;

    ci.height(ciHeight);

    var li = $('#left-images');
    var liWidth = li.width();
    li.height(ciHeight);
    var leftImgMaxHeight = ciHeight/6;

    var mid = $('.min-img-div');
    mid.height(leftImgMaxHeight-4);
}

window.onload(initImagesViewer(imageArray));

