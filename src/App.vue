<template>
  <v-app id="inspire">
    

    <v-app-bar
        elevate-on-scroll
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Fröslunda Ekogård</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn> -->

        <v-img class="mr-3" src="./logga2.png" max-height="35"></v-img>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        app
        bottom
        temporary
     >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Fröslunda Ekogård
          </v-list-item-title>
          <v-list-item-subtitle>
            Fröslunda Ekogård drivs ekologiskt av Sune och Agneta Erlandsson.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.id"
          link
          :to="item.url"
        >
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Frölunda Ekogård</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-img class="mr-3" src="./logga2.png" max-height="35"></v-img>
    </v-app-bar> -->

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
          { id: 1, title: 'Hem', icon: 'mdi-home', url: '/' },
          { id: 2, title: 'Kontakt', icon: 'mdi-account-box', url: '/contact' },
          { id: 3, title: 'Om oss', icon: 'mdi-information', url: '/about' },
          { id: 4, title: 'Aktuellt', icon: 'mdi-bell-ring', url: '/events' },
          { id: 5, title: 'Hitta', icon: 'mdi-map-marker', url: '/map' },
          { id: 6, title: 'Handboll', icon: 'mdi-handball', url: '/handball' },
          { id: 7, title: 'Innebandy', icon: 'mdi-soccer', url: '/floorball' },
          { id: 9, title: 'Kalender', icon: 'mdi-calendar', url: '/calendar' },
          { id: 10, title: 'Medlemskap', icon: 'mdi-card-account-details', url: '/membership' },
          { id: 11, title: 'Styrelse', icon: 'mdi-account-group', url: '/board' },
          { id: 12, title: 'Sponsorer', icon: 'mdi-cash-100', url: '/sponsors' },
          { id: 13, title: 'Anläggningar', icon: 'mdi-stadium', url: '/facilities' },
          { id: 14, title: 'Medlemsavgifter', icon: 'mdi-wallet-membership', url: '/memberfees' },
        ],
      }),
  }
</script>
