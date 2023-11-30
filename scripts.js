(function($) {
	var $window = $(window);
	$.fn.isVisible = function() {
		var $this = $(this),
			Left = $this.offset().left,
			visibleWidth = $window.width();
		return Left < visibleWidth;
	}
})(jQuery);
(function($) {
	var list = $('.portfolio-items'),
		showVisibleItems = function() {
			list.children('.item:not(.falldown)').each(function(el, i) {
				var $this = $(this);
				if($this.isVisible()) {
					$this.addClass('falldown');
				}
			});
		};
	showVisibleItems();
	list.scroll(function() {
		showVisibleItems();
	});
	list.on('mousemove', 'img', function(ev) {
		var $this = $(this),
			posX = ev.pageX,
			posY = ev.pageY,
			data = $this.data('cache');
		if(!data) {
			data = {};
			data.marginTop = -parseInt($this.css('top')), data.marginLeft = -parseInt($this.css('left')), data.parent = $this.parent('.view'), $this.data('cache', data);
		}
		var originX = data.parent.offset().left,
			originY = data.parent.offset().top;
		$this.css({
			'left': -(posX - originX) / data.marginLeft,
			'top': -(posY - originY) / data.marginTop
		});
	});
	list.on('mouseleave', '.item', function(e) {
		$(this).find('img').css({
			'left': '0',
			'top': '0'
		});
	});
	list.mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 60);
		event.preventDefault();
	});
})(jQuery);