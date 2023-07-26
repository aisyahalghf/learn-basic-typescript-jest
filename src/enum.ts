export enum CustomerType  {
platinum = 'platinum', gold ='gold', silver ='silver'
}

export type Persons =  {
    id : string | number
    name : string
    type : CustomerType
}