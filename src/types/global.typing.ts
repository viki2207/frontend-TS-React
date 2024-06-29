export interface ICompany
{
    id: String;
    name: string;
    size: string;
    createfAt: string;
}//create this interface means  we are enforcing we need this structureof company object

export interface ICreateCompanyDto{
    name: string;
    size: string;
}