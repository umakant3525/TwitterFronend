import React from 'react';
import { Text } from 'react-native';
import Tweet from '@/components/Tweet';
import tweets from '@/assets/data/tweets';
import { RouteProp, useRoute } from '@react-navigation/native';

type TweetRouteParams = {
  id: string;
};

type ParamList = {
  Tweet: TweetRouteParams;
};

type TweetRoute = RouteProp<ParamList, 'Tweet'>;

export default function TweetScreen() {
  const route = useRoute<TweetRoute>();

  const { id } = route.params;

  if (!id) {
    return <Text>No tweet ID provided</Text>;
  }

  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) {
    return <Text>Tweet {id} not found</Text>;
  }

  return <Tweet tweet={tweet} />;
}
