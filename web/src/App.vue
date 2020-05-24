 
<template>
  <v-app id="app">
    <v-navigation-drawer
      :dark="true"
      :touchless="true"
      color="#333"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list
        dense
        flat
      >
        <v-list-item
          v-for="item in $router.options.routes"
          :key="item.text"
          :to="item.path"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="purple "
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Jobs Opportunities</span>
      </v-toolbar-title>
      <v-spacer />
      
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      logado: true
    };
  },
};
</script>

<style scoped>
#app {
  background-color: rgb(223, 223, 223);
}
#image{
  border-radius: 50%;
  width: 70px;
  padding: 10px;
}
</style>