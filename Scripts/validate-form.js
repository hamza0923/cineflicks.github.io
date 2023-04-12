$(document).ready(function(){
    $('#register-form').validate({
        rules: {
            fName: {
                required: true
            },
            lName: {
                required: true
            },
            email: {
                required: true,
                email:  true
            },
            password: {
                required: true,
                minlenght: 8
            },
            cPassword: {
                required: true,
                minlenght: 8,
                equalTo: '#password'
            }
        },
        messages: {
            fName: {
                required: "*first name required"
            },
            lName: {
                required: "last name required"
            },
            email: {
                required: "*email required",
                email: "*enter valid email"
            },
            password: {
                required: "*password required",
                minlenght: "*must be 8 characters"
            },
            cPassword: {
                required: "*confirm password",
                minlenght: "*must be 8 characters",
                equalTo: "*passwords dont match"
            }
        },
        errorPlacement: function(error, element){
            if(element.attr("name") === "fName"){
                error.insertAfter(".fName-error-message");
            }
            if(element.attr("name") === "lName"){
                error.insertAfter(".lName-error-message");
            }
            if(element.attr("name") === "email"){
                error.insertAfter(".email-error-message");
            }
            if(element.attr("name") === "password"){
                error.insertAfter(".password-error-message");
            }
            if(element.attr("name") === "cPassword"){
                error.insertAfter(".cPassword-error-message");
            }
        }
    });
    

    $('#login-form').validate({
        rules: {
            lEmail: {
                required: true,
                email:  true
            },
            lPassword: {
                required: true,
            }
        },
        messages: {
            lEmail: {
                required: "*email required",
                email: "*enter valid email"
            },
            lPassword: {
                required: "*password required"
            }
        },
        errorPlacement: function(error, element){
            if(element.attr("name") === "lEmail"){
                error.insertAfter(".lemail-error-message");
            }
            if(element.attr("name") === "lPassword"){
                error.insertAfter(".lpassword-error-message");
            }
        }
    });
});