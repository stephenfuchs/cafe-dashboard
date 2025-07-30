import Toast from "primevue/toast";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("Toast", Toast);
});
