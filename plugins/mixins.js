import Vue from 'vue';
import { mapGetters } from 'vuex';

const mixins = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        demo() {
          return this.$store.state.demo;
        },
        state() {
          return this.$store.state
        },
       
        ...mapGetters({

        })
      },
      methods: {
       
      },
    })
  }
};

Vue.use(mixins);
