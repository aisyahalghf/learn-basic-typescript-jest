describe('Optional', function(){
    it ('should be support undefined and null', function(){
        function sayHello(name? : string | null){
            if (name){
                console.log( 'hello' +" "+ name);
                
            }else {
                console.log('hello');
                
            }
        }

        sayHello('badru')
        sayHello(undefined)
        sayHello(null)
    })
})