import React from 'react';
import * as Styled from './Thumbnail.styled';
import { ThumbnailProps } from './Thumbnail.types';

const Thumbnail = React.forwardRef<HTMLDivElement, ThumbnailProps>(
  ({ width = '160px', category = '1by1', size = 'xxlarge', cover, ...rest }) => {
    if (width[width.length - 1] !== '%' && width.substring(width.length - 2) !== 'px') {
      throw new Error('invalid property: width');
    }

    return (
      <Styled.DSThumbnailWrapper $category={category} $width={width} $size={size} {...rest}>
        <Styled.RatioBox $category={category}>{cover}</Styled.RatioBox>
      </Styled.DSThumbnailWrapper>
    );
  },
);

export default Thumbnail;
