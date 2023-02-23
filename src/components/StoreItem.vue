<template>
  <div class="card flex flex-col justify-around p-4 text-gray-500">
    <div class="cursor-pointer">
      <div class="w-full h-48 max-h-48 p-4 mb-14 bg-white">
        <router-link :to="`/product/${card.id}`">
          <img class="w-full h-full object-contain" :src="card.image" :alt="card.title"
        /></router-link>
      </div>
      <div class="mb-1 text-lg font-bold text-black">{{ card.title }}</div>
      <div class="mb-4 text-md">
        {{ card.description.substring(0, 50) + ' ...' }}
      </div>
      <div class="mb-4 text-md font-bold text-gray-500">$ {{ card.price.toFixed(2) }}</div>
    </div>

    <div>
      <button
        v-if="quantity === 0"
        class="w-full py-2 px-4 text-black text-center bg-white border border-gray-400"
        @click="addCart"
      >
        Add
      </button>

      <div v-else class="grid grid-cols-2 gap-4 justify-between">
        <button class="py-2 px-4 text-black text-center bg-white border border-gray-400" @click="removeCart">
          Delete
        </button>

        <button class="py-2 px-4 text-black text-center bg-white border border-gray-400" @click="addCart">
          Add
          <span v-if="quantity > 0">
            {{ quantity }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from '@/stores/store';

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState(useStore, { getProductQuantityById: 'getProductQuantityById' }),
    quantity() {
      return this.getProductQuantityById(this.card.id);
    },
  },

  methods: {
    addCart() {
      this.$emit('addCart', this.card);
    },

    removeCart() {
      this.$emit('removeCart', this.card.id);
    },
  },
};
</script>

<style scoped></style>
