<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="700">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Cadastrar Empresa</v-btn>
      </template>
      <v-card>
        <v-card-title>Informações da Empresa</v-card-title>
        <v-divider></v-divider>
        <v-card-text  style="height: 600px;">
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="20"
              label="Nome da Empresa"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="Telefone Empresarial"
              required
              type="telephone"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-select
              v-model="select"
              :items="items"
              :error-messages="selectErrors"
              label="Segmento"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>

          </form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
          <v-btn color="blue darken-1" text @click="navegarParaHome"  >Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false,
      items: [
        'Alimentação',
        'Bebidas',
        'Bancário',
        'Vestuário',
        'Tecnologia',
        'Saúde',
        'Outro'
      ],
    };
    
  },
  methods:{
      navegarParaHome() {
         window.location.href = "http://localhost:8080/home"; 
      }
  }
};
</script>