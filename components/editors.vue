<template>
<div>
    <ul class="name-list">
        <!-- Run v-for loop to map through json and render titles and images  -->
        <li v-for="(editor, index) in database.pages" v-bind:key="index"  @mouseenter="hoverOver = true"
        @mouseleave="hoverOver = false"
        @click="hoverOver = true"
        class="list-item"
        >
            <!-- Set Editor Title -->
            <span class="editor-name">
                {{ editor.title }} 
            </span>

            <!-- Set hover <img> tag -->
            <img class="hover-image" :srcset="editor.featuredImage.srcSet" alt="Editor Featured image in our database" />
        </li>

        <!-- Handle configs and hide/show classes. -->
        <!-- <swiper class="swiper swiper-container-fade swiper-container-initialized swiper-container-horizontal" :options="swiperOptions"
        :class="{'is-shown' : hoverOver }">
            <swiper-slide
                v-for="(swipeImages, images) in database.images"
                :key="images">
                <img class="the-image" :src="swipeImages.sourceUrl" alt="Editor Images in our database" />
            </swiper-slide>
        </swiper> -->
<br/>
    </ul>
  <!-- <transition-group name="fade" tag="ul" mode="out-in" appear> -->


        <li
            v-for="(swipeImages, images) in database.images"
            :key="images">
            <img class="the-image" :srcset="swipeImages.srcSet" alt="Editor Images in our database" />
        </li>

  <!-- </transition-group> -->
    
</div>
</template>

<script>

export default {
    name: 'editors',
    // Using async await to fetch data with nuxt 
    async fetch() {
        this.database = await fetch(
            'https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json'
            // Format result as json
            ).then((res) => res.json())
    },
    data: () => {
        return {
            database : [], // Map database to top level Array
            hoverOver: false, // Define initial hover state for <li>
            show: false,
        }
    },
}
</script>

<style scoped>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
} */
.name-list {
    list-style: none;
    padding: 162px 10px 0;
    position: relative;
    /* padding-top: 162px; */
}

.list-item {
    color: #FDC760;
    font-size: 24px;
    line-height: 37px;
    margin-bottom: 30px;
}

.editor-name {
    position: relative;
    z-index: 20;
    /* padding-left: 10px; */
}

.list-item:hover {
    color: #fff;
}

.list-item:hover img {
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
    position: fixed;
}

.swiper .the-image {
    max-height: 193px;
    min-width: 905px;
}

.swiper.is-shown {
    position: fixed;
    left: 50%;
    margin-left: -45%;
    top: 50%;
    margin-top: -25%;
    animation: fadeInOpacity .6s forwards;
    animation-delay: 2s;
}

/* Mobile first Approach */
/* These are Desktop Styles */
@media (min-width: 768px) {
    .editor-name {
        /* padding-left: 10px; */
    }

    .list-item:hover img {
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
        display: grid;
        justify-items:left;
        grid-template-columns: 33% 33% 18%;
        grid-template-rows: auto;
        grid-column-gap: 8%;
    }

    .list-item {
        min-width: 33%;
    }
    
    .swiper {
        position: absolute;
        width: 70%;
        top: 15%;
    }

    .swiper .the-image {
        max-height: 500px;
    }

    .swiper.is-shown {
        position: absolute;
        margin-left: -35%;
    }
}

@media (min-width: 1024px) {
    .swiper.is-shown {
        margin-top: -13%;
    }
}

@media (min-width: 1280px) {
    .name-list {
        padding: 162px 0 0;
    }
    /* .editor-name {
        padding-left: 0;
    } */
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