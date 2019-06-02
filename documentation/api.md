### API Document

#### Note : Please run setup/setup.js
  ```  mongo rating_app ./setup/setup.js ```

####  Add Rating
  - URL : ```http://localhost:4000/api/rating```
  - METHOD : POST
  - Parameter :
  ```
      {
      	"orderId": "5cf2bb2ca29308e6a7d04de1",
      	"productId": "5cf3354b618f59d3bb6c63de",
      	"title": "Awesome",
      	"rating": 5,
      	"comment": "Very Comfort mattress.It's really Aweomse.",
      	"userId": "5cf2bb2ca29308e6a7d04de1"
      }
  ```
  - Response :
  ```
  {
    "status":true,
    "message":"Rating Added"
  }
  ```

####  Show Rating
  - productId : 5cf3354b618f59d3bb6c63de
  - URL : ``` http://localhost:4000/api/rating?productId=5cf3354b618f59d3bb6c63de ```
  - METHOD : GET
  - Response :
  ```
  {
  	"status": true,
  	"response": [{
  		"_id": "5cf3de5b780bd66261428d01",
  		"orderId": "5cf2bb2ca29308e6a7d04de1",
  		"productId": "5cf3354b618f59d3bb6c63de",
  		"title": "Awesome",
  		"rating": 5,
  		"comment": "Very Comfort mattress.It's really Aweomse.",
  		"userId": "5cf2bb2ca29308e6a7d04de1",
  		"createdDate": "2019-06-02T14:34:03.337Z",
  		"status": "NEW",
  		"rateFeatures": [],
  		"images": [],
  		"__v": 0,
  		"user": [{
  			"_id": "5cf2bb2ca29308e6a7d04de1",
  			"username": "gayatri@gmail.com",
  			"password": "welcome#2020",
  			"name": "gayatri",
  			"createdDate": "2019-06-01T17:51:40.661Z"
  		}]
  	}, {
  		"_id": "5cf3d9ab2d6a85b16017804e",
  		"orderId": "5cf2b9f3a29308e6a7d04ddf",
  		"productId": "5cf3354b618f59d3bb6c63de",
  		"title": "Very Good",
  		"rating": 4,
  		"comment": "I like the quality of the product.",
  		"userId": "5cf2b9f3a29308e6a7d04ddf",
  		"createdDate": "2019-06-02T14:14:03.031Z",
  		"status": "NEW",
  		"rateFeatures": [],
  		"images": [],
  		"__v": 0,
  		"user": [{
  			"_id": "5cf2b9f3a29308e6a7d04ddf",
  			"username": "sagar@gmail.com",
  			"password": "welcome",
  			"name": "sagar",
  			"createdDate": "2019-06-01T17:46:27.044Z"
  		}]
  	}, {
  		"_id": "5cf3d9351301eafc5f6582cd",
  		"orderId": "5cf2bafea29308e6a7d04de0",
  		"productId": "5cf3354b618f59d3bb6c63de",
  		"title": "Awesome",
  		"rating": 5,
  		"comment": "Its Super Comfort and Awesome. Really good mattress to use.",
  		"userId": "5cf2bafea29308e6a7d04de0",
  		"createdDate": "2019-06-02T14:12:05.985Z",
  		"status": "NEW",
  		"rateFeatures": [],
  		"images": [],
  		"__v": 0,
  		"updatedBy": "5cf2bafea29308e6a7d04de0",
  		"user": [{
  			"_id": "5cf2bafea29308e6a7d04de0",
  			"username": "prashant@gmail.com",
  			"password": "1993@july",
  			"name": "prashant",
  			"createdDate": "2019-06-01T17:50:54.907Z"
  		}]
  	}],
  	"count": 3,
  	"avgRating": 4
  }
  ```

####  Update Rating
  - ratingId : 5cf33838f8cab1ac428a1083
  - URL : ```http://localhost:4000/api/rating/5cf33838f8cab1ac428a1083```
  - METHOD : PUT
  - Parameter :
  ```
     {
     	"orderId": "5cf2bb2ca29308e6a7d04de1",
     	"productId": "5cf3354b618f59d3bb6c63de",
     	"title": "Awesome",
     	"rating": 4,
     	"comment": "Very Comfort mattress.It's really Aweomse.",
     	"userId": "5cf2bb2ca29308e6a7d04de1"
     }
  ```
  - Response :
  ```
  {
  	"status": true,
  	"message": "Updated Successfully"
  }
  ```

### Get Product
 - URL : ```http://localhost:4000/api/product/5cf3354b618f59d3bb6c63de```
 - Method : GET
 - Response :
 ```
 {
 	"status": true,
 	"response": {
 		"_id": "5cf3354b618f59d3bb6c63de",
 		"name": "Cooling Gel Memory Foam Queen Mattress 8\" White",
 		"brand": "Knitted Jacquard Cool Fabric",
 		"color": "White",
 		"dimensions": "60W * 8H * 80D",
 		"description": "Layers : Gel memory foam, comfort foam, and high-density base foam. Ideal for : This queen-size memory foam mattress is good ",
 		"verified": true,
 		"productType": "BED",
 		"mrp": 40000,
 		"quantityAvailable": 2500,
 		"productIcon": "https://product-assets.casaone.com/products/ZINB0040-1.jpg?d=660x445",
 		"createdDate": "2019-06-02T14:37:40.565Z",
 		"productVideos": [],
 		"productImage": ["https://product-assets.casaone.com/products/ZINB0040-1.jpg?d=660x445"],
 		"tags": ["BED"],
 		"status": "ACTIVE"
 	}
 }
 ```

