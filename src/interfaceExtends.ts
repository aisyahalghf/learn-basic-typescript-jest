export interface Employee {
    id : string | number
    name : string
    division : string
}

export interface Manager extends Employee{
    numberOfEmployee : number
}