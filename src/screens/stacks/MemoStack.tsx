import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Memo } from '../components/memos';

type RootStackParamList = {
  Memo: undefined;
};

export type MemoScreenRouteProp = RouteProp<RootStackParamList, 'Memo'>;
export type MemoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Memo'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const MemoStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Memo" component={Memo} />
    </Navigator>
  );
};

export default memo(MemoStack);
