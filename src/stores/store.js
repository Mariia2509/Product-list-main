import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from 'axios';

export const useStore = defineStore('use-store', {
    state: () => {
        return {
            cards: [],
            openedProduct: null,
            fetching: false,
            cart: useStorage('cart', []),
            // cart: [],
        };
    },
    getters: {
        results(state) {
            return state.cards;
        },
        isFetching(state) {
            return state.fetching;
        },

        getCart(state) {
            return state.cart;
        },

        getCartTotalCost(state) {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
        },

        getCartTotalProducts(state) {
            return state.cart.reduce((total, item) => total + item.quantity, 0);
        },

        getProductQuantityById(state) {
            return (id) => {
                const item = state.cart.find((item) => item.id === id);
                if (item === undefined) {
                    return 0;
                }

                return item.quantity;
            };
        },
    },

    actions: {
        async fetchNewArrivals() {
            try {
                this.fetching = true;
                const response = await axios.get('https://fakestoreapi.com/products');
                this.cards = response.data;
            } catch (error) {
                this.cards = [];
                alert('Ошибка!');
            } finally {
                this.fetching = false;
            }
        },

        async fetchProductById(id) {
            this.openedProduct = null;

            try {
                this.openedProduct = await axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => data);
            } catch (error) {
                this.openedProduct = null;
                alert('Ошибка!');
            }
        },

        addCartList(card) {
            let item = this.cart.find((i) => i.id === card.id);

            if (item) {
                item.quantity++;
            } else {
                this.cart.push({...card, quantity: 1 });
            }
        },

        removeCartList(id) {
            const index = this.cart.findIndex((card) => card.id === id);

            if (index === -1) {
                return;
            }

            this.removeCartItem(index);
        },

        addCartItem(index) {
            this.cart[index].quantity++;
        },

        removeCartItem(index) {
            if (this.cart[index].quantity >= 2) {
                this.cart[index].quantity--;
            } else {
                this.cart.splice(index, 1);
            }
        },
    },
});