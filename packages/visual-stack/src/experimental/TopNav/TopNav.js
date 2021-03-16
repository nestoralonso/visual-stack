
import React from 'react'
import cn from 'classnames'
import Box from '../Box'
import { BackToCjLink } from './BackToCjLink'
import { CjSupportLink } from './CjSupportLink'
import CJLogo from '../../components/CJLogo'
// import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';

export const TopNav = ({
  className,
  contentSize,
  logo,
  title,
  backToCjTitle,
  backToCjOnClick,
  supportTitle,
  supportLink,
  children,
  ...restProps
}) => {

  return (
    <div className={cn(`vs-topnav`, className)} {...restProps}>
      <div className="vs-topnav-header vs-topnav-page-title">
        <div className="vs-topnav-logo-title-container">
          <div className="vs-topnav-logo-container">
            <span className="vs-cj-logo">{<CJLogo />}</span>
          </div>
          <Box direction="row" grow>
            <Box grow><h1 className="vs-topnav-title">{title}</h1></Box>
          </Box>
          <Box direction="row" gap="xl" align="center">
            <BackToCjLink title={backToCjTitle} onClick={backToCjOnClick} />
          </Box>
          <Box direction="row" gap="xl" align="center">
            <CjSupportLink title={supportTitle} link={supportLink} />
          </Box>
        </div>
        <div className="vs-topnav-button-bar">
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
