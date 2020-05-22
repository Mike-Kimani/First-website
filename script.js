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

function clickListener(event){
event.preventDefault();

console.log('Email: ', document.querySelector('#email').value);
console.log('message:', document.querySelector('#message').value);
}
submitButton.addEventListener('click', clickListener);