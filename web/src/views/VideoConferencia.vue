<template>
<v-row>
  <v-card max-width="375">
    <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">Aline Moraes</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo" @click="chamadaPorVideo" >mdi-video</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Residencial</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Pessoal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
<v-divider/>
  <v-card max-width="375">
    <v-img src="https://avatars0.githubusercontent.com/u/42067419?s=460&u=a4833b5dd0f63825490467dcbf8dda910cf49cfa&v=4" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">Ali Conners</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo" @click="chamadaPorVideo" >mdi-video</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 9922-1234</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 3366-7777</v-list-item-title>
          <v-list-item-subtitle>Residencial</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>marlonr@marlon.com</v-list-item-title>
          <v-list-item-subtitle>Pessoal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>2000 Rua Principal</v-list-item-title>
          <v-list-item-subtitle>São Paulo</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>

  <v-divider/>
  <v-card max-width="375">
    <v-img src="https://avatars2.githubusercontent.com/u/43655755?s=460&u=db7c53faadbd9f613eefe6e383581e24b3add227&v=4" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">Michael Douglas</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo" @click="chamadaPorVideo" >mdi-video</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 9982-7632</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 3344-6789</v-list-item-title>
          <v-list-item-subtitle>Residencial</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>michaeldoug.mc@gmail.com</v-list-item-title>
          <v-list-item-subtitle>Pessoal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1100 Avenida</v-list-item-title>
          <v-list-item-subtitle>Barra do Bugres, MT</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>

<v-divider/>
  <v-card max-width="375">
    <v-img src="" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">Uanderson Coelho</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo" @click="chamadaPorVideo">mdi-video</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 9977-1604</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 3344-0078</v-list-item-title>
          <v-list-item-subtitle>Residencial</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>uanderson@slt.com</v-list-item-title>
          <v-list-item-subtitle>Pessoal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1600 Avenida Marechal</v-list-item-title>
          <v-list-item-subtitle>Cuiabá, MT</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</v-row>
</template>

<script>
export default {
    methods:{
        chamadaPorVideo() {
            confirm('chamando...')
        }
    }
}
</script>
