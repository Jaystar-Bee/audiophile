import { createStore } from "vuex";
import productModule from './products'

// function cartSum(number, quantity,)

export default createStore({
  state() {
    return {
      cart: {
        shippingCost: 1000,
        vatCost: 50,
        items: [],

      }
    }
  },
  getters: {
    cart(state) {
      return state.cart.items
    },
    total(state) {
      // return state.total
      const totals = state.cart.items.map(item => item.total)
      // console.log(totals)
      return totals.reduce((acc, val) => (acc += val), 0);
    },
    vatCost(state) {
      return state.cart.vatCost
    },
    shippingCost(state) {
      return state.cart.shippingCost
    },
    grandTotal(state, getters) {
      return getters.total + getters.vatCost + getters.shippingCost
    }
  },
  mutations: {
    addToCart(state, payload) {
      console.log(payload)
      const itemIndex = state.cart.items.findIndex(cart => cart.title === payload.title)
      if (itemIndex >= 0) {
        state.cart.items[itemIndex].quantity += payload.quantity
        const totalPrice = state.cart.items[itemIndex].priceInDollars * payload.quantity
        state.cart.items[itemIndex].total = totalPrice
        console.log(state.cart.items)
        return
      }

      state.cart.items.unshift(payload)
      console.log(state.cart.items)
    },
    increment(state, payload) {
      const itemIndex = state.cart.items.findIndex(cart => cart.title === payload.title)
      state.cart.items[itemIndex].quantity++
      state.cart.items[itemIndex].total += state.cart.items[itemIndex].priceInDollars
    },
    decrement(state, payload) {
      const itemIndex = state.cart.items.findIndex(cart => cart.title === payload.title)
      state.cart.items[itemIndex].quantity--
      state.cart.items[itemIndex].total -= state.cart.items[itemIndex].priceInDollars

    },
    deleteItem(state, payload) {
      const itemIndex = state.cart.items.findIndex(cart => cart.title === payload.title)
      state.cart.items.splice(itemIndex, 1)
    },
    deleteCart(state) {
      state.cart.items = []
    },
    setCart(state, payload) {
      state.cart.items = payload
    }
  },
  actions: {
    addNewItem(context, payload) {
      context.commit('addToCart', payload)
      context.dispatch("addToLocal")
    },
    increaseProduct(context, payload) {
      context.commit('increment', payload)
      context.dispatch("addToLocal")
    },
    decreaseProduct(context, payload) {
      context.commit('decrement', payload)
      context.dispatch("addToLocal")
    },
    deleteProduct(context, payload) {
      context.commit('deleteItem', payload)
      context.dispatch("addToLocal")
    },
    deleteCart(context) {
      context.commit("deleteCart")
      context.dispatch("addToLocal")
    },
    addToLocal(context) {
      const cart = JSON.stringify(context.getters.cart);
      localStorage.setItem("cart", cart)

    },
    getFromLocal(context) {
      const cart = localStorage.getItem("cart")
      if (!cart) return;
      context.commit("setCart", JSON.parse(cart))
    }

  },
  modules: {
    products: productModule
  },
});
