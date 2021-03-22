import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {Demo, Snippet} from '../../../components/Demo'
import {Body, Header, Panel} from '@cjdev/visual-stack/lib/components/Panel'
import Box from '@cjdev/visual-stack/lib/experimental/Box'
import { TopNav } from '@cjdev/visual-stack/lib/components/TopNav'
import { BackToCjLink } from '@cjdev/visual-stack/lib/components/TopNav/BackToCjLink'
import { CjSupportLink } from '@cjdev/visual-stack/lib/components/TopNav/CjSupportLink'
import PageContent from '@cjdev/visual-stack/lib/components/PageContent'
import {Button} from '@cjdev/visual-stack/lib/components/Button'

export const TopNavParent = ({router}) => (
  <Demo srcFile="/samples/src/containers/Components/Docs/topnav.js">
    {snippets => (
      <div>
        <PageContent>
          <Panel>
            <Header>Display a header with a back to CJ link and a help icon</Header>
            <Body>
              <Button
                type="solid-primary"
                onClick={() => router.push('/topNavDemo')}
              >
                Show the TopNav
              </Button>
              <p/>
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </PageContent>
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


/* s2:start */
export const TopNavDemo = ({ router }) => (
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
/* s2:end */

TopNavParent.propTypes = {
  router: PropTypes.object
}
CodeSnippet1.propTypes = {
  router: PropTypes.object
}
TopNavDemo.propTypes = {
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

export default withRouter(TopNavParent)


