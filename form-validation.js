$.validator.addMethod( "phoneUS", function( phone_number, element ) {
  phone_number = phone_number.replace( /\s+/g, "" );
  return this.optional( element ) || phone_number.length > 9 &&
    phone_number.match(/^\d{3}-\d{3}-\d{4}$/);
}, "Please specify a valid phone number" );

$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='users-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: {
        required: true,
        minlength: 3
      },
      lastname: {
        required: true,
        minlength: 3
      },
      username: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      address: "required",
      phone: {
        required: true,
        phoneUS: true
      },
      website: {
        url: true
      }
    },
    // Specify validation error messages
    messages: {
      firstname: {
        required: "Please provide a first name",
        minlength: "Your first name must be at least 3 characters long"
      },
      lastname: {
        required: "Please provide a last name",
        minlength: "Your last name must be at least 3 characters long"
      },
      username: "Please provide a username",
      email: "Please enter a valid email address",
      address: "Please provide an address",
      phone: {
        required: "Please provide phone number",
        phoneUS: "Please provide phone number in ddd-ddd-dddd format"
      },
      website: "Please provide valid URL"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});