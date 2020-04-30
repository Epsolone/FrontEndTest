<template>
    <b-container>
        <b-row>
            <b-col
                sm="3"
                class="image-box"
                v-for="(item, index) in pictures"
                :key="index"
                @click="() => openModal(index)">
                <img :src="item.croppedPicture">
            </b-col>
        </b-row>
        <b-pagination
            v-model="currentPage"
            :total-rows="maxPageNumber"
            :per-page="1"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @change="loadPage">
        </b-pagination>
        <vue-easy-lightbox
            :imgs="images"
            :visible="showModal"
            :index="activePictureIndex"
            @hide="hideModal">
        </vue-easy-lightbox>
    </b-container>
</template>
<script src="./image-gallery.ts" />
<style src="./image-gallery.css" />