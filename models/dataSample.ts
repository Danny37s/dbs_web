import { E_sort } from "./filterDataInput"

export interface I_DataSample{
    id:string,
    name_data:string
}

export interface I_PayloadDataSample{
    url:string,
    search:string,
    sort:E_sort
}