import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from '@emotion/react';

import { Setting, ThemeStyle } from '../components/settings';

type RootStackParamList = {
  Setting: undefined;
  ThemeStyle: undefined;
};

export type SettingScreenRouteProp = RouteProp<RootStackParamList, 'Setting'>;
export type SettingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Setting'
>;

export type ThemeStyleScreenRouteProp = RouteProp<
  RootStackParamList,
  'ThemeStyle'
>;
export type ThemeStyleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ThemeStyle'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const SettingStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
      cardStyle: { backgroundColor: theme.color.header.background },
    }),
    [theme.color.header.background]
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Setting" component={Setting} />

      <Screen name="ThemeStyle" component={ThemeStyle} />
    </Navigator>
  );
};

export default memo(SettingStack);
