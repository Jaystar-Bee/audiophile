import { createStore } from "vuex";
import productModule from './products'

// function cartSum(number, quantity,)

export default createStore({
  state() {
    return {
      cart: {
        shippingCost: 1000,
        vatCost: 50,
        items: [
          {
            id: 1,
            new: true,
            section: "headphones",
            title: "XX99 Mark II Headphones",
            quantity: 1,
            img: "headphone-product-1",
            description:
              "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
            feature1: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening.It includes intuitive controls designed for any situation.Whether you’re taking a business call or just in your own personal space, the auto on/ off and pause features ensure that you’ll never miss a beat.",
            feature2: "The advanced Active Noise Cancellation with built -in equalizer allow you to experience your audio world on your terms.It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to.Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting- edge technology, and a modern design aesthetic.",
            priceInDollars: 2999,
            total: 2999,
            gallery: ['headphone-product-1-picture-1', "headphone-product-1-picture-2", "headphone-product-1-picture-3"],
            mayLike: [
              {
                id: 1,
                realLink: '/headphones/1',
                img: 'headphone-product-1',
                title: 'XX99 Mark II'
              },
              {
                id: 2,
                realLink: '/headphones/3',
                img: 'headphone-product-3',
                title: 'XX59'
              },
              {
                id: 3,
                realLink: '/speakers/1',
                img: 'speaker-product-1',
                title: 'ZX9 speaker'
              },
            ],
            inTheBox: [
              {
                id: 1,
                quantity: 1,
                name: 'Headphone Unit',
              },
              {
                id: 2,
                quantity: 2,
                name: 'Replacement Earcups',
              },
              {
                id: 3,
                quantity: 1,
                name: 'User Manual',
              },
              {
                id: 4,
                quantity: 1,
                name: '3.5mm 5m Audio Cable',
              },
              {
                id: 5,
                quantity: 1,
                name: 'Travel Bag',
              },

            ]
          }
        ],

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
    }
  },
  actions: {
    addNewItem(context, payload) {
      context.commit('addToCart', payload)
    },
    increaseProduct(context, payload) {
      context.commit('increment', payload)
    },
    decreaseProduct(context, payload) {
      context.commit('decrement', payload)
    },
    deleteProduct(context, payload) {
      context.commit('deleteItem', payload)
    },
    deleteCart(context) {
      context.commit("deleteCart")
    },

  },
  modules: {
    products: productModule
  },
});
