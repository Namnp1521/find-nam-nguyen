import spinee_main from "../../shared/assets/images/spinee/main.jpg";
import spinee_detail_1 from "../../shared/assets/images/spinee/detail_1.jpg";
import spinee_detail_2 from "../../shared/assets/images/spinee/detail_2.jpg";
import spinee_detail_3 from "../../shared/assets/images/spinee/detail_3.jpg";
import spinee_detail_4 from "../../shared/assets/images/spinee/detail_4.jpg";
import rainmix_main from "../../shared/assets/images/rainmix/main.png";
import rainmix_detail_2 from "../../shared/assets/images/rainmix/detail_2.png";
import rainmix_detail_3 from "../../shared/assets/images/rainmix/detail_3.png";
import rainmix_detail_4 from "../../shared/assets/images/rainmix/detail_4.png";
import rainmix_detail_5 from "../../shared/assets/images/rainmix/detail_5.png";
import kaomoji_main from "../../shared/assets/images/kaomoji/main.png";
import kaomoji_detail_2 from "../../shared/assets/images/kaomoji/detail_2.png";
import kaomoji_detail_3 from "../../shared/assets/images/kaomoji/detail_3.png";
import kaomoji_detail_4 from "../../shared/assets/images/kaomoji/detail_4.png";
import kaomoji_detail_5 from "../../shared/assets/images/kaomoji/detail_5.png";

export const PROJECTS = [
  {
    name: "SPINEE",
    tech: "Java / Firebase Storage",
    main: spinee_main,
    detail: [
      spinee_detail_1,
      spinee_detail_2,
      spinee_detail_3,
      spinee_detail_4,
    ],
    link: "https://play.google.com/store/apps/details?id=com.lotustar.penmodapp",
  },
  {
    name: "RAINMIX",
    tech: "React Native",
    main: rainmix_main,
    detail: [
      rainmix_detail_2,
      rainmix_detail_3,
      rainmix_detail_4,
      rainmix_detail_5,
    ],
    link: "https://play.google.com/store/apps/details?id=com.lotustar.rainmix",
  },
  {
    name: "KAOMOJI",
    tech: "React Native",
    main: kaomoji_main,
    detail: [
      kaomoji_detail_2,
      kaomoji_detail_3,
      kaomoji_detail_4,
      kaomoji_detail_5,
    ],
    link: "https://play.google.com/store/apps/details?id=com.lotustar.kaomoji",
  },
];
