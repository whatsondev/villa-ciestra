/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function ($) {

    'use strict';

    var masthead, menuToggle, siteNavigation, siteHeaderMenu;

    function initMainNavigation(container) {
        // Add dropdown toggle that displays child menu items.
        var dropdownToggle = $('<button />', {
            'class': 'dropdown-toggle',
            'aria-expanded': false,
            'html': '<i class="fa fa-caret-down"></i>'
        });

        container.find('.menu-item-has-children > a').after(dropdownToggle);

        // Toggle buttons and submenu items with active children menu items.
        container.find('.current-menu-ancestor > button').addClass('toggled-on');
        container.find('.current-menu-ancestor > .children').addClass('toggled-on');

        // Add menu items with submenus to aria-haspopup="true".
        container.find('.menu-item-has-children').attr('aria-haspopup', 'true');

        container.find('.dropdown-toggle').click(function (e) {
            var _this = $(this);

            e.preventDefault();
            _this.toggleClass('toggled-on');
            _this.next('.children, .sub-menu').toggleClass('toggled-on');

            _this.attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');
        });
    }

    initMainNavigation($('.main-navigation'));

    masthead = $('#masthead');
    menuToggle = masthead.find('#menu-toggle');

    // Enable menuToggle.
    (function () {
        // Return early if menuToggle is missing.
        if (!menuToggle.length) {
            return;
        }

        // Add an initial values for the attribute.
        menuToggle.add(siteNavigation).attr('aria-expanded', 'false');

        menuToggle.on('click', function () {
            $(this).add(siteHeaderMenu).toggleClass('toggled-on');
            $(this).add(siteNavigation).attr('aria-expanded', $(this).add(siteNavigation).attr('aria-expanded') === 'false' ? 'true' : 'false');
        });
    })();

    function subMenuPosition() {
        $('.sub-menu').each(function () {
            $(this).removeClass('toleft');
            if (($(this).parent().offset().left + $(this).parent().width() - $(window).width() + 180) > 0) {
                $(this).addClass('toleft');
            }
        });
    }

    subMenuPosition();

    $(window).resize(function () {
        subMenuPosition();
    });

    (function () {
        var resForm = $("#ciestra-mphb-reservation-form");

        $(document).ready(function (e) {
            if (resForm.length > 0 && $(window).width() > 992 && ($(window).height() <= resForm.outerHeight() + 40)){
                resForm.css({
                    'position': 'relative',
                    'top': 0
                });
            }
        });
    })();

})(jQuery);