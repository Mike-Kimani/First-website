let personDetails = {
    fullName: {
        firstName : 'John',
        lastName : 'Kimani'
    },
    alertHer: function(message){
        alert(message);
    }
}
personDetails.alertHer('Hello there')

let submitButton = document.querySelector('#submit-button');


function validateEmail(email){
    if (email.includes('@')){
return true;
    }
    else
    return false;
}
function clickListener(event){
event.preventDefault();

let emailText = document.querySelector('#email').value;
console.log('Email: ', emailText);
console.log('message:', document.querySelector('#message').value);
if(validateEmail(emailText) !== true){
    console.log('Your email address must include an @')
    return false;
}
console.log('Thank you for the reply')
}
submitButton.addEventListener('click', clickListener);



