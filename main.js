function toggleDetail(e){
	// initialization
	const target = $(e.target)

	//if conditional for animation drop down
	if($(target).hasClass("active")){
		$(target).html("More Info").removeClass("active")
	}else{
		$(target).html("Less Info").addClass("active")
	}
	
	//initialization 
	const item = $(target).parents(".about-exp-items")
	const detail = $(item).children(".about-exp-items-detail")

	$(detail).slideToggle()
}