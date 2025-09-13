import { AiFillHome } from "react-icons/ai";
import { MdSportsBasketball } from "react-icons/md";
import { GiBabyfootPlayers } from "react-icons/gi";

import ImageOneBanner from "@src/assets/img/bannerOne.jpg";
import ImageTwoBanner from "@src/assets/img/bannerTwo.png";
import ImageThreeBanner from "@src/assets/img/bannerThree.png";

import FootBollBg from "@src/assets/img/footbolCard.png";
import FootBollTwoBg from "@src/assets/img/footbollCardTwo.png";
import FootBollThreeBg from "@src/assets/img/footbollCardThree.png";
import PlayerFutbol from "@src/assets/img/playerFutbol.png";

import BascketBallBg from "@src/assets/img/baskebollCard.png";
import BascketBallBgTwo from "@src/assets/img/basketbollCardTwo.png";
import BascketBallBgThree from "@src/assets/img/basketbollCardThree.png";
import BascketBallBgFour from "@src/assets/img/basketbollCardFour.png";

import TenisBg from "@src/assets/img/tenisCard.png";
import TenisBgTwo from "@src/assets/img/tenisCardTwo.png";
import TenisBgThree from "@src/assets/img/tenisCardThree.png";
import TenisBgFour from "@src/assets/img/tenisCardFour.png";

import RugbyBg from "@src/assets/img/rugbyCard.png";
import RugbyBgTwo from "@src/assets/img/rugbyCardTwo.png";
import RugbyBgThree from "@src/assets/img/rugbyCardThree.png";

import HockeyCard from "@src/assets/img/hockeyCard.png";
import HockeyCardTwo from "@src/assets/img/hockeyCardTwo.png";
import HockeyCardThree from "@src/assets/img/hockeyCardThree.png";

import VolleyCard from "@src/assets/img/volleyCard.png";
import VolleyCardTwo from "@src/assets/img/volleyCardTwo.png";
import VolleyCardThree from "@src/assets/img/volleyCardThree.png";

import AthleticsCard from "@src/assets/img/athetisCard.png";
import AthleticsCardTwo from "@src/assets/img/atheticCardTwo.png";
import AthleticsCardThree from "@src/assets/img/athleticCardThree.png";

import SwimmingCard from "@src/assets/img/swimmingCard.png";
import SwimmingCardTwo from "@src/assets/img/swimCardTwo.png";
import SwimmingCardThree from "@src/assets/img/swimCardThree.png";
import { cardColors } from "./cardColors";

export const footerLinks = [
  {
    label: "footerLinksLabelOne",
    data: "aboutUs",
    text: "footerLinksDescOne",
  },
  {
    label: "footerLinksLabelTwo",
    data: "policyPrivacy",
    text: "footerLinksDescTwo",
  },
  {
    label: "footerLinksLabelThree",
    data: "legalNotice",
    text: "footerLinksDescThree",
  },
  {
    label: "footerLinksLabelFour",
    data: "rights",
    text: "footerLinksDescFour",
  },
];

export const headerLinks = [
  {
    icon: AiFillHome,
    label: "headerLinksLabelOne",
    href: "/",
  },
  {
    icon: MdSportsBasketball,
    label: "headerLinksLabelTwo",
    href: "/clubs",
  },
  {
    icon: GiBabyfootPlayers,
    label: "headerLinksLabelThree",
    href: "/players",
  },
];

export const bannerImgs = [
  {
    img: ImageOneBanner,
    title: "bannerTitleOne",
    description: "bannerDecriptionOne",
    alt: "bannerTitleOne",
  },
  {
    img: ImageTwoBanner,
    title: "bannerTitleTwo",
    description: "bannerDecriptionTwo",
    alt: "bannerTitleTwo",
  },
  {
    img: ImageThreeBanner,
    title: "bannerTitleThree",
    description: "bannerDecriptionThree",
    alt: "bannerTitleThree",
  },
];

export const joinUsData = [
  {
    id: 1,
    title: "joinUsDataTitleOne",
    description: "joinUsDataDescOne",
    titleBtn: "joinUsDataBtnOne",
  },
  {
    id: 2,
    title: "joinUsDataTitleTwo",
    description: "joinUsDataDescTwo",
    titleBtn: "joinUsDataBtnTwo",
  },
  {
    id: 3,
    title: "joinUsDataTitleThree",
    description: "joinUsDataDescThree",
    titleBtn: "joinUsDataBtnThree",
  },
  {
    id: 4,
    title: "joinUsDataTitleFour",
    description: "joinUsDataDescFour",
    titleBtn: "joinUsDataBtnFour",
  },
];

export const clubCategories = [
  {
    id: "10",
    name: "fitness",
    color: cardColors.Fútbol,
  },
  {
    id: "11",
    name: "crossfit",
    color: cardColors.Baloncesto, // azul oscuro
  },
  {
    id: "1",
    name: "soccer",
    color: cardColors.Fútbol,
  },
  {
    id: "2",
    name: "basketball",
    color: cardColors.Baloncesto, // azul oscuro
  },
  {
    id: "3",
    name: "tennis",
    color: cardColors.Tenis, // verde pelota de tenis
  },
  {
    id: "4",
    name: "volleyball",
    color: cardColors.Voleibol, // púrpura vibrante
  },
  {
    id: "5",
    name: "swimming",
    color: cardColors.Natación, // azul agua clara
  },
  {
    id: "6",
    name: "athletics",
    color: cardColors.Atletismo, // rojo fuerte, energía y velocidad
  },
  {
    id: "7",
    name: "rugby",
    color: cardColors.Rugby, // marrón tierra, robustez
  },
  {
    id: "8",
    name: "hockey",
    color: cardColors.Hockey, // gris oscuro, hielo/pista
  },
  {
    id: "9",
    name: "beisbol",
    color: cardColors.Beisbol, // fucsia, llamativo y juvenil
  },
];

export const NAME_DB = "spartans-sport";

export const top10Clubs = [
  {
    clubId: "4",
    club: {
      name: "Club Atlético Halcones Rojos",
      logo: "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/footbollCardFour.png",
    },
    rank: 1,
  },
  {
    clubId: "24",
    club: {
      name: "Academia Atlética Estrella Plateada",
      logo: AthleticsCardThree,
    },
    rank: 2,
  },
  {
    clubId: "5",
    club: {
      name: "Dragones Dorados Basketball Club",
      logo: BascketBallBg,
    },
    rank: 3,
  },
  {
    clubId: "7",
    club: {
      name: "Águilas Plateadas Club",
      logo: BascketBallBgThree,
    },
    rank: 4,
  },
  {
    clubId: "10",
    club: {
      name: "Academia Tenis Estrella",
      logo: TenisBgTwo,
    },
    rank: 5,
  },
  {
    clubId: "11",
    club: {
      name: "Club Tenis Olimpo",
      logo: TenisBgThree,
    },
    rank: 6,
  },
  {
    clubId: "14",
    club: {
      name: "Lobos del Sur Rugby Club",
      logo: RugbyBgTwo,
    },
    rank: 7,
  },
  {
    clubId: "18",
    club: {
      name: "Club Leones de Acero",
      logo: HockeyCardThree,
    },
    rank: 8,
  },
  {
    clubId: "20",
    club: {
      name: "Tigres Azules Volleyball Academy",
      logo: VolleyCardTwo,
    },
    rank: 9,
  },
  {
    clubId: "26",
    club: {
      name: "Waves Masters Academy",
      logo: SwimmingCardTwo,
    },
    rank: 10,
  },
];

export const top100Players = [
  {
    playerId: "1",
    player: {
      name: "Juan Pérez",
      club: "Club Deportivo Leones Dorados",
      clubLogo: FootBollBg,
      logo: PlayerFutbol,
      value: 500,
    },
    rank: 1,
  },
  {
    playerId: "2",
    player: {
      name: "Carlos López",
      club: "Club Atlético Águilas Azules",
      clubLogo: FootBollTwoBg,
      logo: PlayerFutbol,
      value: 300,
    },
    rank: 2,
  },
  {
    playerId: "3",
    player: {
      name: "Miguel Fernández",
      club: "Club Deportivo Leones Dorados",
      clubLogo: FootBollBg,
      logo: PlayerFutbol,
      value: 400,
    },
    rank: 3,
  },
  {
    playerId: "4",
    player: {
      name: "Santiago García",
      club: "Club Atlético Águilas Azules",
      clubLogo: FootBollTwoBg,
      logo: PlayerFutbol,
      value: 450,
    },
    rank: 4,
  },
  {
    playerId: "5",
    player: {
      name: "Lucas Martínez",
      club: "Club Deportivo Leones Dorados",
      clubLogo: FootBollBg,
      logo: PlayerFutbol,
      value: 550,
    },
    rank: 5,
  },
  {
    playerId: "6",
    player: {
      name: "Andrés Torres",
      club: "Club Atlético Águilas Azules",
      clubLogo: FootBollTwoBg,
      logo: PlayerFutbol,
      value: 350,
    },
    rank: 6,
  },
  {
    playerId: "7",
    player: {
      name: "Ana Gómez",
      club: "Dragones Dorados Basketball Club",
      clubLogo: BascketBallBg,
      logo: PlayerFutbol,
      value: 600,
    },
    rank: 7,
  },
  {
    playerId: "8",
    player: {
      name: "Luis Martínez",
      club: "Águilas Plateadas Club",
      clubLogo: BascketBallBgThree,
      logo: PlayerFutbol,
      value: 700,
    },
    rank: 8,
  },
  {
    playerId: "9",
    player: {
      name: "María Fernández",
      club: "Academia Tenis Estrella",
      clubLogo: TenisBgTwo,
      logo: PlayerFutbol,
      value: 800,
    },
    rank: 9,
  },
  {
    playerId: "10",
    player: {
      name: "Carlos Sánchez",
      club: "Club Tenis Olimpo",
      clubLogo: TenisBgThree,
      logo: PlayerFutbol,
      value: 900,
    },
    rank: 10,
  },
  {
    playerId: "11",
    player: {
      name: "Pedro Ramírez",
      club: "Lobos del Sur Rugby Club",
      clubLogo: RugbyBgTwo,
      logo: PlayerFutbol,
      value: 1000,
    },
    rank: 11,
  },
  {
    playerId: "12",
    player: {
      name: "Lucía Torres",
      club: "Club Leones de Acero",
      clubLogo: HockeyCardThree,
      logo: PlayerFutbol,
      value: 1100,
    },
    rank: 12,
  },
  {
    playerId: "13",
    player: {
      name: "Javier López",
      club: "Tigres Azules Volleyball Academy",
      clubLogo: VolleyCardTwo,
      logo: PlayerFutbol,
      value: 1200,
    },
    rank: 13,
  },
  {
    playerId: "14",
    player: {
      name: "Sofía Martínez",
      club: "Waves Masters Academy",
      clubLogo: SwimmingCardTwo,
      logo: PlayerFutbol,
      value: 1300,
    },
    rank: 14,
  },
  {
    playerId: "15",
    player: {
      name: "Diego Pérez",
      club: "Club Deportivo Leones Dorados",
      clubLogo: FootBollBg,
      logo: PlayerFutbol,
      value: 1400,
    },
    rank: 15,
  },
  {
    playerId: "16",
    player: {
      name: "Laura González",
      club: "Club Atlético Águilas Azules",
      clubLogo: FootBollTwoBg,
      logo: PlayerFutbol,
      value: 1500,
    },
    rank: 16,
  },
  {
    playerId: "17",
    player: {
      name: "Fernando Ruiz",
      club: "Dragones Dorados Basketball Club",
      clubLogo: BascketBallBg,
      logo: PlayerFutbol,
      value: 1600,
    },
    rank: 17,
  },
  {
    playerId: "18",
    player: {
      name: "Isabel Martínez",
      club: "Águilas Plateadas Club",
      clubLogo: BascketBallBgThree,
      logo: PlayerFutbol,
      value: 1700,
    },
    rank: 18,
  },
  {
    playerId: "19",
    player: {
      name: "Roberto Sánchez",
      club: "Academia Tenis Estrella",
      clubLogo: TenisBgTwo,
      logo: PlayerFutbol,
      value: 1800,
    },
    rank: 19,
  },
  {
    playerId: "20",
    player: {
      name: "Patricia López",
      club: "Club Tenis Olimpo",
      clubLogo: TenisBgThree,
      logo: PlayerFutbol,
      value: 1900,
    },
    rank: 20,
  },
];

export const clubes = [
  {
    category: "Fútbol",
    clubes: [
      {
        _id: "1",
        name: "Club Deportivo Leones Dorados",
        logo: FootBollBg,
        description: "descriptionClubOne",
        location: "Buenos Aires, Argentina",
        established: "1905",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Fútbol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "goalie",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Lucas Martínez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 24,
            height: 182,
            weight: 78,
            ims: "2.26",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Andrés Torres",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 350,
            age: 29,
            height: 188,
            weight: 82,
            ims: "2.27",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
        ],
      },
      {
        _id: "2",
        name: "Club Atlético Águilas Azules",
        logo: FootBollTwoBg,
        description: "descriptionClubTwo",
        location: "Buenos Aires, Argentina",
        established: "1901",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Fútbol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "goalie",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Lucas Martínez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 24,
            height: 182,
            weight: 78,
            ims: "2.26",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Andrés Torres",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 350,
            age: 29,
            height: 188,
            weight: 82,
            ims: "2.27",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
        ],
      },
      {
        _id: "3",
        name: "Club Deportivo Tigres del Sur",
        logo: FootBollThreeBg,
        description: "descriptionClubThree",
        location: "Avellaneda, Buenos Aires, Argentina",
        established: "1905",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Fútbol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "goalie",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Lucas Martínez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 24,
            height: 182,
            weight: 78,
            ims: "2.26",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Andrés Torres",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 350,
            age: 29,
            height: 188,
            weight: 82,
            ims: "2.27",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
        ],
      },
      {
        _id: "4",
        name: "Club Atlético Halcones Rojos",
        logo: "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/footbollCardFour.png",
        description: "descriptionClubFour",
        location: "Buenos Aires, Argentina",
        established: "1908",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Fútbol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "goalie",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Lucas Martínez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 24,
            height: 182,
            weight: 78,
            ims: "2.26",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
          {
            colorCard: cardColors.Fútbol,
            name: "Andrés Torres",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 350,
            age: 29,
            height: 188,
            weight: 82,
            ims: "2.27",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Baloncesto",
    clubes: [
      {
        _id: "5",
        name: "Dragones Dorados Basketball Club",
        logo: BascketBallBg,
        description: "descriptionClubFive",
        location: "Buenos Aires, Argentina",
        established: "1916",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Baloncesto,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "base",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "eaves",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "pívot",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "escort",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
        ],
      },
      {
        _id: "6",
        name: "Titanes del Norte Basketball",
        logo: BascketBallBgTwo,
        description: "descriptionClubSix",
        location: "Corrientes, Argentina",
        established: "1932",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Baloncesto,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "base",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "eaves",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "pívot",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "escort",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
        ],
      },
      {
        _id: "7",
        name: "Águilas Plateadas Club",
        logo: BascketBallBgThree,
        description: "descriptionClubSeven",
        location: "Córdoba, Argentina",
        established: "1918",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Baloncesto,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "base",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "eaves",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "pívot",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "escort",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
        ],
      },
      {
        _id: "8",
        name: "Lobos Marinos Basketball Team",
        logo: BascketBallBgFour,
        description: "descriptionClubEight",
        location: "Comodoro Rivadavia, Argentina",
        established: "1920",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Baloncesto,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "base",
            value: 500,
            age: 25,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "eaves",
            value: 300,
            age: 28,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "pívot",
            value: 400,
            age: 30,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
          {
            colorCard: cardColors.Baloncesto,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "escort",
            value: 450,
            age: 27,
            height: 178,
            weight: 72,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerBaskeboll.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Tenis",
    clubes: [
      {
        _id: "9",
        name: "Club Raquetas Doradas",
        logo: TenisBg,
        description: "descriptionClubNine",
        location: "Buenos Aires, Argentina",
        established: "1920",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Tenis,
            name: "Juan Martín del Potro",
            playerImg: PlayerFutbol,
            position: "player",
            value: 1000,
            age: 32,
            height: 198,
            weight: 90,
            ims: "2.28",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Gabriela Sabatini",
            playerImg: PlayerFutbol,
            position: "player",
            value: 900,
            age: 50,
            height: 170,
            weight: 65,
            ims: "2.29",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Diego Schwartzman",
            playerImg: PlayerFutbol,
            position: "player",
            value: 800,
            age: 30,
            height: 170,
            weight: 70,
            ims: "2.30",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Nadia Podoroska",
            position: "player",
            playerImg: PlayerFutbol,
            value: 850,
            age: 26,
            height: 170,
            weight: 60,
            ims: "2.31",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
        ],
      },
      {
        _id: "10",
        name: "Academia Tenis Estrella",
        logo: TenisBgTwo,
        description: "descriptionClubTen",
        location: "Santa Fe, Argentina",
        established: "1935",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Tenis,
            name: "Juan Martín del Potro",
            playerImg: PlayerFutbol,
            position: "player",
            value: 1000,
            age: 32,
            height: 198,
            weight: 90,
            ims: "2.28",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Gabriela Sabatini",
            playerImg: PlayerFutbol,
            position: "player",
            value: 900,
            age: 50,
            height: 170,
            weight: 65,
            ims: "2.29",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Diego Schwartzman",
            playerImg: PlayerFutbol,
            position: "player",
            value: 800,
            age: 30,
            height: 170,
            weight: 70,
            ims: "2.30",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Nadia Podoroska",
            position: "player",
            playerImg: PlayerFutbol,
            value: 850,
            age: 26,
            height: 170,
            weight: 60,
            ims: "2.31",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
        ],
      },
      {
        _id: "11",
        name: "Club Tenis Olimpo",
        logo: TenisBgThree,
        description: "descriptionClubEleven",
        location: "Córdoba, Argentina",
        established: "1940",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Tenis,
            name: "Juan Martín del Potro",
            playerImg: PlayerFutbol,
            position: "player",
            value: 1000,
            age: 32,
            height: 198,
            weight: 90,
            ims: "2.28",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Gabriela Sabatini",
            playerImg: PlayerFutbol,
            position: "player",
            value: 900,
            age: 50,
            height: 170,
            weight: 65,
            ims: "2.29",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Diego Schwartzman",
            playerImg: PlayerFutbol,
            position: "player",
            value: 800,
            age: 30,
            height: 170,
            weight: 70,
            ims: "2.30",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Nadia Podoroska",
            position: "player",
            playerImg: PlayerFutbol,
            value: 850,
            age: 26,
            height: 170,
            weight: 60,
            ims: "2.31",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
        ],
      },
      {
        _id: "12",
        name: "Centro Tenis Horizonte",
        logo: TenisBgFour,
        description: "descriptionClubTwelve",
        location: "Mendoza, Argentina",
        established: "1950",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Tenis,
            name: "Juan Martín del Potro",
            playerImg: PlayerFutbol,
            position: "player",
            value: 1000,
            age: 32,
            height: 198,
            weight: 90,
            ims: "2.28",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Gabriela Sabatini",
            playerImg: PlayerFutbol,
            position: "player",
            value: 900,
            age: 50,
            height: 170,
            weight: 65,
            ims: "2.29",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Diego Schwartzman",
            playerImg: PlayerFutbol,
            position: "player",
            value: 800,
            age: 30,
            height: 170,
            weight: 70,
            ims: "2.30",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
          {
            colorCard: cardColors.Tenis,
            name: "Nadia Podoroska",
            position: "player",
            playerImg: PlayerFutbol,
            value: 850,
            age: 26,
            height: 170,
            weight: 60,
            ims: "2.31",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerTenis.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Rugby",
    clubes: [
      {
        _id: "13",
        name: "Dragones de Acero Rugby Club",
        logo: RugbyBg,
        description: "descriptionClubThirteen",
        location: "Buenos Aires, Argentina",
        established: "1886",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Rugby,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "opening",
            value: 600,
            age: 26,
            height: 180,
            weight: 80,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "secondLine",
            value: 400,
            age: 29,
            height: 185,
            weight: 85,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "thirdLine",
            value: 500,
            age: 31,
            height: 190,
            weight: 90,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "fullback",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
        ],
      },
      {
        _id: "14",
        name: "Lobos del Sur Rugby Club",
        logo: RugbyBgTwo,
        description: "descriptionClubFourteen",
        location: "San Isidro, Argentina",
        established: "1935",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Rugby,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "opening",
            value: 600,
            age: 26,
            height: 180,
            weight: 80,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "secondLine",
            value: 400,
            age: 29,
            height: 185,
            weight: 85,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "thirdLine",
            value: 500,
            age: 31,
            height: 190,
            weight: 90,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "fullback",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
        ],
      },
      {
        _id: "15",
        name: "Toros Dorados Rugby Club",
        logo: RugbyBgThree,
        description: "descriptionClubFifteen",
        location: "La Plata, Argentina",
        established: "1960",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Rugby,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "opening",
            value: 600,
            age: 26,
            height: 180,
            weight: 80,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "secondLine",
            value: 400,
            age: 29,
            height: 185,
            weight: 85,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "thirdLine",
            value: 500,
            age: 31,
            height: 190,
            weight: 90,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
          {
            colorCard: cardColors.Rugby,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "fullback",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerRugby.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Hockey",
    clubes: [
      {
        _id: "16",
        name: "Club Halcones Dorados",
        logo: HockeyCard,
        description: "descriptionClubSixteen",
        location: "Buenos Aires, Argentina",
        established: "1920",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Hockey,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
        ],
      },
      {
        _id: "17",
        name: "Club Tormenta Azul",
        logo: HockeyCardTwo,
        description: "descriptionClubSeventeen",
        location: "Santa Fe, Argentina",
        established: "1935",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Hockey,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
        ],
      },
      {
        _id: "18",
        name: "Club Leones de Acero",
        logo: HockeyCardThree,
        description: "descriptionClubEighteen",
        location: "Córdoba, Argentina",
        established: "1940",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Hockey,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "front",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "defense",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "midfieldPlayer",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
          {
            colorCard: cardColors.Hockey,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "front",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerHockey.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Voleibol",
    clubes: [
      {
        _id: "19",
        name: "Águilas Doradas Volley Club",
        logo: VolleyCard,
        description: "descriptionClubNineteen",
        location: "Buenos Aires, Argentina",
        established: "1980",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Voleibol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "central",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "receiver",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "shipowner",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "opposite",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
        ],
      },
      {
        _id: "20",
        name: "Tigres Azules Volleyball Academy",
        logo: VolleyCardTwo,
        description: "descriptionClubTwenty",
        location: "Santa Fe, Argentina",
        established: "1985",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Voleibol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "central",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "receiver",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "shipowner",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "opposite",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
        ],
      },
      {
        _id: "21",
        name: "Leones Rojos Volley Sport",
        logo: VolleyCardThree,
        description: "descriptionClubTwentyOne",
        location: "Córdoba, Argentina",
        established: "1990",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Voleibol,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "central",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "receiver",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "shipowner",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
          {
            colorCard: cardColors.Voleibol,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "opposite",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerVoley.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Atletismo",
    clubes: [
      {
        _id: "22",
        name: "Club Atlético Velocidad Dorada",
        logo: AthleticsCard,
        description: "descriptionClubTwentyTwo",
        location: "Buenos Aires, Argentina",
        established: "1995",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Atletismo,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "sprinter",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "longJumper",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "javelinThrower",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "marathonRunner",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
        ],
      },
      {
        _id: "23",
        name: "Centro Deportivo Relámpago Azul",
        logo: AthleticsCardTwo,
        description: "descriptionClubTwentyThree",
        location: "Santa Fe, Argentina",
        established: "2000",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Atletismo,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "sprinter",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "longJumper",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "javelinThrower",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "marathonRunner",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
        ],
      },
      {
        _id: "24",
        name: "Academia Atlética Estrella Plateada",
        logo: AthleticsCardThree,
        description: "descriptionClubTwentyFour",
        location: "Córdoba, Argentina",
        established: "2005",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Atletismo,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "sprinter",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "longJumper",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "javelinThrower",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
          {
            colorCard: cardColors.Atletismo,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "marathonRunner",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerAthletic.mp4",
          },
        ],
      },
    ],
  },
  {
    category: "Natación",
    clubes: [
      {
        _id: "25",
        name: "Aqua Dolphins Swimming Club",
        logo: SwimmingCard,
        description: "descriptionClubTwentyFive",
        location: "Buenos Aires, Argentina",
        established: "1980",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Natación,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
        ],
      },
      {
        _id: "26",
        name: "Waves Masters Academy",
        logo: SwimmingCardTwo,
        description: "descriptionClubTwentySix",
        location: "Santa Fe, Argentina",
        established: "1985",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Natación,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
        ],
      },
      {
        _id: "27",
        name: "Neptune Elite Swimming",
        logo: SwimmingCardThree,
        description: "descriptionClubTwentySeven",
        location: "Córdoba, Argentina",
        established: "1990",
        presentationVideo:
          "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/video1.mp4",
        players: [
          {
            colorCard: cardColors.Natación,
            name: "Juan Pérez",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 600,
            age: 26,
            height: 180,
            weight: 75,
            ims: "2.22",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Carlos López",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 400,
            age: 29,
            height: 185,
            weight: 80,
            ims: "2.23",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Miguel Fernández",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 500,
            age: 31,
            height: 190,
            weight: 85,
            ims: "2.24",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
          {
            colorCard: cardColors.Natación,
            name: "Santiago García",
            playerImg: PlayerFutbol,
            position: "swimmer",
            value: 550,
            age: 28,
            height: 178,
            weight: 75,
            ims: "2.25",
            presentationVideo:
              "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerSwim.mp4",
          },
        ],
      },
    ],
  },
];

export const templateCategories = [
  { value: "player", label: "player" },
  { value: "club", label: "club" },
  { value: "danceAcademy", label: "danceAcademy" },
];
