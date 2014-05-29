function showCaption(content) {	
	document.getElementById("caption").innerHTML = content;
	document.getElementById("caption").style.display = 'block';
}
function hideCaption() {
	document.getElementById("caption").style.display = 'none';
}


$(document).ready(function(){
	
	/**/
 
  	$("#topnav a, #etoemap a").hover(function() { // Hover over event on list item	
		var tip = $(this).attr('title');                       //Remove the title attribute's to avoid the native tooltip from the browser    
		$(this).attr('title','');
		$("div#caption").show();
		$("div#caption").html(tip);
	}, function() { // on hover out...
		$(this).attr('title',$("div#caption").html()); 
		$("div#caption").html("");
		$("div#caption").hide();			
	});
	
	$("ul#topnav li").hover(function() { //Hover over event on list item		
    	$(this).find("ul").show(); //Show the subnav     		
    } , function() { //on hover out...
     		$(this).find("ul").hide(); //Hide the subnav 
    });
 	$('div.dropdown').hide();
 	$("#etoemap div.mapmousehover").hover(function() { 
		$(this).find("div.dropdown").show();
	  },function(){ 
		  $(this).find("div.dropdown").hide();
	}); 
 
});