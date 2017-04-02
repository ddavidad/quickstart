import { NgModule} from '@angular/core';
import { ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { BarComponent } from './bar/bar.component'
import { QuoteComponent } from './quote/quote.component'
import { LoanQuestionnaireComponent } from './loan/loan.questionnaire.component'
import { DropdownQuestion } from './question/model/question-dropdown';
import { QuestionBase } from './question/model/question-base';
import { TextboxQuestion } from './question/model/question-textbox';
import { QuestionService } from './question/question.service';
import { QuestionControlService } from './question/question-control.service';
import { DynamicFormQuestionComponent } from './question/dynamic-form-question.component';
import { DynamicFormComponent } from './question/dynamic-form.component';
import { InvestQuestionnaireComponent } from './invest/invest.questionnaire.component'
import { ApplicantQuestionnaireComponent } from './applicant/applicant.questionnaire.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/posts.service';

const appRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'bar', component: BarComponent },
    { path: 'Loanquestionnaire', component: LoanQuestionnaireComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'Investquestionnaire', component: InvestQuestionnaireComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'applicant', component: ApplicantQuestionnaireComponent },
    { path: 'congratulations', component: CongratulationsComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
    //Exteranl components and modules

    imports:
    [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],

    //Module related components
    declarations:
    [
        AppComponent,
        WelcomeComponent,
        QuoteComponent,
        LoanQuestionnaireComponent,
        ApplicantQuestionnaireComponent,
        CongratulationsComponent,
        BarComponent,
        DynamicFormQuestionComponent,
        DynamicFormComponent,
        InvestQuestionnaireComponent,
        PostsComponent
    ],
    providers:
    [
        QuestionService,
        QuestionControlService,
        PostService,
        Http,
        HttpModule
    ],

    bootstrap: [AppComponent],
})
export class AppModule { }