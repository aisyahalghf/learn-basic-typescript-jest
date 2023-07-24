import { sayHello } from "../src/say-hello"

describe ('sayHello', function(){
    it ('should return Hello aisyah', function(){
        expect(sayHello('aisyah')).toBe('Hello aisyah')
    })
})