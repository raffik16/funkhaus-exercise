<template>
    <ul class="name-list">
        <!-- Run v-for loop to map through json and render titles and images  -->
        <li v-for="(editor, index) in db" v-bind:key="index"  @mouseenter="hoverOver = true"
        @mouseleave="hoverOver = false"
        @click="hoverOver = true"
        >
            <span class="editor-name">
                {{ editor.title }} 
            </span>

            <img class="hover-image" :src=editor.featuredImage.sourceUrl />
        </li>

        <swiper class="swiper" :options="swiperOptions"
        :class="{ 'is-shown' : hoverOver }">
            <swiper-slide
                v-for="(dbImages, images) in dbImages"
                :key="images">
                <img class="the-image" :src="dbImages.sourceUrl" />
            </swiper-slide>
        </swiper>
    </ul>
</template>

<script>
// Import Vue Swiper & SwiperSlide Functions
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// Import swiper stylesheet
import 'assets/swiper-bundle.min.css'

// Import for Hover Images
import db from 'assets/db.json';

// Import for Carousel Images
import dbImages from 'assets/db.json';

export default {
    name: 'editors',
    data: () => {
        return {
            db : db.pages, // Map Pages Array
            dbImages : dbImages.images, // Map Images Array
            hoverOver: false, // Define initial hover state for <li>
            swiperOptions: { // Swiper Configs
                loop: true,
                initialSlide: 0,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false
                },
                speed: 800,
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
}
</script>

<style scoped>
.name-list {
    display: flex;
    flex-direction: column;
}

ul {
    list-style: none;
    padding: 0;
    position: relative;
    padding-top: 162px;
}

li {
    color: #FDC760;
    font-size: 24px;
    line-height: 37px;
    margin-bottom: 30px;
}

.editor-name {
    position: relative;
    z-index: 20;
    padding-left: 10px;
}

li:hover {
    color: #fff;
}

/* @TODO add focus */
li:hover img {
    display: block;
    position: fixed;
    left: 50%;
    margin-left: -45%;
    top: 50%;
    margin-top: -25%;
    animation: fadeInOutOpacity 3s forwards;
}

.hover-image {
    display: none;
    z-index: 10;
    width: 90%;
}

.swiper {
    opacity: 0;
    z-index: 10;
    width: 90%;
}

.swiper .the-image {
    max-height: 193px;
    min-width: 905px;
}

.swiper.is-shown {
    position: fixed;
    left: 50%;
    margin-left: -169px;
    top: 50%;
    margin-top: -25%;
    animation: fadeInOpacity .6s forwards;
    animation-delay: 2s;
}

/* Mobile first Approach */
/* These are Desktop Styles */
@media (min-width: 768px) {
    .editor-name {
        padding-left: 0;
    }

    li:hover img {
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -35%;
        top: 15%;
        margin-top: 0;
        animation: fadeInOutOpacity 3s forwards;
    }

    .hover-image {
        display: none;
        z-index: 10;
        width: 70%;
    }

    .name-list {
        flex-direction: row;
        flex-wrap: wrap;
    }

    li {
        min-width: 33%;
    }

    .swiper .the-image {
        max-height: 500px;
    }

    .swiper.is-shown {
        position: absolute;
        margin-left: -452px;
        margin-top: -13%;
    }

}

/* Fade In Animation */
@keyframes fadeInOpacity {
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Fade In & Out Animation */
@keyframes fadeInOutOpacity {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}

</style>