//use event listener at the submit button
document.getElementById('login-submit').addEventListener('click', function
    () {
    //get user value by using value
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //Link to another page
    if (userEmail == 'world.bank@adil.com' && userPassword == 'secret') {
        window.location.href = "banking.html"
    }

});


