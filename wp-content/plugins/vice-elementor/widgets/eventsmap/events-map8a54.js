( function( $ ) {
	var ViceElementorEventMapHandler = function( $scope, $ ) {
		if(!$('body').hasClass('elementor-editor-active')){
			return;
		}
		if(typeof( $.ViceMainObj ) !== 'object' ){
			console.log( 'Missing main theme script' );  
		}
		try {
			$.fn.dynamicMaps();
		} catch(e) {
			console.log(e);
		}
	};
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/vice-elementor-events-map.default', ViceElementorEventMapHandler );
	} );
} )( jQuery );