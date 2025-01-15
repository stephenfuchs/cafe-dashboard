import type { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
    schema: [
        {
            "https://connect.squareup.com/public/graphql": {
                headers: {
                    Authorization: `Bearer ${process.env.NUXT_SQUARE_API_SECRET}`,
                },
            },
        },
    ],
    documents: ["server/**/*.ts"],
    generates: {
        "./src/gql/": {
            preset: "client",
            plugins: [],
            presetConfig: {
                gqlTagName: "gql",
            },
            config: {
                useTypeImports: true,
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
