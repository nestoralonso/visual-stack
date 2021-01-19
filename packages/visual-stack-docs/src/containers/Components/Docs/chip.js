import React from 'react';
import { Panel, Body } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s2:start */
import { Chip } from '@cjdev/visual-stack';
/* s2:end */
import Box from '@cjdev/visual-stack/lib/experimental/Box';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/chip.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Body>
              {/* s1:start */}
              <Box direction="row" gap="default">
                <Chip backgroundColor="#9C52F7">CJ Performer</Chip>
                <Chip backgroundColor="#EA4B93">CJ Spotlight</Chip>
                <Chip backgroundColor="#4574E2">Content Certified</Chip>
                <Chip backgroundColor="#0CAAAC">New to Network</Chip>
                <Chip backgroundColor="#072477">SubAffiliate</Chip>
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
