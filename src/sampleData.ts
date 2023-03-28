import xdLogo from "./assets/xd.svg";
import companyLogo1 from "./assets/companyLogo1.png";
import companyLogo2 from "./assets/companyLogo2.png";
import companyLogo3 from "./assets/companyLogo3.png";
import companyLogo4 from "./assets/companyLogo4.png";
import companyLogo5 from "./assets/companyLogo5.png";

import Person1 from "./assets/person1.png";
import Person2 from "./assets/person2.png";
import Person3 from "./assets/person3.png";
import Person4 from "./assets/person4.png";
import Person5 from "./assets/person5.png";
import Person6 from "./assets/person6.png";

import members1 from "./assets/Members1.png";
import members2 from "./assets/Members2.png";
import members3 from "./assets/Members3.png";
import members4 from "./assets/Members4.png";
import members5 from "./assets/Members5.png";
import members6 from "./assets/Members6.png";

export const stats = [
  {
    iconName: "wallet-sharp",
    title: "Users",
    text: "32,984",
  },
  {
    iconName: "rocket-sharp",
    title: "Clicks",
    text: "2,42m",
  },
  {
    iconName: "cart-sharp",
    title: "Sales",
    text: "2400$",
  },
  {
    iconName: "build-sharp",
    title: "Items",
    text: "320",
  },
];

export const projects = [
  {
    logoImg: xdLogo,
    memberImg: members1,
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    completionPercentage: "60%",
    progressbarValue: "w-3/5",
  },
  {
    logoImg: companyLogo1,
    memberImg: members2,
    company: "Add Progress Track",
    budget: "$3,000",
    completionPercentage: "10%",
    progressbarValue: "w-2/12",
  },
  {
    logoImg: companyLogo2,
    memberImg: members3,
    company: "Fix Platform Errors",
    budget: "Not set",
    completionPercentage: "100%",
    progressbarValue: "w-1/1",
  },
  {
    logoImg: companyLogo3,
    memberImg: members4,
    company: "Launch our Mobile App",
    budget: "$32,000",
    completionPercentage: "100%",
    progressbarValue: "$400",
  },
  {
    logoImg: companyLogo4,
    memberImg: members5,
    company: "Add the New Pricing Page",
    budget: "$400",
    completionPercentage: "25%",
    progressbarValue: "w-1/4",
  },
  {
    logoImg: companyLogo5,
    memberImg: members6,
    company: "Redesign New Online Shop",
    budget: "$7,600",
    completionPercentage: "40%",
    progressbarValue: "w-2/5",
  },
];

export const orders = [
  {
    iconColor: "text-cyan",
    text: "22 DEC 7:20 PM",
    title: "$2400, Design changes",
    iconName: "notifications-sharp",
  },
  {
    iconColor: "text-red",
    text: "21 DEC 11:21 PM",
    title: "New order #4219423",
    iconName: "logo-css3",
  },
  {
    iconColor: "text-blue-400",
    text: "21 DEC 9:28 PM",
    title: "Server Payments for April",
    iconName: "cart-sharp",
  },
  {
    iconColor: "text-orange-300",
    text: "20 DEC 3:52 PM",
    title: "New card added for order #3210145",
    iconName: "card-sharp",
  },
  {
    iconColor: "text-purple-400",
    text: "19 DEC 11:35 PM",
    title: "Unlock packages for Development",
    iconName: "logo-dropbox",
  },

  {
    text: "18 DEC 4:41 PM",
    title: "New order #9851258",
    svg: xdLogo,
    svgAlt: "xdLogo",
  },
];

export const authors = [
  {
    image: Person1,
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    position: "Manager",
    role: "Organization",
    online: true,
    employedDate: "14/06/21",
  },
  {
    image: Person2,
    name: "Sidra Holland",
    email: "sidra@vandelay.com",
    position: "Manager",
    role: "Organization",
    online: false,
    employedDate: "14/06/21",
  },
  {
    image: Person3,
    name: "Cosmo Kramer",
    email: "kramer@vandelay.com",
    position: "Programmer",
    role: "Developer",
    online: true,
    employedDate: "14/06/21",
  },
  {
    image: Person4,
    name: "Newman",
    email: "newman@usps.com",
    position: "Executive",
    role: "Projects",
    online: false,
    employedDate: "14/06/21",
  },
  {
    image: Person5,
    name: "Frank Costanza",
    email: "frank@vandelay.com",
    position: "Programmer",
    role: "Developer",
    online: false,
    employedDate: "14/06/21",
  },
  {
    image: Person6,
    name: "Art VanDelay",
    email: "art.ie@vandelay.com",
    position: "Designer",
    role: "UI/UX Design",
    online: false,
    employedDate: "14/06/21",
  },
];

export const tableProjects = [
  {
    logoImg: xdLogo,
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    completionPercentage: "60%",
    progressbarValue: "w-3/5",
    status: "Working",
  },
  {
    logoImg: companyLogo1,
    company: "Add Progress Track",
    budget: "$3,000",
    completionPercentage: "10%",
    progressbarValue: "w-2/12",
    status: "Canceled",
  },
  {
    logoImg: companyLogo2,
    company: "Fix Platform Errors",
    budget: "Not set",
    completionPercentage: "100%",
    progressbarValue: "w-1/1",
    status: "Done",
  },
  {
    logoImg: companyLogo3,
    company: "Launch our Mobile App",
    budget: "$32,000",
    completionPercentage: "100%",
    progressbarValue: "$400",
    status: "Done",
  },
  {
    logoImg: companyLogo4,
    company: "Add the New Pricing Page",
    budget: "$400",
    completionPercentage: "25%",
    progressbarValue: "w-1/4",
    status: "Working",
  },
];
