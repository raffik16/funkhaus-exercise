<template>
    <ul class="name-list">
        <!-- Run v-for loop to map through json and render titles and images  -->
        <li v-for="(editor, index) in db" v-bind:key="index">
            <span class="editor-name">{{ editor.title }}</span>
            <img class="hover-image" :src=editor.featuredImage.sourceUrl />
            <!-- {{editor.featuredImage.mediaItemId}} -->
        </li>

        <!-- Get carousel Images. -->
        <!-- <div v-for="(dbImages, images) in dbImages" :key='images'>
                <img class="the-image" :src="dbImages.sourceUrl" />
        </div>
         -->
    </ul>
</template>

<script>
import db from 'assets/db.json';
// import dbImages from 'assets/db.json';

export default {
    name: 'editors',
    data: () => {
        return {
            db : db.pages,
            // dbImages : dbImages.images
        }
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

li:hover img {
    display: block;
    position: fixed;
    left: 50%;
    margin-left: -45%;
    top: 50%;
    margin-top: -25%;
    animation: fadeInOpacity .6s forwards;
}

.hover-image {
    display: none;
    z-index: 10;
    width: 90%;
}


.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  width: 24em;
  min-height: 25em;
}
.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}


@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

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
        animation: fadeInOpacity .6s forwards;
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
}
</style>