
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm_password');
var passwordError = document.getElementById('password-alert');
var confirmPasswordError = document.getElementById('cpassword-alert');
var test = false;
password.addEventListener('input', function() {
    if (password.value.length < 7) {
        password.style.borderColor = 'red';
        passwordError.style.color = 'red';
        passwordError.innerText = 'Password must be longer than 7 characters';
        test = false;
    } else {
        password.style.borderColor = 'green';
        passwordError.innerText = '';
        test = true;
    }
});

confirmPassword.addEventListener('input', function() {
    if (password.value !== confirmPassword.value || test === false) {
        confirmPassword.style.borderColor = 'red';
        confirmPasswordError.innerText = 'Passwords do not match';
        confirmPasswordError.style.color = 'red';
    } else {
        confirmPassword.style.borderColor = 'green';
        confirmPasswordError.innerText = '';
    }
});