define(['jquery','scroll'],function($,scroll){
	function ToTop(elment,options){
		this.opts = $.extend({},ToTop.DEFAULTS,options);
		this.elm = $(elment);
		this.scroll = new scroll.Scroll({
			dest:this.opts.scrollTo,
			speed:this.opts.speed
		});
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
		scrollTo:0,
		vasiblePos:$(window).height()
	}
	ToTop.prototype._animateMove = function(){
		this.scroll.animateMove();
	}
	ToTop.prototype._move = function(){
		this.scroll.move();
	}
	ToTop.prototype._checkVasible = function(){
		var item = this.elm;
    	if($(window).scrollTop()>this.opts.vasiblePos){
    		item.show();
    	}else{
    		item.hide();
    	}
	}
	$.fn.extend({
		verticalToolbar:function(opts){
			return this.each(function(){
				new ToTop(this,opts);
			});
		}
	});
	return {
		ToTop:ToTop
	}
});