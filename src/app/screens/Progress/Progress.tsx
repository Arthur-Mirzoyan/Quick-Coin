import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, View, Text, Dimensions, RefreshControl } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './Progress.style';
import { variables } from '@styles/base/variables';
import QuizService from '@services/quiz';
import { QuizModel } from '@models/quiz.model';

const quizCompleteColor = variables.colors.tertiary;
const quizIncompleteColor = variables.colors.tabIconColor;

function ProgressScreen({ navigation }: any) {
  const [quizzes, setQuizzes] = useState<QuizModel[]>([]);

  const { width } = Dimensions.get('window');
  const iconSize = width / 7;

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = (): void => {
    QuizService.findAll()
      .then((res) => setQuizzes(res))
      .catch((err) => console.log(JSON.stringify(err, null, 4)));
  };

  const refreshControl = <RefreshControl refreshing={false} onRefresh={onRefresh} />;

  return (
    <FlatList
      data={quizzes}
      contentContainerStyle={styles.container}
      refreshControl={refreshControl}
      renderItem={({ item }) => (
        <Pressable style={styles.quiz} onPress={() => navigation.push('quiz', { quiz: item })}>
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>
            <Text numberOfLines={1} style={styles.description}>
              {item.description}
            </Text>
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="progress-check"
              size={iconSize}
              color={item.verifiedCompletion ? quizCompleteColor : quizIncompleteColor}
            />
          </View>
        </Pressable>
      )}
      ListEmptyComponent={
        <View style={styles.quiz}>
          <Text numberOfLines={1} style={[styles.title, styles.no_item_text]}>
            Թեստեր չեն գտնվել
          </Text>
        </View>
      }
    />
  );
}

export default ProgressScreen;
