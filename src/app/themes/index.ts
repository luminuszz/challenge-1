import { extendTheme, Theme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
  },
  colors: {
    gray: {
      100: "#F2F2F2",
      200: "#D9D9D9",
      300: "#808080",
      400: "#333333",
      500: "#262626",
      600: "#1A1A1A",
      700: "#0D0D0D",
    },

    purple: {
      500: "#8284FA",
      700: "#5E60CE",
    },

    blue: {
      500: "#4EA8DE",
      700: "#1E6F9F",
    },

    red: {
      500: "#E25858",
    },
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1A1A1A",
        fontFamily: "Inter, sans-serif",
        lineHeight: "140%",
        boxSizing: "border-box",
        WebkitFontSmoothing: "antialiased",
        color: "white",
      },
    } as any,
  },

  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "16px",
  },

  components: {
    Input: {
      variants: {
        filled: {
          field: {
            height: "54px",
            border: "1px dashed",
            borderColor: "gray.700",
            backgroundColor: "gray.500",
            borderRadius: "5px",
            padding: "16px",

            _focus: {
              borderColor: "purple.700",
            },
          },

          element: {
            color: "gray.100",
          },
        } as any,
      },
    },
    Button: {
      variants: {
        solid: {
          backgroundColor: "blue.700",
          fontWeight: "700",
          fontsize: "md",
          color: "gray.100",
          borderRadius: "8px",
          h: "52px",

          _hover: {
            bgColor: "blue.500",
          },

          _active: {
            bgColor: "blue.500",
          },
        } as any,
      },
    },
  },
} as Theme;

export default extendTheme(theme);
