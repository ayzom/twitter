<template>
  <div class="container">

  </div>
</template>

<script>

// const Twit = require('twit')

import Twitter from 'twitter-lite';

const client = new Twitter({
  consumer_key:         '10J4YciYNsuDXm5ru981rl3ct',
  consumer_secret:      '63X9MCoG0uulsAfXUWsxigeTCGo5IKsBu3OzYFNQD4wpkvvkXg',
  access_token:         '111849491-bTOTXWKjilZ9CEM4zU5lgu66Lo2kYf9jWqrf4UPO',
  access_token_secret:  '1YiGXwtnAzzcRVrbcRnaJCiVtc1sKuEGPPB33KQQeLGAb'
})

//
//  tweet 'hello world!'
//



export default {
  data() {
    return {
      signedIn: false
    }
  },
  methods: {

    sendMessage() {
        
        
        this.client
          .get("account/verify_credentials")
          .then(results => {
            console.log("results", results);
          })
          .catch(console.error);
        
            // this.T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
            //   console.log(data);
            //   alert(data);
            // })
    }

  },
  created() {
      
      this.sendMessage();

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
