<template>
  <div class="p-4">
    <back-button />

    <div class="text-center" v-show="!cart.length">
      <p class="mb-4 text-2xl font-bold">CART IS EMPTY!</p>
      <div class="mx-auto py-2 px-4 text-xl text-black cursor-pointer underline" @click="$router.push('/')">
        Continue shopping
      </div>
    </div>

    <div v-show="cart.length">
      <store-cart-item
        v-for="(item, index) in cart"
        :item="item"
        :key="item.id"
        :cart_item="item"
        @add="onStoreCartItemAdd(index)"
        @remove="onStoreCartItemRemove(index)"
      />
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/UI/BackButton.vue';
import { mapActions, mapState } from 'pinia';
import { useStore } from '@/stores/store';
import StoreCartItem from '@/components/StoreCartItem.vue';

export default {
  name: 'cart',
  components: { StoreCartItem, BackButton },

  computed: { ...mapState(useStore, ['cart']) },
  methods: {
    ...mapActions(useStore, ['removeCartItem', 'addCartItem']),

    onStoreCartItemAdd(index) {
      this.addCartItem(index);
    },
    onStoreCartItemRemove(index) {
      this.removeCartItem(index);
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
