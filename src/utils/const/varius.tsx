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
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <g id="television-core-small">
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z"
            fill="url(#paint0_radial_5179_1308)"
          ></path>
          <path
            id="Vector_2"
            d="M18.6 60.7388C18.6 60.2306 18.9587 59.796 19.4602 59.711C22.0196 59.2775 29.7585 58.0508 35.4 58.0508C41.0415 58.0508 48.7804 59.2775 51.3398 59.711C51.8412 59.796 52.2 60.2306 52.2 60.7388C52.2 60.902 52.0575 61.0268 51.8967 61.0004C50.1219 60.707 40.9704 59.2409 35.4 59.2409C29.8295 59.2409 20.678 60.707 18.9033 61.0004C18.7425 61.0268 18.6 60.902 18.6 60.7388Z"
            fill="url(#paint1_radial_5179_1308)"
          ></path>
          <path
            id="Vector_3"
            d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z"
            fill="url(#paint2_linear_5179_1308)"
          ></path>
          <path
            id="Vector_4"
            d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z"
            fill="url(#paint3_radial_5179_1308)"
          ></path>
          <path
            id="Vector_5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.99995 12.6H63C63.663 12.6 64.2 13.1372 64.2 13.8V50.4H7.79995V13.8C7.79995 13.1372 8.33719 12.6 8.99995 12.6ZM7.19995 50.4V13.8C7.19995 12.8059 8.00581 12 8.99995 12H63C63.9942 12 64.8 12.8059 64.8 13.8V50.4V51.6C64.8 52.5941 63.9942 53.4 63 53.4H8.99995C8.00581 53.4 7.19995 52.5941 7.19995 51.6V50.4Z"
            fill="url(#paint4_radial_5179_1308)"
          ></path>
          <path
            id="Vector_6"
            d="M35.4 52.8C36.3941 52.8 37.2 52.3971 37.2 51.9C37.2 51.4029 36.3941 51 35.4 51C34.4059 51 33.6 51.4029 33.6 51.9C33.6 52.3971 34.4059 52.8 35.4 52.8Z"
            fill="url(#paint5_radial_5179_1308)"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_5179_1308"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(50.3269 49.3723) rotate(118.526) scale(55.1579 46.2871)"
          >
            <stop stop-color="#802600"></stop>
            <stop offset="0.333333" stop-color="#6F181D"></stop>
            <stop offset="0.666667" stop-color="#5B1333"></stop>
            <stop offset="1" stop-color="#391945"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_radial_5179_1308"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(48.1077 53.6128) rotate(158.116) scale(32.7275 42.219)"
          >
            <stop stop-color="#99421D"></stop>
            <stop offset="0.333333" stop-color="#99161D"></stop>
            <stop offset="0.666667" stop-color="#7D1845"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <linearGradient
            id="paint2_linear_5179_1308"
            x1="10.4727"
            y1="14.9572"
            x2="56.1755"
            y2="51.4814"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#99161D"></stop>
            <stop offset="0.245283" stop-color="#CA005B"></stop>
            <stop offset="0.346698" stop-color="#FF479A"></stop>
            <stop offset="0.46934" stop-color="#CC3CFF"></stop>
            <stop offset="0.735849" stop-color="#BC1A22"></stop>
            <stop offset="1" stop-color="#C94FF5"></stop>
          </linearGradient>
          <radialGradient
            id="paint3_radial_5179_1308"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(38.6181 23.8286) rotate(90) scale(25.9571 25.8545)"
          >
            <stop stop-color="#1C0E20" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#1C0E20"></stop>
          </radialGradient>
          <radialGradient
            id="paint4_radial_5179_1308"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(54 20.1938) rotate(144.293) scale(47.2897 44.8232)"
          >
            <stop stop-color="#EF7744"></stop>
            <stop offset="0.333333" stop-color="#E50914"></stop>
            <stop offset="0.666667" stop-color="#A70D53"></stop>
            <stop offset="1" stop-color="#792A95"></stop>
          </radialGradient>
          <radialGradient
            id="paint5_radial_5179_1308"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(36.525 51.3562) rotate(135) scale(4.58735)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FFBDC0"></stop>
            <stop offset="0.666667" stop-color="#F89DC6"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "joinUsDataTitleTwo",
    description: "joinUsDataDescTwo",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <g id="download-core-small">
          <path
            id="Vector"
            d="M36 70.2008C54.8882 70.2008 70.2001 54.8889 70.2001 36.0008C70.2001 17.1126 54.8882 1.80078 36 1.80078C17.1119 1.80078 1.80005 17.1126 1.80005 36.0008C1.80005 54.8889 17.1119 70.2008 36 70.2008Z"
            fill="url(#paint0_radial_5179_7940)"
          ></path>
          <path
            id="Vector_2"
            opacity="0.4"
            d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z"
            fill="url(#paint1_radial_5179_7940)"
          ></path>
          <path
            id="Vector_3"
            d="M62.3657 37.9958C63.1205 53.3924 51.3908 65.3832 36.1668 64.7778C20.9428 64.173 7.9893 51.2008 7.23444 35.8041C6.47952 20.4075 18.2091 8.41672 33.4331 9.02194C48.6571 9.62716 61.6103 22.5992 62.3657 37.9958Z"
            fill="url(#paint2_radial_5179_7940)"
          ></path>
          <path
            id="Vector_4"
            opacity="0.5"
            d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z"
            fill="url(#paint3_radial_5179_7940)"
          ></path>
          <path
            id="Vector_5"
            opacity="0.6"
            d="M36.9 60.6C48.6636 60.6 58.2 51.0637 58.2 39.3C58.2 27.5363 48.6636 18 36.9 18C25.1363 18 15.6 27.5363 15.6 39.3C15.6 51.0637 25.1363 60.6 36.9 60.6Z"
            fill="url(#paint4_radial_5179_7940)"
          ></path>
          <path
            id="Vector_6"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.0849 42.2727L46.3387 35.76L48.8945 38.5142L38.9118 47.477L37.8466 48.4333L36.6071 47.477L24.9899 38.5142L27.0434 35.76L35.4849 42.2727L33.6 21.6016H37.2L39.0849 42.2727Z"
            fill="url(#paint5_radial_5179_7940)"
          ></path>
          <path
            id="Vector_7"
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.6566 34.9618C61.7832 35.3893 62.391 35.3233 62.3694 34.878C61.6962 21.1369 50.1509 9.55975 36.5817 9.01957C34.4606 8.93515 32.4155 9.12541 30.4772 9.55909C30.0745 9.64915 30.1575 10.2082 30.5697 10.2246C45.0094 10.7979 57.6246 21.2971 61.6566 34.9618Z"
            fill="url(#paint6_radial_5179_7940)"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(36.0001 36.1837) rotate(-90) scale(34.3829)"
          >
            <stop offset="0.782019" stop-color="#982DBE"></stop>
            <stop
              offset="0.906819"
              stop-color="#B038DC"
              stop-opacity="0.2"
            ></stop>
            <stop offset="1" stop-color="#E4A1FA" stop-opacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.9937 20.0992) rotate(135) scale(49.9836)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FFBDC0"></stop>
            <stop offset="0.666667" stop-color="#F89DC6"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint2_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.7999 19.6937) rotate(135) scale(53.1037)"
          >
            <stop stop-color="#FFA984"></stop>
            <stop offset="0.333333" stop-color="#FF787F"></stop>
            <stop offset="0.666667" stop-color="#F45FA2"></stop>
            <stop offset="1" stop-color="#C44AF1"></stop>
          </radialGradient>
          <radialGradient
            id="paint3_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.9937 20.0992) rotate(135) scale(49.9836)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FFBDC0"></stop>
            <stop offset="0.666667" stop-color="#F89DC6"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint4_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(36.9 39.3) scale(21.3)"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="paint5_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.2 32.1016) rotate(39.5226) scale(15.5567)"
          >
            <stop stop-color="#EF7744"></stop>
            <stop offset="0.2406" stop-color="#E50914"></stop>
            <stop offset="1" stop-color="#792A95"></stop>
          </radialGradient>
          <radialGradient
            id="paint6_radial_5179_7940"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(50.7 21.3) rotate(-180) scale(30)"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "joinUsDataTitleThree",
    description: "joinUsDataDescThree",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <g id="telescope-core-small">
          <path
            id="Vector"
            d="M24.0492 36.6016L33.6 46.3898L17.8029 56.8633C17.8029 56.8633 15.8891 57.6983 13.625 55.2638C11.361 52.8293 12.1235 51.238 12.1235 51.238L24.0492 36.6016Z"
            fill="url(#paint0_radial_5179_1664)"
          ></path>
          <path
            id="Vector_2"
            d="M25.0344 34.1992L36 46.151L25.0616 53.8043C25.0616 53.8043 21.8289 55.0984 18.0987 51.0172C14.3686 46.9358 15.9198 44.5105 15.9198 44.5105L25.0344 34.1992Z"
            fill="url(#paint1_radial_5179_1664)"
          ></path>
          <path
            id="Vector_3"
            d="M39 13.0195L59.1 33.6788L32.5325 50.4142C32.5325 50.4142 28.7459 50.2552 24.3978 45.4897C20.0498 40.7243 21.4096 35.8101 21.4096 35.8101L39 13.0195Z"
            fill="url(#paint2_radial_5179_1664)"
          ></path>
          <path
            id="Vector_4"
            d="M57.6709 15.3516C63.1044 21.2807 63.9858 29.2883 59.6386 33.2371C55.2916 37.186 47.3628 35.5806 41.9292 29.6515C36.4954 23.7224 35.6145 15.7148 39.9615 11.766C44.3084 7.81716 52.2372 9.42252 57.6709 15.3516Z"
            fill="url(#paint3_radial_5179_1664)"
          ></path>
          <path
            id="Vector_5"
            d="M58.3787 31.255C54.8121 34.5032 48.2143 33.0817 43.6421 28.0798C39.07 23.078 38.2547 16.39 41.8213 13.1419C45.3879 9.89364 51.9857 11.3152 56.5579 16.3171C61.1298 21.3189 61.9452 28.0069 58.3787 31.255Z"
            fill="url(#paint4_radial_5179_1664)"
          ></path>
          <path
            id="Vector_6"
            opacity="0.85"
            d="M59.6783 28.823C60.576 24.1785 59.6544 20.5934 56.1603 16.6199C52.6662 12.6464 47.3508 10.8657 43.7796 12.7598C39.371 15.098 48.3734 13.5961 53.4577 19.5815C57.8259 24.724 58.8516 33.1009 59.6783 28.823Z"
            fill="url(#paint5_radial_5179_1664)"
          ></path>
          <path
            id="Vector_7"
            opacity="0.4"
            d="M50.3979 25.2452C50.4549 26.7239 49.2932 27.7677 47.8032 27.5766C46.3131 27.3856 45.059 26.032 45.002 24.5532C44.945 23.0745 46.1067 22.0307 47.5968 22.2218C49.0868 22.4128 50.341 23.7664 50.3979 25.2452Z"
            fill="url(#paint6_radial_5179_1664)"
          ></path>
          <path
            id="Vector_8"
            opacity="0.6"
            d="M36.9217 21.0039L26.4258 34.3627C26.3297 36.4604 28.2903 39.5534 30.0334 40.8344L41.2345 29.9105C39.6 28.2005 36.9591 24.1025 36.9217 21.0039Z"
            fill="url(#paint7_radial_5179_1664)"
          ></path>
          <path
            id="Vector_9"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0576 9.60156L21.479 11.7187L24 11.0654L22.3575 13.0272L23.7789 15.1444L21.3424 14.2397L19.7 16.2016L19.8365 13.6806L17.4 12.7759L19.9209 12.1225L20.0576 9.60156ZM58.776 52.8016L58.9623 56.4685L62.4 57.4188L59.0774 58.7347L59.2637 62.4016L57.0239 59.548L53.7014 60.8638L55.6397 57.7843L53.4 54.9307L56.8377 55.8811L58.776 52.8016ZM15.206 24.2101L15.8768 21.0016L13.4793 23.1964L10.6853 21.5563L11.9975 24.553L9.59998 26.7478L12.8085 26.405L14.1207 29.4016L14.7915 26.1931L18 25.8502L15.206 24.2101Z"
            fill="url(#paint8_linear_5179_1664)"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(36.6875 32.7016) rotate(135) scale(34.9134)"
          >
            <stop stop-color="#99421D"></stop>
            <stop offset="0.333333" stop-color="#99161D"></stop>
            <stop offset="0.666667" stop-color="#7D1845"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(42.5937 27.2992) rotate(135) scale(44.5477 44.5279)"
          >
            <stop stop-color="#EF7744"></stop>
            <stop offset="0.333333" stop-color="#E50914"></stop>
            <stop offset="0.666667" stop-color="#A70D53"></stop>
            <stop offset="1" stop-color="#792A95"></stop>
          </radialGradient>
          <radialGradient
            id="paint2_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(42.3 29.106) rotate(135) scale(31.8127)"
          >
            <stop stop-color="#FB540D"></stop>
            <stop offset="0.333333" stop-color="#E50914"></stop>
            <stop offset="0.666667" stop-color="#A70D53"></stop>
            <stop offset="1" stop-color="#792A95"></stop>
          </radialGradient>
          <radialGradient
            id="paint3_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(57.675 14.7078) rotate(134.326) scale(24.0433 24.0367)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FFBDC0"></stop>
            <stop offset="0.666667" stop-color="#F89DC6"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint4_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.1305 21.273) rotate(141.875) scale(9.87138 12.8159)"
          >
            <stop offset="0.307292" stop-color="#F89DC6"></stop>
            <stop offset="0.645392" stop-color="#E75094"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <radialGradient
            id="paint5_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(55.8 15.6) rotate(135) scale(13.1522)"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="paint6_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(49.2362 22.9648) rotate(131.079) scale(5.08644 6.006)"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="paint7_radial_5179_1664"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(36.8758 29.1353) rotate(137.622) scale(13.5764)"
          >
            <stop stop-color="#FFA984"></stop>
            <stop offset="1" stop-color="#F7636B" stop-opacity="0"></stop>
          </radialGradient>
          <linearGradient
            id="paint8_linear_5179_1664"
            x1="44.65"
            y1="27.9016"
            x2="24.25"
            y2="48.3016"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EF7744"></stop>
            <stop offset="0.333333" stop-color="#E50914"></stop>
            <stop offset="0.666667" stop-color="#A70D53"></stop>
            <stop offset="1" stop-color="#792A95"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "joinUsDataTitleFour",
    description: "joinUsDataDescFour",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <g id="profiles-core-small">
          <path
            id="Vector"
            d="M10.8 15.6008C10.8 12.9499 12.949 10.8008 15.5999 10.8008H40.8C43.4509 10.8008 45.6 12.9498 45.6 15.6008V40.8007C45.6 43.4516 43.4509 45.6007 40.8 45.6007H15.6C12.949 45.6007 10.8 43.4517 10.8 40.8007V15.6008Z"
            fill="url(#paint0_radial_5179_7919)"
          ></path>
          <path
            id="Vector_2"
            d="M9.59998 14.4016C9.59998 11.7506 11.749 9.60162 14.4 9.60156H39.6C42.251 9.60156 44.4 11.7506 44.4 14.4016V39.6015C44.4 42.2525 42.251 44.4015 39.6 44.4015H14.4C11.749 44.4016 9.59998 42.2525 9.59998 39.6015V14.4016Z"
            fill="url(#paint1_radial_5179_7919)"
          ></path>
          <path
            id="Vector_3"
            d="M18.6 21.9008C18.6 23.0606 17.6598 24.0008 16.5 24.0008C15.3402 24.0008 14.4 23.0606 14.4 21.9008C14.4 20.741 15.3402 19.8008 16.5 19.8008C17.6598 19.8008 18.6 20.741 18.6 21.9008Z"
            fill="url(#paint2_radial_5179_7919)"
          ></path>
          <path
            id="Vector_4"
            d="M39.6 21.9008C39.6 23.0606 38.6598 24.0008 37.5 24.0008C36.3402 24.0008 35.4 23.0606 35.4 21.9008C35.4 20.741 36.3402 19.8008 37.5 19.8008C38.6598 19.8008 39.6 20.741 39.6 21.9008Z"
            fill="url(#paint3_radial_5179_7919)"
          ></path>
          <path
            id="Vector_5"
            d="M23.6713 29.4501C23.2437 29.1967 22.6917 29.3379 22.4383 29.7655C22.1848 30.1932 22.3261 30.7452 22.7537 30.9986C23.8254 31.6337 26.769 32.7744 30.6375 32.7744C34.506 32.7744 37.4497 31.6337 38.5213 30.9986C38.949 30.7452 39.0902 30.1932 38.8368 29.7655C38.5834 29.3379 38.0313 29.1967 37.6037 29.4501C36.8191 29.9151 34.194 30.9744 30.6375 30.9744C27.081 30.9744 24.456 29.9151 23.6713 29.4501Z"
            fill="url(#paint4_radial_5179_7919)"
          ></path>
          <path
            id="Vector_6"
            opacity="0.35"
            d="M19.2 44.4016H28.2L32.4 27.6016C30.2787 28.1801 28.4542 29.5387 27.2921 31.4053L19.2 44.4016Z"
            fill="url(#paint5_radial_5179_7919)"
          ></path>
          <path
            id="Vector_7"
            d="M27.6 32.4016C27.6 29.7506 29.749 27.6016 32.4 27.6016L57.6 27.6016C60.2508 27.6016 62.4 29.7506 62.4 32.4016V57.6015C62.4 60.2524 60.2508 62.4016 57.6 62.4016H32.4C29.749 62.4016 27.6 60.2524 27.6 57.6016V32.4016Z"
            fill="url(#paint6_radial_5179_7919)"
          ></path>
          <path
            id="Vector_8"
            d="M36.6 39.9008C36.6 41.0606 35.6598 42.0008 34.5 42.0008C33.3402 42.0008 32.4 41.0606 32.4 39.9008C32.4 38.741 33.3402 37.8008 34.5 37.8008C35.6598 37.8008 36.6 38.741 36.6 39.9008Z"
            fill="url(#paint7_radial_5179_7919)"
          ></path>
          <path
            id="Vector_9"
            d="M57.6 39.9008C57.6 41.0606 56.6598 42.0008 55.5 42.0008C54.3402 42.0008 53.4 41.0606 53.4 39.9008C53.4 38.741 54.3402 37.8008 55.5 37.8008C56.6598 37.8008 57.6 38.741 57.6 39.9008Z"
            fill="url(#paint8_radial_5179_7919)"
          ></path>
          <path
            id="Vector_10"
            d="M41.8213 47.6025C41.3937 47.349 40.8416 47.4903 40.5882 47.9179C40.3348 48.3455 40.476 48.8976 40.9037 49.1509C41.9753 49.786 44.919 50.9267 48.7875 50.9267C52.656 50.9267 55.5996 49.786 56.6713 49.1509C57.0989 48.8976 57.2402 48.3455 56.9867 47.9179C56.7333 47.4903 56.1813 47.349 55.7537 47.6025C54.969 48.0674 52.344 49.1267 48.7875 49.1267C45.231 49.1267 42.6059 48.0674 41.8213 47.6025Z"
            fill="url(#paint9_radial_5179_7919)"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(39.075 17.6882) rotate(135) scale(32.8097)"
          >
            <stop stop-color="#99421D"></stop>
            <stop offset="0.333333" stop-color="#99161D"></stop>
            <stop offset="0.666667" stop-color="#7D1845"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(62.4 8.70157) rotate(133.87) scale(75.3216)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FFBDC0"></stop>
            <stop offset="0.666667" stop-color="#F89DC6"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint2_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(60.3 11.1008) rotate(133.939) scale(68.7426 55.9547)"
          >
            <stop stop-color="#99421D"></stop>
            <stop offset="0.333333" stop-color="#99161D"></stop>
            <stop offset="0.666667" stop-color="#7D1845"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <radialGradient
            id="paint3_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(60.3 11.1008) rotate(133.939) scale(68.7426 55.9547)"
          >
            <stop stop-color="#99421D"></stop>
            <stop offset="0.333333" stop-color="#99161D"></stop>
            <stop offset="0.666667" stop-color="#7D1845"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <radialGradient
            id="paint4_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(60.3 11.0994) rotate(133.939) scale(68.7426 55.9548)"
          >
            <stop stop-color="#99421D"></stop>
            <stop offset="0.333333" stop-color="#99161D"></stop>
            <stop offset="0.666667" stop-color="#7D1845"></stop>
            <stop offset="1" stop-color="#59216E"></stop>
          </radialGradient>
          <radialGradient
            id="paint5_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(39.6 27.9016) rotate(135) scale(23.3345)"
          >
            <stop stop-color="#FFA984"></stop>
            <stop offset="0.333333" stop-color="#FF787F"></stop>
            <stop offset="0.666667" stop-color="#F45FA2"></stop>
            <stop offset="1" stop-color="#C44AF1"></stop>
          </radialGradient>
          <radialGradient
            id="paint6_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(61.8 29.7016) rotate(135) scale(43.2749)"
          >
            <stop stop-color="#EF7744"></stop>
            <stop offset="0.333333" stop-color="#E50914"></stop>
            <stop offset="0.666667" stop-color="#A70D53"></stop>
            <stop offset="1" stop-color="#792A95"></stop>
          </radialGradient>
          <radialGradient
            id="paint7_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(62.1 11.1008) rotate(137.146) scale(73.6614 60.3576)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FDF6F6"></stop>
            <stop offset="0.666667" stop-color="#FADCE9"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint8_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(62.1 11.1008) rotate(137.146) scale(73.6614 60.3576)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FDF6F6"></stop>
            <stop offset="0.666667" stop-color="#FADCE9"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint9_radial_5179_7919"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(62.1 11.1017) rotate(137.146) scale(73.6614 60.3576)"
          >
            <stop stop-color="#FFDCCC"></stop>
            <stop offset="0.333333" stop-color="#FDF6F6"></stop>
            <stop offset="0.666667" stop-color="#FADCE9"></stop>
            <stop offset="1" stop-color="#E4A1FA"></stop>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
];

export const clubCategories = [
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
