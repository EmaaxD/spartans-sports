export interface GeneralResponse {
  status: "success" | "error";
  message: string;
}

export interface PlayerDataProps {
  altura: number;
  alturaTorso: number;
  apellido: string;
  biotipo: string;
  brazoDirector: string;
  capacidadPulmonarTotal: string;
  capacidadPulmunarResidual: string;
  cintura: string;
  clase: string;
  contacto: string;
  coordinacion: string;
  deporte: string;
  dorsiflexionTobilloDer: string;
  dorsiflexionTobilloIzq: string;
  edad: number;
  envergaduraBrazos: number;
  escuelaClub: string;
  fechaNacimiento: string;
  hombro: string;
  imc: number;
  indiceQ: string;
  lateralidad: string;
  provincia: string;
  localidad: string;
  manoDer: string;
  manoIzq: string;
  nombre: string;
  ojoDirector: string;
  peso: number;
  pieDer: string;
  pieIzq: string;
  piernaDirectora: string;
  piernaDominante: string;
  playerImg: string;
  posicion: string;
  rowNumber: number;
  sentadillaProfunda: string;
  sexo: string;
  tmb: number;
  _id: string;
  createdAt: string;
  value: number;
}

export interface CreatePlayerResp extends GeneralResponse {
  data: PlayerDataProps;
}
