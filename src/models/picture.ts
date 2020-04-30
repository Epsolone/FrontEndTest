export class Picture {
    id: string
    croppedPicture: string
    fullPicture: string
    author: string
    camera: string
    tags: string

    static parseJson(json: any) {
        if (json === null || json === undefined) return json;
        const { ...rest } = json;

        return Object.assign(
            new Picture(),
            {
                croppedPicture: json["cropped_picture"],
                fullPicture: json["full_picture"]
            },
            rest);
    }

    static getLightboxObj(item: Picture){
        return {
            src: item.fullPicture,
            title: item.tags
        }
    }
}