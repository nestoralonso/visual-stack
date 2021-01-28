import React from 'react';
import { Panel, Body } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import { Badge } from '@cjdev/visual-stack';
/* s1:end */
import Box from '@cjdev/visual-stack/lib/experimental/Box';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/Badge.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Body>
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Body>
              {/* s4:start */}
              <Box direction="row" gap="default">
                <Badge>CJ Performer</Badge>
                <Badge>CJ Spotlight</Badge>
                <Badge>Content Certified</Badge>
                <Badge>New to Network</Badge>
                <Badge>SubAffiliate</Badge>
              </Box>
              {/* s4:end */}
              <Snippet tag="s4" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Body>
              {/* s2:start */}
              <Box direction="row" gap="default">
                <Badge backgroundColor="#9C52F7">CJ Performer</Badge>
                <Badge backgroundColor="#EA4B93">CJ Spotlight</Badge>
                <Badge backgroundColor="#4574E2">Content Certified</Badge>
                <Badge backgroundColor="#0CAAAC">New to Network</Badge>
                <Badge backgroundColor="#072477">SubAffiliate</Badge>
              </Box>
              {/* s2:end */}
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Body>
              {/* s3:start */}
              <Box direction="row" gap="default">
                <Badge backgroundColor="var(--cj-green)">1</Badge>
                <Badge backgroundColor="var(--cj-green)">2</Badge>
                <Badge backgroundColor="var(--cj-green)">3</Badge>
                <Badge backgroundColor="var(--cj-green)">4819</Badge>
              </Box>
              {/* s3:end */}
              <Snippet tag="s3" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
