<template>
  <div class="form">
    <section>
      <h2>Essential META Tags</h2>

      <div class="input-wrapper">
        <label for="inp-title">Site Title</label>
        <input type="text" id="inp-title" v-model="site.essential.title">
      </div>
      <div class="input-wrapper">
        <label for="inp-description">Site Description</label>
        <input type="text" id="inp-description" v-model="site.essential.description">
      </div>
      <div class="input-wrapper">
        <label for="inp-image">Site Image URL</label>
        <input type="text" id="inp-image" v-model="site.essential.image">
      </div>
      <div class="input-wrapper">
        <label for="inp-url">Site Url</label>
        <input type="text" id="inp-url" v-model="site.essential.url">
      </div>
      <div class="input-wrapper">
        <label for="inp-twitter_card">Site Twitter Card</label>
        <input type="text" id="inp-twitter_card" v-model="site.essential.twitter_card">
      </div>
    </section>

    <section>
      <h2>Non-Essential, But Recommended</h2>

      <div class="input-wrapper">
        <label for="inp-name">Site Name</label>
        <input type="text" id="inp-name" v-model="site.recommended.name">
      </div>
      <div class="input-wrapper">
        <label for="inp-alt_text">Alt text for Image</label>
        <input type="text" id="inp-alt_text" v-model="site.recommended.twitter_alt_text">
      </div>
    </section>

    <section>
      <h2>Non-Essential, But Required for Analytics</h2>

      <div class="input-wrapper">
        <label for="inp-fb_id">fb app:id</label>
        <input type="text" id="inp-fb_id" v-model="site.analytics.fcb_app_id">
      </div>
      <div class="input-wrapper">
        <label for="inp-tw_site">Twitter Site</label>
        <input type="text" id="inp-tw_site" v-model="site.analytics.twitter_site">
      </div>
    </section>

    <section>
      <a class="button" @click="save()"><i class="material-icons">code</i> show me the code</a>
    </section>

  </div>
</template>
<style lang="scss" scoped>
  .form {
    & > section {
      margin-bottom: 3rem;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  label {
    color: #fff;
    display: inline-block;
    margin-right: 2rem;
    margin-bottom: 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    border-bottom: dashed 1px #fff;
    padding: .6rem;
    outline: none;
    color: #fff;
    &:focus {
      border-color: #BF2A6D;
    }
  }
</style>
<script>
  export default{
    data () {
      return {
        site: {
          essential: {
            title: '',
            description: '',
            image: '',
            url: '',
            twitter_card: ''
          },
          recommended: {
            name: '',
            twitter_alt_text: ''
          },
          analytics: {
            fcb_app_id: '',
            twitter_site: ''
          }
        }
      }
    },
    methods: {
      save () {
        let site = this.site
        this.$dispatch('siteUpdated', site)
      }
    }
  }
</script>
