import { MdDashboard, MdDateRange } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";

export const useNavData = () => {
  const reportNav = [
    {
      id: 3,
      name: "Baali By Location",
      icon: MdDateRange,
      pathname: "/baaliByLocation",
      exact: "true",
      showTab: true,
    },
    {
      id: 4,
      name: "Provience-Land",
      icon: FaBusAlt,
      pathname: "/provienceLand",
      exact: "true",
      showTab: true,
    },
  ];

  const navData = [
    {
      id: 1,
      name: "Dashboard",
      icon: MdDashboard,
      pathname: "/",
      exact: "true",
      showTab: true,
      hasSubMenu: false,
    },

    {
      id: 2,
      name: "Reports",
      icon: IoDocument,
      pathname: "/reports",
      exact: "true",
      showTab: true,
      hasSubMenu: true,
      subData: reportNav,
    },
  ];

  return {
    navData: navData,
    reportNav: reportNav,
  };
};
