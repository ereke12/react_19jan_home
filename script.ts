
//
type userData = {
  name: string,
  email: string,
  password: string,
  age: number,
  gender: string
}
//

let users: userData[] = [];

function login() {
  const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
  const password = (document.getElementById('password') as HTMLInputElement)?.value || '';

  if (!email || !password) {
    alert("Пожалуйста заполните все поля");    
    return;
  }

  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    alert(`Добро пожаловать! ${user.name}`);
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';
  }
  else{
    alert("Ошибочный пароль или логин");
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';
  }

}


function register() {
  const regEmail = (document.getElementById('regEmail') as HTMLInputElement)?.value || '';

  let existingUser;
  for(let i = 0; i < users.length; i++){
    if(users[i].email === regEmail){
      existingUser = true;
    }
  }

  if (existingUser) {
    alert("Электронная почта уже зарегистрирована");
  } else {
    const newUser: userData = { 
      name: (document.getElementById('regName') as HTMLInputElement)?.value,
      email: regEmail,
      password: (document.getElementById('regPassword') as HTMLInputElement)?.value,
      age: +(document.getElementById('regAge') as HTMLInputElement)?.value,
      gender: (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value
    };
    users.push(newUser);

    for(let i = 0; i < users.length; i++){
      console.log(users[i]);
    }
    alert('Регистрация прошла успешно!');

    
    (document.getElementById('regName') as HTMLInputElement).value = '';
    (document.getElementById('regEmail') as HTMLInputElement).value = '';
    (document.getElementById('regPassword') as HTMLInputElement).value = '';
    (document.getElementById('regAge') as HTMLInputElement).value = '';
  }
}

  
function showRegistrationForm() {
  (document.getElementById('login') as HTMLInputElement).style.display = 'none';
  (document.getElementById('sign_up') as HTMLInputElement).style.display = 'block';
}


function showLoginForm() {
  (document.getElementById('sign_up') as HTMLInputElement).style.display = 'none';
  (document.getElementById('login') as HTMLInputElement).style.display = 'flex';
}
