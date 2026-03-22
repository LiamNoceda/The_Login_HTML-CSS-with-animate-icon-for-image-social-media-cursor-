const loginForm = document.getElementById('Login_form');
const loginInput = document.getElementById('Login');
const passwordInput = document.getElementById('Password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const correctLogin = "user123";
    const correctPassword = "password777";

    if (loginInput.value === correctLogin && passwordInput.value === correctPassword) {
        localStorage.setItem('userName', loginInput.value);
        
        window.location.href = "page.html";
    } else {
        alert("Ошибка! Неверный логин или пароль.");
        passwordInput.value = "";
    }
});
