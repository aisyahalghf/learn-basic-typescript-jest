"use strict";
describe('Object', function () {
    it('should be support in typescript', function () {
        const person = {
            id: "1", name: "aisyah"
        };
        console.log(person);
        person.id = 9;
        person.name = "rahayu";
        console.log(person);
    });
});
