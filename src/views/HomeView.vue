<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
          <p class="title mb-6">Bienvenido a Alley Videojuegos</p>
          <div class="banner">
            <div class="banner-track">
              <div class="slide">
                <img src="../assets/1.png" alt="">
              </div>
              <div class="slide">
                <img src="../assets/2.png" alt="">
              </div>
              <div class="slide">
                <img src="../assets/3.png" alt="">
              </div>
              <div class="slide">
                <img src="../assets/4.png" alt="">
              </div>
            </div>
          </div>
        </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered title">Nuevos productos</h2>
      </div>

      <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox'
export default {
  name: 'Home',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProducts()
    document.title = 'Alley Videojuegos'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)
      await axios
        .get('/api/v1/latest-products')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>