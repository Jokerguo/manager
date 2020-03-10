<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source="tag"/>
  </Layout>
</template>

<script>
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
    data(){
      return{
        tag : ['衣','食','住','行']
      }
    }

  };
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
