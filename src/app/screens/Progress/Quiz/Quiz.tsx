import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { styles } from './Quiz.style';
import { Config } from '@constants/config';
import { Slider } from '@components/Slider/Slider';
import { Button } from '@components/Button/Button';
import { QuestionModel } from '@models/question.model';
import { QuizModel } from '@models/quiz.model';

function QuizScreen({ route, navigation }: any) {
  const quiz = route.params.quiz as QuizModel;
  const [question, setQuestion] = useState<QuestionModel>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: quiz.title });
    setQuestion(quiz.questions[0]);
  }, [quiz]);

  const onOptionSelect = (index: number): void => {
    let arr = selectedOptions;
    arr[currentIndex] = index;
    setSelectedOptions(arr);
    goToNextQuestion();
  };

  const goToNextQuestion = (): void => {
    let index = currentIndex + 1;

    if (index >= quiz.questions.length) {
      navigation.popToTop();
      navigation.push('result', { quizId: quiz.id, selectedOptions });
      return;
    }

    setQuestion(quiz.questions[index]);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info_box}>
        <View style={{ alignItems: 'center' }}>
          <CountdownCircleTimer
            isPlaying
            key={currentIndex}
            size={75}
            strokeWidth={7}
            duration={Config.secondsPerQuestion}
            colors="#F7B801"
            onComplete={goToNextQuestion}
          >
            {({ remainingTime }) => <Text style={styles.timer_text}>{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>
        <Slider current={currentIndex + 1} total={quiz.questions.length} />
      </View>
      {question && (
        <View style={styles.question_box}>
          <Text style={styles.question}>{question?.tile}</Text>
          <FlatList
            contentContainerStyle={styles.options}
            data={question.answer_options}
            renderItem={({ item, index }) => (
              <Button
                title={item}
                onPress={() => onOptionSelect(index)}
                buttonStyle={styles.option_button}
                textStyle={styles.option_text}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}

export default QuizScreen;
