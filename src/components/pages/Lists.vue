<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-md-12 display-1">Lists</h1>
    <v-card title="List Properties" class="col-md-12">

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
            <v-list>
              <v-list-item text="List Item 1"></v-list-item>
              <v-list-item text="List Item 2"></v-list-item>
              <v-list-item text="List Item 3"></v-list-item>
            </v-list>
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
          <v-list dense="true">
            <v-list-item text="List Item 1"></v-list-item>
            <v-list-item text="List Item 2"></v-list-item>
            <v-list-item text="List Item 3"></v-list-item>
          </v-list>
        </div>
      </div>

    </v-card>


    <v-card title="List Item Properties" class="col-md-12">

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
          <v-list>
            <v-list-item icon="person" text="List Item 1"></v-list-item>
            <v-list-item icon="person" text="List Item 2"></v-list-item>
            <v-list-item icon="person" text="List Item 3"></v-list-item>
          </v-list>
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
          <v-list>
            <v-list-item text="List Item 1" secondary-text="Secondary Text"></v-list-item>
            <v-list-item text="List Item 2" secondary-text="Secondary Text"></v-list-item>
            <v-list-item text="List Item 3" secondary-text="Secondary Text"></v-list-item>
          </v-list>
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
          <v-list>
            <v-list-item icon="person" text="List Item 1" :avatar="true"></v-list-item>
            <v-list-item icon="person" text="List Item 2" :avatar="true"></v-list-item>
            <v-list-item icon="person" text="List Item 3" :avatar="true"></v-list-item>
          </v-list>
        </div>
      </div>

    </v-card>
  </div>
</template>

<script>
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VIconButton from '../vex/IconButton.vue';
  import VList from '../vex/List.vue';
  import VListItem from '../vex/ListItem.vue';
  export default {
    components: {
      VCard,
      VList,
      VListItem
    },
    data () {
      return {
        listMarkup:
`<v-list>
  <v-list-item text="List Item 1"></v-list-item>
  <v-list-item text="LiList Item 2"></v-list-item>
  <v-list-item text="List Item 1"></v-list-item>
</v-list>`
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
