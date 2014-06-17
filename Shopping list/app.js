//when clicking on button OR pressing enter get the value on the text box.
//item = <p>item + check button + remove button
//append the item to the item area

var addnewitem = function () {
	var itemtext = $('#iteminput').val();
		var newitem = "<div class='item'><p>"+itemtext+"</p><button class='check'>check</button><button class='remove'>Remove</button>";
		$('.itemsarea').prepend(newitem);
		$('#iteminput').val("");
		console.log(itemtext);
		console.log(newitem);
	};

$(document).ready( function() {
	$('#additem').click( function() {
		addnewitem();
	});

	$("#iteminput").keypress(function(e) {
    if(e.which == 13) {
        addnewitem();
    	};
	});

    $('.itemsarea').on('click', '.remove',function() {
    	$(this).closest('.item').remove();
    });

    //when click on check button, find sibling p and change css to cross
    $('.itemsarea').on('click', '.check',function() {
    	$(this).siblings('p').css({"text-decoration":"line-through","color":"red" });
    });


})