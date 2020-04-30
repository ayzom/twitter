<template>
  <div class="container">
    <img class="logo" src="../assets/logo.png" alt="Nuxt Amplify Auth Starter">
    <div v-if="!signedIn">
      <amplify-authenticator />
    </div>
    <div v-else>
      <amplify-sign-out/>
    </div>
  </div>
</template>

<script>

import { AmplifyEventBus } from 'aws-amplify-vue'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const currentConfig = Auth.configure();
console.log(currentConfig);

import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      signedIn: false
    }
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        this.signedIn = true
        console.log(user)
      } catch(err) {
        this.signedIn = false
      }
    }
  },
  created() {
    this.findUser()

    AmplifyEventBus.$on('authState', info => {
      if(info === "signedIn") {
        this.findUser()
      } else {
        this.signedIn = false
      }
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  margin-bottom: 30px;
  max-width: 400px;
}
</style>
