//international vars//well they not exactly DOM global are they




//i figure will add some navigation for bookmarking purpose//ie it only captures query from link then do searching on user behalf



//repeated functions



//++++++++++++++++play ground//or is it batle ground//logic ground//battle of logic/ideas +++++++++++++++++++++++++++++++++++++


/*=============================================

	search bar

===============================================*/

/*------------------------------------ top menu hide/show ---------------------------------*/
var is_top_menu_hidden = false;

function main_body_onfocus_top_menu_hide (){//ide and set timout to show top menu
	

	
	//hide top menu
	document.getElementById('control_panel_main_contaier').style.display='none';
	
	
	//change body content container top margin
	
	x ();
	

	
	is_top_menu_hidden = false;
	
}



function x (){
	
	if(is_top_menu_hidden){return;}
	
	setTimeout(function(){//restore appearance after time, if no activity from user
	//show top menu
		
	document.getElementById('control_panel_main_contaier').style.display='block';
	
	is_top_menu_hidden =true;
	
},6000);
	
}



//detect activity on page

document.addEventListener('keydown',main_body_onfocus_top_menu_hide);
document.addEventListener('keyup',main_body_onfocus_top_menu_hide);
document.addEventListener('mousedown',main_body_onfocus_top_menu_hide);
document.addEventListener('mouseup',main_body_onfocus_top_menu_hide);
document.addEventListener('mousemove',main_body_onfocus_top_menu_hide);







/*=============================================

	search bar

===============================================*/


//search box placeholder text
var current_search_placeholder_text = 0;


function change_search_input_placeholder_text(){
	
	//placeholder text array
	var search_placeholder_text_array = ['Empty', 'Explore Search', 'Explore Search Find', 'Find','Find Search', 'Find Search Explore', 'Explore']
	
	
	var search_input_placeholder_change_interval = setInterval(
	function(){
		
		document.getElementById('search_box_input').placeholder = search_placeholder_text_array[ current_search_placeholder_text +=1 ];//increase //then return text from array
		
		if(current_search_placeholder_text + 1 == search_placeholder_text_array.length){//reset loop//when array end reached
		   	current_search_placeholder_text = 0;
		   }
		
	}, 5000
	);
	
	
}

change_search_input_placeholder_text();//start array changer

