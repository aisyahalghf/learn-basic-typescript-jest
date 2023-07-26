import { Category, Product } from "../src/tipe-data-alias"

describe('Alias', function(){
    it ('should be support typescript', function(){
        const category : Category ={
            id : '1', 
            name : "handphone",
            description :'example'
        }

        let product : Product ={
            id : '1',
            name : "iphone 5",
            price : 1000000,
            category : category
        }

        product.id =0

        console.log(category);
        console.log(product);
        
        
    })
})