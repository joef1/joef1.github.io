(function ($) {

    "use strict";
    //Remove href from Date on CE Blog
    $('.blog-meta').find('time a').removeAttr('href');
    $('.blog-meta').find('time a').css({
    	color: '#ACACAC',
    	cursor: 'default'
    });

})(jQuery);
