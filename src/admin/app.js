import Logo from "./extensions/logo.png";
export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Logo,
    },
    menu: {
      logo: Logo,
    },
    theme: {
      light: {
        colors: {
          primary100: "#FAEBCD",
          primary200: "#FFEA85",
          primary300: "#FFF1C1",
          primary400: "#FFF1C1",
          primary500: "#FFF1C1",
          primary600: "#FAC213",
          primary700: "#FAC213",
          primary800: "#FAC213",
          danger700: "#EB5353",
          neutral100: "#FAEBCD",
          neutral200: "#FFEA85",
          neutral300: "#FFF1C1",
          neutral400: "#FFF1C1",
          neutral500: "#FFF1C1",
          neutral600: "#FAC213",
          neutral700: "#FAC213",
          neutral800: "#FAC213",
          buttonPrimary500: "#000",
          buttonPrimary600: "#000",
        },
      },
      dark: {
        colors: {
          primary100: "#fbc82b",
          primary200: "#fbce42",
          primary300: "#fbd45a",
          primary400: "#fcda71",
          primary500: "#fde189",
          primary600: "#fde7a1",
          primary700: "#fdedb8",
          primary800: "#fef3d0",
          primary900: "#fff9e7",
          buttonPrimary100: "#fbc82b",
          buttonPrimary200: "#fbce42",
          buttonPrimary300: "#fbd45a",
          buttonPrimary400: "#fcda71",
          buttonPrimary500: "#fde189",
          buttonPrimary600: "#fbc82b",
          buttonPrimary700: "#fdedb8",
          buttonPrimary800: "#fef3d0",
          buttonPrimary900: "#fff9e7",
        },
      },
    },
    locales: ["es"],
    translations: {
      es: {
        "app.components.LeftMenu.navbrand.workplace": "Estación de Trabajo",
        "app.components.LeftMenu.navbrand.title": "Textiles El Rey Escorpión",
        "Auth.form.welcome.title": "Bienvenido a Textiles El Rey Escorpión",
        "Auth.form.welcome.subtitle":
          "Inicia sesión con tu cuenta administrador",
        "Content Manager": "Gestor de Contenidos",
        address: "Direcciones",
        favorite: "Favoritos",
        "home-banner": "Banners",
        order: "Órdenes",
        product: "Productos",
        User: "Usuarios",
        TITLE: "Título",
        NAME_LASTNAME: "Nomb. y Apell.",
        ADDRESS: "Dirección",
      },
    },
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
