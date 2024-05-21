let label = document.getElementsByClassName("inputBoxDescription");           //get labelBox
let inputBox = document.getElementsByClassName("inputField");           //get inputField
let emailBox=document.getElementsByClassName('emailBox').value;              //get emailBox

$(document).ready(function () {
    $('.signUpBtn').click(function () {              
        $('.formBox').css('background-color', '#007FFF');
        $('.logInTitle, .form, .signUpBtn, .logo').hide(700);      //hide the login form 
        $('.signUpForm, .signUpTitle').slideDown('slow');       //signUp form slides into the screen
    });

    $('.logInRedirect').click(function () {              
        $('.formBox').css('background-color', '#007FFF');
        $('.signUpTitle, .signUpForm, .signUpBtn').hide(700);      //hide the signUp form 
        $('.form, .logInTitle').slideDown('slow');       //logIn form slides into the screen
        $('.logo, .signUpBtn').show(700);
    });

    $('.inputField').focus(function () {            //label text in its original position when focused
        $(this).prev('.inputBoxDescription').css({
            position: 'relative',
            top: '0',
            fontSize: '12px'
        });
    });

    $('.inputField').blur(function () {             //label text inside the input field when out of focus
        if ($(this).val() === '') {
            $(this).prev('.inputBoxDescription').css({
                position: 'relative',
                top: '30px',
                fontSize: '14px'
            });
        }
    });


    //input field validation from here....

    $('.fName, .mName, .lName').change(function(){                 
        if($(this).val().length<=3){            //checks the lenght of input characters 
            $(this).css({
                border: '2px solid red',
                borderRadius: '5px',
                transition: '.2s linear'
            })
        }
        else{
            $(this).css({
                border: 'none',
                borderBottom: '1px solid grey'
            })
        }
    })
    $('emailBox').change(function(){
        if($(this).length<3){
            alert("Dnager");
        }
    })

});
