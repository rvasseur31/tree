import { Environment } from "./environment.interface";

export const production: Environment = {
    app: {
        APP_PORT: 3000
    },
    api: {
        API_URL: "http://localhost",
        API_PORT: ":5000",
        API_FULL_URL: "http://localhost:5000"
    }
}