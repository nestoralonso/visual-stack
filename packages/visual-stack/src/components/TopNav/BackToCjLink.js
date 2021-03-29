import React from 'react'

import Box from '../../experimental/Box';
import Text from '../../experimental/Text'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import PropTypes from 'prop-types'
import cn from 'classnames'

export const BackToCjLink = ({
                    className,
                    title,
                    onClick,
                    ...restProps
}) => {
  return (
    <Box
      {...restProps}
      className={cn(`vs-cj-link`, className)}
      direction="row"
      gap="default"
      align="center"
      onClick={onClick}
      className="topnav-action"
    >
      <Text id="topnav-back-icon" className="vs-topnav-action-text"><ArrowLeftIcon /></Text>
      <Text id="topnav-back-title" className="vs-topnav-action-text">{title}</Text>
    </Box>
  )
}

BackToCjLink.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}
