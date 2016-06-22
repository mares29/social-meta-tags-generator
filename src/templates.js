export default {
  php: {
    name: 'php',
    site: {
      essential: {
        title: '<?php echo $meta["title"]; ?>',
        description: '<?php echo $meta["description"]; ?>',
        image: '<?php echo $meta["image"]; ?>',
        url: '<?php echo $meta["url"]; ?>',
        twitter_card: '<?php echo $meta["twitter_card"]; ?>'
      },
      recommended: {
        name: '<?php echo $meta["name"]; ?>',
        twitter_alt_text: '<?php echo $meta["twitter_alt_tex"]; ?>'
      },
      analytics: {
        fcb_app_id: '<?php echo $meta["fcb_app_id"]; ?>',
        twitter_site: '<?php echo $meta["twitter_site"]; ?>'
      }
    }
  },
  blade: {
    name: 'blade',
    site: {
      essential: {
        title: '{{ $meta["title"] }}',
        description: '{{ $meta["description"] }}',
        image: '{{ $meta["image"] }}',
        url: '{{ $meta["url"] }}',
        twitter_card: '{{ $meta["twitter_card"] }}'
      },
      recommended: {
        name: '{{ $meta["name"] }}',
        twitter_alt_text: '{{ $meta["twitter_alt_tex"] }}'
      },
      analytics: {
        fcb_app_id: '{{ $meta["fcb_app_id"] }}',
        twitter_site: '{{ $meta["twitter_site"] }}'
      }
    }
  },
  panini: {
    name: 'panini',
    site: {
      essential: {
        title: '{{title}}',
        description: '{{description}}',
        image: '{{image}}',
        url: '{{url}}',
        twitter_card: '{{twitter_card}}'
      },
      recommended: {
        name: '{{name}}',
        twitter_alt_text: '{{twitter_alt_tex}}'
      },
      analytics: {
        fcb_app_id: '{{fcb_app_id}}',
        twitter_site: '{{twitter_site}}'
      }
    }
  }
}
