export default ({
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-icon', 
    '@vueuse/nuxt',
    '@uploadthing/nuxt' // Add the UploadThing module here
  ],

  build: {
      transpile: ["@headlessui/vue"],
  },

  colorMode: {
      classSuffix: '',
  },

  compatibilityDate: '2024-08-25',

  uploadthing: {
    router: '/api/uploadthing',  // Path to your router definition file
    secret: process.env.UPLOADTHING_SECRET,  // Your UploadThing secret key
  },
});
