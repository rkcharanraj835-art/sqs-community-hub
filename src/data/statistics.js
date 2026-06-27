import {
  FaUsers,
  FaTrophy,
  FaRobot,
  FaGift,
} from "react-icons/fa";

export const statistics = [
  {
    id: 1,
    icon: FaUsers,
    value: 350,
    suffix: "+",
    label: "Community Members",
    color: "text-cyan-400",
  },
  {
    id: 2,
    icon: FaTrophy,
    value: 50,
    suffix: "+",
    label: "Events Hosted",
    color: "text-yellow-400",
  },
  {
    id: 3,
    icon: FaRobot,
    value: 10,
    suffix: "",
    label: "Featured Mechs",
    color: "text-orange-400",
  },
  {
    id: 4,
    icon: FaGift,
    value: 100,
    suffix: "+",
    label: "Rewards",
    color: "text-pink-400",
  },
];