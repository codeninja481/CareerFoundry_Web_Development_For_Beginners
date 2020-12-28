/*
let number1 = 2;
let number2 = 3;
let sum = number1 + number2;
alert(sum);
*/
/*
function add(number1, number2)
{
	let sum = number1 + number2;
	return sum;
}

let num1 = 3;
let num2 = 4;
let sum1 = add(num1, num2);
alert(sum1);
*/
/*
let fullName = 
{
	firstName: 'John', lastName: 'Doe'
}

alert(fullName.firstName);
*/
/*
let personDetails = {
	fullName: {
		firstName: 'John',
		lastName: 'Smith'
	},
	alertMessage: function(message) {
		alert(message);
	}
}

personDetails.alertMessage('Hello World');
*/

let submitButton = document.querySelector('\#submit-button');
console.log(submitButton);

function clickListener(event)
{
	event.preventDefault();
	let emailInput = document.querySelector('\#email');
	let messageInput = document.querySelector('\#message');
	
	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if(emailValidate(emailText) !== true){
		console.log('The email address must contain @');
		return false;
	}
	console.log('Thanks for your message');
}

submitButton.addEventListener('click', clickListener);

function emailValidate(email)
{
	if(email.includes('@'))
	{
		return true;
	}
	else
	{
		return false;
	}
}