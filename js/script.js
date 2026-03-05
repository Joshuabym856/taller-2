
const formulario = document.getElementById('formulario-registro');
const password = document.getElementById('contraseña');
const confirmarPassword = document.getElementById('confirmar-contraseña');
const seguridad = document.getElementById('nivelseguridad');
const usuario = document.getElementById('username');
const correoElectronico = document.getElementById('correo');
const mensajeRegistro = document.getElementById('mensaje-registro');

const botonPestaña = document.querySelectorAll('.pestaña-bt');
const contenidoPestaña = document.querySelectorAll('.cont-pestaña');

botonPestaña.forEach(button => { 
    button.addEventListener('click', () => {
        botonPestaña.forEach(btn => btn.classList.remove('active'));
        contenidoPestaña.forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(`formulario-${button.dataset.tab}`).classList.add('active');

    });
});

document.querySelector('.link-registro').addEventListener('click', () => {
    document.querySelector('[data-tab="registro"]').click();
});

document.querySelector('.link-login').addEventListener('click', () => {
    document.querySelector('[data-tab="login"]').click();
});  


password.addEventListener('input', () => {
    const valor = password.value;
    let fortaleza = 0;

    if (valor.length > 5) fortaleza += 30;
    if (valor.match(/[A-Z]/)) fortaleza += 30;
    if (valor.match(/[0-9]/)) fortaleza += 30;

    seguridad.style.width = fortaleza + '%';

    if(fortaleza < 40) seguridad.style.background = '#ef4444';
    else if(fortaleza < 70) seguridad.style.background = '#f59e0b';
    else seguridad.style.background = '#22c55e';
});

function validarConfirmarPassword() {
        if (password.value !== confirmarPassword.value) {
            confirmarPassword.setCustomValidity('Las contraseñas no coinciden');
        } else {
            confirmarPassword.setCustomValidity('');
        }
    }

password.addEventListener('input', validarConfirmarPassword);
confirmarPassword.addEventListener('input', validarConfirmarPassword);




formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(formulario.checkValidity()){

        const datosUsuario = {
            nombreusuario: document.getElementById('username').value,
            email: document.getElementById('correo').value,
            password: document.getElementById('contraseña').value,
            fecha: new Date().toLocaleString()

        };
        let Usuarios = JSON.parse(localStorage.getItem('usuario')) || [];

        const Existente = Usuarios.some(
            usuario => usuario.email === datosUsuario.email || 
            usuario.nombreusuario === datosUsuario.nombreusuario);
        
        if (Existente) {
            mensajeRegistro.textContent = 'El correo electrónico o el nombre de usuario ya están registrados';
            mensajeRegistro.style.color = 'var(--color-error)';
            return;
        }

        Usuarios.push(datosUsuario);

        localStorage.setItem('usuario', JSON.stringify(Usuarios));

        mensajeRegistro.textContent = 'Datos guardados en el almacenamiento local';
        mensajeRegistro.style.color = 'var(--color-exitoso)';
        alert('¡Registro exitoso! Ahora puedes iniciar sesión con tus credenciales.');

        console.log('Datos en localStorage:', JSON.parse(localStorage.getItem('usuario')));

        formulario.reset();
        seguridad.style.width = '20%';

        document.querySelector('[data-tab="login"]').click();

    } else{
        alert('Por favor, corrige los errores bro');
    }

});

document.getElementById('vercontra').addEventListener('click', () => {
    password.type = password.type === 'password' ? 'text' : 'password';
});

document.getElementById('vercontra2').addEventListener('click', () => {
    const confirmarPassword = document.getElementById('confirmar-contraseña');
    confirmarPassword.type = confirmarPassword.type === 'password' ? 'text' : 'password';
});

const  formularioLogin = document.getElementById('formulario-login');

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const LoginUsuario= document.getElementById('login-usuario').value;
    const passwordLogin = document.getElementById('login-contraseña').value;
    const mensajeLogin = document.getElementById('mensaje-login');

    let usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    const usuarioEncontrado = usuarios.find(
        usuario => (usuario.email === LoginUsuario || usuario.nombreusuario === LoginUsuario) && usuario.password === passwordLogin
    );

    if (usuarioEncontrado) {
        mensajeLogin.textContent = '¡Inicio de sesión exitoso!';
        mensajeLogin.style.color = 'var(--color-exitoso)';

        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));

        setTimeout(() => {
            alert('Bienvenido, ' + usuarioEncontrado.nombreusuario + '!');
        }, 1000);

    } else {
        mensajeLogin.textContent = 'Correo electrónico o contraseña incorrectos';
        mensajeLogin.style.color = 'var(--color-error)';
    }   
});

document.getElementById('vercontra-login').addEventListener('click', () => {
    const loginPassword = document.getElementById('login-contraseña');
    loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
}); 
    