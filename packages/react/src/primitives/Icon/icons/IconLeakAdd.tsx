import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconLeakAdd = (props) => {
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
          d="M6 3H3V6C4.66 6 6 4.66 6 3ZM14 3H12C12 7.97 7.97 12 3 12V14C9.08 14 14 9.07 14 3ZM10 3H8C8 5.76 5.76 8 3 8V10C6.87 10 10 6.87 10 3ZM10 21H12C12 16.03 16.03 12 21 12V10C14.93 10 10 14.93 10 21ZM18 21H21V18C19.34 18 18 19.34 18 21ZM14 21H16C16 18.24 18.24 16 21 16V14C17.13 14 14 17.13 14 21Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
