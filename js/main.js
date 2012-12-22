(function(window, $, undefined) {

var ImageLightbox;

ImageLightbox = function() {
	var _globalCounter = 0,
		SCRIPT   = "js/lightbox.js",
		SELECTOR = ".asset-type-imagegroup .content:not(.imageslider)";

	function generate_id() {
		if ( this.is('.imagegroup') ) {
			_globalCounter++;
			this.children('a').attr('rel', function(n, rel) {
				return rel+"["+ _globalCounter +"]";
			});
		}
	}
	function handle_imagegroup() {
		generate_id.call( $(this) );
	}
	function init() {
		$.getScript(SCRIPT, function() {
			$(SELECTOR).each(handle_imagegroup);
		});
	}

	// constructor
	return init;

}();

function init () {
	ImageLightbox();
}

$(document).on('pop-initialized', init);


})(this, jQuery);
