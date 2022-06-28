import { FC, memo, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { MotiView, MotiTransitionProp } from 'moti';
import { Easing } from 'react-native-reanimated';

const _colors = {
  active: '#2C2C2C',
  inActive: '#DCDCDC',
};

const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

interface ISwitch {
  size: number;
  onValueChange: () => void;
  isActive: boolean;
}

const Switch: FC<ISwitch> = ({ size, onValueChange, isActive }) => {
  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);

  const knobSize = useMemo(() => {
    return size * 0.6;
  }, [size]);

  return (
    <Pressable onPress={onValueChange}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? _colors.active : _colors.inActive,
          }}
          animate={{
            backgroundColor: isActive ? _colors.inActive : _colors.active,
          }}
          style={{
            position: 'absolute',
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: _colors.active,
          }}
        />

        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : knobSize,
              borderColor: isActive ? _colors.active : _colors.inActive,
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
              borderColor: _colors.active,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

export default memo(Switch);
