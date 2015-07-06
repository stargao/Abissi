$(function(){
    $('.left-side-menu ul li a').click(function(){
        var link = $(this).attr('href');
        var linkContent = link.substring(1);
        //console.log("linkContent is "+link);
        $('.tab-content').load(linkContent);
    });

    $('.tab-content').load('tab1.html');

    $('.tab-content').on('click', '.plus-btn', function(){
        var inputGroup = $(this).closest('.change-dish-number');
        var dishNum = inputGroup.find('p.dish-number');
        var dishNumChange = parseInt(dishNum.text());
        if(inputGroup.hasClass('default-hide')) {
            inputGroup.removeClass('default-hide');
            dishNum.text(1);
        } else { 
            dishNumChange = dishNumChange + 1;
            dishNum.text(dishNumChange);
        }
        $('.bottom-info-line').fadeIn();
    });

    $('.tab-content').on('click', '.minus-btn', function(){
        var inputGroup = $(this).closest('.change-dish-number');
        var dishNum = inputGroup.find('p.dish-number');
        var dishNumChange = parseInt(dishNum.text());
        //console.log(dishNumChange);
        if(dishNumChange == 1) {
            inputGroup.addClass('default-hide');
            dishNum.text(0);
        } else {
            dishNumChange = dishNumChange - 1;
            dishNum.text(dishNumChange);
        }
    });
});