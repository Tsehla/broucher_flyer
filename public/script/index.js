//international vars//well they not exactly DOM global are they




//i figure will add some navigation for bookmarking purpose//ie it only captures query from link then do searching on user behalf



//repeated functions



//++++++++++++++++play ground//or is it batle ground//logic ground//battle of logic/ideas +++++++++++++++++++++++++++++++++++++


/*=============================================

	search bar

===============================================*/

/*------------------------------------ top menu hide/show ---------------------------------*/

//when activity on page ads div 

document.getElementById("main_body_contents_outer_container").onmouseover = function() {	
  hide_or_show_header_menu ('hide');
};

function hide_or_show_header_menu (id){
	
	if(id=='hide'){
	   
	    document.getElementById('control_panel_main_contaier').style.display='none';
	    document.getElementById('menu_bar_show_image').style.display='block';
		
		//call placeholder changer button//incase stopped//cause input was filled//or stop loop if input filled
		change_search_input_placeholder_text();
	   }
	
	if(id=='show'){
	   
	    document.getElementById('control_panel_main_contaier').style.display='block';
	    document.getElementById('menu_bar_show_image').style.display='none';
		
		//call placeholder changer button//incase stopped//cause input was filled//or stop loop if input filled
		change_search_input_placeholder_text();

	   }
	
}





/*=============================================

	search bar

===============================================*/


//search box placeholder text
var current_search_placeholder_text = 0;
//place holder changer loop
var search_input_placeholder_change_interval;

function change_search_input_placeholder_text(){
	
	//placeholder text array
	var search_placeholder_text_array = ['Empty', 'Explore Search', 'Explore Search Find', 'Find','Find Search', 'Find Search Explore', 'Explore']
	
	
	var search_input_placeholder_change_interval = setInterval(
	function(){
		//if serach bar is filled dont allow placeholder change//en stop interval
		if(document.getElementById('search_box_input').value.length > 0){
			clearInterval(search_input_placeholder_change_interval);	
			return;
		}
		document.getElementById('search_box_input').placeholder = search_placeholder_text_array[ current_search_placeholder_text +=1 ];//increase //then return text from array
		
		if(current_search_placeholder_text + 1 == search_placeholder_text_array.length){//reset loop//when array end reached
		   	current_search_placeholder_text = 0;
		   }
		
	}, 5000
	);
	
	
}

change_search_input_placeholder_text();//start array changer


/* features */

//add trending keywords bar, used for quick browsing//almost like serach but its automated
//allow search for related selected product items//ie// products that contains keyword like the product//make somewhat strict
//allow ability to rate ads as good or bad, if good it gets higher showing in its search or recommendation pane
//allow advertisers to add discount codes/coupons
//allow link to store
