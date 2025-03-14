import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconKingBed = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12C22 10.9 21.1 10 20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.34L19 19H20L20.67 17H22V12ZM18 10H13V7H18V10ZM6 7H11V10H6V7ZM4 12H20V15H4V12Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
