import { Client, Environment } from "square";

export default (config: { apiKey: string }) => {
    return new Client({
        bearerAuthCredentials: {
            accessToken: config.apiKey,
        },
        environment: Environment.Production,
    });
};
