(function ($) {
    var WidgetTestimonialsSlider = function( $scope, $ ) {
        $scope.find('.testimonials-slider').each(function (e) {
            var slider = $(this).find('.testimonials-wrapper'),
                that = $(this);
            slider.slick({
                dots: true,
                infinite: true,
                speed: 600,
                arrows: true,
                rows: 0,
                slidesToShow: 2,
                slidesToScroll: 1,
                appendArrows: that.find('.testimonials-slider-controls'),
                appendDots: that.find('.testimonials-slider-controls'),
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            dots: false
                        }
                    }
                ]
            });

        });
    };

    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ciestra-testimonials-slider.default', WidgetTestimonialsSlider);
    } );
})(jQuery);