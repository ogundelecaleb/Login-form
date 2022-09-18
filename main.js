const SignUpBtn = document.querySelector('.signUp-btn');
const LogInBtn = document.querySelector('.logIn-btn');
const LogInForm = document.querySelector('.login-form');
const SignUpForm = document.querySelector('.signup-form');

//*---- show signup form ----*
SignUpBtn.addEventListener('click', () => {
    LogInForm.classList.toggle('hide');
    SignUpForm.classList.toggle('hide');
})

//*---- show login form ----*
LogInBtn.addEventListener('click', () => {
    LogInForm.classList.toggle('hide');
    SignUpForm.classList.toggle('hide');
})