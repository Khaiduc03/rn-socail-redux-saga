import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M21.0343 10.9807C21.4149 11.6155 21.4137 12.4085 21.0314 13.0422L17.6498 18.6473C17.2873 19.2482 16.6363 19.6152 15.9345 19.6143L9.04372 19.6052C8.34193 19.6043 7.69201 19.2356 7.33118 18.6338L3.96558 13.0198C3.58504 12.3851 3.58617 11.592 3.96851 10.9583L7.3501 5.35322C7.71265 4.75229 8.36362 4.38531 9.0654 4.38624L15.9562 4.39528C16.658 4.39621 17.3079 4.76489 17.6687 5.36677L21.0343 10.9807Z"
      fill="#F89300"
    />
    <Path
      d="M20.4293 15.2266C20.43 15.9426 20.0298 16.6093 19.3843 16.9679L13.5223 20.2236C12.8937 20.5727 12.1275 20.5766 11.5078 20.2338L5.57733 16.9535C4.95763 16.6108 4.57686 15.9725 4.57621 15.2753L4.57019 8.77392C4.56953 8.05797 4.96969 7.39121 5.61523 7.03268L11.4772 3.77697C12.1058 3.42786 12.872 3.42396 13.4917 3.76672L19.4222 7.047C20.0419 7.38976 20.4227 8.02807 20.4233 8.72522L20.4293 15.2266Z"
      fill="#F89300"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
