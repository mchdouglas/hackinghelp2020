import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/CadastroEmpresa.vue"),
  },
  {
    path: "/home",
    name: "Home",
    icon: "mdi-home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/chamada",
    name: "Video Conferência",
    icon: "mdi-message-video",
    component: () => import("@/views/VideoConferencia.vue"),
  },
  {
    path: "/agendarchamada",
    name: "Agendar Reunião Online",
    icon: "mdi-calendar",
    component: () => import("@/views/AgendarConferencia.vue"),
  },
  {
    path: "/perfil",
    name:"Perfil",
    icon: "mdi-account",
    component: () => import("@/views/PerfilEmpresa.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;