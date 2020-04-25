// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
let s3 = new AWS.S3({apiVersion: '2006-03-01'});







function getBucketList() {
  
  return s3.listBuckets(function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Buckets);
        }
      });
}

function deleteItem() {
  
  let rmitem = [
        {
       Key: "objectkey1"
      }, 
        {
       Key: "objectkey2"
      }
     ];
  
   var params = {
    Bucket: "examplebucket", 
    Delete: {
     Objects: rmitem, 
     Quiet: false
    }
   };
   
   s3.deleteObjects(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     /*
     data = {
      Deleted: [
         {
        DeleteMarker: true, 
        DeleteMarkerVersionId: "A._w1z6EFiCF5uhtQMDal9JDkID9tQ7F", 
        Key: "objectkey1"
       }, 
         {
        DeleteMarker: true, 
        DeleteMarkerVersionId: "iOd_ORxhkKe_e8G8_oSGxt2PjsCZKlkt", 
        Key: "objectkey2"
       }
      ]
     }
     */
   });
   
}

function getObject() {
  
  
/* The following example retrieves an object for an S3 bucket. */

 var params = {
  Bucket: "examplebucket", 
  Key: "HappyFace.jpg"
 };
 s3.getObject(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    AcceptRanges: "bytes", 
    ContentLength: 3191, 
    ContentType: "image/jpeg", 
    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
    LastModified: <Date Representation>, 
    Metadata: {
    }, 
    TagCount: 2, 
    VersionId: "null"
   }
   */
 });
  
}

function putObject() {
  
  
  /* The following example uploads and object. The request specifies optional canned ACL (access control list) to all READ access to authenticated users. If the bucket is versioning enabled, S3 returns version ID in response. */
  
   var params = {
    ACL: "authenticated-read", 
    Body: '', 
    Bucket: "examplebucket", 
    Key: "exampleobject"
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

function getObjects() {
  
  /* The following example list two objects in a bucket. */

 var params = {
  Bucket: "examplebucket", 
  MaxKeys: 2
 };
 s3.listObjects(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Contents: [
       {
      ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"", 
      Key: "example1.jpg", 
      LastModified: <Date Representation>, 
      Owner: {
       DisplayName: "myname", 
       ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      }, 
      Size: 11, 
      StorageClass: "STANDARD"
     }, 
       {
      ETag: "\"9c8af9a76df052144598c115ef33e511\"", 
      Key: "example2.jpg", 
      LastModified: <Date Representation>, 
      Owner: {
       DisplayName: "myname", 
       ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      }, 
      Size: 713193, 
      StorageClass: "STANDARD"
     }
    ], 
    NextMarker: "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAyfQ=="
   }
   */
 });
  
}