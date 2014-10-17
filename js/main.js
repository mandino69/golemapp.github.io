(function($) {

    var App = {

    /**
    * Init Function
    */
    init: function() {
        App.HomeOpacity();
        App.ScrollToContact();
        App.ScrollBack();
        App.Preloader();
        App.Animations();
        App.Newsletter();
    },


    HomeOpacity: function() {
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#home').css('opacity', (1-st/h) );
        });
    },


    /**
    * Scroll To Contact
    */
    ScrollToContact: function() {
    $('#button_more').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#about_arrow_back').click(function () { $.scrollTo('0px',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#about_arrow_next').click(function () { $.scrollTo('#features_1',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_1_arrow_back').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_1_arrow_next').click(function () { $.scrollTo('#features_2',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_2_arrow_back').click(function () { $.scrollTo('0px',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_2_arrow_next').click(function () { $.scrollTo('#download',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    },



    /**
    * Scroll Back
    */
    ScrollBack: function() {
        $('#arrow_back').click(function () {
            $.scrollTo('#home',1500,{easing:'easeInOutExpo',offset:0,'axis':'y'});
        });
    },


    /**
    * Preloader
    */
    Preloader: function() {
        $(window).load(function() {
            $('#status').delay(100).fadeOut('slow');
            $('#preloader').delay(500).fadeOut('slow');
            $('body').delay(500).css({'overflow':'visible'});
            setTimeout(function(){$('#logo').addClass('animated fadeInDown')},500);
            setTimeout(function(){$('#logo_header').addClass('animated fadeInDown')},600);
            setTimeout(function(){$('#slogan').addClass('animated fadeInDown')},700);
            setTimeout(function(){$('#home_image').addClass('animated fadeInUp')},900);
        })
    },


    /**
    * Animations
    */
    Animations: function() {
        $('#about').waypoint(function() {
            setTimeout(function(){$('#about_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#golem_step_1').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#golem_step_2').addClass('animated fadeInDown')},500);
            setTimeout(function(){$('#golem_step_3').addClass('animated fadeInDown')},700);
        }, { offset: '50%' });

        $('#features_1').waypoint(function() {
            setTimeout(function(){$('#features_1_content').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features1a_image').addClass('animated fadeInRight')},1100);
            setTimeout(function(){$('#features1b_image').addClass('animated fadeInRight')},600);
        }, { offset: '50%' });

        $('#features_2').waypoint(function() {
            setTimeout(function(){$('#features_2_content').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features2a_image').addClass('animated fadeInLeft')},1100);
            setTimeout(function(){$('#features2b_image').addClass('animated fadeInLeft')},600)
        }, { offset: '50%' });
    },

    Newsletter: function() {
        $('#subscribe-form-btn').click(function(event) {
            event.preventDefault();

            var $form = $('#subscribe-form');

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'jsonp',
                contentType: "application/json; charset=utf-8",
                error: function(err) {
                    console.log(err);
                },
                success: function(data) {
                    var $btn = $('#subscribe-form-btn');

                    if (data.result == 'success') {
                        $btn.html('&#10004;');
                    } else {
                        $btn.html('&#65794;')
                    }

                    setTimeout(function() {
                        $btn.html('Notify Me');
                    }, 2000);
                }
            });
        });
    },
 }

$(function() {
  App.init();
});

})(jQuery);
