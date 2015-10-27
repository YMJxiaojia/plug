//确认
$('#sel-mobile .btn-done').on('click', function() {
	var sMobile=$('#sel-mobile .active').attr('data-value');
	which_mobile.attr('data-mobile',sMobile).html(sMobile.replace(/,/,''));
	var iMobileIndex = parseInt($('#sel-mobile .active').attr('data-index'))+1,
		sMobileCode = json_moblie_area_code[iMobileIndex]['code'];
	which_mobile.siblings('input[name="link_mobile_area_code"]').val(iMobileIndex);
	which_mobile.siblings('input[name="link_mobile_area_code_1"]').val(sMobileCode);
	$('#sel-mobile').hide();
});
//选择地区国家
var iTop0,iTop1,iTop2,iTop,iNow;
$('#sel-mobile .marsk').on('touchstart', function(e){
	var oUl=$(this).siblings('ul'),
		touchs=e.originalEvent.changedTouches[0];
	iTop1=touchs.pageY;
	iTop0=parseFloat(oUl.css('-webkit-transform').split(',')[oUl.css('-webkit-transform').split(',').length-1])||0;

	$(document).on('touchmove', function(e){
		var touchs=e.originalEvent.changedTouches[0];
		iTop2=touchs.pageY;
		iTop=iTop0 + iTop2 - iTop1;
		iTop=Math.min(iTop,140);
		iTop=Math.max(iTop,-oUl.height()+35);
		oUl.css({
			"transition": "0ms cubic-bezier(0.1, 0.57, 0.1, 1)",
			"-webkit-transform": "matrix(1,0,0,1,0,"+iTop+")"
		});
		return false;
	});

	$(document).on('touchend', function(e){
		$(document).off('touchmove touchend');
		iTop=(iTop>0?1:-1)*(Math.floor(Math.abs(iTop)/35)*35+(Math.abs(iTop)-Math.floor(Math.abs(iTop)/35)*35>20?35:0));
		iTop=Math.min(iTop,70);
		iTop=Math.max(iTop,-oUl.height()+105);
		oUl.css({
			"transition": "200ms cubic-bezier(0.1, 0.57, 0.1, 1)",
			"-webkit-transform": "matrix(1,0,0,1,0,"+iTop+")"
		});
		iTop0=iTop;
		iNow=(105-iTop)/35-1;
		oUl.children('li').removeClass('active').eq(iNow).addClass('active');
	});
});