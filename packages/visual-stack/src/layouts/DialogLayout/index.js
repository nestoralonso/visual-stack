import React from 'react';
import { Button } from '../../components/Button';
import CloseIcon from 'mdi-react/CloseIcon';
import cn from 'classnames';

import './index.css';
import Spinner from '../../components/Spinner';
import { TopNav } from '../../components/TopNav'

function getSubmitButtonText(submitButtonText, showSubmitButtonSpinner) {
  if (showSubmitButtonSpinner) {
    return (
      <React.Fragment>
        <Spinner size="button" /> {submitButtonText}
      </React.Fragment>
    );
  }
  return submitButtonText;
}

export const DialogLayout = ({
  className,
  title,
  cancelButtonText,
  submitButtonText,
  disableSubmit,
  showSubmitButtonSpinner,
  contentSize,
  onCancel,
  onSubmit,
  children,
  ...restProps
}) => (
  <div className={cn(`vs-dialog-layout`, className)} {...restProps}>
    <TopNav
      title={title}
      actionChildren=<TopNavControls
        onSubmit={onSubmit}
        onCancel={onCancel}
        submitButtonText={submitButtonText}
        cancelButtonText={cancelButtonText}
        disableSubmit={disableSubmit}
        showSubmitButtonSpinner={showSubmitButtonSpinner}
      />
    />
    <div
      className={cn(
        'vs-dialog-layout-content',
        `vs-dialog-layout-content-${contentSize ? contentSize : 'normal'}`
      )}
    >
      {children}
    </div>
  </div>
);

const TopNavControls = ({
                          onSubmit,
                          onCancel,
                          submitButtonText,
                          cancelButtonText,
                          disableSubmit,
                          showSubmitButtonSpinner,
                        }) => (
  <div className="vs-dialog-layout-button-bar">
    {cancelButtonText && (
      <Button id="vs-dialog-layout-cancel" type="text" onClick={onCancel}>
        {cancelButtonText}
      </Button>
    )}

    {submitButtonText && (
      <Button
        id="vs-dialog-layout-submit"
        type="solid-primary"
        disabled={disableSubmit === true}
        onClick={onSubmit}
      >
        {getSubmitButtonText(submitButtonText, showSubmitButtonSpinner)}
      </Button>
    )}
    {!submitButtonText && !cancelButtonText && (
      <CloseIcon
        className="vs-dialog-layout-icon-close"
        onClick={onCancel}
      />
    )}
  </div>
)

export default DialogLayout;
