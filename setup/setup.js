db.users.insert([
 { "_id" : ObjectId("5cf2b9f3a29308e6a7d04ddf"), "username" : "sagar@gmail.com", "password" : "welcome", "name" : "sagar", "createdDate" : ISODate("2019-06-01T17:46:27.044Z") },
 { "_id" : ObjectId("5cf2bafea29308e6a7d04de0"), "username" : "prashant@gmail.com", "password" : "1993@july", "name" : "prashant", "createdDate" : ISODate("2019-06-01T17:50:54.907Z") },
 { "_id" : ObjectId("5cf2bb2ca29308e6a7d04de1"), "username" : "gayatri@gmail.com", "password" : "welcome#2020", "name" : "gayatri", "createdDate" : ISODate("2019-06-01T17:51:40.661Z") }
])

db.products.insert([{
    "_id" : ObjectId("5cf3354b618f59d3bb6c63dd"),
    name : "Skyline End Table Gray",
    brand : "Knotty Oak Veneer",
    color : "red",
    dimensions : "23.6W * 24H * 23.6D",
    description : "As handsome as it is versatile, this minimalist end table with its rustic, knotty oak finish is the perfect compliment to any decor. Its open design is nicely ",
    verified : true,
    status : "ACTIVE",
    tags  : ["TABLE"],
    productType : "TABLE",
    mrp : 5000,
    quantityAvailable:  2000,
    productIcon : 'https://product-assets.casaone.com/products/100779-1.jpg?d=660x445',
    productImage : 'https://product-assets.casaone.com/products/100779-1.jpg?d=660x445'
},
{
    "_id" : ObjectId("5cf3354b618f59d3bb6c63de"),
    name : "Cooling Gel Memory Foam Queen Mattress 8\" White",
    brand : "Knitted Jacquard Cool Fabric",
    color : "White",
    dimensions : "60W * 8H * 80D",
    description : "- Layers – Gel memory foam, comfort foam, and high-density base foam. - Ideal for – This queen-size memory foam mattress is good ",
     verified : true,
    status : "ACTIVE",
    tags  : ["BED"],
    productType : "BED",
    mrp : 40000,
    quantityAvailable:  2500,
    productIcon : 'https://product-assets.casaone.com/products/ZINB0040-1.jpg?d=660x445',
    productImage : 'https://product-assets.casaone.com/products/ZINB0040-1.jpg?d=660x445'
},
{
   "_id" : ObjectId("5cf3354b618f59d3bb6c63df"),
   name : "Wander Dining Chair Blue & Gray (Set of 2)",
   brand : "CASAONE",
   color : "Blue & Gray",
   dimensions :"24.4W * 30.7H * 23D",
   description :"Wander dining chair is petite Mid-Century Modern perfection, as the stunning upholstery",
    verified : true,
   status : "ACTIVE",
   tags  : ["CHAIR"],
   productType : "CHAIR",
   mrp : 20000,
   quantityAvailable:  500,
   productIcon : 'https://product-assets.casaone.com/products/100268-1.jpg?d=660x445',
   productImage : 'https://product-assets.casaone.com/products/100268-1.jpg?d=660x445'
},
{
    "_id" : ObjectId("5cf3354b618f59d3bb6c63e0"),
    name : "Holden 24\" Table Lamp",
    brand : "CASAONE",
    color : "Gray",
    dimensions :"14.5W * 23.5H * 10D",
    description :"Awesome",
    verified : true,
    status : "ACTIVE",
    tags  : ["LAMP","TABLE"],
    productType : "LAMP",
    mrp : 20000,
    quantityAvailable:  500,
    productIcon : 'https://product-assets.casaone.com/products/GPEB1007-1.jpg?d=660x445',
    productImage : 'https://product-assets.casaone.com/products/GPEB1007-1.jpg?d=660x445'
},
{
    "_id" : ObjectId("5cf3354b618f59d3bb6c63e1"),
    name : "Hutch Queen Storage Bed",
    brand : "",
    color : "grey",
    description : "Comfort, elegance & Storage",
    verified : true,
    status : "ACTIVE",
    tags  : ["BED"],
    productType : "BED",
    mrp : 10000,
    quantityAvailable:  1000,
    productIcon : 'https://p.rmjo.in/productSquare/wo0vkbzd-500x500.jpg',
    productImage : 'https://p.rmjo.in/productSquare/wo0vkbzd-500x500.jpg'
}])


db.orders.insert([{
    "_id" : ObjectId("5cf33708618f59d3bb6c63e2"),
    orderId : "CO_1010",
    userId : ObjectId("5cf2b9f3a29308e6a7d04ddf"),
    status : "NEW",
    items : [{
         productId: ObjectId("5cf3354b618f59d3bb6c63dd"),
         quantity : 2,
         unitPrice: 5000,
         totalPricePerItem: 10000
    }],
    paymentDetails:  {
        grandTotal : 10000
    }
},
{
    "_id" : ObjectId("5cf33708618f59d3bb6c63e3"),
    orderId : "CO_1020",
    userId : ObjectId("5cf2b9f3a29308e6a7d04ddf"),
    status : "NEW",
    items : [{
         productId: ObjectId("5cf3354b618f59d3bb6c63de"),
         quantity : 1,
         unitPrice: 40000,
         totalPricePerItem: 40000
    },{
       productId: ObjectId("5cf3354b618f59d3bb6c63e0"),
       quantity : 1,
       unitPrice: 20000,
       totalPricePerItem: 20000
   }],
    paymentDetails:  {
        grandTotal : 60000
    }
}])


