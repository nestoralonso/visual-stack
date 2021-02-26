import React from 'react';
import { Panel, Body } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import { Badge } from '@cjdev/visual-stack';
/* s1:end */
import Box from '@cjdev/visual-stack/lib/experimental/Box';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/badge.js">
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
              {/* s2:start */}
              <Box direction="row" gap="default">
                <Badge>1</Badge>
                <Badge>2</Badge>
                <Badge>3</Badge>
                <Badge>4819</Badge>
              </Box>
              {/* s2:end */}
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Body>
              {/* s3:start */}
              <Box direction="row" gap="default">
                <Badge variant="cj-green">CJ Green</Badge>
                <Badge variant="1">One</Badge>
                <Badge variant="2">Two</Badge>
                <Badge variant="3">Three</Badge>
                <Badge variant="4">Four</Badge>
                <Badge variant="5">Five</Badge>
                <Badge variant="6">Six</Badge>
                <Badge variant="7">Seven</Badge>
                <Badge variant="8">Eight</Badge>
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
