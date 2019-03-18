let maxNameLength = 50;
let minPhoneLength = 6;
let maxPhoneLength = 16;
let phoneRegex = /[0-9-()+]/;  /// FIGURE THIS OUT



$('#input-name').on('keydown', function(e) {
    var input = e.target.value;
    if (input.length > maxNameLength) {
        $(this).css('border', 'solid 2px red');
    } else {
        $(this).css('border', 'solid 1px gray');
    }
});


$('#input-phone').on('blur', function(e) {
    var input = e.target.value;
    if (input.length < minPhoneLength || input.length > maxPhoneLength || isNaN(input)) {
        $(this).css('border', 'solid 2px red');
    } else {
        $(this).css('border', 'solid 1px gray');
    }
});

$('#contact-list').on('click', '.row', function(e) {
    var rowElements = $(this).children();
    var updateFormElements = $('#update-form input').slice(0,rowElements.length); // get all elements (values right now empty) from the array (update-form input) --> store values in new variable, updateFormElements
    for (var i = 0; i < rowElements.length; i++) {   
        $(updateFormElements[i]).val($(rowElements[i]).html());
    }
    $('#update-form').prop('row-id',$(this).attr('id'));     
});

let rowIdCounter = $('#contact-list tbody').find('tr').length;  //see how many rows there a're in 'our tablefunction(e){

/*
$('#form1').submit(function(e) {
    e.preventDefault();

    var formId = e.target.id;
    let newName = e.name.value;
    let newEmail = e.email.value;
    let newPhone = e.phone.value;
   
    const row = $(`
    <tr class="row">        
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
    </tr>`
    );


    }
); */

$('.contact-form').submit(function(e) { //when the contact-form is submitted do this.
    e.preventDefault(); //stops from reloading the page
    var formId = e.target.id;
    var name = e.target.name.value;
    var phone = e.target.phone.value; //get all information from form that the user filled out, store into newly defined variables
    var email = e.target.email.value;
    // the to be inserted contact information
    const row = $(`
        <tr class="row">        
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>`
    );    
    
    //deal with form submissions.
    //construct the object that will be added to the dom(HTML markup), pass the previously defined variables which store the user info
    // if you are adding a new contact just append to list of existing contacts

    if(formId === 'create-form') { //if the form that is submitted is called 'create-form do this:
        $(row).attr("id",`row-${rowIdCounter++}`); //increase the number in row-id
        $('tbody').append(row); //append the object that was created (in row) to the 'tbody'
        $(this).find('.clear').click(); //clear the information from the inputs (reset input fields)
    } else {
        $(row).attr("id",$(this).prop('row-id'));
        // if you want to update a contact, find the relevant row and replace that row with updated information. 
        $('#'+$(this).prop('row-id')).replaceWith(row);
        // logic above pushes the information created in row over the attribute that was previously selected
    }
    alert(`Name is ${name},Phone is ${phone},Email is ${email}`);
});
/*
$   ('#contact-list').on('click','.row',function(e) { //target a specific row by clicking on the elements in that row

}    var rowElements = $(this).children(); //declare variables, store the children of the clicked element in a variable 
    var updateFormElements = $('#update-form input').slice(0,rowElements.length); // get all elements (values right now empty) from the array (update-form input) --> store values in new variable, updateFormElements
    console.log(updateFormElements);
    for(var i =0; i < rowElements.length; i++) {
        
        $(updateFormElements[i]).val($(rowElements[i]).html()); //use the for loop to iterate over each element in the new array, assign the values from the rowElements into updateFormElements using .val() 
        //Set the value of each element in the set of matched elements from rowElements.
    }
    
    $('#update-form').prop('row-id',$(this).attr('id')); //in update form, get this (row object) property row-id and the id associated with this attribute so that you update the correct form.
    
});*/





// tr:nth-child(1)

//$(#)
/*
for (var i = 1; i <= 4; i++) { // how do you get the number of children?
    $('tbody tr:nth-child('+i+')').on('click', function(e) {
        console.log(e.currentTarget);
        $('#update-name').val('Sam');
    });
}
/*
$('tbody').on('click', function(e) {
     console.log(e.currentTarget);
});

/*


$('#row-name').on("mouseover", function() {
    var name = $('input[placeholder=Name]').val();
    
    if (name.length > maxNameLength) {
        $('#row-name').css({"border-color": "red",  "border-weight":"1px", "border-style":"solid"});
    } else $('#row-phone').css({"border": "0px"})
})

$('#row-phone').on("mouseover", function() {
    var phone = $('input[placeholder=Phone]').val();
    
    if (phone.length < minPhoneLength || phone.length > maxPhoneLength || (!phoneRegex.test(phone)) ) {
        $('#row-phone').css({"border-color": "red",  "border-weight":"3px", "border-style":"solid"});
        console.log('is the border red?')
    } else {
        $('#row-phone').css({"border": "0px"})
        console.log("no it's not red");
    }
})

$('#row-phone').blur(function(){
    alert("This input field has lost its focus.");
    console.log("we should be getting a blur!");
});

$('#form1').submit(function(event){
    
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting
    
    console.log(maxNameLength);
    var name = event.target.name.value;
    console.log(name.length);
    if (name.length > maxNameLength) {
        alert("Sorry, please make sure the name is fewer than " + maxNameLength + " characters.");
    }

    var phone = event.target.phone.value;

    if (phone.length < minPhoneLength || phone.length > maxPhoneLength || (!phoneRegex.test(phone)) ) {
        alert("Sorry, please enter a valid phone number.");
    }
    var email = event.target.email.value;

    intRegex = /[0-9 -()+]+$/;
    console.log(intRegex.test(phone));
      
});


/*

$('#reset').click(function(){
    
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting
    
    
      
});
*/