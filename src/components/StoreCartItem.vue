<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0 mb-12">
    <div>
      <div class="w-full h-48 max-h-48 p-4 mb-14 bg-white">
        <router-link :to="`/product/${cart_item.id}`">
          <img class="w-full h-full object-contain" :src="cart_item.image" :alt="cart_item.title" />
        </router-link>
      </div>
      <div class="text-lg font-bold text-black">
        {{ cart_item.title }}
      </div>
      <div class="text-md">
        {{ cart_item.description.substring(0, 100) + ' ...' }}
      </div>
      <div class="text-md font-bold text-gray-500">$ {{ cart_item.price }}</div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
      <div>
        <div class="lg:text-xl">Qty: {{ cart_item.quantity }}</div>
        <div class="lg:text-xl">Результат: {{ cart_item.quantity * cart_item.price }}</div>
      </div>

      <div>
        <button
          class="w-20 mr-2 mb-8 py-2 px-4 text-black text-center justify-self-end bg-white border border-gray-400"
          @click="removeItem"
        >
          Delete
        </button>

        <button
          class="w-20 ml-2 py-2 px-4 text-black text-center justify-self-end bg-white border border-gray-400"
          @click="addItem"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'store-cart-item',
  props: {
    cart_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    removeItem() {
      this.$emit('remove');
    },
    addItem() {
      this.$emit('add');
    },
  },
};
</script>

<style scoped></style>
