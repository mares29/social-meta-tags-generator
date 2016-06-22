<template>
  <div class="code">
    <a class="closeButton" @click="hide()"><i class="material-icons">close</i> close</a>

    <h2>{{ title }}</h2>

    <pre>
      <code class="html">
<span v-error="site.essential.title">&lt;meta property="og:title" content="{{ site.essential.title }}"&gt;</span>
<span v-error="site.essential.description">&lt;meta property="og:description" content="{{ site.essential.description }}"&gt;</span>
<span v-error="site.essential.image">&lt;meta property="og:image" content="{{ site.essential.image }}"&gt;</span>
<span v-error="site.essential.url">&lt;meta property="og:url" content="{{ site.essential.url }}"&gt;</span>
<span v-error="site.essential.twitter_card">&lt;meta name="twitter:card" content="{{ site.essential.twitter_card }}"&gt;</span>

<span>&lt;meta name="og:site_name" content="{{ site.recommended.name }}"&gt;</span>
<span>&lt;meta name="twitter:image:alt" content="{{ site.recommended.twitter_alt_text }}"&gt;</span>

<span>&lt;meta property="fb:app_id" content="{{ site.analytics.fcb_app_id }}"&gt;</span>
<span>&lt;meta name="twitter:site" content="{{ site.analytics.twitter_site }}"&gt;</span>
      </code>
    </pre>

  </div>
</template>

<style scoped>
  h2 {
    color: #A82560;
    font-weight: bolder;
  }
  .code {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 4rem;
  }
  pre {
    border: solid 1px #eee;
    font-size: 1.2rem;
    padding: 0 2rem;
  }
  .closeButton {
    position: absolute;
    top: 2rem;
    right: 4rem;
  }
  .error {
    background: #A82560;
    color: #fff;
  }
</style>

<script>
  export default{
    props: {
      site: {
        type: Object
      },
      title: {
        type: String
      }
    },
    methods: {
      hide () {
        this.$dispatch('hideCode')
      }
    }
  }
</script>
