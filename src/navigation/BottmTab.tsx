import { memo, useMemo } from 'react';
import { Image } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@emotion/react';

import { MemosStack, StatisticsStack, SettingStack } from '../screens/stacks';

const { Navigator, Screen } = createBottomTabNavigator();

const BottmTab = () => {
  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const screenOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 50 + insets.bottom / 2,
        borderTopWidth: 0,
      },
      tabBarIconStyle: { flex: 0 },
      tabBarItemStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.color.tab.background,
      },
      tabBarHideOnKeyboard: true,
    }),
    [insets, theme]
  );

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
              height: 50 + insets.bottom / 2,
              borderTopWidth: 0,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={
                    theme.name === 'lightTheme'
                      ? theme.icon.list_black
                      : theme.icon.list_white
                  }
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? theme.color.sky_300 : undefined,
                  }}
                />
              );
            },
          };
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
              height: 50 + insets.bottom / 2,
              borderTopWidth: 0,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={
                    theme.name === 'lightTheme'
                      ? theme.icon.statistic_black
                      : theme.icon.statistic_white
                  }
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? theme.color.sky_300 : undefined,
                  }}
                />
              );
            },
          };
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
              height: 50 + insets.bottom / 2,
              borderTopWidth: 0,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={
                    theme.name === 'lightTheme'
                      ? theme.icon.settings_black
                      : theme.icon.settings_white
                  }
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? theme.color.sky_300 : undefined,
                  }}
                />
              );
            },
          };
        }}
      />
    </Navigator>
  );
};

export default memo(BottmTab);
