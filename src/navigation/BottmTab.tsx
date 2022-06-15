import { memo, useEffect, useMemo, useState } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MemosStack, StatisticsStack, SettingStack } from '../screens/stacks';

const { Navigator, Screen } = createBottomTabNavigator();

const BottmTab = () => {
  const [isTabPress, setIsTabPress] = useState(false);

  const screenOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontWeight: '700',
        fontSize: 15,
      },
      tabBarIconStyle: { display: 'none' },
      tabBarStyle: {
        height: 56,
        backgroundColor: '#303030',
      },
      tabBarHideOnKeyboard: true,
    }),
    []
  );

  useEffect(() => {
    if (isTabPress) {
      const timeout = setTimeout(() => {
        setIsTabPress(false);
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isTabPress]);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="MemosStack"
        component={MemosStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Memo';

          return {
            tabBarStyle: {
              display: routeName === 'Memo' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '메모',
          };
        }}
        listeners={{
          tabPress: (e) => {
            console.log(`Memo click! ${e}`);
          },
        }}
      />

      <Screen
        name="StatisticsStack"
        component={StatisticsStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Statistics';

          return {
            tabBarStyle: {
              display: routeName === 'Statistics' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '통계',
          };
        }}
        listeners={{
          tabPress: (e) => {
            console.log(`Statistics click! ${e}`);
          },
        }}
      />

      <Screen
        name="SettingStack"
        component={SettingStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Setting';

          return {
            tabBarStyle: {
              display: routeName === 'Setting' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '세팅',
          };
        }}
        listeners={{
          tabPress: (e) => {
            console.log(`Setting click! ${e}`);
          },
        }}
      />
    </Navigator>
  );
};

export default memo(BottmTab);
