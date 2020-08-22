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
      const code = this.item ? this.item.firstName + this.item.lastName : 'default';
      return `https://api.adorable.io/avatars/285/${code}.png`;
    }
  }
}
</script>
