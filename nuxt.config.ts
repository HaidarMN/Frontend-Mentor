// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Frontend Mentor Challange | Haidar Muhammad Naufal",
      link: [{ rel: "icon", type: "image/x-icon", href: "/h.svg" }],
      htmlAttrs: {
        lang: "en",
        class: "scroll-smooth",
      },
      meta: [
        {
          name: "description",
          content: "Haidar Muhammad Naufal's project from Frontend Mentor",
        },
      ],
    },
    baseURL: "/",
    // buildAssetsDir: "assets",
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
