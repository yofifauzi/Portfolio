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

//for validation form

function onFormSubmit(e){
	//untuk menghindari terjadinya OOD
	e.preventDefault()

	const email = $("#email")
	const subject = $("#subject")
	const message = $("#message")

	// console.log($(subject).val())

	if(!$(email).val()){
		alert("Email is required")
	} else if(!$(subject).val()){
		alert("Subject is required")
	} else if(!$(message).val()){
		alert("Message is required")
	} else{
		alert("Form Submitted")
		$(email).val("")
		$(subject).val("")
		$(message).val("")
	}
}