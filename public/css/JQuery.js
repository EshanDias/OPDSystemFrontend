/**
 * Created by esh_d on 29/04/2017.
 */
$(document).ready(function(){
    $('.level1-menu').on('click', function(){
       $(this).parent().find('ul.level2-container').slideToggle();
    })
});

$(document).ready(function(){
    $('.header-css img').on('click', function(){
        if($('div.side-panel').hasClass("side-panel-hide")){
            $('div.side-panel').removeClass("side-panel-hide").addClass("side-panel-show");
            $("#main").css("margin-left", "250px");
        }
        else if ($('div.side-panel').hasClass("side-panel-show")){
            $('div.side-panel').removeClass("side-panel-show").addClass("side-panel-hide");
            $("#main").css("margin-left", "0");
        }
    })
});

