function updateClock() {
    // Usamos Luxon para manejar la zona horaria y formato 12 horas con AM/PM
    const { DateTime } = luxon;
    const timeZone = 'America/El_Salvador'; // Zona horaria cambiada a San Salvador, El Salvador
    const now = DateTime.now().setZone(timeZone);

    // Formatear la hora en formato 12 horas
    const hours = now.toFormat('hh');     // Dos dígitos 12h
    const minutes = now.toFormat('mm');
    const seconds = now.toFormat('ss');
    const ampm = now.toFormat('a');       // AM o PM

    // Mostrar la hora en el elemento reloj
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Verificar si son 11:11 AM o 11:11 PM
    if (hours === '11' && minutes === '11' && (ampm === 'AM' || ampm === 'PM')) {
        showMessage();
    }
}

function showMessage() {
    const messageElement = document.getElementById('message');
    const deseoForm = document.getElementById('deseoForm');
    messageElement.style.display = 'block';
    deseoForm.style.display = 'block';
    clearInterval(clockInterval); // Detener el reloj
}

document.getElementById('enviarDeseoBtn').addEventListener('click', function() {
    const deseoInput = document.getElementById('deseoInput').value;
    const respuesta = document.getElementById('respuesta');

    if (deseoInput) {
        respuesta.textContent = `Tu deseo: "${deseoInput}" ha sido enviado. ¡Buena suerte!`;
        document.getElementById('deseoInput').value = ''; // Limpiar el campo
    } else {
        respuesta.textContent = "Por favor, escribe un deseo.";
    }
});

const clockInterval = setInterval(updateClock, 1000);
updateClock(); // Llamar a la función una vez al inicio
