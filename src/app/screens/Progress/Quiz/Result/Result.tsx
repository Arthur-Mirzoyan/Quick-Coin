import QuizService from '@services/quiz';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function ResultScreen({ route, navigation }: any) {
  const { quizId, selectedOptions } = route.params;

  useEffect(() => {
    QuizService.checkAnswers(quizId, selectedOptions).catch((err) => console.log(JSON.stringify(err, null, 4)));
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(route.params, null, 4)}</Text>
    </View>
  );
}

export default ResultScreen;
