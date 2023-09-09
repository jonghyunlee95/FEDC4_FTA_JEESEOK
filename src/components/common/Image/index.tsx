import { CSSProperties } from 'react';
import styled from '@emotion/styled';

type shapeType = 'circle' | 'round' | 'square';

interface ShapeToCssValueType {
  circle: string;
  round: string;
  square: string;
}

interface ImageProps {
  shape?: shapeType;
  src: string;
  block?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  mode: 'cover' | 'fill' | 'contain';
  style?: CSSProperties;
}

const ShapeToCssValue: ShapeToCssValueType = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const ImageWrapper = styled.div<{ shape: shapeType }>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  overflow: hidden;
  background-color: #eee;
`;

const Image = ({
  shape = 'square',
  src,
  block = false,
  alt,
  width = 200,
  height = 200,
  mode = 'contain',
  ...props
}: ImageProps) => {
  const imageStyle = {
    display: block ? 'block' : 'undefined',
    width,
    height,
    objectFit: mode,
  };

  return (
    <ImageWrapper shape={shape}>
      <img src={src} alt={alt} style={{ ...props.style, ...imageStyle }} />
    </ImageWrapper>
  );
};

export default Image;
