<template>
  <div class="container">
      <header>
          <logo />
          <a class="header-link">
            Editors
          </a>
        <div class="group-navigation">
          <header-icons />
          <hamburger />
        </div>
      </header>

      <main>
        <editors />
      </main>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        title: 'Homepage - Funkhaus Technical Assessment by Raffi Keklikian'
      }
    },
    head() {
      return {
        title: this.title, // Grab title from data()
        meta: [
          {
            hid: 'description', //  must use hid
            name: 'description', // type of meta
            content: 'A Funkhaus Technical Assessment by Raffi Keklikian completely written in Nuxt!'
          }
        ]
      }
    }
  }
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  color: #fff;
}

.header-link {
  color: #FDC760;
  font-size: 18px;
}

.group-header {
    display: flex;
    flex-direction: column;
}
.group-navigation {
    display: flex;
}

.links {
  padding-top: 15px;
}

@media(min-width:768px){
  .group-header {
    flex-direction: row;
  }
}
</style>
