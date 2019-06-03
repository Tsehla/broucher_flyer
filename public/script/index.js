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
	    document.getElementById('body_top_spacer_when_menu').style.display='none';//move content up
	    document.getElementById('menu_bar_show_image').style.display='block';
		
		//call placeholder changer button//incase stopped//cause input was filled//or stop loop if input filled
		change_search_input_placeholder_text();
	   }
	
	if(id=='show'){
	   
	    document.getElementById('body_top_spacer_when_menu').style.display='block';//push content down
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

/*=============================================

	body data/workings

===============================================*/


/* DB planning

product => 	-> Name
			-> Image (link)
			-> Price --[ can be used for search of sorting ]
			-> Company name (maybe even a logo)
				--> country [ leave blank ][ add it]
				--> company province
				--> city
				--> mall/area/store name
				--> contact [ optional ]
				--> google navigation link [ use given data to find location/area ]
					---> use to generate link { https://maps.google.com/?q= }(ask business to register with google )
			-> [ like button ] --> used to rate-items (for sorting)
			-> [ quick view button ]
			-> [ explore buton (search criteria { Match : same/similar/related })]
			-> expiery date [ month/week/day/year ]
			
// have a search card were a user can fine tune searching criteria [ category, place, price, store, name ]	//login in and registering will make it easier//but rather not look at it that way//make it few click to get user what they want// some may be easiy if the data is loaded from db and other rest of filters applied to user facing element. i.e get data of area and or category, then apply name, if it cant be done easily by db, use filter for it a front.


//have image download/sharing (ads image )


company => 	-> name
			-> location --> country/province/city/mall/area [ will generate link / give warning in registration page ]
			-> product record by [ month/week/day/year ](record contains : likes, dislikes, views/clicks)
			-> company rating { total products likes /total company registered * 100% }
			-> boost [ true/false ]
				--> boost end-date range [ month/week/year/day ]
			


//Use Product id : to create link// link should lead to slighlty different display than just popup but easily integrated to system browsing or whatever//id should also contain user who did advertising,	http://www.xyz.co.za/product_id/user_id






*/


var mock_db_data_company = [//companies with rating over x//if no companies of match or they too few//lower search criteria by 25% [ 10%/5%/all ]//run once on page load/before search/click
	{ name:'bigBuy',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
		{product_name:'labello',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'sprite',total_likes:0,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello3',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello4',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello5',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello6',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello6',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello7',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello8',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello9',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello10',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello11',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello12',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello13',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello14',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'},
		{product_name:'labello15',total_likes:3,total_dislikes:0,total_views:10,tags_used:'bau,dada,bau,dabi',category_used:'health'}
														   ]}
	
];

var mock_db_data_products = [//arrange by add date/allow user to arrange by [ rating/price ]
	
	{name:'labello',image_link:'/public/ads/bigbuy_2019_01_02_13_45_03_pm.jpg',price:1,company_name:'bigbuy',company_id:'',company_logo_link:'public/ads/bigbuy_logo_2019_01_02_13_45_03_pm.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:['bau','dada','bau','dabi'],creation_date:'',expiery_date:''}
];










/* features */

//add trending keywords bar, used for quick browsing//almost like serach but its automated
//allow search for related selected product items//ie// products that contains keyword like the product//make somewhat strict
//allow ability to rate ads as good or bad, if good it gets higher showing in its search or recommendation pane
//allow advertisers to add discount codes/coupons
//allow link to store
