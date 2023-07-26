
import { CustomerType, Persons } from "../src/enum"

describe ('enum', function(){
    it ('should be enum', function(){
        const person : Persons ={
            id : 1,
            name : "jeffry",
            type : CustomerType.platinum
        }

        console.log(person)

    })
})