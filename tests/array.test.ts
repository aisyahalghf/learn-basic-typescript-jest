describe ('array', function(){
it ('should be declare', function(){
    const name :string[] = ["qorin", 'abdul', 'luthfi']
    const age : number[] = [1,2,3,4,5,6,7]
    const student: boolean[] = [true, true]

    name[1]= "jaka"
    console.log(name);
    // console.log(age);
    // console.log(student);
 

})
it ('should be readOnlyArray', function(){
    const hobbies : ReadonlyArray<string> = ["membaca", "menulis"]
    // hobbies[0] = "melihat"
    console.log(hobbies)
    
})

it ('should support tupple', function(){
    const person :readonly[string,string, number] = ["jaka", "budi", 89]   

})
})