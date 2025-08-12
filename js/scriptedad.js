// document.getElementById('edadForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
//     const hoy = new Date();
//     let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

//     const mes = hoy.getMonth() - fechaNacimiento.getMonth();
//     if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
//         edad--;
//     }

//     document.getElementById('resultado').textContent = `Tienes ${edad} años.`;
// });


function calcularEdad() {
    const input = document.getElementById("birthdate").value;
    const resultado = document.getElementById("resultado");

    if (!input) {
        resultado.textContent = "Por favor ingresa tu fecha de nacimiento.";
        return;
    }

    const birthDate = new Date(input);
    const today = new Date();
    let edad = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        edad--;
    }

    resultado.textContent = `Tienes ${edad} años.`;
}
