<template>
  <main class="px-4 md:px-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5" v-if="!fetching">
      <store-item
        class="cards__card card card_active"
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @addCart="onStoreItemAdd"
        @removeCart="onStoreItemRemove"
      />
    </div>

    <div v-else class="mt-10 flex items-center justify-center space-x-2">
      <div class="w-24 h-24 rounded-full animate-spin border-2 border-solid border-gray-500 border-t-transparent"></div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useStore } from '@/stores/store';
import StoreItem from '@/components/StoreItem.vue';

export default {
  data() {
    return {
      card: null,
    };
  },

  components: { StoreItem },

  computed: {
    ...mapState(useStore, {
      cards: 'results',
      fetching: 'isFetching',
      cart: 'getCart',
    }),
  },
  methods: {
    ...mapActions(useStore, {
      addCartList: 'addCartList',
      fetchNewArrivals: 'fetchNewArrivals',
      removeCartList: 'removeCartList',
    }),

    onStoreItemAdd(data) {
      this.addCartList(data);
    },

    onStoreItemRemove(id) {
      this.removeCartList(id);
    },
  },
  created() {
    this.fetchNewArrivals();
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
