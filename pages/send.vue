<template>
  <div class="container">

     <div>
       Schedule Post
       <div>
         <form id="myform">
           <div>
             <label for="status"></label>
             <input type="text" name="Status" id="status" placeholder="Enter Status"/>
           </div>
           
           <div>
              <input type="datetime-local" name="Time" placeholder="Select DateTime"/>
           </div>

          <div>
              <button type="button" v-on:click="saveItem">Submit</button>
          </div>
           
         </form>
         
         <div>
           List of Scheduled Posts
           <div>
             <table>
               <th>
                 <td>Sr.No</td> <td>Date</td> <td>Status</td> <td>Post On</td> <td>Action</td>
               </th>
               
             </table>
           </div>
         </div>
         
         
         
       </div>
     </div>

  </div>
</template>


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

<script>
  

  
  
export default {
  data() {
    return {
      signedIn: false
    }
  },
  methods: {

      saveItem() {
        
        let d = document.querySelector("#myform");
        
        let myObj = {
          status: d.elements[0].value,
          dt: d.elements[1].value
        }

        // Load the AWS SDK for Node.js
        var AWS = require('aws-sdk');

        AWS.config = new AWS.Config();
        AWS.config.accessKeyId = "AKIAIGBEWKCCOIWIDQ3A";
        AWS.config.secretAccessKey = "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";
        AWS.config.region = "us-east-1";


        // Create S3 service object
        const s3 = new AWS.S3({apiVersion: '2006-03-01'});

        
         const params = {
          ACL: "authenticated-read", 
          Body: JSON.stringify(myObj), 
          Bucket: "tweetdisk", 
          Key: "file.json"
         };
        
        
         s3.putObject(params, function(err, data) {
           if(err) console.log(err, err.stack); // an error occurred
           else     console.log(data);           // successful response
           /*
           data = {
            ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
            VersionId: "Kirh.unyZwjQ69YxcQLA8z4F5j3kJJKr"
           }
           */
         });
        
        
      }

  },
  created() {

  }
}
</script>