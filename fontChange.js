javascript:(function(){ 
	function changeElement(tag, font){
		for (i=0;i<document.getElementsByTagName(tag).length;i++){
			document.getElementsByTagName(tag)[i].style.fontFamily = font;
		}
	
	}
	var font = "Comic Sans MS";
	document.getElementsByTagName('body')[0].style.cssText = "font-family: " + font + ";";
	changeElement('span', font);
	changeElement('div', font);
	changeElement('li', font);
	changeElement('p', font);
	changeElement('h1', font);
	changeElement('h2', font);
	changeElement('h3', font);
	changeElement('h4', font);
	changeElement('h5', font);
	changeElement('h6', font);
	
})();