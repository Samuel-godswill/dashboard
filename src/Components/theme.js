import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "640px", // small devices
    md: "1024px", // medium devices (for 1024x600)
    lg: "1280px", // large devices (for 1280x800)
    xl: "1360px", // extra large devices
  },
});

export default theme;