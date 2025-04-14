// index.js

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("login.html")) {
    // Lógica para login
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        validarLogin();
      });
    }
  }

  if (path.includes("dashboard.html") || path.includes("pacientes.html")) {
    verificarSesion();
    const logoutBtn = document.querySelector(
      "button[onclick='cerrarSesion()']"
    );
    if (logoutBtn) logoutBtn.onclick = cerrarSesion;
  }
});

// Función para validar login
function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensaje = document.getElementById("mensaje-error");

  if (usuario === "admin" && contrasena === "1234") {
    localStorage.setItem("logueado", "true");
    window.location.href = "dashboard.html";
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
  }
}

// Función para verificar si hay sesión activa
function verificarSesion() {
  if (localStorage.getItem("logueado") !== "true") {
    window.location.href = "login.html";
  }
}

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("logueado");
  window.location.href = "login.html";
}
