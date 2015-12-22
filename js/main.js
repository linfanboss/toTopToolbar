requirejs.config({
	paths:{
		jquery:'jquery-1.11.1',
		scroll:'toTop/scroll',
		toTop:'toTop/toTop'
	}
});

requirejs(['jquery','toTop'],function($,toTop){
	// new toTop.ToTop($("#backtop"),{
	// 	mode:'animate',
	// 	speed:2000
	// });
	$("#backtop").verticalToolbar({
		animate:true,
	 	speed:500,
	 	destination:100,
	 	vasiblePos:200
	});
});