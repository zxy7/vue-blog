<template>
    <div class="post-preview">
        <a>
            <h2 class="post-title">{{title}}</h2>
            <h3 class="post-subtitle">{{subtitle}}</h3>
            <div class="post-content-preview">{{preview}}</div>
        </a>
        <p class="post-meta">Posted by Zxy on {{meta}} </p>
    </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    title: {
      type: String,
      default: '124'
    },
    subtitle: {
      type: String,
      default: '124'
    },
    preview: {
      type: String,
      default: '124'
    },
    meta: {
      type: String,
      default: '124'
    }
  }
}
</script>
<style  lang="scss" scoped>
.post-preview{
    text-align: left;

    .post-title {
        font-size: 21px;
        line-height: 1.3;
        margin-top: 30px;
        margin-bottom: 8px;
    }

    .post-subtitle {
        font-size: 15px;
        line-height: 1.3;
        margin: 0 0 10px;
        font-weight: 300;
    }

    .post-content-preview {
        font-size: 13px;
        font-style: italic;
        color: #a3a3a3;
    }

    .post-meta {
        color: grey;
        font-size: 16px;
        margin-top: 0;
    }

}

</style>
