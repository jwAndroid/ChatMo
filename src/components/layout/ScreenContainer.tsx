import { FC, memo, ReactNode, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IScreenContainer {
  children: ReactNode;
}

const ScreenContainer: FC<IScreenContainer> = ({ children }) => {
  const style = useMemo(() => ({ flex: 1 }), []);

  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default memo(ScreenContainer);
