import { QuestionModel } from '@models/question.model';
import { QuizModel } from '@models/quiz.model';
import { UserModel } from '@models/user.model';

export class Generator {
  static user(data?: any): UserModel {
    return {
      id: data?._id || '',
      email: data?.email || '',
      fullName: data?.full_name || '',
      points: data?.points || 0,
      role: data?.role || 'user',
    };
  }

  static quiz(data?: any): QuizModel {
    return {
      id: data?._id || '',
      title: data?.title || '',
      description: data?.description || '',
      questions: data?.questions || [],
      pointsPerAnswer: data?.points_per_answer || 0,
      verifiedCompletion: data?.verified_completion || false,
    };
  }

  static question(data?: any): QuestionModel {
    return {
      tile: data?.tile || '',
      answer_options: data?.answer_options || ['', '', '', ''],
      correct_answer_index: data?.correct_answer_index || NaN,
    };
  }
}
