import axios from 'axios';
import { Config } from '@constants/config';
import { Local } from '@constants/local';
import LocalStorageService from '@services/localStorage';
import { QuestionModel } from '@models/question.model';
import { QuizModel } from '@models/quiz.model';
import { Generator } from '@utils/generator';

export default class QuizService {
  private static _baseUrl = 'http://10.0.2.2:8000/quizes/';

  static async create(
    title: string,
    description: string,
    questions: QuestionModel[],
    pointsPerQuestion: number,
  ): Promise<void> {
    let accessToken = await LocalStorageService.getItem<string>(Local.token);
    return axios.post(
      this._baseUrl,
      {
        title: title,
        description: description,
        questions: questions,
        points_per_answer: pointsPerQuestion,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      },
    );
  }

  static async findAll(): Promise<QuizModel[]> {
    let accessToken = await LocalStorageService.getItem<string>(Local.token);
    return new Promise((resolve, reject) => {
      axios
        .get(this._baseUrl, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          let data = res.data as any[];
          let quizzes = data?.map((quiz) => Generator.quiz(quiz));
          resolve(quizzes);
        })
        .catch((err) => reject(err));
    });
  }

  static async checkAnswers(quizId: string, answersIndexes: number[]): Promise<any> {
    let accessToken = await LocalStorageService.getItem<string>(Local.token);
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this._baseUrl}${quizId}/verified-completion`,
          { correct_answer_indexes: answersIndexes },
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
          },
        )
        .then((res) => {
          console.log(JSON.stringify(res, null, 4));
          resolve('');
        })
        .catch((err) => reject(err));
    });
  }
}
