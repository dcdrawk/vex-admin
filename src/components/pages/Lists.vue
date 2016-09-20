<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-md-12 display-1">Lists</h1>
    <Card title="List Properties" class="col-md-12">

      <!--List Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="selector">
            <span>
              {{ listMarkup }}
            </span>
          </div>
        </div>
        <div class="col-md-8">
            <list>
              <list-item text="List Item 1"></list-item>
              <list-item text="List Item 2"></list-item>
              <list-item text="List Item 3"></list-item>
            </list>
        </div>
      </div>

      <!--List Properties-->
      <div class="row headings">
        <div class="col-md-4"><strong>Property</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <!--Dense List-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:dense="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <list dense="true">
            <list-item text="List Item 1"></list-item>
            <list-item text="List Item 2"></list-item>
            <list-item text="List Item 3"></list-item>
          </list>
        </div>
      </div>

    </Card>


    <Card title="List Item Properties" class="col-md-12">

      <!--List Properties-->
      <div class="row headings">
        <div class="col-md-4"><strong>Property</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <!--Icon List-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">icon="icon_name"</span>
          </div>
        </div>
        <div class="col-md-8">
          <list>
            <list-item icon="person" text="List Item 1"></list-item>
            <list-item icon="person" text="List Item 2"></list-item>
            <list-item icon="person" text="List Item 3"></list-item>
          </list>
        </div>
      </div>

      <!--Secondary Text List-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">secondary-text="Secondary Text"</span>
          </div>
        </div>
        <div class="col-md-8">
          <list>
            <list-item text="List Item 1" secondary-text="Secondary Text"></list-item>
            <list-item text="List Item 2" secondary-text="Secondary Text"></list-item>
            <list-item text="List Item 3" secondary-text="Secondary Text"></list-item>
          </list>
        </div>
      </div>

      <!--Avatar-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">avatar="avatarUrl"</span>
          </div>
        </div>
        <div class="col-md-8">
          <list>
            <list-item icon="person" text="List Item 1" :avatar="true"></list-item>
            <list-item icon="person" text="List Item 2" :avatar="true"></list-item>
            <list-item icon="person" text="List Item 3" :avatar="true"></list-item>
          </list>
        </div>
      </div>

    </Card>
  </div>
</template>

<script>
  import Card from '../vex/Card.vue';
  import Button from '../vex/Button.vue';
  import IconButton from '../vex/IconButton.vue';
  import List from '../vex/List.vue';
  import ListItem from '../vex/ListItem.vue';
  export default {
    components: {
      Card,
      List,
      ListItem
    },
    data () {
      return {
        listMarkup:
`<list>
  <list-item text="List Item 1"></list-item>
  <list-item text="LiList Item 2"></list-item>
  <list-item text="List Item 1"></list-item>
</list>`
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
