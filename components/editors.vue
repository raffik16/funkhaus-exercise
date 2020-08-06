<template>
    <div>
        <ul class="name-list">
            <!-- Run v-for loop to map through json and render titles and images  -->
            <li v-for="(editor, index) in database.pages" v-bind:key="index"
            @mouseenter="hoverOver = true"
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

            <div class="carousel-view" :class="{'is-shown' : hoverOver }">
                <!-- Handle animation in-out classes -->
                <transition-group
                    tag="div"
                    name="slider"
                    class="carousel">
                    <!-- Iterate each carousel item -->
                    <div
                    v-for="(image, images) in database.images"
                        :key="images"
                        class="slide"
                        :class="images === 0 ? 'is-shown' : 'is-hidden'">
                        <img class="the-image" :srcset="image.srcSet" alt="Editor Images in our database" />
                    </div>
                </transition-group>
            </div>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'editors',
    created () {
        this.$nextTick(function () {
            // Only run function when browser has loaded.
            if (process.browser){
                // Run interval for image rotation
                window.setInterval(() => {
                    // Move showing image to the number one spot in the Array.
                    const first = this.database.images.shift()
                    this.database.images = this.database.images.concat(first)
                }, 5000)
            }
        })
    },
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
        }
    }
}
</script>

<style scoped>
.name-list {
    list-style: none;
    padding: 162px 10px 0;
    position: relative;
}

.list-item {
    color: #FDC760;
    font-size: 24px;
    line-height: 37px;
    margin-bottom: 30px;
}

.editor-name {
    position: relative;
    z-index: 30;
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
    z-index: 20;
    width: 90%;
}

.carousel-view {
    opacity: 0;
    z-index: 10;
    position: fixed;
}

.carousel {
    width: 95%;
}

.carousel-view .the-image {
    width: 100%;
}

.carousel-view.is-shown {
    position: fixed;
    left: 50%;
    margin-left: -45%;
    top: 50%;
    margin-top: -25%;
    animation: fadeInOpacity .6s forwards;
    animation-delay: 2s;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInOutSlides ease-in-out 5s infinite;
}

.slide.is-hidden {
    display: none;
}

/* Mobile first Approach */
/* These are Desktop Styles */
@media (min-width: 768px) {
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

    .carousel {
        width: 100%;
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
    
    .carousel-view {
        position: absolute;
        width: 70%;
        top: 15%;
    }

    .carousel-view.is-shown {
        position: absolute;
        margin-left: -35%;
    }
}

@media (min-width: 1024px) {
    .carousel-view.is-shown {
        margin-top: -13%;
    }
}

@media (min-width: 1280px) {
    .name-list {
        padding: 162px 0 0;
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

/* Fade In & Out Animation */
@keyframes fadeInOutSlides {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
}

</style>