var names=[
{
id:"shashank",	
name:'shashank',
email:'shashank@gmail.com',
phone:3545656
},
{
	id:"chandan",
	name:'chandan',
	email:'chandan@gmail.com',
	phone:358736
},
{ 
	id:"vishal",
	name:'vishal',
	email:'vishal@gmail.com',
	phone:335458736
},
{
	id:"aditya",
	name:'aditya',
	email:'aditya@gmail.com',
	phone:355686358736
},
{
	id:"shoaib",
	name:'shoaib',
	email:'shoaib@gmail.com',
	phone:352458736
},
{
	id:"sagar",
	name:'sagar',
	email:'sagar@gmail.com',
	phone:2345358736
},
{
	id:"prashant",
	name:'prashant',
	email:'prashant@gmail.com',
	phone:358736
},
{
	id:"dhaval",
	name:'dhaval',
	email:'dhaval@gmail.com',
	phone:358736
}];




var a;
$(document).ready(function()
{
	$('.contact').on('click',function()
	{
		a=this.id;
		for (var i = 0; i < names.length; i++) {
		if (a===names[i].id) {
			var display = '<div>Name ' + names[i].name + '</br>' +
							'Email ' + names[i].email + '</br>' +
								'Phone ' + names[i].phone + '</div>';

			$(".contact-information").html(
				display);
		}
	}
		
	});
	


});