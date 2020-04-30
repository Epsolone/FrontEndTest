import { Picture } from '@/models/picture';

export class GalleryPage {
    pictures: Picture[]
    page: number
    pageCount: number
    hasMore: boolean

    static parseJson(json: any) {
        if (json === null || json === undefined)
            return json;
        const { pictures, ...rest } = json;

        return Object.assign(
            new GalleryPage(),
            {
                pictures: (pictures || []).map(Picture.parseJson)
            },
            rest);
    }
}