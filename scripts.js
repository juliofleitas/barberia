// FALTA TERMINAR

// document.addEventListener('DOMContentLoaded', function () {
//     const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
//       initialView: 'dayGridMonth',
//       selectable: true,
//       dateClick: function(info) {
//         document.getElementById('date').value = info.dateStr;
//       }
//     });
  
//     calendar.render();
  
//     const form = document.getElementById('reservation-form');
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       const name = document.getElementById('nombre').value;
//       const phone = document.getElementById('telefono').value;
//       const date = document.getElementById('date').value;
//       const time = document.getElementById('hora').value;
//       const servicio = document.getElementById('servicio').value;
//       const recordar = document.getElementById('recordar').checked ? 'Sí' : 'No';
      
//       alert(`Reserva confirmada:
//         Nombre: ${name}
//         Número de Teléfono: ${phone}
//         Día: ${date}
//         Hora: ${time}
//         Servicio: ${servicio}
//         Recordar Turno: ${recordar}`);
      
//     });
//   });
