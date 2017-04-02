import { Component } from '@angular/core'

import { QuestionService } from '../question/question.service'



@Component({
    templateUrl: 'app/invest/invest.questionnaire.component.html',
    providers:  [QuestionService]
})
export class InvestQuestionnaireComponent  {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}