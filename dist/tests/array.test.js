"use strict";
describe('array', function () {
    it('should be declare', function () {
        const name = ["qorin", 'abdul', 'luthfi'];
        const age = [1, 2, 3, 4, 5, 6, 7];
        const student = [true, true];
        name[1] = "jaka";
        console.log(name);
        // console.log(age);
        // console.log(student);
    });
    it('should be readOnlyArray', function () {
        const hobbies = ["membaca", "menulis"];
        // hobbies[0] = "melihat"
        console.log(hobbies);
    });
    it('should support tupple', function () {
        const person = ["jaka", "budi", 89];
    });
});
