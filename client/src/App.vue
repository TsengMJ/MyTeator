<template>

  <v-app id="app">
    <TheHeader />
    <router-view/>
    <TheFooter />
  </v-app>

</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

a {
  text-decoration: none;
}

.title-all {
  text-align: center;
  margin-bottom: 40px;
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  h2 {
    letter-spacing: 6px;
    font-size: 22px;
    color: #16355e;
  }
  .color- {
    color: #f39800;
  }
}

.font-b {
  font-family: adobe bold;
}

.font-r {
  font-family: Myriad Roman;
}


// resat
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  padding: 80px 0;
}
.container-12 {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
}
.container-14 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.pd-80 {
  padding: 80px 0;
}
.slip-ber {
  width: 100%;
  height: 100%;
  background-color: #16355e;
  .ber {
    max-width: 800px;
    margin: 0 auto;
    background-color: #16355e;
    padding: 12px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 0%;
      transform: rotate(45deg);
      width: 50px;
      height: 50px;
      background-color: #16355e;
      z-index: -10;
    }
    .ber-text {
      font-size: 36px;
      color: #fff;
      z-index: 10;
    }
  }
}

.list-item {
  font-size: 22px;
  letter-spacing: 2px;
}
.grid {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.title-all {
  text-align: center;
  margin-bottom: 40px;
  color: black;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  h2 {
    letter-spacing: 6px;
    font-size: 22px;
    color: #16355e;
  }
  .color- {
    color: #f39800;
  }
}

/*fone*/
.h1-30 {
  font-size: 30px;
}
.h2-20 {
  font-size: 20px;
}

/*margin*/
.mg-top_bt-10 {
  margin: 10px 0;
}
.mg-b-20 {
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
