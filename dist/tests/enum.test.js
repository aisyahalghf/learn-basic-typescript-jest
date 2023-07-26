import { CustomerType } from "../src/enum";
describe('enum', function () {
    it('should be enum', function () {
        const person = {
            id: 1,
            name: "jeffry",
            type: CustomerType.platinum
        };
        console.log(person);
    });
});
