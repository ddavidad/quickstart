import { PropertyType } from '../enums/propertytype'
import { AssetType } from '../enums/assettype'
import { OccupationType } from '../enums/occupationtype'
import { LoanPurposeType } from '../enums/loanpurposetype'

export interface LoanQuestionnaire {
    loanPurpose: LoanPurposeType;
    propertyType: PropertyType;
    proprtyPrice: number;
    assetType: AssetType;
    assetPrice: number;

    educationType: string;
    maritalStatus: string;
    numberOfChildrens: number;


    occupationType: OccupationType;

    //Emploeyee Fields
    employeeCompanyName: string;
    employeeBusinessIndustry: string;
    employeeBusinessRole: string;
    employeeWorkingStartDate: string;

    //Business Owner
    businessOwnerBusinessName: string;
    businessOwnerBusinessIndustry: string;
    businessOwnerBusinessEstablishmentDate: string;
    businessOwnerNumberOfWorkers: string;

    //Government Employee
    governmentInstitution: string;
    governmentEmployeeRole: string;
    governmentEmployeeWorkingStartDate: Date;

    //Financial Information
    bankAccountBalance: number;
    totalLiabilities: number;
    monthlyIncome: number;

    //Loan Information
    loanTerm: number;
    loanAmount: number;

    country: string;
    region: string;
    city: string;
    streetName: string;
    streetNumber: string;
    unit: number;
    postalCode: string;
}