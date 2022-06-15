import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

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
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
      headerStyle: {
        height: 50,
        backgroundColor: '#303030',
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTintColor: '#fff',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Setting" component={Setting} />

      <Screen name="ThemeStyle" component={ThemeStyle} />
    </Navigator>
  );
};

export default memo(SettingStack);
