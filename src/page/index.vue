<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="(i,index) in list" :key="index">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
          {{i.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
