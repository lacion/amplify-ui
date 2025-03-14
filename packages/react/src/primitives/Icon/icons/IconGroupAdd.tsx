import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconGroupAdd = (props) => {
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
          d="M5 15V12H8V10H5V7H3V10H0V12H3V15H5ZM12 13.75C9.66 13.75 5 14.92 5 17.25V19H19V17.25C19 14.92 14.34 13.75 12 13.75ZM7.34 17C8.18 16.42 10.21 15.75 12 15.75C13.79 15.75 15.82 16.42 16.66 17H7.34ZM12 12C13.93 12 15.5 10.43 15.5 8.5C15.5 6.57 13.93 5 12 5C10.07 5 8.5 6.57 8.5 8.5C8.5 10.43 10.07 12 12 12ZM12 7C12.83 7 13.5 7.67 13.5 8.5C13.5 9.33 12.83 10 12 10C11.17 10 10.5 9.33 10.5 8.5C10.5 7.67 11.17 7 12 7ZM17 12C18.93 12 20.5 10.43 20.5 8.5C20.5 6.57 18.93 5 17 5C16.76 5 16.52 5.02 16.29 5.07C17.05 6.01 17.5 7.2 17.5 8.5C17.5 9.8 17.03 10.98 16.27 11.92C16.51 11.97 16.75 12 17 12ZM19.32 14.02C20.32 14.83 21 15.89 21 17.25V19H24V17.25C24 15.56 21.56 14.49 19.32 14.02Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
