# Taller-2

## Descripción

Este proyecto es una aplicación web interactiva que tiene como propósito simular lo que pasa en una página de registro e inicio de sesión, utilizando validaciones en tiempo real y almacenamiento local del navegador.

## Funcionalidades

### Página de registro

- Validación de nombre de usuario (mínimo 5 caracteres).
- Validación de correo electrónico.
- Validación de contraseña con los siguientes criterios:
   1. Mínimo 8 caracteres.
   2. Al menos un número.
   3. Al menos una letra.
- Indicador visual de la seguridad de la contraseña.
- Confirmación de contraseña en tiempo real.
- Prevención de datos duplicados.
- Almacenamiento de datos en localStorage.

### Inicio de sesión

- Verificación de datos con uauario, correo y contraseña.
- Mensajes dinamicos de exito o error.
- Sincronización activa con el localStorage.

### Experiencia de usuario

- Feedback inmediato con mensajes y/o alerts.
- Botones para mostrar/ocultar contraseña.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- LocalStorage del navegador.

## Características técnicas

- Uso de 'checkVadility()' y 'setCustomVadility()' para validaciones personalizadas.
- Estrutura modular del código (HTML, CSS y JS separados).
- Gestión de eventos (addEventListener).
- Persistencia de datos en el almacenamiento local.

## Enlaces

- GitHub: https://github.com/Joshuabym856/taller-2
- Netlify: https://singup-login.netlify.app/
