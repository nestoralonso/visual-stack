import React from 'react'

import Box from '../Box'
import Text from '../Text'
import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'

export const CjSupportLink = ({
  title,
  link
}) => {
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
        <Text className="topnav-action-text">
          <QuestionMarkCircleOutlineIcon />
        </Text>
        <Text className="topnav-action-text">
          {title}
        </Text>
      </Box>
    </a>
  )
}
