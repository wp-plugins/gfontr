currentFonts = [];

jQuery(document).ready(function() {
	var fonts = {Cantarell:{alt:'serif',designer:'Dave Crossland',designerUrl:'/webfonts/designer?designer\75Dave+Crossland',familyUrl:'Cantarell',url:'http://fonts.googleapis.com/css?family\75Cantarell'},Cardo:{alt:'serif',designer:'David Perry',designerUrl:'/webfonts/designer?designer\75David+Perry',familyUrl:'Cardo',url:'http://fonts.googleapis.com/css?family\75Cardo'},'Crimson Text':{alt:'serif',designer:'Sebastian Kosch',designerUrl:'/webfonts/designer?designer\75Sebastian+Kosch',familyUrl:'Crimson Text',url:'http://fonts.googleapis.com/css?family\75Crimson+Text'},'Droid Sans':{alt:'arial, serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Droid Sans',url:'http://fonts.googleapis.com/css?family\75Droid+Sans'},'Droid Sans Mono':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Droid Sans Mono',url:'http://fonts.googleapis.com/css?family\75Droid+Sans+Mono'},'Droid Serif':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Droid Serif',url:'http://fonts.googleapis.com/css?family\75Droid+Serif'},'IM Fell DW Pica':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell DW Pica',url:'http://fonts.googleapis.com/css?family\75IM+Fell+DW+Pica'},'IM Fell DW Pica SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell DW Pica SC',url:'http://fonts.googleapis.com/css?family\75IM+Fell+DW+Pica+SC'},'IM Fell Double Pica':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Double Pica',url:'http://fonts.googleapis.com/css?family\75IM+Fell+Double+Pica'},'IM Fell Double Pica SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Double Pica SC',url:'http://fonts.googleapis.com/css?family\75IM+Fell+Double+Pica+SC'},'IM Fell English':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell English',url:'http://fonts.googleapis.com/css?family\75IM+Fell+English'},'IM Fell English SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell English SC',url:'http://fonts.googleapis.com/css?family\75IM+Fell+English+SC'},'IM Fell French Canon':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell French Canon',url:'http://fonts.googleapis.com/css?family\75IM+Fell+French+Canon'},'IM Fell French Canon SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell French Canon SC',url:'http://fonts.googleapis.com/css?family\75IM+Fell+French+Canon+SC'},'IM Fell Great Primer':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Great Primer',url:'http://fonts.googleapis.com/css?family\75IM+Fell+Great+Primer'},'IM Fell Great Primer SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Great Primer SC',url:'http://fonts.googleapis.com/css?family\75IM+Fell+Great+Primer+SC'},Inconsolata:{alt:'serif',designer:'Raph Levien',designerUrl:'/webfonts/designer?designer\75Raph+Levien',familyUrl:'Inconsolata',url:'http://fonts.googleapis.com/css?family\75Inconsolata'},'Josefin Sans Std Light':{alt:'serif',designer:'Santiago Orozco',designerUrl:'/webfonts/designer?designer\75Santiago+Orozco',familyUrl:'Josefin Sans Std Light',url:'http://fonts.googleapis.com/css?family\75Josefin+Sans+Std+Light'},Lobster:{alt:'serif',designer:'Pablo Impallari',designerUrl:'/webfonts/designer?designer\75Pablo+Impallari',familyUrl:'Lobster',url:'http://fonts.googleapis.com/css?family\75Lobster'},Molengo:{alt:'serif',designer:'Denis Jacquerye',designerUrl:'/webfonts/designer?designer\75Denis+Jacquerye',familyUrl:'Molengo',url:'http://fonts.googleapis.com/css?family\75Molengo'},Nobile:{alt:'serif',designer:'Vernon Adams',designerUrl:'/webfonts/designer?designer\75Vernon+Adams',familyUrl:'Nobile',url:'http://fonts.googleapis.com/css?family\75Nobile'},'OFL Sorts Mill Goudy TT':{alt:'serif',designer:'Barry Schwartz',designerUrl:'/webfonts/designer?designer\75Barry+Schwartz',familyUrl:'OFL Sorts Mill Goudy TT',url:'http://fonts.googleapis.com/css?family\75OFL+Sorts+Mill+Goudy+TT'},'Old Standard TT':{alt:'serif',designer:'Alexey Kryukov',designerUrl:'/webfonts/designer?designer\75Alexey+Kryukov',familyUrl:'Old Standard TT',url:'http://fonts.googleapis.com/css?family\75Old+Standard+TT'},'Reenie Beanie':{alt:'serif',designer:'James Grieshaber',designerUrl:'/webfonts/designer?designer\75James+Grieshaber',familyUrl:'Reenie Beanie',url:'http://fonts.googleapis.com/css?family\75Reenie+Beanie'},Tangerine:{alt:'serif',designer:'Toshi Omagari',designerUrl:'/webfonts/designer?designer\75Toshi+Omagari',familyUrl:'Tangerine',url:'http://fonts.googleapis.com/css?family\75Tangerine'},Vollkorn:{alt:'serif',designer:'Friedrich Althausen',designerUrl:'/webfonts/designer?designer\75Friedrich+Althausen',familyUrl:'Vollkorn',url:'http://fonts.googleapis.com/css?family\75Vollkorn'},'Yanone Kaffeesatz':{alt:'serif',designer:'Yanone',designerUrl:'/webfonts/designer?designer\75Yanone',familyUrl:'Yanone Kaffeesatz',url:'http://fonts.googleapis.com/css?family\75Yanone+Kaffeesatz'}};
	var fontlist = [];

	jQuery.each(fonts, function(i, e){

		if(currentFonts.in_array(this['familyUrl']))
			checked = 'checked="checked"';
		else
			checked = '';

		cssline = "font-family:'"+this['familyUrl']+"',"+this['alt'];

		jQuery('#fonts-bucket').append(
			"<li style='margin-bottom:30px;'><label style='font-family:"+this['familyUrl']+"'><input type='checkbox' name='gfontr_fonts[]' value='"+this['familyUrl']+"' "+checked+" /> <span style='font-size:25px;'>"+this['familyUrl']+"</span> </label> CSS: <pre style='display:inline'>"+cssline+"</pre></li>"
		);
		fontlist.push(this['familyUrl']);
	});

	WebFont.load({
		google: {
		  families: fontlist
		}
	});
});

Array.prototype.in_array = function(p_val) {
	for(var i = 0, l = this.length; i < l; i++) {
		if(this[i] == p_val) {
			return true;
		}
	}
	return false;
}
