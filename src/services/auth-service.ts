import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { SessionStorage } from '@/models/storages/local-storage-provider';

export class AuthService {
    private BASE_URL = "http://interview.agileengine.com";
    private httpClient: AxiosInstance = null;
    readonly SessionAccessTokenKey = 'auth_access_token';

    constructor() {
        this.httpClient = Axios.create({
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });
    }

    get token(): any { return SessionStorage.get(this.SessionAccessTokenKey); }

    get isAuthenticated(): boolean { return this.token !== null }

    async getToken(): Promise<boolean> {
        const config: AxiosRequestConfig = {
            baseURL: this.BASE_URL,
            url: 'auth',
            method: "POST",
            data: { apiKey: "23567b218376f79d9415" }
        };

        const tokenResponse = await this.httpClient.request<GetTokenResponse>(config);

        SessionStorage.set(this.SessionAccessTokenKey, tokenResponse.data.token);
        return tokenResponse.data.auth;
    }

    async refreshToken(): Promise<boolean> {
        return await this.getToken();
    }
}

interface GetTokenResponse {
    token: string;
    auth: boolean;
}

export const authService = new AuthService();