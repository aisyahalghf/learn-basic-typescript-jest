import { Person } from "../src/interfaceInFunction"

describe('Assertion',function(){
    it ('should be support assertion', function(){
        const person : any = {
            name : 'aisyah',
            age : 30
        }

        const person2: Person = person as Person
        // console.log(person2.sayHello('budi')); ini akan error karena di persin tidak ada funstion sayHello, 
       // console.log(person2.age); ini juga akan error karena di interface Person tidak ada attribut age 
       // jadi harus hati hati jika ingin melakukan konversi 
        

        
    })
})