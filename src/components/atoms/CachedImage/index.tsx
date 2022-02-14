import React, {FC, ReactElement} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {ImageSourcePropType} from 'react-native';

interface ICachedImageProps {
  style?: any;
  source: Source | number | ImageSourcePropType;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  tintColor?: string;
}

const CachedImage: FC<ICachedImageProps> = (props): ReactElement => {
  return (
    <>
      <FastImage
        style={[
          {
            width: '100%',
            height: '100%',
          },
          props.style,
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        source={props.source}
        tintColor={props.tintColor}
        resizeMode={FastImage.resizeMode[props.resizeMode || 'cover']}
      />
    </>
  );
};

export default CachedImage;
