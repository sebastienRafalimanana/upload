/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL_RESULT_BACC: string,
    readonly VITE_SERVER_SECURE_KEY: string,

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

