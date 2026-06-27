import {
  FaCalculator,
  FaUserAstronaut,
  FaMicrochip,
  FaChartBar,
  FaGem,
  FaMapMarkedAlt,
} from "react-icons/fa";

const resources = [
  {
    id: 1,
    title: "Calculator",
    description: "Damage, Credits & XP Calculator",
    icon: FaCalculator,
    link: "https://mecharena.infohubhq.in",
  },
  {
    id: 2,
    title: "Pilot Calculator",
    description: "Pilot Upgrade Calculator",
    icon: FaUserAstronaut,
    link: "https://mecharena.infohubhq.in/pilot-upgrade-calculator",
  },
  {
    id: 3,
    title: "Mod Calculator",
    description: "Best Mod Combinations",
    icon: FaMicrochip,
    link: "https://mecharena.infohubhq.in/mod-calculator",
  },
  {
    id: 4,
    title: "Statistics",
    description: "Mech & Weapon Statistics",
    icon: FaChartBar,
    link: "https://mecharena.infohubhq.in/my-stats",
  },
  {
    id: 5,
    title: "Legendary Skins",
    description: "Complete Skin Collection",
    icon: FaGem,
    link: "https://mecharena.infohubhq.in/legendary-skins",
  },
  {
    id: 6,
    title: "Maps",
    description: "Arena Maps & Callouts",
    icon: FaMapMarkedAlt,
    link: "https://mecharena.infohubhq.in/maps",
  },
];

export default resources;