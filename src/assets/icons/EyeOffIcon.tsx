// import * as React from 'react';
// import {memo} from 'react';

// import Svg, {SvgProps, Path} from 'react-native-svg';
// const SvgComponent = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={20}
//     height={18}
//     fill="none"
//     {...props}>
//     <Path
//       fill="#F89300"
//       fillRule="evenodd"
//       d="M.87 6.853a3.085 3.085 0 0 0 0 4.294C2.825 13.205 6.184 16 10 16c1.66 0 3.234-.53 4.643-1.296l2.827 2.826a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 1.06l2.575 2.575C2.782 4.975 1.7 5.98.87 6.853ZM7 9a3 3 0 0 0 4.524 2.585L7.415 7.476A2.986 2.986 0 0 0 7 9Zm12.13-2.147a3.085 3.085 0 0 1 0 4.294 21.835 21.835 0 0 1-2.032 1.89L12.999 8.94A3 3 0 0 0 10.061 6L6.72 2.658C7.754 2.25 8.857 2 10 2c3.816 0 7.174 2.795 9.13 4.853Z"
//       clipRule="evenodd"
//     />
//   </Svg>
// );
// const Memo = memo(SvgComponent);
// export default Memo;
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#F89300"
      fillRule="evenodd"
      d="M20 9.96v-.08a.794.794 0 0 0-.21-.43c-.55-.69-1.19-1.3-1.85-1.87l-3.93 2.62a3.966 3.966 0 0 1-3.96 3.77c-.47 0-.91-.1-1.33-.24l-2.24 1.49c.52.21 1.05.39 1.6.51 1.21.27 2.43.28 3.64.05 1.11-.21 2.17-.64 3.17-1.18 1.56-.84 2.99-2 4.23-3.3.23-.24.46-.49.67-.75a.87.87 0 0 0 .21-.43v-.16zm-.46-5.14c.27-.18.46-.47.46-.82 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L15 5.46c-.95-.53-1.95-.96-3.01-1.2a9.158 9.158 0 0 0-3.65-.04c-1.11.21-2.17.64-3.17 1.18-1.56.84-2.99 2-4.23 3.3-.23.24-.46.48-.67.75-.27.34-.27.76 0 1.1.64.79 1.39 1.5 2.16 2.15.26.21.52.41.79.61L.44 15.16l.01.02A1 1 0 0 0 0 16c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 18-12zm-8.67 3.4c-.25-.12-.53-.2-.83-.2-1.1 0-1.99.89-1.99 1.99 0 .03.02.06.02.09l-1.78 1.19c-.14-.4-.22-.83-.22-1.28 0-2.19 1.78-3.97 3.98-3.97 1.01 0 1.91.38 2.61 1z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export {Memo as ReactComponent};
export default Memo;
