export interface Seller {
    id: string 
    name : string
    readonly npwp? : number
    readonly nib : number
}

export interface AddFunction {
    (value1 : number, value2 : number) : number
}

export interface StringArray {
    [key :number] :string
}

export interface StringDictionary {
    [key : string] : string
}


