export interface Environment {
    app: {
        APP_PORT: number
    },
    api: {
        API_URL: string,
        API_PORT: string,
        API_FULL_URL: string
    }
}