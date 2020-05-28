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
function validateNSFW(reply){
    if(reply.includes('crap')){
        return false;
    }
    else
    return true;
}
function clickListener(event){
event.preventDefault();

let emailText = document.querySelector('#email').value;
let messageText = document.querySelector('#message').value;
console.log('Email: ', emailText);
console.log('message:', messageText);
if(validateEmail(emailText) !== true){
    console.log('Your email address must include an @')
    return false;
}
if(validateNSFW(messageText) !== true){
    console.log('Your reply must respect community guidelines')
    return false;
}
console.log('Thank you for the reply')
}
submitButton.addEventListener('click', clickListener);



