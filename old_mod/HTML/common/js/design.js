$(function () {
    $(document).on('click', '.gnb--menu > li > a', function() {
        var gnbmenu = $(this).next('.gnb--menu_sub');
        if(gnbmenu.css('display') == 'none') {
            gnbmenu.slideDown();
            $(this).addClass('on');
            $('.gnb--menu_sub').not(gnbmenu).slideUp();
            return false;
        }
        else {
            gnbmenu.slideUp();
            $('.gnb--menu > li > a').removeClass('on');
        }
    });
});
