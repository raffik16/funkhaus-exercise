<template>
  <div class="container">
      <header>
        <!-- Grouped <header> in two sections,
        logo + h1 and icons + hamburger -->
        <div class="group-header-content">
          <logo />
          <h1 class="header-link">
            Editors
          </h1>
        </div>

        <div class="group-navigation">
          <header-icons />
          <hamburger />
        </div>
      </header>

      <!-- Injecting editor component in <main> -->
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
  font-weight: normal;
  padding-left: 10px;
}

.group-navigation {
  display: flex;
}

.group-navigation svg {
  padding-left: 10px;
}

.group-header-content svg {
  padding-left: 10px;
}

.links {
  padding-top: 15px;
}

@media(min-width:768px){
  .group-header-content {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  /* Resetting padding for desktop */
  .header-link {
    padding-left: 0;
  }

  .group-navigation svg {
    padding-left: 0;
  }

  .group-header-content svg {
    padding-left: 0;
  }
  
}
</style>
