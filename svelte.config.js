import sveltePreprocess from "svelte-preprocess";
import stic from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  ],
  kit: {
    // `npm run build` will create a standard static app.
    adapter: stic(),

    // hydrate <div id="svelte"> el src/app.html
    target: "#svelte",
  },
};

export default config;
