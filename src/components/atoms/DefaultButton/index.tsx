import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

type VariantType = 'center' | 'right';

type ChildrenType = typeof Text | React.ReactNode;

export interface IDefaultButtonProps extends TouchableOpacityProps {
  position?: VariantType;
  onpress: ((event: GestureResponderEvent) => void) | undefined | (() => void);
  children: ChildrenType;
  Style?: ViewStyle;
}

const DefaultButton = ({
  position,
  onpress,
  children,
  Style,
}: IDefaultButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={
        position
          ? [styles.default, styles[position], {...Style}]
          : [styles.default, {...Style}]
      }
      onPress={onpress}
      activeOpacity={0.9}
      accessible={true}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  default: {
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

export default DefaultButton;
