import { AddFunction, Seller, StringArray, StringDictionary } from "../src/interface"
import { Employee, Manager } from "../src/interfaceExtends"
import { Person } from "../src/interfaceInFunction"
import { Domain } from "../src/interfaceIntersection"

describe ('interface', function(){
    it ('should be interface running in typescript', function(){

        const seller : Seller ={
            id : '1', 
            name : ' toko agustina',
            nib : 1234444,
         
        }

        console.log(seller)
        seller.id = "2"
        // seller.nib = 90909 gabisa karena readonly 
    })


    it ('should be interface function', function(){
    
        const add : AddFunction =( value1 : number, value2: number ): number=>{
            return value1 + value2

        }

        expect(add(2,2)).toBe(4)

    })

    it ('should be interface string array', function(){
        const name : StringArray = ["budi", "tedjo", "melati"]

        expect(name[0]).toBe('budi')
        
    })


    it ('should be interface string object', function(){
        const dictionary :StringDictionary = {
            "name" : "aisyah",
            "address" : "indonesia"
        }

        expect(dictionary["name"]).toBe("aisyah")
    })

    it ('should be support extends interface', function(){
        const employee : Employee ={
            id : 1,
            name : "zahra",
            division :"developer"
        }

        const manager : Manager ={
            id : 1, 
            name : 'Aisyah', 
            division : 'developer',
            numberOfEmployee : 10
        }
        console.log(employee)
        console.log(manager);
        

        // expect(employee).toBe({id :1, name : 'zahra', division: "developer"})
        // expect(manager).toBe({id : 1, name : 'Aisyah', division : 'developer', numberOfEmployee : 10})
          expect(manager.name).toBe("Aisyah")
    })

    it ('should be support interface in function', function(){
        const person : Person ={
            name : "aisyah",
            sayHello : function (name : string) : string{
                return `hallo ${name}, my name is ${this.name}`
            }
        }

        console.log(person.sayHello('eko'));
        
    })

    it('should be suppport interface intersection', function(){

        const domain :Domain = {
            id : 1, 
            name :"abdul"
        }

        console.log(domain);
        
        
    })

})