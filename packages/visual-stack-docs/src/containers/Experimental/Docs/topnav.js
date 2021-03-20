import React from 'react'
import {Demo, Snippet} from "../../../components/Demo";
import {Body, Header, Panel} from "@cjdev/visual-stack/lib/components/Panel";
import Text from "@cjdev/visual-stack/lib/experimental/Text";
import Box from "@cjdev/visual-stack/lib/experimental/Box";
import { TopNav } from '@cjdev/visual-stack/lib/experimental/TopNav'
import { BackToCjLink } from '@cjdev/visual-stack/lib/experimental/TopNav/BackToCjLink'
import { CjSupportLink } from '@cjdev/visual-stack/lib/experimental/TopNav/CjSupportLink'
import {PageHeader, PageTitle} from "@cjdev/visual-stack/lib/components/PageHeader";
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import {Button} from "@cjdev/visual-stack/lib/components/Button";
import { withRouter } from 'react-router';

class TopNavParent extends React.Component {

  render () {
    return (
      <Demo srcFile="/samples/src/containers/Experimental/Docs/topnav.js">
        {snippets => (
          <div>
            <PageHeader>
              <PageTitle>TopNav Header</PageTitle>
            </PageHeader>
            <PageContent>
              <Panel>
                <Body>
                  <Text>
                    Header component with a CJ logo
                  </Text>
                </Body>
              </Panel>
              <Panel>
                <Header>Display a header with a back to CJ link and a help icon</Header>
                <Body>
                  <Button
                    type="solid-primary"
                    onClick={() => this.props.router.push('/topNavDemo')}
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
  }
}

const NotRenderedComponent = () => (
  /* s1:start */
  <>
    <TopNav
      title="Header Title"
      contentSize="wide"
      actionChildren={
        <Box direction="row" gap="xl" align="center" grow>
          <BackToCjLink title="Back to the Home Page" onClick={() => this.props.router.push('/experimental/topnav')}/>
          <CjSupportLink title="Help" link="https://www.help.com/"/>
        </Box>
      }
    />
  </>
  /* s1:end */
);

/* s2:start */
export const TopNavDemo = ({ router }) => (
  <div>
    <TopNav
      title="Header Title"
      contentSize="wide"
      actionChildren={
        <Box direction="row" gap="xl" align="center" grow>
          <BackToCjLink title="Back to the Home Page" onClick={() => router.push('/experimental/topnav')}/>
          <CjSupportLink title="Help" link="https://www.help.com/"/>
        </Box>
      }
      children={
        <DemoContent/>
      }
    />
  </div>
);
/* s2:end */

NotRenderedComponent.propTypes = {};

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
);

export default withRouter(TopNavParent);


