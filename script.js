$(document).ready(function(){
    $(".panel_content").hide();
    $(".panel_title").on('click', function(){
        $(this).next().slideToggle('slow');
        $(this).parent().toggleClass('active');
    })
});