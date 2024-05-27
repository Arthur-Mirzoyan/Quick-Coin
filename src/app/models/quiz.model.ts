import { QuestionModel } from './question.model';

export interface QuizModel {
  id: string;
  title: string;
  description: string;
  questions: QuestionModel[];
  pointsPerAnswer: number;
  verifiedCompletion: boolean;
}
