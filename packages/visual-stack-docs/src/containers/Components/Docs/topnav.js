import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {Demo, Snippet} from '../../../components/Demo'
import {Body, Header, Panel} from '@cjdev/visual-stack/lib/components/Panel'
import Box from '@cjdev/visual-stack/lib/experimental/Box'
import { TopNav } from '@cjdev/visual-stack/lib/components/TopNav'
import { BackToCjLink } from '@cjdev/visual-stack/lib/components/TopNav/BackToCjLink'
import { CjSupportLink } from '@cjdev/visual-stack/lib/components/TopNav/CjSupportLink'
import {Button} from '@cjdev/visual-stack/lib/components/Button'
import CloseIcon from 'mdi-react/CloseIcon'

export const TopNavDocs = ({router}) => (
    <Demo srcFile="/samples/src/containers/Components/Docs/topnav.js">
      {snippets => (
        <div>
          <Panel>
            <Header>Display a header with a back to CJ link and a help icon</Header>
            <Body>
              <Button
                type="solid-primary"
                onClick={() => router.push('/topNavDemo1')}
              >
                Show the TopNav
              </Button>
              <p/>
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Display a header with control buttons</Header>
            <Body>
              <Button
                type="solid-primary"
                onClick={() => router.push('/topNavDemo2')}
              >
                Show the TopNav
              </Button>
              <p/>
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>
        </div>
      )}
    </Demo>
)

const CodeSnippet1 = ({router}) => (
    /* s1:start */
    <TopNav
      title="Header Title"
      contentSize="wide"
      actionChildren={
        <Box direction="row" gap="xl" align="center" grow>
          <BackToCjLink title="Back to the Home Page" onClick={() => router.push('/components/topnav')}/>
          <CjSupportLink title="Help" link="https://www.help.com/"/>
        </Box>
      }
      children={
        <DemoContent/>
      }
    />
    /* s1:end */
)

const CodeSnippet2 = ({router}) => (
  /* s2:start */
  <TopNav
    title="Header Title"
    contentSize="wide"
    actionChildren={
      <TopNavControls
        onSubmit={() => {
          alert('Success!'); // eslint-disable-line no-alert
          router.push('/components/topnav');
        }}
        onCancel={() => router.push('/components/topnav')}
        submitButtonText={'Save Program Terms'}
        cancelButtonText={'Cancel'}
        disableSubmit={true}
        showSubmitButtonSpinner={true}
      />
    }
    children={
      <DemoContent/>
    }
  />
  /* s2:end */
)

export const TopNavWithBackToCjAndSupportDemo = ({ router }) => (
  <div>
    <TopNav
      title="Header Title"
      contentSize="normal"
      actionChildren={
        <Box direction="row" gap="xl" align="center" grow>
          <BackToCjLink title="Back to the Home Page" onClick={() => router.push('/components/topnav')}/>
          <CjSupportLink title="Help" link="https://www.help.com/"/>
        </Box>
      }
      children={
        <DemoContent/>
      }
    />
  </div>
)

export const TopNavWithButtonsDemo = ({ router }) => (
  <div>
    <TopNav
      title="Header Title"
      contentSize="normal"
      actionChildren={
        <TopNavControls
          onSubmit={() => {
            alert('Success!'); // eslint-disable-line no-alert
            router.push('/components/topnav');
          }}
          onCancel={() => router.push('/components/topnav')}
          submitButtonText={'Save Program Terms'}
          cancelButtonText={'Cancel'}
          disableSubmit={true}
        />
      }
      children={
        <DemoContent/>
      }
    />
  </div>
)

const TopNavControls = ({
                          onSubmit,
                          onCancel,
                          submitButtonText,
                          cancelButtonText,
                          disableSubmit
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
        {submitButtonText}
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


TopNavDocs.propTypes = {
  router: PropTypes.object
}
CodeSnippet1.propTypes = {
  router: PropTypes.object
}
CodeSnippet2.propTypes = {
  router: PropTypes.object
}
TopNavWithBackToCjAndSupportDemo.propTypes = {
  router: PropTypes.object
}
TopNavWithButtonsDemo.propTypes = {
  router: PropTypes.object
}

export const DemoContent = () => (
  <Body>
    <h2>I am here, below the Top Nav</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Body>
)

export default withRouter(TopNavDocs)


