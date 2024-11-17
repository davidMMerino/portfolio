import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
}

const Icon: FC<IconProps> = memo(({children, className, svgRef, transform, ...props}) => (
  <svg
    className={className}
    fill="currentColor"
    ref={svgRef}
    transform={transform}
    viewBox="0 0 128 128"
    width="128"
    {...props}>
    {children}
  </svg>
));

export default Icon;
