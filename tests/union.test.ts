describe ('union', function(){
    it ('should be union',function(){
        let sample : number | string | boolean = "Eko"
        console.log(sample)
        sample = 9
        console.log(sample);
        sample= true
        console.log(sample);
        // sample = []
        console.log(sample);
    })

    it ('should be support typescript', function(){
        function process(value : string | boolean | number){
            if (typeof value === "string"){
                return value.toUpperCase()
            }else if (typeof value === "number"){
                return value + 2
            }else {
                return !value
            }
        }

        expect(process("aisyah")).toBe("AISYAH")
        expect(process(100)).toBe(102)
        expect(process(false)).toBe(true)

    })


})