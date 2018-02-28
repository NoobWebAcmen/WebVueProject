<template>
  <div>
    <Ueditor :value='ueditor.value' :config='ueditor.config' ref='ue'></Ueditor>
    <input type="button" value="点击有惊喜" @click="returnContent">
  </div>
</template>

<script>
import Ueditor from '../components/ue.vue'
export default {
  components: {Ueditor},
  data () {
    return {
      dat: {
        content: ''
      },
      ueditor: {
        value: '富文本编辑器',
        config: {}
      }
    }
  },
  method: {
    returnContent () {
      this.dat.content = this.$refs.ue.getUEContent()
      console.log(this.dat.content)
    }
  }
}
</script>
