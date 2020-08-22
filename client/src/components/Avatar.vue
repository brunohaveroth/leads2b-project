<template>
  <img v-bind:src="image" alt="Avatar">
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    item: Object
  },

  computed: {
    image() {
      const item = this.item || {};
      const code = item.firstName + item.lastName + item.email;
      return `https://api.adorable.io/avatars/70/${code}.png`;
    }
  }
}
</script>
