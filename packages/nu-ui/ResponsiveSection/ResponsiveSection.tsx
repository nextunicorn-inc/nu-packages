import type { ResponsiveSectionType } from './ResponsiveSection.types';
import { ResponsiveSectionCss } from './ResponsiveSection.styled';

const ResponsiveSection: ResponsiveSectionType = (props) => {
  return (
    <section css={ResponsiveSectionCss} className={props.className}>
      {props.children}
    </section>
  );
};

export default ResponsiveSection;
