currentFonts = [];

jQuery(document).ready(function() {
	var fonts = {Allan:{alt:'serif',designer:'Anton Koovit',designerUrl:'/webfonts/designer?designer\75Anton+Koovit',familyUrl:'Allan',subset:'latin',url:'//fonts.googleapis.com/css?family\75Allan:bold'},Allerta:{alt:'serif',designer:'Matt McInerney',designerUrl:'/webfonts/designer?designer\75Matt+McInerney',familyUrl:'Allerta',subset:'latin',url:'//fonts.googleapis.com/css?family\75Allerta:regular'},'Allerta Stencil':{alt:'serif',designer:'Matt McInerney',designerUrl:'/webfonts/designer?designer\75Matt+McInerney',familyUrl:'Allerta Stencil',subset:'latin',url:'//fonts.googleapis.com/css?family\75Allerta+Stencil:regular'},'Anonymous Pro':{alt:'serif',designer:'Mark Simonson',designerUrl:'/webfonts/designer?designer\75Mark+Simonson',familyUrl:'Anonymous Pro',subset:'latin',url:'//fonts.googleapis.com/css?family\75Anonymous+Pro:regular,italic,bold,bolditalic'},Arimo:{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Arimo',subset:'latin',url:'//fonts.googleapis.com/css?family\75Arimo:regular,italic,bold,bolditalic'},Arvo:{alt:'serif',designer:'Anton Koovit',designerUrl:'/webfonts/designer?designer\75Anton+Koovit',familyUrl:'Arvo',subset:'latin',url:'//fonts.googleapis.com/css?family\75Arvo:regular,italic,bold,bolditalic'},Bentham:{alt:'serif',designer:'Ben Weiner',designerUrl:'/webfonts/designer?designer\75Ben+Weiner',familyUrl:'Bentham',subset:'latin',url:'//fonts.googleapis.com/css?family\75Bentham:regular'},Buda:{alt:'serif',designer:'Adèle Antignac',designerUrl:'/webfonts/designer?designer\75Adèle+Antignac',familyUrl:'Buda',subset:'latin',url:'//fonts.googleapis.com/css?family\75Buda:300'},Cabin:{alt:'serif',designer:'Pablo Impallari',designerUrl:'/webfonts/designer?designer\75Pablo+Impallari',familyUrl:'Cabin',subset:'latin',url:'//fonts.googleapis.com/css?family\75Cabin:bold'},Calligraffitti:{alt:'serif',designer:'Open Window',designerUrl:'/webfonts/designer?designer\75Open+Window',familyUrl:'Calligraffitti',subset:'latin',url:'//fonts.googleapis.com/css?family\75Calligraffitti:regular'},Cantarell:{alt:'serif',designer:'Dave Crossland',designerUrl:'/webfonts/designer?designer\75Dave+Crossland',familyUrl:'Cantarell',subset:'latin',url:'//fonts.googleapis.com/css?family\75Cantarell:regular,italic,bold,bolditalic'},Cardo:{alt:'serif',designer:'David Perry',designerUrl:'/webfonts/designer?designer\75David+Perry',familyUrl:'Cardo',subset:'latin',url:'//fonts.googleapis.com/css?family\75Cardo:regular'},'Cherry Cream Soda':{alt:'serif',designer:'Font Diner',designerUrl:'/webfonts/designer?designer\75Font+Diner',familyUrl:'Cherry Cream Soda',subset:'latin',url:'//fonts.googleapis.com/css?family\75Cherry+Cream+Soda:regular'},Chewy:{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Chewy',subset:'latin',url:'//fonts.googleapis.com/css?family\75Chewy:regular'},Coda:{alt:'serif',designer:'Vernon Adams',designerUrl:'/webfonts/designer?designer\75Vernon+Adams',familyUrl:'Coda',subset:'latin',url:'//fonts.googleapis.com/css?family\75Coda:800'},'Coming Soon':{alt:'serif',designer:'Open Window',designerUrl:'/webfonts/designer?designer\75Open+Window',familyUrl:'Coming Soon',subset:'latin',url:'//fonts.googleapis.com/css?family\75Coming+Soon:regular'},Copse:{alt:'serif',designer:'Dan Rhatigan',designerUrl:'/webfonts/designer?designer\75Dan+Rhatigan',familyUrl:'Copse',subset:'latin',url:'//fonts.googleapis.com/css?family\75Copse:regular'},Corben:{alt:'serif',designer:'Vernon Adams',designerUrl:'/webfonts/designer?designer\75Vernon+Adams',familyUrl:'Corben',subset:'latin',url:'//fonts.googleapis.com/css?family\75Corben:bold'},Cousine:{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Cousine',subset:'latin',url:'//fonts.googleapis.com/css?family\75Cousine:regular,italic,bold,bolditalic'},'Covered By Your Grace':{alt:'serif',designer:'Kimberly Geswein',designerUrl:'/webfonts/designer?designer\75Kimberly+Geswein',familyUrl:'Covered By Your Grace',subset:'latin',url:'//fonts.googleapis.com/css?family\75Covered+By+Your+Grace:regular'},'Crafty Girls':{alt:'serif',designer:'Tart Workshop',designerUrl:'/webfonts/designer?designer\75Tart+Workshop',familyUrl:'Crafty Girls',subset:'latin',url:'//fonts.googleapis.com/css?family\75Crafty+Girls:regular'},'Crimson Text':{alt:'serif',designer:'Sebastian Kosch',designerUrl:'/webfonts/designer?designer\75Sebastian+Kosch',familyUrl:'Crimson Text',subset:'latin',url:'//fonts.googleapis.com/css?family\75Crimson+Text:regular,400italic,600,600italic,700,700italic'},Crushed:{alt:'serif',designer:'Astigmatic',designerUrl:'/webfonts/designer?designer\75Astigmatic',familyUrl:'Crushed',subset:'latin',url:'//fonts.googleapis.com/css?family\75Crushed:regular'},Cuprum:{alt:'serif',designer:'Jovanny Lemonad',designerUrl:'/webfonts/designer?designer\75Jovanny+Lemonad',familyUrl:'Cuprum',subset:'latin',url:'//fonts.googleapis.com/css?family\75Cuprum:regular'},'Droid Sans':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Droid Sans',subset:'latin',url:'//fonts.googleapis.com/css?family\75Droid+Sans:regular,bold'},'Droid Sans Mono':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Droid Sans Mono',subset:'latin',url:'//fonts.googleapis.com/css?family\75Droid+Sans+Mono:regular'},'Droid Serif':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Droid Serif',subset:'latin',url:'//fonts.googleapis.com/css?family\75Droid+Serif:regular,italic,bold,bolditalic'},'Fontdiner Swanky':{alt:'serif',designer:'Font Diner',designerUrl:'/webfonts/designer?designer\75Font+Diner',familyUrl:'Fontdiner Swanky',subset:'latin',url:'//fonts.googleapis.com/css?family\75Fontdiner+Swanky:regular'},'GFS Didot':{alt:'serif',designer:'Greek Font Society',familyUrl:'GFS Didot',subset:'greek',url:'//fonts.googleapis.com/css?family\75GFS+Didot:regular\46subset\75greek'},'GFS Neohellenic':{alt:'serif',designer:'Greek Font Society',familyUrl:'GFS Neohellenic',subset:'greek',url:'//fonts.googleapis.com/css?family\75GFS+Neohellenic:regular,italic,bold,bolditalic\46subset\75greek'},Geo:{alt:'serif',designer:'Ben Weiner',designerUrl:'/webfonts/designer?designer\75Ben+Weiner',familyUrl:'Geo',subset:'latin',url:'//fonts.googleapis.com/css?family\75Geo:regular'},Gruppo:{alt:'serif',designer:'Vernon Adams',designerUrl:'/webfonts/designer?designer\75Vernon+Adams',familyUrl:'Gruppo',subset:'latin',url:'//fonts.googleapis.com/css?family\75Gruppo:regular'},Hanuman:{alt:'serif',designer:'Danh Hong',designerUrl:'/webfonts/designer?designer\75Danh+Hong',familyUrl:'Hanuman',subset:'khmer',url:'//fonts.googleapis.com/css?family\75Hanuman:regular,bold\46subset\75khmer'},'Homemade Apple':{alt:'serif',designer:'Font Diner',designerUrl:'/webfonts/designer?designer\75Font+Diner',familyUrl:'Homemade Apple',subset:'latin',url:'//fonts.googleapis.com/css?family\75Homemade+Apple:regular'},'IM Fell DW Pica':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell DW Pica',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+DW+Pica:regular,italic'},'IM Fell DW Pica SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell DW Pica SC',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+DW+Pica+SC:regular'},'IM Fell Double Pica':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Double Pica',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+Double+Pica:regular,italic'},'IM Fell Double Pica SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Double Pica SC',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+Double+Pica+SC:regular'},'IM Fell English':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell English',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+English:regular,italic'},'IM Fell English SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell English SC',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+English+SC:regular'},'IM Fell French Canon':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell French Canon',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+French+Canon:regular,italic'},'IM Fell French Canon SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell French Canon SC',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+French+Canon+SC:regular'},'IM Fell Great Primer':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Great Primer',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+Great+Primer:regular,italic'},'IM Fell Great Primer SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer\75Igino+Marini',familyUrl:'IM Fell Great Primer SC',subset:'latin',url:'//fonts.googleapis.com/css?family\75IM+Fell+Great+Primer+SC:regular'},Inconsolata:{alt:'serif',designer:'Raph Levien',designerUrl:'/webfonts/designer?designer\75Raph+Levien',familyUrl:'Inconsolata',subset:'latin',url:'//fonts.googleapis.com/css?family\75Inconsolata:regular'},'Irish Growler':{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Irish Growler',subset:'latin',url:'//fonts.googleapis.com/css?family\75Irish+Growler:regular'},'Josefin Sans':{alt:'serif',designer:'Santiago Orozco',designerUrl:'/webfonts/designer?designer\75Santiago+Orozco',familyUrl:'Josefin Sans',subset:'latin',url:'//fonts.googleapis.com/css?family\75Josefin+Sans:100,100italic,300,300italic,400,400italic,600,600italic,700,700italic'},'Josefin Slab':{alt:'serif',designer:'Santiago Orozco',designerUrl:'/webfonts/designer?designer\75Santiago+Orozco',familyUrl:'Josefin Slab',subset:'latin',url:'//fonts.googleapis.com/css?family\75Josefin+Slab:100,100italic,300,300italic,400,400italic,600,600italic,700,700italic'},'Just Another Hand':{alt:'serif',designer:'Astigmatic',designerUrl:'/webfonts/designer?designer\75Astigmatic',familyUrl:'Just Another Hand',subset:'latin',url:'//fonts.googleapis.com/css?family\75Just+Another+Hand:regular'},'Just Me Again Down Here':{alt:'serif',designer:'Kimberly Geswein',designerUrl:'/webfonts/designer?designer\75Kimberly+Geswein',familyUrl:'Just Me Again Down Here',subset:'latin',url:'//fonts.googleapis.com/css?family\75Just+Me+Again+Down+Here:regular'},Kenia:{alt:'serif',designer:'Julia Petretta',designerUrl:'/webfonts/designer?designer\75Julia+Petretta',familyUrl:'Kenia',subset:'latin',url:'//fonts.googleapis.com/css?family\75Kenia:regular'},Kranky:{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Kranky',subset:'latin',url:'//fonts.googleapis.com/css?family\75Kranky:regular'},Kristi:{alt:'serif',designer:'Birgit Pulk',designerUrl:'/webfonts/designer?designer\75Birgit+Pulk',familyUrl:'Kristi',subset:'latin',url:'//fonts.googleapis.com/css?family\75Kristi:regular'},Lato:{alt:'serif',designer:'Łukasz Dziedzic',designerUrl:'/webfonts/designer?designer\75Łukasz+Dziedzic',familyUrl:'Lato',subset:'latin',url:'//fonts.googleapis.com/css?family\75Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic'},Lekton:{alt:'serif',designer:'multiple designers',familyUrl:'Lekton',subset:'latin',url:'//fonts.googleapis.com/css?family\75Lekton:400,italic,700'},Lobster:{alt:'serif',designer:'Pablo Impallari',designerUrl:'/webfonts/designer?designer\75Pablo+Impallari',familyUrl:'Lobster',subset:'latin',url:'//fonts.googleapis.com/css?family\75Lobster:regular'},'Luckiest Guy':{alt:'serif',designer:'Astigmatic',designerUrl:'/webfonts/designer?designer\75Astigmatic',familyUrl:'Luckiest Guy',subset:'latin',url:'//fonts.googleapis.com/css?family\75Luckiest+Guy:regular'},'Maiden Orange':{alt:'serif',designer:'Astigmatic',designerUrl:'/webfonts/designer?designer\75Astigmatic',familyUrl:'Maiden Orange',subset:'latin',url:'//fonts.googleapis.com/css?family\75Maiden+Orange:regular'},Merriweather:{alt:'serif',designer:'Eben Sorkin',designerUrl:'/webfonts/designer?designer\75Eben+Sorkin',familyUrl:'Merriweather',subset:'latin',url:'//fonts.googleapis.com/css?family\75Merriweather:regular'},Molengo:{alt:'serif',designer:'Denis Jacquerye',designerUrl:'/webfonts/designer?designer\75Denis+Jacquerye',familyUrl:'Molengo',subset:'latin',url:'//fonts.googleapis.com/css?family\75Molengo:regular'},'Mountains of Christmas':{alt:'serif',designer:'Tart Workshop',designerUrl:'/webfonts/designer?designer\75Tart+Workshop',familyUrl:'Mountains of Christmas',subset:'latin',url:'//fonts.googleapis.com/css?family\75Mountains+of+Christmas:regular'},Neucha:{alt:'serif',designer:'Jovanny Lemonad',designerUrl:'/webfonts/designer?designer\75Jovanny+Lemonad',familyUrl:'Neucha',subset:'latin',url:'//fonts.googleapis.com/css?family\75Neucha:regular'},Neuton:{alt:'serif',designer:'Brian Zick',designerUrl:'/webfonts/designer?designer\75Brian+Zick',familyUrl:'Neuton',subset:'latin',url:'//fonts.googleapis.com/css?family\75Neuton:regular'},Nobile:{alt:'serif',designer:'Vernon Adams',designerUrl:'/webfonts/designer?designer\75Vernon+Adams',familyUrl:'Nobile',subset:'latin',url:'//fonts.googleapis.com/css?family\75Nobile:regular,italic,bold,bolditalic'},'OFL Sorts Mill Goudy TT':{alt:'serif',designer:'Barry Schwartz',familyUrl:'OFL Sorts Mill Goudy TT',subset:'latin',url:'//fonts.googleapis.com/css?family\75OFL+Sorts+Mill+Goudy+TT:regular,italic'},'Old Standard TT':{alt:'serif',designer:'Alexey Kryukov',familyUrl:'Old Standard TT',subset:'latin',url:'//fonts.googleapis.com/css?family\75Old+Standard+TT:regular,italic,bold'},Orbitron:{alt:'serif',designer:'Matt McInerney',designerUrl:'/webfonts/designer?designer\75Matt+McInerney',familyUrl:'Orbitron',subset:'latin',url:'//fonts.googleapis.com/css?family\75Orbitron:400,500,700,900'},'PT Sans':{alt:'serif',designer:'multiple designers',familyUrl:'PT Sans',subset:'latin',url:'//fonts.googleapis.com/css?family\75PT+Sans:regular,italic,bold,bolditalic'},'PT Sans Caption':{alt:'serif',designer:'multiple designers',familyUrl:'PT Sans Caption',subset:'latin',url:'//fonts.googleapis.com/css?family\75PT+Sans+Caption:regular,bold'},'PT Sans Narrow':{alt:'serif',designer:'multiple designers',familyUrl:'PT Sans Narrow',subset:'latin',url:'//fonts.googleapis.com/css?family\75PT+Sans+Narrow:regular,bold'},'Permanent Marker':{alt:'serif',designer:'Font Diner',designerUrl:'/webfonts/designer?designer\75Font+Diner',familyUrl:'Permanent Marker',subset:'latin',url:'//fonts.googleapis.com/css?family\75Permanent+Marker:regular'},Philosopher:{alt:'serif',designer:'Jovanny Lemonad',designerUrl:'/webfonts/designer?designer\75Jovanny+Lemonad',familyUrl:'Philosopher',subset:'latin',url:'//fonts.googleapis.com/css?family\75Philosopher:regular'},Puritan:{alt:'serif',designer:'Ben Weiner',designerUrl:'/webfonts/designer?designer\75Ben+Weiner',familyUrl:'Puritan',subset:'latin',url:'//fonts.googleapis.com/css?family\75Puritan:regular,italic,bold,bolditalic'},Raleway:{alt:'serif',designer:'Matt McInerney',designerUrl:'/webfonts/designer?designer\75Matt+McInerney',familyUrl:'Raleway',subset:'latin',url:'//fonts.googleapis.com/css?family\75Raleway:100'},'Reenie Beanie':{alt:'serif',designer:'James Grieshaber',designerUrl:'/webfonts/designer?designer\75James+Grieshaber',familyUrl:'Reenie Beanie',subset:'latin',url:'//fonts.googleapis.com/css?family\75Reenie+Beanie:regular'},'Rock Salt':{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Rock Salt',subset:'latin',url:'//fonts.googleapis.com/css?family\75Rock+Salt:regular'},Schoolbell:{alt:'serif',designer:'Font Diner',designerUrl:'/webfonts/designer?designer\75Font+Diner',familyUrl:'Schoolbell',subset:'latin',url:'//fonts.googleapis.com/css?family\75Schoolbell:regular'},Slackey:{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Slackey',subset:'latin',url:'//fonts.googleapis.com/css?family\75Slackey:regular'},Sniglet:{alt:'serif',designer:'Haley Fiege',designerUrl:'/webfonts/designer?designer\75Haley+Fiege',familyUrl:'Sniglet',subset:'latin',url:'//fonts.googleapis.com/css?family\75Sniglet:800'},Sunshiney:{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Sunshiney',subset:'latin',url:'//fonts.googleapis.com/css?family\75Sunshiney:regular'},Syncopate:{alt:'serif',designer:'Brian J. Bonislawsky',familyUrl:'Syncopate',subset:'latin',url:'//fonts.googleapis.com/css?family\75Syncopate:regular'},Tangerine:{alt:'serif',designer:'Toshi Omagari',designerUrl:'/webfonts/designer?designer\75Toshi+Omagari',familyUrl:'Tangerine',subset:'latin',url:'//fonts.googleapis.com/css?family\75Tangerine:regular,bold'},Tinos:{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer\75Steve+Matteson',familyUrl:'Tinos',subset:'latin',url:'//fonts.googleapis.com/css?family\75Tinos:regular,italic,bold,bolditalic'},Ubuntu:{alt:'serif',designer:'Multiple Designers',familyUrl:'Ubuntu',subset:'latin',url:'//fonts.googleapis.com/css?family\75Ubuntu:regular,italic,bold,bolditalic'},UnifrakturCook:{alt:'serif',designer:'j. \47mach\47 wust',designerUrl:'/webfonts/designer?designer\75j.+\47mach\47+wust',familyUrl:'UnifrakturCook',subset:'latin',url:'//fonts.googleapis.com/css?family\75UnifrakturCook:bold'},UnifrakturMaguntia:{alt:'serif',designer:'j. \47mach\47 wust',designerUrl:'/webfonts/designer?designer\75j.+\47mach\47+wust',familyUrl:'UnifrakturMaguntia',subset:'latin',url:'//fonts.googleapis.com/css?family\75UnifrakturMaguntia:regular'},Unkempt:{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Unkempt',subset:'latin',url:'//fonts.googleapis.com/css?family\75Unkempt:regular'},Vibur:{alt:'serif',designer:'Johan Kallas',designerUrl:'/webfonts/designer?designer\75Johan+Kallas',familyUrl:'Vibur',subset:'latin',url:'//fonts.googleapis.com/css?family\75Vibur:regular'},Vollkorn:{alt:'serif',designer:'Friedrich Althausen',designerUrl:'/webfonts/designer?designer\75Friedrich+Althausen',familyUrl:'Vollkorn',subset:'latin',url:'//fonts.googleapis.com/css?family\75Vollkorn:regular,italic,bold,bolditalic'},'Walter Turncoat':{alt:'serif',designer:'Sideshow',designerUrl:'/webfonts/designer?designer\75Sideshow',familyUrl:'Walter Turncoat',subset:'latin',url:'//fonts.googleapis.com/css?family\75Walter+Turncoat:regular'},'Yanone Kaffeesatz':{alt:'serif',designer:'Yanone',designerUrl:'/webfonts/designer?designer\75Yanone',familyUrl:'Yanone Kaffeesatz',subset:'latin',url:'//fonts.googleapis.com/css?family\75Yanone+Kaffeesatz:200,300,400,700'}};
	var fontlist = [];
	var familyUrl = '';
	var fontBucket = document.getElementById('fonts-bucket');
	var fontsHTML = [];

	jQuery.each(fonts, function(i, e){

		familyUrl = this['familyUrl'];
		if(currentFonts.in_array(familyUrl))
			checked = 'checked="checked"';
		else
			checked = '';

		cssline = "font-family:'"+familyUrl+"',"+this['alt'];

		fontsHTML.push("<li style='margin-bottom:30px;'><label style='font-family:"+familyUrl+"'><input type='checkbox' name='gfontr_fonts[]' value='"+familyUrl+"' "+checked+" /> <span style='font-size:25px;'>"+familyUrl+"</span> </label> CSS: <pre style='display:inline'>"+cssline+"</pre></li>");
		fontlist.push(familyUrl);
	});
	
	fontBucket.innerHTML = fontsHTML.join('');

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
