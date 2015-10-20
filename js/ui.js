(function ($) {

$.extend({
	alert: function(options) {
		var defaults = {
	        tit: '提示',
	        txt: '',
	        btn: ['确定'],
	        class: '',
	        callback: function() {}
	    },
    	settings = $.extend(defaults, options),
    	str;
		str = '<div class="ui-alert ' + (settings.class || '') + '">'+
				'<div class="box">'+
					'<div class="hd">' + settings.tit + '</div>'+
					'<div class="bd">' + settings.txt + '</div>'+
					'<div class="ft">'+
						'<div class="btn">' + settings.btn[0] + '</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		$('.ui-alert').remove();
		$(str).appendTo('body').show();
		$('.ui-alert .btn').click(function() {
			var index = $(this).index();
			settings.callback(index);
			$('.ui-alert').remove();
		});
	},
	confirm: function(options) {
		var defaults = {
	        tit: '提示',
	        txt: '',
	        class: '',
	        btn: ['取消', '确定'],
	        callback: function() {}
	    },
    	settings = $.extend(defaults, options),
    	str;
		str = '<div class="ui-confirm ' + (settings.class || '') + '">'+
				'<div class="box">'+
					'<div class="hd">' + settings.tit + '</div>'+
					'<div class="bd">' + settings.txt + '</div>'+
					'<div class="ft">'+
						'<div class="btn">' + settings.btn[0] + '</div>'+
						'<div class="btn">' + settings.btn[1] + '</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		$('.ui-confirm').remove();
		$(str).appendTo('body').show();
		$('.ui-confirm .btn').click(function() {
			var index = $(this).index();
			settings.callback(index);
			$('.ui-confirm').remove();
		});
	},
	tip: function(options) {
		var defaults = {
			txt: '',
	        icon: '',
	        class: '',
	        autoClose: false,
	        direction: 'center',
	        duration: 3000
	    },
    	settings = $.extend(defaults, options),
    	str;
		str = '<div class="ui-tip ' + (settings.class || '') + '">'+
				'<div class="box">'+
					(settings.icon ? '<div class="icon">' + settings.icon + '</div>' : '')+
					'<div class="txt">' + settings.txt + '</div>'+
				'</div>'+
			'</div>';
		$('.ui-tip').remove();
		$(str).appendTo('body').show();
		if(settings.autoClose) {
			setTimeout(function() {
				$('.ui-tip').remove();
			}, settings.duration);
		}
		if(settings.direction === 'bottom') {
			$('.ui-tip .box').css({
				top: 'auto',
				bottom: 10
			});
		}
		return $('.ui-alert');
	}
});

})(jQuery);