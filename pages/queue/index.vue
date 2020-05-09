<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <event-form></event-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

  import EventForm from '@/components/widgets/form/EventForm';

  export default {
    components: {
      EventForm
    },
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>
