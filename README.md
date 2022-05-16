
# URL



http://segun-udagram-dev.us-east-1.elasticbeanstalk.com/

- Test Not ok (http status 400) http://segun-udagram-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg


   <img width="1080" alt="Screenshot 2022-05-16 at 12 07 20" src="https://user-images.githubusercontent.com/80678596/168570781-965c9785-73d0-422e-bc80-57d32dd4ff9a.png">

- Test OK (http status 200): http://segun-udagram-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://tinypng.com/images/social/website.jpg

   <img width="1193" alt="Screenshot 2022-05-16 at 12 18 09" src="https://user-images.githubusercontent.com/80678596/168572426-a6d263ab-5093-4186-a85d-2934ce643c74.png">

# Images of the elastic beanstalk deployement screensgoot

<img width="1440" alt="Screenshot 2022-05-16 at 12 05 26" src="https://user-images.githubusercontent.com/80678596/168570540-2ca47ef3-a4a2-4a9c-9ec1-854b8e2420d3.png">


<img width="1037" alt="Screenshot 2022-05-16 at 12 15 07" src="https://user-images.githubusercontent.com/80678596/168571303-814001eb-716e-4249-b2b0-2bee8d380bbe.png">




#  Udagram Image Filtering Microservice-on-AWS

This is a cloud-based application for uploading, listing, and filtering images. This Project uses a Node.js/Express, a popular JavaScript framework for networked application development to develop this application. A REST API to issue commands using HTTP, store data in Amazon Web Services (AWS) Relational Data Service (RDS) and S3, extend the codebase with secure authentication sign-on features, and deploy to AWS Elastic Beanstalk.


## Getting Started

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

1. The Simple Frontend

2. The RestAPI Backend

3. The Image Filtering Microservice


### Setup Node Environment

 1. Create a new node server. In thr terninal we do the following 

    - Initialize a new project: 
    
                                   npm i
                                 
    - Run the development server with 
      
                                 npm run dev


### Create a new endpoint in the server.ts file

Create an endpoint in ./src/server.ts which uses query parameter to download an image from a public URL, filter the image, and return the result.

Helper functions will be used to handle some of these concepts and we're importing it for you at the top of the ./src/server.ts file.

               `import {filterImageFromURL, deleteLocalFiles} from './util/util';`

### Deploying your system

We will deploy the application by followin the process below

                           `eb init`

                           `eb create`

                           `eb deploy `







 
