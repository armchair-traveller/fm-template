module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        // TODO: Your colors here
        main: {
          100: "#FFF",
          200: "#FFF",
          300: "#FFF",
          400: "#FFF",
        },
      },
    },
  },
  plugins: [],
};
