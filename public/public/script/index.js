//international vars//well they not exactly DOM global are they




//i figure will add some navigation for bookmarking purpose//ie it only captures query from link then do searching on user behalf



//+++++++++++++++++++++repeated functions+++++++++++++++++++++++++++


//dom append funtion

function dom_append(div_id_to_append_items_on, items_value_or_makeup){
	
	$('#'+div_id_to_append_items_on).append(items_value_or_makeup);
	
}

function dom_prepend(div_id_to_append_items_on, items_value_or_makeup){
	
	$('#'+div_id_to_append_items_on).prepend(items_value_or_makeup);
	
}


//+++++++++++++++++++++++++++++++ global vars +++++++++++++++++++++++++++++++++++


//product makeup//make it dom global
var product_interface = null;
//placeholder image default
var placeholder_product_image = '/public/ads/placeholder.png'








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


var company_db_data_array = [//companies with rating over x//if no companies of match or they too few//lower search criteria by 25% [ 10%/5%/all ]//run once on page load/before search/click
	{ name:'bigBuy',company_logo_link:'/public/ads/logo/bigbuy.jpg',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
		{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'},
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
														   ]},
		{ name:'bigBuy',company_logo_link:'/public/ads/logo/bigbuy.jpg',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
		{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'}]},

		{name:'asus',company_logo_link:'/public/ads/logo/asus.png',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
			{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'}]},
		
		{name:'Lg',company_logo_link:'/public/ads/logo/lg.jpg',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
			{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'}]},	
	
	
		{name:'pick n pay',company_logo_link:'/public/ads/logo/pnp.jpg',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
			{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'}]},
		{name:'samsung',company_logo_link:'/public/ads/logo/samsung.png',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
			{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'}]},
		{name:'timepiece',company_logo_link:'/public/ads/logo/timepiece.jpg',city:'johannesburg',country:'south africa',province:'gauteng',area:'sebokeng',company_rating:'',boost:false,boost_date_range:'',product_record:[
			{product_name:'Samsung',total_likes:3,total_dislikes:0,total_views:10,tags_used:'phone,samsung,electronic',category_used:'electronic'}]},
	
];

var products_data_from_db_array = [//arrange by add date/allow user to arrange by [ rating/price ]
	
	{name:'Samsung',image_link:'/public/ads/company_ads/samsung/1.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:6,likes:0,dislikes:3,created_date:'',product_tags:[ 'phone','electronic','cellphone','samsung','galaxy'],creation_date:'18/may/2019',expiery_date:'14/july/2019',product_description:'Samsung phone, newly released',product_categry:'electronics'},  //decription have a long or a short version//just hide some text and show all at request
	//click at company logo where ever you are give the comapny contents//or do sometype of serach//same of country//price//category//you can also do expiery//actually just do everything that works//include views and likes//include creation date
	
	{name:'Galaxy x3',image_link:'/public/ads/company_ads/samsung/1.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'phone','s3','galaxy','samsung' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'Super camera phone, sumsung',product_categry:'electronic'},
	
	{name:'Lg hd led tv',image_link:'/public/ads/company_ads/lg/2.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'tv','television','hd','led','lg','electronic' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'Lg tv with led technology',product_categry:'health'},
	
	{name:'Asus 12inch monitor',image_link:'/public/ads/company_ads/asus/3.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/timepiece/4.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/pick_n_pay/5.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/bigbuy/6.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/bigbuy/7.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/pick_n_pay/8.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/pick_n_pay/9.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/pick_n_pay/10.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	{name:'labello',image_link:'',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/pick_n_pay/11.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	{name:'labello',image_link:'/public/ads/company_ads/lg/12.jpg',price:1,company_name:'bigbuy',_id:'',company_logo_link:'public/ads/logo/bigbuy.jpg',company_name:'bigBuy',company_city:'johannesburg',company_country:'south africa',company_province:'gauteng',company_area:'sebokeng',views:0,likes:0,dislikes:0,created_date:'',product_tags:[ 'bau','dada','bau','dabi' ],creation_date:'13/may/2019',expiery_date:'14/july/2019',product_description:'just a labello',product_categry:'health'},
	
	
	
	
	
	
	
	
	
];










/* features */

//add trending keywords bar, used for quick browsing//almost like serach but its automated
//allow search for related selected product items//ie// products that contains keyword like the product//make somewhat strict
//allow ability to rate ads as good or bad, if good it gets higher showing in its search or recommendation pane
//allow advertisers to add discount codes/coupons
//allow link to store




//+++++++++++++++++++++++  array loaded content count keeper ++++++++++++++++++++++

var product_array_last_loaded_content_number = 0;//default on first start

//reset product > product_array_last_loaded_content_number< when its lenth is one digit over >product array< length
(products_data_from_db_array.length == product_array_last_loaded_content_number)?product_array_last_loaded_content_number  = 0:false;



//  +++++++++++++++add contents to screen function//takes a div-- to add to and product ---data array; ++++++++++

function product_shower_logo_fn (product_add_to_div ,product_data_array){
	var product_or_logo_interface;

	product_data_array.forEach(data=>{
		
		 product_or_logo_interface = `<div style='width:10vw !important;height:20vh  !important;min-height: 130px !important;border-bottom: 1px solid rgba(158,158,158,0.25);border-left: 1px solid rgba(158,158,158,0.25);background-image:url(${(data.company_logo_link)?data.company_logo_link:placeholder_product_image});background-size:contain;background-repeat:no-repeat;background-position:center;' class='w3-margin' onclick="item_clicked_for_search('${data.name}','${data.company_name}','${data.product_tags}','${data.product_categry}')"></div>`;
		
		dom_append(product_add_to_div, product_or_logo_interface);
		
		 
	});

}




function product_shower_fn (product_add_to_div ,product_data_array){
	
	
	product_data_array.forEach(data=>{
		
		product_interface = `<div style='width:25vw !important;height:35vh !important;border-bottom: 1px solid rgba(158,158,158,0.25);border-left: 1px solid rgba(158,158,158,0.25);background-image:url(${(data.image_link)?data.image_link:placeholder_product_image});background-size:contain;background-repeat:no-repeat;background-position:center;'><span style='text-shadow:1px 1px white,-1px -1px white' >${data.name}</span><br/></div>`;
		
		dom_append(product_add_to_div, product_interface);
		
		
	});
	
	
	///dom_append(product_add_to_div, items_value_or_makeup);//add product to user interface
	
}


	
product_shower_logo_fn('porpular_or_company_highlights_div',company_db_data_array);//first run add items to header	
product_shower_fn('product_showing_main_container',products_data_from_db_array);	//first run add items to body

	
var d = window.innerHeight;

console.log(d);
	
	
	
	
	
	
//click search funchion

function item_clicked_for_search(item_name,item_company,_item_tags,item_category){
	
	alert(item_name,item_company,_item_tags,item_category)
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





