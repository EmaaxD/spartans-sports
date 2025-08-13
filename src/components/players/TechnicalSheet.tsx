import { useContext } from "react";
import Image from "next/image";
import {
  FaUser,
  FaFutbol,
  FaRulerVertical,
  FaBalanceScale,
  FaDumbbell,
  FaLungs,
  FaHeartbeat,
  FaRunning,
  FaCheckCircle,
} from "react-icons/fa";

import { playersContext } from "@src/context/players";

import { PlayerPhoto } from "./PlayerPhoto";

import TestJumpImg from "../../assets/img/testJump.png";
import { formatIsoToDDMMYYYY } from "@src/utils/functions";

export const FichaTecnicaDeportiva = () => {
  const { selectedPlayer } = useContext(playersContext);

  if (!selectedPlayer) return null;

  return (
    <div className="relative max-w-5xl mx-auto px-6 py-10 rounded-2xl bg-[#0a0a0f] text-sm text-white font-orbitron shadow-2xl shadow-yellow-500/30 space-y-8 overflow-hidden crypto-border">
      {/* Efectos de brillos dorados flotantes */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-bounce blur-md golden-pulse"></div>
      <div className="absolute top-8 right-8 w-6 h-6 bg-amber-300 rounded-full opacity-40 animate-pulse blur-sm"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 bg-yellow-500 rounded-full opacity-50 animate-ping blur-sm"></div>
      <div className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-400 rounded-full opacity-20 animate-bounce blur-lg golden-pulse"></div>

      {/* Partículas doradas adicionales */}
      <div className="absolute top-1/2 left-2 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-2 w-2 h-2 bg-amber-400 rounded-full opacity-70 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>

      {/* Imagen de Test de Salto */}
      <div className="absolute w-96 -right-32 md:-right-20 top-[70rem] md:top-[35rem] z-10">
        <Image
          src={TestJumpImg}
          className="w-full opacity-45"
          alt="Test de Salto"
        />
      </div>

      {/* Fondo oscuro con luces y figuras */}
      <div className="absolute inset-0 z-0 bg-[url('/bg-athletes.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Header */}
      <header className="text-center z-10 relative">
        <h1 className="text-3xl font-extrabold text-lime-400 flex justify-center items-center gap-3 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]">
          Ficha Técnica Deportiva
        </h1>
        <p className="text-xs text-lime-300 mt-1">
          Fecha: {formatIsoToDDMMYYYY(selectedPlayer.createdAt)}
        </p>
        {/* Línea decorativa dorada */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-2"></div>
      </header>

      {/* Datos personales y deportivos */}
      <div className="grid md:grid-cols-3 gap-10 z-10 relative border-b border-gray-700 pb-6">
        <section>
          <h2 className="text-cyan-400 text-lg font-semibold flex items-center gap-2">
            <FaUser /> Datos del Atleta
          </h2>
          <ul className="mt-2 space-y-1 text-cyan-100">
            <li className="capitalize">Apellido: {selectedPlayer.apellido}</li>
            <li className="capitalize">Nombre: {selectedPlayer.nombre}</li>
            <li className="capitalize">Clase: {selectedPlayer.clase}</li>
            <li className="capitalize">Sexo: {selectedPlayer.sexo}</li>
            <li className="capitalize">
              Fecha de Nac: {selectedPlayer.fechaNacimiento}
            </li>
            <li className="capitalize">
              Localidad: {selectedPlayer.localidad}
            </li>
          </ul>
        </section>

        <section>
          <PlayerPhoto />
        </section>

        <section>
          <h2 className="text-pink-400 text-lg font-semibold flex items-center gap-2">
            <FaFutbol /> Datos Deportivos
          </h2>
          <ul className="mt-2 space-y-1 text-pink-100">
            <li className="capitalize">Deporte: {selectedPlayer.deporte}</li>
            <li className="capitalize">Posición: {selectedPlayer.posicion}</li>
            <li className="capitalize">
              Club / Escuela: {selectedPlayer.escuelaClub}
            </li>
          </ul>
        </section>
      </div>

      {/* Talla, Lateralidad */}
      <div className="grid md:grid-cols-3 gap-6 z-10 relative">
        <section>
          <h3 className="text-purple-400 font-semibold flex items-center gap-2">
            <FaRulerVertical /> Talla y Características
          </h3>
          <ul className="mt-2 space-y-1 text-purple-100">
            <li>Altura: {selectedPlayer.altura} cm</li>
            <li>Peso: {selectedPlayer.peso} kg</li>
            <li>Torso: {selectedPlayer.alturaTorso}</li>
            <li>Envergadura: {selectedPlayer.envergaduraBrazos} m</li>
            <li>IMC: {selectedPlayer.imc}</li>
            <li>TBM: {selectedPlayer.tmb}</li>
            <li>Biotipo: {selectedPlayer.biotipo}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-sky-400 font-semibold flex items-center gap-2">
            <FaBalanceScale /> Lateralidades
          </h3>
          <ul className="mt-2 space-y-1 text-sky-100">
            <li>Dominancia: {selectedPlayer.piernaDominante}</li>
            <li>Ojo Director: {selectedPlayer.ojoDirector}</li>
            <li>Hombro: {selectedPlayer.hombro}</li>
            <li>Braz. Direc: {selectedPlayer.brazoDirector}</li>
            <li>Pierna dominante: {selectedPlayer.piernaDominante}</li>
            <li>Pierna de dirección: {selectedPlayer.piernaDirectora}</li>
          </ul>
        </section>
      </div>

      {/* Tobillos, Fuerzas */}
      <div className="grid md:grid-cols-3 gap-6 z-10 relative">
        <section>
          <h3 className="text-pink-300 font-semibold flex items-center gap-2">
            <FaRunning /> Dorsiflexión de Tobillos
          </h3>
          <ul className="mt-2 space-y-1 text-pink-100">
            <li>Izquierda: {selectedPlayer.dorsiflexionTobilloIzq}</li>
            <li>Derecha: {selectedPlayer.dorsiflexionTobilloDer}</li>
          </ul>
        </section>

        <section>
          <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
            <FaDumbbell /> Fuerzas
          </h3>
          <ul className="mt-2 space-y-1 text-yellow-100">
            <li>Mano derecha: {selectedPlayer.manoDer}</li>
            <li>Mano izquierda: {selectedPlayer.manoIzq}</li>
            <li>Indice Q: {selectedPlayer.indiceQ}</li>
            <li>Pie Der: {selectedPlayer.pieDer}</li>
            <li>Pie Izq: {selectedPlayer.pieIzq}</li>
          </ul>
        </section>
      </div>

      {/* Sentadilla Profunda, Capacidad Pulmonar */}
      <div className="grid md:grid-cols-3 gap-6 z-10 relative">
        <section>
          <h3 className="text-pink-300 font-semibold flex items-center gap-2">
            <FaHeartbeat /> Sentadilla Profunda
          </h3>
          <p className="text-pink-100">
            Resultado: {selectedPlayer.sentadillaProfunda}
          </p>
        </section>

        <section>
          <h3 className="text-rose-300 font-semibold flex items-center gap-2">
            <FaLungs /> Capacidad Pulmonar Total
          </h3>
          <p className="text-rose-100">
            Resultado: {selectedPlayer.capacidadPulmonarTotal}
          </p>
        </section>
      </div>

      {/* Coordinación, Cadena Posterior */}
      <div className="grid md:grid-cols-3 gap-6 z-10 relative">
        <section>
          <h3 className="text-teal-300 font-semibold">🎯 Coordinación</h3>
          <p>Resultado: {selectedPlayer.coordinacion}</p>
        </section>
        {/* Capacidad Pulmonar Residual */}
        <section>
          <h3 className="text-teal-300 font-semibold">
            🫁 Capacidad Pulmonar Residual
          </h3>
          <p>{selectedPlayer.capacidadPulmunarResidual}</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center pt-6 z-10 relative">
        <h3 className="text-lime-400 text-lg font-bold flex justify-center items-center gap-2 drop-shadow-[0_0_15px_rgba(163,230,53,0.9)]">
          <FaCheckCircle className="animate-spin" /> Apto A – Habilitaciones
          Central
        </h3>
        <p className="text-xs text-lime-500">
          Spartans AR – P.N.E.F Jorge Lindon
        </p>
        <p className="text-[11px] text-lime-400">
          Firma: Prof. Jorge Alberto Lindon
        </p>
        {/* Línea decorativa dorada inferior */}
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-3 animate-pulse"></div>
      </footer>
    </div>
  );
};
