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
export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
  jobId: string;
  jobTitle: string;
}
export interface ICreateCandidateDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobId: string;
}
// "id": 1,
//     "firstName": "vinn",
//     "lastName": "shah",
//     "email": "shah@gmail.com",
//     "phone": "232323",
//     "coverLetter": "developer",
//     "resumeUrl": "e3e0d424-a63c-4b0a-81c3-16549385a124.pdf",
//     "jobId": 1,
//     "jobTitle": "Senior Developer"
