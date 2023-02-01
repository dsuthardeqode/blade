import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const DropletIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9996 1.68994C12.265 1.68982 12.5195 1.79519 12.7071 1.98283L18.3669 7.6426C18.367 7.64268 18.3668 7.64253 18.3669 7.6426C20.9419 10.2161 21.7131 14.0877 20.3205 17.4514C18.9278 20.8152 15.6457 23.0086 12.005 23.0086C8.36433 23.0086 5.08223 20.8152 3.68954 17.4514C2.29697 14.0879 3.06782 10.2167 5.64255 7.6432C5.64275 7.643 5.64235 7.6434 5.64255 7.6432L11.2923 1.98346C11.4798 1.79565 11.7342 1.69006 11.9996 1.68994ZM12.0007 4.10478L7.0569 9.05728C5.05396 11.0589 4.45423 14.0701 5.53743 16.6864C6.62063 19.3027 9.17337 21.0086 12.005 21.0086C14.8367 21.0086 17.3894 19.3027 18.4726 16.6864C19.5558 14.0701 18.9561 11.0589 16.9531 9.05728L12.0007 4.10478Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default DropletIcon;