export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
} //create this interface means  we are enforcing we need this structureof company object

export interface ICreateCompanyDto {
  name: string;
  size: string;
}
export interface IJob {
  id: string;
  title: string;
  level: string;
  companyId: string;
  companyName: string;
  createdAt: string;
}
export interface ICreateJobDto {
  title: string;
  level: string;
  companyId: string;
}
