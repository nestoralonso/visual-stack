import React from 'react'

import Box from '../Box'
import Text from '../Text'
import ArrowBackIcon from 'mdi-react/ArrowBackIcon'

export const BackToCjLink = ({ title, onClick }) => {
  return (
    <Box
      direction="row"
      gap="default"
      align="center"
      onClick={onClick}
      className="topnav-action"
    >
      <Text className="topnav-action-text"><ArrowBackIcon /></Text>
      <Text className="topnav-action-text">{title}</Text>
    </Box>
  )
}
