
$(document).foundation();

var maxProductWidth = 200;

function screenSize(){
  alert($(document).width());
};




function updateElements(){
    var containerWidth = $('.container').width();
    var realFreeWidth = containerWidth-30; //out padding 10+10 in margin 5+5

    var productWidth = (realFreeWidth < maxProductWidth) ? realFreeWidth : maxProductWidth;


    var product = $('.product');
    product.width(productWidth);

    var h5TextSize = 18;
    var h5padding = 10;

    var textNameSize = 16*2;
    var textNamePadding = 5;

    var usefulProdWidth = productWidth;

    var usefulProdHeight = usefulProdWidth + h5TextSize + h5padding*2 + textNameSize + textNamePadding*2;

    var productHeight = usefulProdHeight;

    product.height(productHeight);

    var divIMg = $('.product-div-img');
    divIMg.height(usefulProdWidth);

    var name = $('.product-name');
    name.height(textNameSize);

    var divPrice = $('.product-div-price');
    divPrice.height(h5TextSize);

};


$(document).ready(updateElements());

//$(window).resize(function() {
//    updateElements();
//});




