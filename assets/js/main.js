(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right'
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.5,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});
    
    // Travel info show/hide toggles
    
    $( ".toggleNicosia" ).click(function() {
      $( "#_nicosia" ).toggle( "fast" );
    });

            $( ".toggleNicGeneral" ).click(function() {
            $( "#_nicGeneral" ).toggle( "fast" );
            });
    
            $( ".toggleNicRest" ).click(function() {
            $( "#_nicRest" ).toggle( "fast" );
            });

            $( ".toggleNicTips" ).click(function() {
            $( "#_nicTips" ).toggle( "fast" );
            });

    
    $( ".toggleLimassol" ).click(function() {
      $( "#_limassol" ).toggle( "fast" );
    });
    
            $( ".toggleLimGeneral" ).click(function() {
            $( "#_LimGeneral" ).toggle( "fast" );
            });
    
            $( ".toggleLimRest" ).click(function() {
            $( "#_LimRest" ).toggle( "fast" );
            });

            $( ".toggleLimBeach" ).click(function() {
            $( "#_LimBeach" ).toggle( "fast" );
            });
    
            $( ".toggleLimTips" ).click(function() {
            $( "#_LimTips" ).toggle( "fast" );
            });
    
    
    $( ".toggleLarnaca" ).click(function() {
      $( "#_larnaca" ).toggle( "fast" );
    });
    
            $( ".toggleLcaGeneral" ).click(function() {
            $( "#_LcaGeneral" ).toggle( "fast" );
            });
    
            $( ".toggleLcaRest" ).click(function() {
            $( "#_LcaRest" ).toggle( "fast" );
            });
    
            $( ".toggleLcaBeach" ).click(function() {
            $( "#_LcaBeach" ).toggle( "fast" );
            });

            $( ".toggleLcaTips" ).click(function() {
            $( "#_LcaTips" ).toggle( "fast" );
            });
    
    
    $( ".toggleProtaras" ).click(function() {
      $( "#_protaras" ).toggle( "fast" );
    });
    
            $( ".toggleProGeneral" ).click(function() {
            $( "#_ProGeneral" ).toggle( "fast" );
            });
    
            $( ".toggleProRest" ).click(function() {
            $( "#_ProRest" ).toggle( "fast" );
            });

            $( ".toggleProBeach" ).click(function() {
            $( "#_ProBeach" ).toggle( "fast" );
            });
    
            $( ".toggleProTips" ).click(function() {
            $( "#_ProTips" ).toggle( "fast" );
            });
    
    
    $( ".togglePaphos" ).click(function() {
      $( "#_paphos" ).toggle( "fast" );
    });

            $( ".togglePapGeneral" ).click(function() {
            $( "#_PapGeneral" ).toggle( "fast" );
            });
    
            $( ".togglePapRest" ).click(function() {
            $( "#_PapRest" ).toggle( "fast" );
            });
    
            $( ".togglePapBeach" ).click(function() {
            $( "#_PapBeach" ).toggle( "fast" );
            });

            $( ".togglePapTips" ).click(function() {
            $( "#_PapTips" ).toggle( "fast" );
            });    
    

})(jQuery);