<template>
  <div class="container">
      <header>
        <!-- Grouped <header> in two sections,
            logo + h1 and icons + hamburger -->

        <!-- Group 1 -->
        <div class="group-header-content">
          <logo />
          <h1 class="header-h1">
            Editors
          </h1>
        </div>

        <!-- Group 2 -->
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
/* Header layout styles */
header {
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
}

/* Define main container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  color: #FDC760;
}

/* <h1> styles */
.header-h1 {
  color: #FDC760;
  font-size: 18px;
  font-weight: normal;
  padding-left: 10px;
}

/* Layout group navigation to be flex. */
.group-navigation {
  display: flex;
}

/* Adding Padding to elements to space accordingly. */
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
  /* Define desktop header content spacing */
  .group-header-content {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  /* Removing padding for desktop */
  .header-h1 {
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
