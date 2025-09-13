import { useContext, useEffect } from "react";
import Image from "next/image";
import {
  FaUser,
  FaMedal,
  FaRuler,
  FaWeight,
  FaRunning,
  FaFistRaised,
  FaLungs,
  FaHeart,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaTrophy,
  FaDollarSign,
} from "react-icons/fa";

import { playersContext } from "@src/context/players";
import { formatPrice, formatIsoToDDMMYYYY } from "@src/utils/functions";

const ProfileScreen = () => {
  const { selectedPlayer, handleGetPlayerById } = useContext(playersContext);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;
    
    const playerId = localStorage.getItem("player_id");
    if (playerId && handleGetPlayerById) {
      handleGetPlayerById(playerId);
    }
  }, [handleGetPlayerById]);

  if (!selectedPlayer) {
    return (
      <>
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">Cargando perfil...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen p-2 sm:p-4 lg:p-6 mt-8 sm:mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header con foto de perfil y datos principales */}
        <div className="relative bg-gradient-to-r from-blue-800/80 to-purple-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-blue-500/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl sm:rounded-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Foto de perfil */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600">
                {selectedPlayer?.playerImg ? (
                  <Image
                    src={selectedPlayer.playerImg}
                    alt="Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FaUser className="text-white text-4xl sm:text-5xl lg:text-6xl" />
                  </div>
                )}
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-500 text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center font-bold text-sm sm:text-base lg:text-lg border-2 border-white">
                #{selectedPlayer?.rank || "N/A"}
              </div>
            </div>

            {/* Información principal */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 capitalize">
                {selectedPlayer?.nombre || ""} {selectedPlayer?.apellido || ""}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                {selectedPlayer?.deporte && (
                  <span className="bg-blue-600/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-blue-100 font-semibold text-sm sm:text-base">
                    {selectedPlayer.deporte}
                  </span>
                )}
                {selectedPlayer?.posicion && (
                  <span className="bg-purple-600/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-purple-100 font-semibold text-sm sm:text-base">
                    {selectedPlayer.posicion}
                  </span>
                )}
                {selectedPlayer?.sexo && (
                  <span className="bg-green-600/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-green-100 font-semibold text-sm sm:text-base">
                    {selectedPlayer.sexo === "M" ? "Masculino" : "Femenino"}
                  </span>
                )}
              </div>

              {/* Valor y ranking destacados */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <FaDollarSign className="text-lg sm:text-xl" />
                    <span className="font-bold text-base sm:text-lg">
                      {formatPrice(selectedPlayer?.value) || "0"} USD
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <FaTrophy className="text-lg sm:text-xl" />
                    <span className="font-bold text-base sm:text-lg">
                      Ranking #{selectedPlayer?.rank || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fecha de creación del perfil */}
              {selectedPlayer?.createdAt && (
                <div className="mt-3 sm:mt-4 flex justify-center md:justify-start">
                  <div className="inline-flex items-center bg-blue-600/30 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-400/40">
                    <FaBirthdayCake className="text-blue-300 mr-2 text-sm sm:text-base" />
                    <span className="text-blue-100 font-semibold text-xs sm:text-sm">
                      Perfil creado:{" "}
                      {formatIsoToDDMMYYYY(selectedPlayer.createdAt)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Grid de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Datos Personales */}
          <div className="bg-gradient-to-br from-cyan-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-500/30">
            <h3 className="text-cyan-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <FaUser className="text-base sm:text-lg" /> Datos Personales
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {selectedPlayer?.edad && (
                <div className="flex items-center gap-2 text-cyan-100 text-sm sm:text-base">
                  <FaBirthdayCake className="text-cyan-400 flex-shrink-0" />
                  <span>Edad: {selectedPlayer.edad} años</span>
                </div>
              )}
              {selectedPlayer?.fechaNacimiento && (
                <div className="flex items-center gap-2 text-cyan-100 text-sm sm:text-base">
                  <FaBirthdayCake className="text-cyan-400 flex-shrink-0" />
                  <span>Nacimiento: {selectedPlayer.fechaNacimiento}</span>
                </div>
              )}
              {(selectedPlayer?.localidad || selectedPlayer?.provincia) && (
                <div className="flex items-center gap-2 text-cyan-100 text-sm sm:text-base">
                  <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" />
                  <span>
                    {selectedPlayer?.localidad || ""}
                    {selectedPlayer?.localidad && selectedPlayer?.provincia
                      ? ", "
                      : ""}
                    {selectedPlayer?.provincia || ""}
                  </span>
                </div>
              )}
              {selectedPlayer?.clase && (
                <div className="text-cyan-100 text-sm sm:text-base">
                  <span className="text-cyan-400">Clase:</span>{" "}
                  {selectedPlayer.clase}
                </div>
              )}
              <div className="text-cyan-100 text-sm sm:text-base">
                <span className="text-cyan-400">Club:</span>{" "}
                {selectedPlayer?.escuelaClub || "No especificado"}
              </div>
            </div>
          </div>

          {/* Medidas Físicas */}
          <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/30">
            <h3 className="text-purple-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <FaRuler className="text-base sm:text-lg" /> Medidas Físicas
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="text-center bg-purple-700/30 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  {selectedPlayer?.altura || "N/A"}
                </div>
                <div className="text-purple-200 text-xs sm:text-sm">
                  Altura (cm)
                </div>
              </div>
              <div className="text-center bg-purple-700/30 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  {selectedPlayer?.peso || "N/A"}
                </div>
                <div className="text-purple-200 text-xs sm:text-sm">
                  Peso (kg)
                </div>
              </div>
              <div className="text-center bg-purple-700/30 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  {selectedPlayer?.imc || "N/A"}
                </div>
                <div className="text-purple-200 text-xs sm:text-sm">IMC</div>
              </div>
              <div className="text-center bg-purple-700/30 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  {selectedPlayer?.tmb || "N/A"}
                </div>
                <div className="text-purple-200 text-xs sm:text-sm">TMB</div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
              {selectedPlayer?.alturaTorso && (
                <div className="text-purple-100 text-sm sm:text-base">
                  <span className="text-purple-300">Torso:</span>{" "}
                  {selectedPlayer.alturaTorso} cm
                </div>
              )}
              {selectedPlayer?.envergaduraBrazos && (
                <div className="text-purple-100 text-sm sm:text-base">
                  <span className="text-purple-300">Envergadura:</span>{" "}
                  {selectedPlayer.envergaduraBrazos} cm
                </div>
              )}
              {selectedPlayer?.biotipo && (
                <div className="text-purple-100 text-sm sm:text-base">
                  <span className="text-purple-300">Biotipo:</span>{" "}
                  {selectedPlayer.biotipo}
                </div>
              )}
            </div>
          </div>

          {/* Performance Física */}
          <div className="bg-gradient-to-br from-green-800/40 to-emerald-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-500/30">
            <h3 className="text-green-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <FaRunning className="text-base sm:text-lg" /> Performance
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-green-700/30 rounded-lg p-2.5 sm:p-3">
                <div className="text-green-200 text-xs sm:text-sm mb-1">
                  Índice Q
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {selectedPlayer?.indiceQ || "N/A"}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="text-center bg-green-700/20 rounded p-1.5 sm:p-2">
                  <div className="text-sm sm:text-lg font-bold text-white">
                    {selectedPlayer?.manoDer || "N/A"}
                  </div>
                  <div className="text-green-200 text-xs">
                    Hand Grip Der. (kg)
                  </div>
                </div>
                <div className="text-center bg-green-700/20 rounded p-1.5 sm:p-2">
                  <div className="text-sm sm:text-lg font-bold text-white">
                    {selectedPlayer?.manoIzq || "N/A"}
                  </div>
                  <div className="text-green-200 text-xs">
                    Hand Grip Izq. (kg)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lateralidades */}
          <div className="bg-gradient-to-br from-orange-800/40 to-red-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-500/30">
            <h3 className="text-orange-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <FaFistRaised className="text-base sm:text-lg" /> Lateralidades
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="text-orange-100">
                <span className="text-orange-300 font-medium">
                  Ojo Director:
                </span>
                <br />
                <span className="text-sm sm:text-base">
                  {selectedPlayer?.ojoDirector || "N/A"}
                </span>
              </div>
              <div className="text-orange-100">
                <span className="text-orange-300 font-medium">Hombro:</span>
                <br />
                <span className="text-sm sm:text-base">
                  {selectedPlayer?.hombro || "N/A"}
                </span>
              </div>
              <div className="text-orange-100">
                <span className="text-orange-300 font-medium">
                  Brazo Director:
                </span>
                <br />
                <span className="text-sm sm:text-base">
                  {selectedPlayer?.brazoDirector || "N/A"}
                </span>
              </div>
              <div className="text-orange-100">
                <span className="text-orange-300 font-medium">Cintura:</span>
                <br />
                <span className="text-sm sm:text-base">
                  {selectedPlayer?.cintura || "N/A"}
                </span>
              </div>
              <div className="text-orange-100">
                <span className="text-orange-300 font-medium">
                  Pierna Dominante:
                </span>
                <br />
                <span className="text-sm sm:text-base">
                  {selectedPlayer?.piernaDominante || "N/A"}
                </span>
              </div>
              <div className="text-orange-100">
                <span className="text-orange-300 font-medium">
                  Pierna Directora:
                </span>
                <br />
                <span className="text-sm sm:text-base">
                  {selectedPlayer?.piernaDirectora || "N/A"}
                </span>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 text-orange-100 text-sm sm:text-base">
              <span className="text-orange-300 font-medium">Lateralidad:</span>{" "}
              {selectedPlayer?.lateralidad || "N/A"}
            </div>
          </div>

          {/* Evaluaciones Físicas */}
          <div className="bg-gradient-to-br from-pink-800/40 to-rose-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-500/30">
            <h3 className="text-pink-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <FaHeart className="text-base sm:text-lg" /> Evaluaciones
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-pink-700/30 rounded-lg p-2.5 sm:p-3">
                <div className="text-pink-200 text-xs sm:text-sm">
                  Sentadilla Profunda
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {selectedPlayer?.sentadillaProfunda || "N/A"}
                </div>
              </div>
              <div className="bg-pink-700/30 rounded-lg p-2.5 sm:p-3">
                <div className="text-pink-200 text-xs sm:text-sm">
                  Coordinación
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {selectedPlayer?.coordinacion || "N/A"}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <div className="text-pink-100">
                  <span className="text-pink-300 font-medium">
                    Dorsiflexión Izq:
                  </span>
                  <br />
                  <span className="text-sm sm:text-base">
                    {selectedPlayer?.dorsiflexionTobilloIzq || "N/A"}
                  </span>
                </div>
                <div className="text-pink-100">
                  <span className="text-pink-300 font-medium">
                    Dorsiflexión Der:
                  </span>
                  <br />
                  <span className="text-sm sm:text-base">
                    {selectedPlayer?.dorsiflexionTobilloDer || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Capacidad Pulmonar */}
          <div className="bg-gradient-to-br from-teal-800/40 to-cyan-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-teal-500/30">
            <h3 className="text-teal-300 text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <FaLungs className="text-base sm:text-lg" /> Capacidad Pulmonar
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-teal-700/30 rounded-lg p-2.5 sm:p-3 text-center">
                <div className="text-teal-200 text-xs sm:text-sm mb-1">
                  Total
                </div>
                <div className="text-xl sm:text-3xl font-bold text-white">
                  {selectedPlayer?.capacidadPulmonarTotal || "N/A"}
                </div>
              </div>
              <div className="bg-teal-700/30 rounded-lg p-2.5 sm:p-3 text-center">
                <div className="text-teal-200 text-xs sm:text-sm mb-1">
                  Residual
                </div>
                <div className="text-xl sm:text-3xl font-bold text-white">
                  {selectedPlayer?.capacidadPulmunarResidual || "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
