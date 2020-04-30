import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { authService } from './auth-service';
import { GalleryPage } from '@/models/gallery-page';
import { Picture } from '@/models/picture';

class ImageGalleryService {
    private httpClient: AxiosInstance;
    private BASE_URL = "http://interview.agileengine.com/images";

    constructor() {
        this.httpClient = Axios.create({
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });

        this.httpClient.interceptors.request.use(x => this.addAuthorizationHeaderInterceptor(x));
    }

    private addAuthorizationHeaderInterceptor(config: AxiosRequestConfig) {
        if (!authService.isAuthenticated) {
            return config;
        }

        config.headers = config.headers || {}
        Object.assign(config.headers, { "Authorization": `Bearer ${authService.token}` })

        return config
    }

    async getPicturePage(pageNumber: number): Promise<GalleryPage> {
        return await this.httpClient.get(`${this.BASE_URL}?page=${pageNumber}`)
            .then((response: any) => {
                return GalleryPage.parseJson(response.data);
            });
    }

    async getPictureDetails(id: string): Promise<GalleryPage> {
        return await this.httpClient.get(`${this.BASE_URL}/${id}`)
            .then((response: any) => {
                return Picture.parseJson(response.data);
            });
    }
}

export const imageGalleryService = new ImageGalleryService();