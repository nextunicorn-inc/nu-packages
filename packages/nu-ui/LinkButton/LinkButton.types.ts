import type { AnchorHTMLAttributes, FC, SVGProps } from 'react';
import type { ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

type LinkButtonOptions = {
  text?: string;
  size?: 'large' | 'small';
  icon?: FC<SVGProps<SVGSVGElement>>;
  isIconAfter?: boolean;
};

export default interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ReactStandardProps,
    EmotionCSSProps,
    LinkButtonOptions {}
