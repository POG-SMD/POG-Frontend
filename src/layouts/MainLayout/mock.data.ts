export const navbarData = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Materiais e avisos",
    link: "material",
  },
  {
    name: "Administração",
    link: "/admin",
    permission: 'ADM'
  },
  {
    name: "Reservas",
    dropdown: [
      { name: "Equipamentos", link: "/equipment" },
      { name: "Espaços" },
      { name: "Coleta de dados", link: "/data" },
      { name: "Espaços de reuniões", link: "/reunion" },
    ],
  },
];
