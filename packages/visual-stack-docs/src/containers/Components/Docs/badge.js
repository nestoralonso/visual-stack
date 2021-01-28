import React from 'react';
import { Panel, Body } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s2:start */
import { Badge } from '@cjdev/visual-stack';
/* s2:end */
import Box from '@cjdev/visual-stack/lib/experimental/Box';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/Badge.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Body>
              {/* s1:start */}
              <Box direction="row" gap="default">
                <Badge backgroundColor="#9C52F7">CJ Performer</Badge>
                <Badge backgroundColor="#EA4B93">CJ Spotlight</Badge>
                <Badge backgroundColor="#4574E2">Content Certified</Badge>
                <Badge backgroundColor="#0CAAAC">New to Network</Badge>
                <Badge backgroundColor="#072477">SubAffiliate</Badge>
              </Box>
              {/* s1:end */}
              <Snippet tag="s2" src={snippets} />
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
