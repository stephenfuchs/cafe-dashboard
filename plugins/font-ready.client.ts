export default defineNuxtPlugin(() => {
    if (document?.fonts) {
        document.fonts.ready.then(() => {
            document.documentElement.classList.add("font-loaded");
        });
    }
});
