import React from 'react'
import cn from 'classnames'
import Box from '../../experimental/Box'
import CJLogo from '../../components/CJLogo'
import PropTypes from 'prop-types'

export const TopNav = ({
    className,
    title,
    actionChildren,
    children,
    contentSize,
    ...restProps
  }) => {

  return (
    <div className={cn(`vs-topnav`, className)} {...restProps}>
      <div className="vs-topnav-header vs-topnav-page-title">
        <div className="vs-topnav-logo-title-container">
          <div className="vs-topnav-logo-container">
            <span>{<CJLogo />}</span>
          </div>
          <Box direction="row" grow>
            <Box grow><h1 className="vs-topnav-title">{title}</h1></Box>
          </Box>
        </div>
        <div className="vs-topnav-button-bar">
          {actionChildren}
        </div>
      </div>
      <div
        className={cn(
          'vs-topnav-content',
          `vs-topnav-content-${contentSize ? contentSize : ''}`
        )}
      >
        {children}
      </div>
    </div>
  )
}

TopNav.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  actionChildren: PropTypes.object,
  children: PropTypes.object,
  contentSize: PropTypes.string,
}
