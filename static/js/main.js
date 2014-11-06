(function($) {

    var App = {

    /**
    * Init Function
    */
    init: function() {
        App.Home();
        App.HomeOpacity();
        App.ScrollToContact();
        App.ScrollBack();
        App.Preloader();
        App.Animations();
        App.Download();
        App.GetGalileo();
        App.Newsletter();
        App.Social();
        App.Footer();
    },

    Home: function() {
        $('#learn-more-btn').on('click', function(event) {
            ga('send', 'event', 'learn-more-btn', 'click');
        });

        var $appStoreBtn = $('#homescreen-appstore-btn');

        $appStoreBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'homescreen-appstore-btn', 'click', 'download-ios', {
                'hitCallback': function() {
                    location.href = $appStoreBtn.attr('href')
                }
            });
        });

        var $googlePlayBtn = $('#homescreen-google-play-btn');

        $googlePlayBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'homescreen-google-play-btn', 'click', 'download-android', {
                'hitCallback': function() {
                    location.href = $googlePlayBtn.attr('href')
                }
            });
        });

        var $golemWebBtn = $('#homescreen-golem-web-btn');

        $golemWebBtn.on('click', function(event) {
            event.preventDefault()

            ga('send', 'event', 'homescreen-golem-web-btn', 'click', 'launch-webapp', {
                hitCallback: function() {
                    location.href = $golemWebBtn.attr('href');
                }
            });
        });
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
        $('#learn-more-btn').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
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
            //setTimeout(function(){$('#home_image').addClass('animated fadeInUp')},900);
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

    Download: function() {
        var $appStoreBtn = $('#download-appstore-btn');

        $appStoreBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'download-appstore-btn', 'click', 'download-ios', {
                'hitCallback': function() {
                    location.href = $appStoreBtn.data('href');
                }
            });
        });

        var $googlePlayBtn = $('#download-google-play-btn');

        $googlePlayBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'download-google-play-btn', 'click', 'download-android', {
                'hitCallback': function() {
                    location.href = $googlePlayBtn.data('href');
                }
            });
        });
    },

    GetGalileo: function() {
        var $motrrStoreBtn = $('#motrr-store-btn');

        $motrrStoreBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'motrr-store-btn', 'click', 'motrr-store', {
                'hitCallback': function() {
                    location.href = $motrrStoreBtn.attr('href');
                }
            });
        });
    },

    Newsletter: function() {
        var $subscribeBtn = $('#subscribe-btn');

        $subscribeBtn.click(function(event) {
            event.preventDefault();

            ga('send', 'event', 'newsletter-subscribe-btn', 'click', {
                'hitCallback': function() {
                    var $form = $('#subscribe-form');

                    $.ajax({
                        type: $form.attr('method'),
                        url: $form.attr('action'),
                        data: $form.serialize(),
                        cache: false,
                        dataType: 'jsonp',
                        contentType: "application/json; charset=utf-8",
                        error: function(err) {
                            ga('send', 'event', 'newsletter-subscribe-btn', 'failure');

                            $subscribeBtn.html('&#65794;')

                            setTimeout(function() {
                                $subscribeBtn.html('Notify Me');
                            }, 2000);
                        },
                        success: function(data) {
                            if (data.result == 'success') {
                                ga('send', 'event', 'newsletter-subscribe-btn', 'success');

                                $subscribeBtn.html('&#10004;');
                            } else {
                                ga('send', 'event', 'newsletter-subscribe-btn', 'failure');

                                $subscribeBtn.html('&#65794;')
                            }

                            setTimeout(function() {
                                $subscribeBtn.html('Notify Me');
                            }, 2000);
                        }
                    });
                }
            });
        });
    },

    Support: function() {
        var $supportBtn = $('#support-btn');

        $supportBtn.on('click', function(event) {
            ga('send', 'event', 'support-btn', 'click', 'support');
        });
    },

    Social: function() {
        // Facebook
        var $fbBtn = $('#fb_icon');

        $fbBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'facebook-btn', 'click', 'facebook-link', {
                'hitCallback': function() {
                    location.href = $fbBtn.data('href');
                }
            });
        });

        // Twitter
        var $twBtn = $('#tw_icon');

        $twBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'twitter-btn', 'click', 'twitter-link', {
                'hitCallback': function() {
                    location.href = $twBtn.data('href');
                }
            });
        });

        // Google Play
        var $gpBtn = $('#g_icon');

        $gpBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'google-plus-btn', 'click', 'google-plus-link', {
                'hitCallback': function() {
                    location.href = $gpBtn.data('href');
                }
            });
        });
    },

    Footer: function() {
        var $tooplooxBtn = $('#tooploox-btn');

        $tooplooxBtn.on('click', function(event) {
            event.preventDefault();

            ga('send', 'event', 'tooploox-btn', 'click', 'tooploox-link', {
                'hitCallback': function() {
                    location.href = $tooplooxBtn.attr('href');
                }
            });
        });

    },
 }

$(function() {
  App.init();
});

})(jQuery);
