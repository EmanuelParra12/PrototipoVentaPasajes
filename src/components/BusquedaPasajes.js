//import React from 'react';
import '../styles/BusquedaPasajes.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos de React-Datepicker


function BusquedaPasajes() {
    const [partida, setPartida] = useState(null);
    const [regreso, setRegreso] = useState(null);

    return (
      <div className="container"> {/* Aplica el estilo del contenedor */}
        <h2>Buscá tu pasaje en micro</h2>
        <label>Origen</label>
        <select className="select"> {/* Aplica el estilo del selector */}
          <option value="ciudad1">Buenos Aires</option>
          <option value="ciudad2">CABA</option>
        </select>
        <label>Destino</label>
        <select className="select"> {/* Aplica el estilo del selector */}
          <option value="ciudad1">Bariloche</option>
          <option value="ciudad2">Córdoba</option>
        </select>
        
        <label>Partida</label>
        <DatePicker
            selected={partida}
            onChange={(date) => setPartida(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy/MM/dd HH:mm"
            placeholderText="Selecciona la fecha y hora de partida"
        />
        <label>Regreso</label>
        <DatePicker
            selected={regreso}
            onChange={(date) => setRegreso(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy/MM/dd HH:mm"
            placeholderText="Selecciona la fecha y hora de regreso"
        />

        <label>Pasajeros</label>
        <select className="select"> {/* Aplica el estilo del selector */}
          <option value="1">1 pasajero</option>
          <option value="2">2 pasajeros</option>
        </select>
        <button className="btn">BUSCAR PASAJES</button> {/* Aplica el estilo del botón */}
      </div>
    );
  }

export default BusquedaPasajes;