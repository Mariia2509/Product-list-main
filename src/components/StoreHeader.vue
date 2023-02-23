<template>
  <header
    class="fixed w-full top-0 p-4 grid grid-cols-3 items-baseline text-md xl:text-lg text-black"
    style="max-width: inherit; background: rgba(0, 0, 0, 0.1)"
  >
    <div v-if="$route.meta.title === 'Products'">Products</div>
    <div v-else-if="$route.meta.title === 'Cart'">Cart</div>
    <div v-else-if="$route.meta.title === 'Selected product'">Selected product</div>
    <div class="justify-self-end">
      Total: <span>$ {{ cartTotalCost }}</span>
    </div>

    <button :style="{ color: buttonColor[$route.path] }" class="justify-self-end">
      <router-link :to="{ name: 'cart' }"> Cart ({{ cartTotalProducts }}) </router-link>
    </button>
  </header>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from '@/stores/store';

export default {
  data() {
    return {
      buttonColor: {
        '/cart': 'grey',
      },
    };
  },
  computed: {
    ...mapState(useStore, {
      cartTotalCost: 'getCartTotalCost',
      cartTotalProducts: 'getCartTotalProducts',
    }),
  },
};
</script>

<style scoped></style>
