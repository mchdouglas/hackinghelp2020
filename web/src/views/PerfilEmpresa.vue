<template>
<v-col>
  <v-card
    class="mx-auto"
    max-width="800"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">Solumais</v-list-item-title>
              <v-list-item-subtitle>Empresa de desenvolvimento de soluções</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-toolbar
      color="purple"
      dark
    >

      <v-toolbar-title>Configurações</v-toolbar-title>

      <v-spacer></v-spacer>

     
    </v-toolbar>

    <v-list
      subheader
      three-line
    >
      <v-subheader>Controles do usuário</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Filtragem de conteúdo</v-list-item-title>
          <v-list-item-subtitle>Defina o nível de filtragem de conteúdo para restringir os aplicativos que podem ser baixados</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Senha</v-list-item-title>
          <v-list-item-subtitle>Exija senha para compra ou use a senha para restringir a compra</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>Geral</v-subheader>

      <v-list-item-group
        v-model="Configurações"
        multiple
        active-class=""
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notificações</v-list-item-title>
              <v-list-item-subtitle>Notifique-me sobre atualizações do aplicativo</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Som</v-list-item-title>
              <v-list-item-subtitle>Atualize automaticamente os aplicativos a qualquer momento. Podem ser aplicadas taxas de dados</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Adicionar widgets automaticamente</v-list-item-title>
              <v-list-item-subtitle>Adicionar automaticamente widgets da tela inicial quando os downloads forem concluídos</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</v-col>
</template>