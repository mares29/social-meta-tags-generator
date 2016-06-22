<template>
  <div id="app">

    <aside>
      <h1>Social Meta Tag Generator</h1>

      <hr>

      <h2>Templates for languages</h2>

      <ul>
        <li v-for="template in templates">
          <a @click="showTemplate(template.name)">{{template.name}}</a>
        </li>
      </ul>

      <hr>

      <h2>Validators</h2>

      <ul>
        <li v-if="site.essential"><a
          href="https://developers.facebook.com/tools/debug/og/object?q={{site.essential.url}}"
          target="_blank">facebook</a></li>
        <li v-if="!site.essential"><a href="https://developers.facebook.com/tools/debug/og/object?q=" target="_blank">facebook</a>
        </li>
        <li><a href="https://cards-dev.twitter.com/validator" target="_blank">twitter</a>
        </li>
      </ul>

    </aside>

    <main>
      <section style="position:relative;">

        <form-section></form-section>

        <code-section v-if="showCode" :title="title" :site="site"></code-section>

      </section>

      <footer>
        <p>This app is inspired by article <a href="https://css-tricks.com/essential-meta-tags-social-media/"
                                              target="_blank">The essential meta tags for social media</a>.</p>
      </footer>
    </main>
  </div>
</template>

<script>
  import Form from './components/Form.vue'
  import Code from './components/Code.vue'
  import templates from './templates'

  export default {
    components: {
      'form-section': Form,
      'code-section': Code
    },
    data () {
      return {
        title: '',
        site: {},
        templates: templates,
        showCode: false
      }
    },
    methods: {
      showTemplate (templateName) {
        this.site = templates[templateName].site
        this.title = templateName
        this.showCode = true
      }
    },
    events: {
      siteUpdated (site) {
        this.site = site
        this.title = site.essential.title
        this.showCode = true
      },
      hideCode () {
        this.showCode = false
      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: 'Source Code Pro', monospace;
  }

  a, a:visited {
    color: #A82560;
    cursor: pointer;
    i {
      vertical-align: middle;
    }
  }

  h1, h2, h3, p {
    color: #fff;
    font-weight: lighter;
    text-transform: uppercase;
  }

  #app {
    display: flex;
    min-height: 100vh;
    background: url(assets/bg.jpg);
    background-size: cover;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: linear-gradient(220deg, rgba(168, 37, 96, .98), rgba(51, 42, 96, .95));

    & > section {
      flex: 1;
      padding: 4rem;
    }

    footer {
      height: 30px;
      color: #fff;
      p {
        text-align: center;
        font-weight: lighter;
        font-size: .8rem;
        opacity: .75;
        a {
          color: #fff;
          text-decoration: underline;
          &:hover {
            color: #A82560;
          }
        }
      }
    }
  }

  aside {
    background: #251F46;
    width: 300px;
    padding: 4rem 2rem;

    hr {
      border-bottom: solid 1px #A82560;
      margin-bottom: 2rem;
    }

    h1 {
      color: #fff;
      font-weight: lighter;
    }

    h2 {
      font-size: 1rem;
    }

    ul {
      list-style: none;

      li {
        &:before {
          content: "-";
          color: #fff;
          padding-right: .5rem;
        }
      }
    }
  }

  .button {
    background: #A82560;
    color: #fff;
    font-weight: bolder;
    padding: 1rem;
    transition: background .2s;
    i {
      vertical-align: middle;
    }
    &:hover {
      background: #251F46;
      color: #fff;
      text-decoration: none;
    }
  }

</style>
