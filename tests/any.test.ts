describe ('Any', function(){
    it ('should be support typescript',function(){
        const person : any = {
            id : 1,
            name : "aisyah",
            age : 28
        }

        person.address = "Indonesia"
        console.log(person);
        
    })
})