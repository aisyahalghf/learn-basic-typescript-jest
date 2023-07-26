describe('Assertion', function () {
    it('should be support assertion', function () {
        const person = {
            name: 'aisyah',
            age: 30
        };
        const person2 = person;
        // console.log(person2.sayHello('budi')); ini akan error karena di persin tidak ada funstion sayHello, 
        console.log(person2.age);
    });
});
export {};
