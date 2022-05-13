import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  const image_url= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.files.bbci.co.uk%2F12A9B%2Fproduction%2F_111434467_gettyimages-1143489763.jpg&imgrefurl=https%3A%2F%2Fthepetproject.in%2Fcats%2Fcat-breeds-that-have-a-long-lifespan%2F1237%2F&tbnid=Um0YBjHrLfxXfM&vet=10CAsQxiAoAWoXChMI4Kuvi4Hd9wIVAAAAAB0AAAAAEAY..i&docid=Im9b3gy1vP7I-M&w=976&h=549&itg=1&q=cat%20images&ved=0CAsQxiAoAWoXChMI4Kuvi4Hd9wIVAAAAAB0AAAAAEAY"
  // Set the network port
  const port = process.env.PORT || 5000;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  app.get( "/filterimage", async ( req, res ) => {
    let {image_url} = req.query;
    
    if (!image_url){
      res.status(400).send('Error: No image url submitted')
    }
    else{
      await filterImageFromURL(image_url).then(function (image_filtered_path) {
        res.sendFile(image_filtered_path, () => {deleteLocalFiles([image_filtered_path])
        });
      }).catch(function (err){
        res.status(400).send("The requested image cannot be filtered");
      });
    }
  } );
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();