export interface HasName {
    name : string

}

export interface HasId{
    id : number | string
}

export type Domain = HasName & HasId