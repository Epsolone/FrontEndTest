import { Vue, Component } from "vue-property-decorator";
import { imageGalleryService } from '@/services/image-gallery-service';
import { authService } from '@/services/auth-service';
import { Picture } from '@/models/picture';

@Component
export default class ImageGallery extends Vue {
    currentPage: number;
    maxPageNumber: number;
    pictures: Picture[] = [];
    showModal = false;
    activePictureIndex = 0;

    async mounted() {
        await authService.refreshToken();
        await this.loadPage(1);
    }

    get images() {
        return this.pictures.map(picture => Picture.getLightboxObj(picture));
    }

    async loadPage(pageNumber) {
        this.currentPage = pageNumber;
        const { pictures, pageCount } = await imageGalleryService.getPicturePage(pageNumber);

        const fullPicturesInfo = [];

        pictures.forEach(async item => {
            const pictureInfo = await imageGalleryService.getPictureDetails(item.id);
            fullPicturesInfo.push(pictureInfo)
        });

        this.pictures = fullPicturesInfo;
        this.maxPageNumber = pageCount;
    }

    openModal(index){
        this.activePictureIndex = index;
        this.showModal = true;
    }

    hideModal(){
        this.showModal = false;
    }
}