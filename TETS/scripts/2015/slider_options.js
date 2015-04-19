jQuery.noConflict();
jQuery(window).bind('load', function () {
    jQuery().prepare_slider();
    jQuery('#slider_list > li').over();

    //=======intro================
    var slider_link = jQuery('#right_but');
    var slider_link_index = 1;
    var slider_count = jQuery('#slider_list > li').size();

    function slider_intro() {
        if (slider_link_index <= slider_count) {
            slider_link.trigger('click');
            slider_link_index++;
            setTimeout(function () { slider_intro() }, 5000); //select change time
        }
    }
    setTimeout(function () { slider_intro() }, 5000)
    //===============

    jQuery('#left_but').hover(
       function () {
           jQuery(this).addClass("over");
       },
       function () {
           jQuery(this).removeClass("over");
       })

    jQuery('#right_but').hover(
       function () {
           jQuery(this).addClass("over");
       },
       function () {
           jQuery(this).removeClass("over");
       })

    jQuery('.cms-home .products-grid li').hover(
       function () {
           jQuery(this).find('.product-name').stop(true, true).slideDown("slow");
       },
       function () {
           jQuery(this).find('.product-name').hide("slow");
       })
});	/* 酷站代码整理 http://www.5icool.org */