import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { styles } from './Quiz.style';
import { variables } from '@styles/base/variables';
import { Config } from '@constants/config';
import { Button } from '@components/Button/Button';
import { InputBox } from '@components/InputBox/InputBox';
import { KeyboardEnum } from '@enums/Keyboard.enum';
import { QuestionModel } from '@models/question.model';
import { Helper } from '@utils/helper';
import { Generator } from '@utils/generator';
import QuizService from '@services/quiz';

const iconColor = variables.colors.secondary;
const iconSize = 24;

function QuizScreen() {
  const [data, setData] = useState({ title: '', description: '', pointsPerAnswer: 0 });
  const [questions, setQuestions] = useState<QuestionModel[]>([]);

  const isFormValid = (): boolean => {
    const { title, pointsPerAnswer } = data;
    return !Helper.isEmpty(title) && !!questions.length && !!pointsPerAnswer && areQuestionsFilledCorrectly();
  };

  const areQuestionsFilledCorrectly = (): boolean => {
    return questions.every(
      (question) => !Helper.isEmpty(question.tile, ...question.answer_options) && question.correct_answer_index >= 0,
    );
  };

  const addQuestion = (): void => {
    if (questions.length < Config.maxQuestionsPerTest) setQuestions([...questions, Generator.question()]);
  };

  const removeQuestion = (index: number): void => {
    let q = questions.filter((_, i) => i !== index);
    setQuestions(q);
  };

  const addQuiz = (): void => {
    const { title, description, pointsPerAnswer } = data;
    if (isFormValid()) {
      QuizService.create(title, description, questions, pointsPerAnswer)
        .then(() => console.log('Quiz added'))
        .catch((err) => console.log(JSON.stringify(err, null, 4)));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} stickyHeaderIndices={[3]}>
      <InputBox
        title="Անվանում"
        icon={{ left: <MaterialIcons name="title" size={iconSize} color={iconColor} /> }}
        getInputValue={(val) => setData({ ...data, title: val })}
      />
      <InputBox
        title="Բնութագիր"
        icon={{ left: <MaterialIcons name="title" size={iconSize} color={iconColor} /> }}
        getInputValue={(val) => setData({ ...data, description: val })}
      />
      <InputBox
        title="Միավոր / Հարց"
        icon={{ left: <MaterialIcons name="attach-money" size={iconSize} color={iconColor} /> }}
        keyboard={KeyboardEnum.Numeric}
        getInputValue={(val) => setData({ ...data, pointsPerAnswer: +val })}
      />

      <View style={styles.questions_header_box}>
        <View style={styles.question_title_box}>
          <Text style={[styles.title]}>
            Հարցեր {questions.length} / {Config.maxQuestionsPerTest}
          </Text>
          <AntDesign name="pluscircle" size={22} color={iconColor} onPress={addQuestion} />
        </View>
      </View>

      <View style={styles.questions}>
        {questions.map((question, i) => (
          <View key={i} style={styles.question_box}>
            <View style={styles.question_title_box}>
              <Text style={[styles.title, { fontSize: variables.fontSizes.m }]}>Հարց {i + 1}</Text>
              <AntDesign name="minuscircle" size={22} color={iconColor} onPress={() => removeQuestion(i)} />
            </View>
            <InputBox
              icon={{ left: <MaterialIcons name="question-mark" size={iconSize} color={iconColor} /> }}
              getInputValue={(val) => {
                let qs = [...questions];
                qs[i].tile = val;
                setQuestions(qs);
              }}
            />
            <View style={styles.options_box}>
              {question.answer_options.map((option, j) => (
                <InputBox
                  key={j}
                  title={'Տարբերակ ' + (j + 1)}
                  icon={{ left: <MaterialIcons name="question-answer" size={iconSize} color={iconColor} /> }}
                  getInputValue={(val) => {
                    let qs = [...questions];
                    let q = { ...question };
                    q.answer_options[j] = val;
                    qs[i] = q;
                    setQuestions(qs);
                  }}
                />
              ))}
              <SelectDropdown
                data={[1, 2, 3, 4]}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
                onSelect={(_, index) => {
                  let qs = [...questions];
                  qs[i].correct_answer_index = index;
                  setQuestions(qs);
                }}
                renderButton={(selectedItem) => (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {'Ճիշտ Տարբերակի Համարը - ' + (selectedItem ?? '?')}
                    </Text>
                  </View>
                )}
                renderItem={(item, index, isSelected) => {
                  return (
                    <View style={[styles.dropdownItemStyle, isSelected && { backgroundColor: '#D2D9DF' }]}>
                      <Text style={styles.dropdownItemTxtStyle}>Տարբերակ {item}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        ))}
      </View>

      <Button title="Ավելցանել" onPress={addQuiz} buttonStyle={styles.button} textStyle={styles.text} />
    </ScrollView>
  );
}

export default QuizScreen;
