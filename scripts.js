const menu = document.querySelector("#menu")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const reserva = document.querySelector("#reservar")
abrir.addEventListener("click", () => {
    menu.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible")
})

reserva.addEventListener("click",() => {
    alert("Reservado")
})


const horaSelect = document.getElementById("hora");
const fechaInput = document.getElementById("fecha");
const form = document.getElementById("formulario");

let turnosAgendados = [];

const horarios = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
];

fechaInput.addEventListener("change", () => {
    const turnosFecha = turnosAgendados.filter((turno => turno.fecha == fechaInput.value));
    const turnosDisponibles = [...horarios];
    turnosFecha.forEach(turno => {
        const index = turnosDisponibles.findIndex(tno => turno.hora == tno );
        if(index >= 0){
            turnosDisponibles.splice(index, 1)
        }
    });
    turnosDisponibles.forEach(turno => {
        const nuevoElemento = document.createElement("option");
        nuevoElemento.setAttribute("value", turno);
        nuevoElemento.innerText = turno;
        horaSelect.appendChild(nuevoElemento);
    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://barbera-reserva.onrender.com/turnos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: e.target.nombre.value,
            telefono: e.target.telefono.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
        }),
    })
        .then((data) => data.json())
        .then((data) => () => {
            turnosAgendados = data.data;
            
        });
});

fetch("https://barbera-reserva.onrender.com/turnos")
    .then((res) => res.json())
    .then((data) => {
        turnosAgendados = data.data;
        console.log(turnosAgendados)
        
    });
