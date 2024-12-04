import { defineNuxtPlugin } from "#app";
import Tooltip from "primevue/tooltip";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("tooltip", Tooltip);
});
