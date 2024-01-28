//
let users = [];
function login() {
    let _a, _b;
    const email = ((_a = document.getElementById('email')) === null || _a === void 0 ? void 0 : _a.value) || '';
    const password = ((_b = document.getElementById('password')) === null || _b === void 0 ? void 0 : _b.value) || '';
    if (!email || !password) {
        alert("Пожалуйста заполните все поля");
        return;
    }
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert(`Добро пожаловать! ${user.name}`);
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
    else {
        alert("Ошибочный пароль или логин");
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}
function register() {
    var _a, _b, _c, _d, _e;
    const regEmail = ((_a = document.getElementById('regEmail')) === null || _a === void 0 ? void 0 : _a.value) || '';
    let existingUser;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === regEmail) {
            existingUser = true;
        }
    }
    if (existingUser) {
        alert("Электронная почта уже зарегистрирована");
    }
    else {
        const newUser = {
            name: (_b = document.getElementById('regName')) === null || _b === void 0 ? void 0 : _b.value,
            email: regEmail,
            password: (_c = document.getElementById('regPassword')) === null || _c === void 0 ? void 0 : _c.value,
            age: +((_d = document.getElementById('regAge')) === null || _d === void 0 ? void 0 : _d.value),
            gender: (_e = document.querySelector('input[name="gender"]:checked')) === null || _e === void 0 ? void 0 : _e.value
        };
        users.push(newUser);
        for (let i = 0; i < users.length; i++) {
            console.log(users[i]);
        }
        alert('Регистрация прошла успешно!');
        document.getElementById('regName').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('regAge').value = '';
    }
}
function showRegistrationForm() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('sign_up').style.display = 'block';
}
function showLoginForm() {
    document.getElementById('sign_up').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
}
