var width = $(".home").width();

function widthincrease(){
    $(".home").animate({width : "1000"});
}

function widthdecrease(){
    $(".home").animate({width : width});
}