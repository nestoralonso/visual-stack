import React from 'react'

import Box from '../../experimental/Box';
import Text from '../../experimental/Text'
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon'
import PropTypes from 'prop-types'

export const CjSupportLink = ({title, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="feedback-link-container"
    >
      <Box
        direction="row"
        gap="default"
        align="center"
        className="topnav-action"
      >
        <Text id="topnav-help-icon" className="topnav-action-text">
          <InformationOutlineIcon />
        </Text>
        <Text id="topnav-help-title" className="topnav-action-text">
          {title}
        </Text>
      </Box>
    </a>
  )
}

CjSupportLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
}
