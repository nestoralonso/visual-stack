import React from 'react'
import cn from 'classnames'
import Box from '../Box'
import { BackToCjLink } from './BackToCjLink'
import { CjSupportLink } from './CjSupportLink'
import CJLogo from '../../components/CJLogo'
import PropTypes from 'prop-types'

export const TopNav = ({
  className,
  contentSize,
  logo,
  title,
  backToCjTitle,
  backToCjOnClick,
  supportTitle,
  supportLink,
  children
}) => {

  return (
    <div className={cn(`vs-topnav`, className)} >
      <div className="vs-topnav-header vs-topnav-page-title">
        <div className="vs-topnav-logo-title-container">
          <div className="vs-topnav-logo-container">
            <span className="vs-cj-logo">{<CJLogo />}</span>
          </div>
          <Box direction="row" grow>
            <Box grow><h1 className="vs-topnav-title">{title}</h1></Box>
          </Box>
        </div>
        <div className={'vs-topnav-button-bar'}>
          <Box direction="row" gap="xl" align="center" grow>
              <BackToCjLink title={backToCjTitle} onClick={backToCjOnClick} />
              <CjSupportLink title={supportTitle} link={supportLink} />
          </Box>
        </div>
      </div>
      <div
        className={cn(
          'vs-topnav-content',
          `vs-topnav-content-${contentSize ? contentSize : 'normal'}`
        )}
      >
        {children}
      </div>
    </div>
  )
}

TopNav.propTypes = {
  contentSize: PropTypes.string,
  title: PropTypes.string,
  backToCjTitle: PropTypes.string,
  backToCjOnClick: PropTypes.func,
  supportTitle: PropTypes.string,
  supportLink: PropTypes.string,
  children: PropTypes.array,
}
