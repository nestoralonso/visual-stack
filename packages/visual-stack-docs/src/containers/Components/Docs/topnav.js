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
import './topnav.css'

export const TopNavDocs = ({router}) => (
    <Demo srcFile="/samples/src/containers/Components/Docs/topnav.js">
      {snippets => (
        <div>
          <Panel>
            <Header>Display a header with a back to CJ link and a help icon</Header>
            <Body>
              <p>In this example, other VS components like BackToCjLink or CjSupportLink are passed in as <i>actionChildren</i></p>
              <Button
                type="solid-primary"
                onClick={() => router.push('/topNavDemo1')}
              >
                Show the TopNav
              </Button>
              <p/>
              <Snippet tag="s1" src={snippets} />
              <p>
                <i>children</i> are optional, they're only necessary when you want TopNav to wrap the rest of the page. However, that's not a common approach.<br/>
                A better way is to stack the TopNav component on top of your page content like in the following example:
              </p>
              <Button
                type="solid-primary"
                onClick={() => router.push('/topNavDemo3')}
              >
                Show the TopNav
              </Button>
              <Snippet tag="s3" src={snippets} />
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

export const TopNavCodeSnippet1 = ({router}) => (
    /* s1:start */
    <TopNav
      title="Header Title"
      actionChildren={
        <Box direction="row" gap="xl" align="center" grow>
          <BackToCjLink title="Back to the Home Page" onClick={() => router.push('/components/topnav')}/>
          <CjSupportLink title="Help" link="https://www.help.com/"/>
        </Box>
      }
      children={<DemoContent title="I'm DemoContent passed in as a prop"/>}
      contentSize="wide"
    >
    </TopNav>
    /* s1:end */
)

export const TopNavCodeSnippet2 = ({router}) => (
  /* s2:start */
  <TopNav
    title="Header Title"
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
    contentSize="normal"
  >
    <DemoContent title="I'm DemoContent passed in as a child"/>
  </TopNav>
  /* s2:end */
)

export const TopNavCodeSnippet3 = ({router}) => (
  /* s3:start */
  <div>
    <TopNav
      title="Header Title"
      actionChildren={
        <Box direction="row" gap="xl" align="center" grow>
          <BackToCjLink title="Back to the Home Page" onClick={() => router.push('/components/topnav')}/>
          <CjSupportLink title="Help" link="https://www.help.com/"/>
        </Box>
      }
    />
    <div className='topnav-content-wrapper'>
      <DemoContent title="I'm the DemoContent component below the TopNav"/>
    </div>
  </div>
  /* s3:end */
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
TopNavCodeSnippet1.propTypes = {
  router: PropTypes.object
}
TopNavCodeSnippet2.propTypes = {
  router: PropTypes.object
}
TopNavCodeSnippet3.propTypes = {
  router: PropTypes.object
}

export const DemoContent = ({title}) => (
  <Body>
    <h2>{title}</h2>
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


