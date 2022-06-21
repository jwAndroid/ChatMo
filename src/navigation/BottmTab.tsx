import { memo, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Image } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners';
import { useTheme } from '@emotion/react';

import { MemosStack, StatisticsStack, SettingStack } from '../screens/stacks';
import { APP_THEME_KEY } from '../api/constants';

const { Navigator, Screen } = createBottomTabNavigator();

const BottmTab = () => {
  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const [isWhite, setIsWhite] = useState(true);

  useLayoutEffect(() => {
    (async () => {
      const storage = await AsyncStorage.getItem(APP_THEME_KEY);

      setIsWhite(storage === 'dark' ? false : true);
    })();
  }, []);

  useEffect(() => {
    EventRegister.addEventListener('changeTheme', (data) => {
      setIsWhite(data);
    });

    return () => {
      EventRegister.removeEventListener('changeTheme');
    };
  }, []);

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
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    isWhite ? theme.icon.list_black : theme.icon.list_white
                  }
                  style={{ width: 22, height: 22 }}
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
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    isWhite
                      ? theme.icon.statistic_black
                      : theme.icon.statistic_white
                  }
                  style={{ width: 22, height: 22 }}
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
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    isWhite
                      ? theme.icon.settings_black
                      : theme.icon.settings_white
                  }
                  style={{ width: 22, height: 22 }}
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
