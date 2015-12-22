define(['jquery'],function($){
	function ToTop(elment,options){
		this.opts = $.extend({},ToTop.DEFAULTS,options);
		this.elm = $(elment);//控制滚动条滑动的对象
		this.scrollObj = $("html,body");//出现滚动条的元素，一般是指html或者body

		this._checkVasible();
		if(this.opts.animate==true){
			this.elm.on('click',$.proxy(this._animateMove,this));
		}else{
			this.elm.on('click',$.proxy(this._move,this));
		}
		$(window).on('scroll',$.proxy(this._checkVasible,this));
	}
	ToTop.DEFAULTS = {
		animate:false,
		speed:1000,
		destination:0,
		vasiblePos:$(window).height()
	}
	ToTop.prototype._animateMove = function(){
		var opts = this.opts;
		if($(window).scrollTop()!=opts.destination){
			if(!this.scrollObj.is(':animated')){
				this.scrollObj.animate({
							scrollTop:opts.destination
				},opts.speed);
			}
		}
	}
	ToTop.prototype._move = function(){
		var opts = this.opts;
		if($(window).scrollTop()!=opts.destination){
			this.scrollObj.scrollTop(opts.destination);
		}
	}
	ToTop.prototype._checkVasible = function(){
		var item = this.elm;
    	if($(window).scrollTop()>this.opts.vasiblePos){
    		item.show();
    	}else{
    		item.hide();
    	}
	}
	/* 以下两种注册方法到jquery对象的方式是等价的 */
	// $.fn.extend({
	// 	verticalToolbar:function(opts){
	// 		return this.each(function(){
	// 			new ToTop(this,opts);
	// 		});
	// 	}
	// });
	$.fn.verticalToolbar = function(opts){
								return this.each(function(){
									new ToTop(this,opts);
								});
						   }

	return {
		ToTop:ToTop
	}
});