import React from 'react'

import Box from '../Box'
import Text from '../Text'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import {TopNav} from "./TopNav";
import PropTypes from 'prop-types'

export const BackToCjLink = ({ title, onClick }) => {
  return (
    <Box
      direction="row"
      gap="default"
      align="center"
      onClick={onClick}
      className="topnav-action"
    >
      <Text className="topnav-action-text"><ArrowLeftIcon /></Text>
      <Text className="topnav-action-text">{title}</Text>
    </Box>
  )
}

BackToCjLink.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}
