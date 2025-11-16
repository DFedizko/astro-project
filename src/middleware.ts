import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    context.locals.variant = new Promise((resolve) =>
        setTimeout(() => {
            const variants = ["a", "b", "c", "d"];

            const sortedIndex = Math.floor(Math.random() * variants.length);

            resolve(variants[sortedIndex]);
        }, 300), // Simula delay como se fosse posthog ou amplitude
    );

    // if (context.url.pathname.includes("/about")) {
    //     console.log("Tem about!");
    // }

    // if (context.request.method === "GET") {
    //     console.log("Isso foi um get!");
    // }

    return next();
});
