/* 已经整合到toTop.js里面，此文件可以不用引入 */
define(['jquery'],function($){
	function Scroll (opts) {
		this.opts = $.extend({},Scroll.DEFAULTS,opts);
		this.scrollObj = $("html,body");
	}
	Scroll.DEFAULTS = {
		dest:0,
		speed:1000
	};
	Scroll.prototype.animateMove = function(){
		var opts = this.opts;
		if($(window).scrollTop()!=opts.dest){
			if(!this.scrollObj.is(':animated')){
				this.scrollObj.animate({
							scrollTop:opts.dest
				},opts.speed);
			}
		}
		
	}
	Scroll.prototype.move = function(){
		var opts = this.opts;
		if($(window).scrollTop()!=opts.dest){
			this.scrollObj.scrollTop(opts.dest);
		}
	}
	return {
		Scroll : Scroll
	}
});