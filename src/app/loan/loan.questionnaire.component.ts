import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';

import { AssetType } from '../shared/enums/assettype'
import { OccupationType } from '../shared/enums/occupationtype'
import { PropertyType } from '../shared/enums/propertytype'
import { LoanPurposeType } from '../shared/enums/loanpurposetype'
import { LoanQuestionnaire } from '../shared/model/loanquestionnaire'


@Component({
    templateUrl: 'app/loan/loan.questionnaire.component.html',
    styleUrls: ['app/shared/styles/dropdown.css']
})
export class LoanQuestionnaireComponent implements OnInit {

    private maxValue: number = 100;
    private minValue: number = 10;

    public pageName: string = 'Loan Questionnaire';
    public loanQuestionnaireFrom: FormGroup;
    

    constructor(private formBuilder: FormBuilder) {
    }

    ///Method contain logic for bulding the Questionnaire form
    private buildForm(): void {
        this.loanQuestionnaireFrom = this.formBuilder.group(
            {
            loanPurpose: [1, [Validators.required] ],
            propertyType: [1, [Validators.required] ],
            propertyPrice: [0, [this.propertyPriceValidator]],
            assetType: '',
            assetPrice: '',
            country: '',
            city: '',
            streetName: '',
            streetNumber: '',

            //General Applicant Information
            educationType: '',
            maritalStatus: '',
            numberOfChildrens: '',

            occupationType: OccupationType.Employee,

            //Emploeyee Fields
            employeeEducationType: '',
            employeeCompanyName: '',
            employeeBusinessIndustry: '',
            employeeBusinessRole: '',
            employeeWorkingStartDate: '',

            //Business Owner
            businessOwnerBusinessName: '',
            businessOwnerBusinessIndustry: '',
            businessOwnerBusinessEstablishmentDate: '',
            businessOwnerNumberOfWorkers: '',

            //Government Employee
            governmentInstitution: '',
            governmentEmployeeRole: '',
            governmentEmployeeWorkingStartDate: '',

            //Financial Information
            bankAccountBalance: '',
            totalLiabilities: '',
            monthlyIncome: '',

            //Loan Information
            loanTerm: '',
            loanAmount: [50, [this.boundaryValidator(this.minValue,this.maxValue)]],

        });
    }

    ///Simple custom property value validator
    private propertyPriceValidator(control: AbstractControl): any{
        let controlValue = control.value;

        debugger;

        return controlValue > 0 ? null : {
            validatePropertyValue: {
                valid: false
            }
        }
    }

    ///Generic boundary validator
    private boundaryValidator(minValue: number, maxValue: number): ValidatorFn {

        return (control: AbstractControl): { [key: string]: any } => {
            debugger;
            let controlValue = control.value;

            if (controlValue == NaN || control == undefined)
                return { 'notValidValue': { controlValue } };

            if (maxValue < controlValue)
                return { "maxValueExceeded": { controlValue } };

            if (minValue > controlValue)
                return { "minValueExceeded": { controlValue } }

            return null;
        }
    }

    ngOnInit(): void {
        this.buildForm();
    }

    save(loanQuestionnaire : LoanQuestionnaire) : void {

        debugger;
        let passedQuestionnaire = loanQuestionnaire;
        let t = this.loanQuestionnaireFrom;
    }
}