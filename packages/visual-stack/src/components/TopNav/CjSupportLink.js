import React from 'react';

import Box from '../../experimental/Box';
import Text from '../../experimental/Text';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const CjSupportLink = ({ className, title, link, ...restProps }) => {
  return (
    <div {...restProps} className={cn(`vs-cj-support-link`, className)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="vs-cj-support-link-container"
      >
        <Box
          direction="row"
          gap="default"
          align="center"
          className="vs-topnav-action"
        >
          <Text id="topnav-help-icon" className="vs-topnav-action vs-topnav-text">
            <InformationOutlineIcon />
          </Text>
          <Text id="topnav-help-title" className="vs-topnav-action vs-topnav-text">
            {title}
          </Text>
        </Box>
      </a>
    </div>
  );
};

CjSupportLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};
