window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
				window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
				try {
					var pw = document.getElementById(e.c).parentNode.offsetWidth,
						newh;
					pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
					e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
					e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
					e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
					e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
					e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
					e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
					e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
					if(e.layout==="fullscreen" || e.l==="fullscreen")
						newh = Math.max(e.mh,window.RSIH);
					else{
						e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
						for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
						e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
						e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
						for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
											
						var nl = new Array(e.rl.length),
							ix = 0,
							sl;
						e.tabw = e.tabhide>=pw ? 0 : e.tabw;
						e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
						e.tabh = e.tabhide>=pw ? 0 : e.tabh;
						e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
						for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
						sl = nl[0];
						for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
						var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
						newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
					}
					var el = document.getElementById(e.c);
					if (el!==null && el) el.style.height = newh+"px";
					el = document.getElementById(e.c+"_wrapper");
					if (el!==null && el) {
						el.style.height = newh+"px";
						el.style.display = "block";
					}
				} catch(e){
					console.log("Failure at Presize of Slider:" + e)
				}
				window.RS_MODULES = window.RS_MODULES || {};
				window.RS_MODULES.modules = window.RS_MODULES.modules || {};
				window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
				window.RS_MODULES.defered = false;
				window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
				window.RS_MODULES.type = 'compiled';
                jQuery(document).ready(function ($) {
		
		
					$('.primary-desktop .header-logo-container, .primary-mobile .header-logo-container').attr('href','//jevelin.shufflehound.com/hello/');
			
					function jevelin_settings() {
						if( $(window).width() < 600 ) {
							$('.sh-settings').hide();
						} else {
							$('.sh-settings').show();
						}
					}
					jevelin_settings();
			
					$(window).resize(function() {
						clearTimeout(window.resizedFinished2);
						window.resizedFinished2 = setTimeout(function(){
							jevelin_settings();
						}, 500);
					});
			
					$('.sh-settings-hide').on( 'click', function() {
						$('.sh-settings').toggleClass( 'sh-settings-active' );
					});
			
					$(document).keyup(function(e) {
						if (e.keyCode == 27) {
							if( $('.sh-settings').hasClass('sh-settings-active') ) {
								$('.sh-settings').removeClass('sh-settings-active');
							}
						}
					});
			
					jQuery('.form-submit #submit').on('click', function( event ) {
						alert( 'This feature is disabled in our demo site. Sorry for any inconvenience.' );
						event.preventDefault()
						event.stopPropagation()
						return false;
					});
			
				});
				Query(document).ready(function ($) {
					"use strict";
			
					$(".sh-page-loader").fadeOut(500);
					$("body").css('overflow-y', 'visible').css('overflow-x', 'hidden');
			
					$(window).bind('beforeunload', function(e){
						$('.sh-page-loader').fadeIn();
					});
			
				});
				(function(h,o,t,j,a,r){
					h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					h._hjSettings={hjid:2013664,hjsv:6};
					a=o.getElementsByTagName('head')[0];
					r=o.createElement('script');r.async=1;
					r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					a.appendChild(r);
				})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
				jQuery(document).ready(function ($) {
					/*if( $(window).width() > 1000) {
						if( $.cookie( 'gillion.sidebartest', { path: '', domain: 'jevelin.shufflehound.com' } ) == 'opened' ) {
							$('.sh-side-demos').addClass('open');
						} else {
							$('.sh-side-demos').removeClass('open');
						}
					}*/
				
					$('.sh-side-options-item-trigger-demos').on('click', function() {
						$('.sh-side-options').css( 'transition', '0.3s all ease-in-out' );
				
						if( $('.sh-side-options').hasClass( 'open' ) ) {
							$('.sh-side-options').removeClass('open');
						} else {
							$('.sh-side-options .sh-side-demos-image').each( function() {
								$(this).attr( 'src', $(this).attr( 'data-src' ) );
							});
							$('.sh-side-options').addClass('open');
						}
					});
				
					$('.sh-side-demos-container-close').on( 'click', function() {
						$('.sh-side-options').css( 'transition', '0.3s all ease-in-out' );
						$('.sh-side-options').removeClass('open');
					});
				
				
				
							$('li.sh-nav-cart > a').attr( 'href', 'https://jevelin.shufflehound.com/shop3/cart/' );
					
				});
				(function () {
					var c = document.body.className;
					c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
					document.body.className = c;
				})();
				if(typeof revslider_showDoubleJqueryError === "undefined") {function revslider_showDoubleJqueryError(sliderID) {console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");console.log("To fix this, you can:");console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");console.log("2. Find the double jQuery.js inclusion and remove it");return "Double Included jQuery Library";}}
				var	tpj = jQuery;

		var	revapi17;

		if(window.RS_MODULES === undefined) window.RS_MODULES = {};
		if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider171"] = {once: RS_MODULES.modules["revslider171"]!==undefined ? RS_MODULES.modules["revslider171"].once : undefined, init:function() {
			window.revapi17 = window.revapi17===undefined || window.revapi17===null || window.revapi17.length===0  ? document.getElementById("rev_slider_17_1") : window.revapi17;
			if(window.revapi17 === null || window.revapi17 === undefined || window.revapi17.length==0) { window.revapi17initTry = window.revapi17initTry ===undefined ? 0 : window.revapi17initTry+1; if (window.revapi17initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider171"].init()}); return;}
			window.revapi17 = jQuery(window.revapi17);
			if(window.revapi17.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_17_1"); return;}
			revapi17.revolutionInit({
					revapi:"revapi17",
					sliderType:"hero",
					sliderLayout:"fullscreen",
					visibilityLevels:"1240,1024,768,480",
					gridwidth:1240,
					gridheight:868,
					lazyType:"smart",
					perspectiveType:"local",
					responsiveLevels:"1240,1024,768,480",
					progressBar:{disableProgressBar:true},
					navigation: {
						onHoverStop:false
					},
					viewPort: {
						global:true,
						globalDist:"-200px",
						enable:false,
						visible_area:"20%"
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid:true
					},
			});
			
		}} // End of RevInitScript

		if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};	