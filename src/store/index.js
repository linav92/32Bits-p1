import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Pokemon Diamante Brillante",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: "true"
      },

      {
        codigo: "0002",
        nombre: "Celeste",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: "false"
      },

      {
        codigo: "0003",
        nombre: "Hollow Knight",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: "true"
      },

      {
        codigo: "0004",
        nombre: "Stardew Valley",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: "false"
      },

      {
        codigo: "0005",
        nombre: "Mario Party Super Stars",
        stock: 100,
        precio: "10000",
        color: "green",
        destacado: "false"
      },

      {
        codigo: "0006",
        nombre: "Sea of Stars",
        stock: 100,
        precio: 20000,
        color: "blue",
        destacado: "true"
      }
    ]
  },
  getters: {
    juegosTotal(state) {
      return state.juegos.length;
    },
    stockTotal(state) {
      let total = 0;
      state.juegos.forEach(function (game) {
        total += game.stock;
      });
      return total;
    },
    filtrarJuegos: (state) => (id) => {
      return state.juegos.filter((juego) => juego.codigo === id);
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store;