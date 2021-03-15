
import React from 'react'
import cn from 'classnames'

export const TopNav = ({
  className,
  title,
  contentSize,
  logo,
  children,
  ...restProps
}) => {

  return (
    <div className={cn(`vs-topnav`, className)} {...restProps}>
      <div className="vs-topnav-header vs-topnav-page-title">
        <div className="vs-topnav-logo-title-container">
          <div className="vs-topnav-logo-container">
            <span className="vs-cj-logo">{logo}</span>
          </div>

          <h1 className="vs-topnav-title">{title}</h1>
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
