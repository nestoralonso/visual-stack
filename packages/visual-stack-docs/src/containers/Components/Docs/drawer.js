import { Box } from '@cjdev/visual-stack';
import { Button } from '@cjdev/visual-stack/lib/components/Button';
import { Panel } from '@cjdev/visual-stack/lib/components/Panel';
import Text from '@cjdev/visual-stack/lib/experimental/Text';
import React, { useState } from 'react';
import { Demo, Snippet } from '../../../components/Demo';

import './drawer.css';

/* s1:start */
import { Drawer } from '@cjdev/visual-stack';
/* s1:end */

export default () => {
  /* s2:start */
  const [isOpen, setOpen] = useState();
  /* s2:end */

  return (
    <Demo srcFile="/samples/src/containers/Components/Docs/drawer.js">
      {snippets => (
        <div>
          <Panel>
            <Box padding="2xl" gap="large">
              <Box align="start">
                {/* s3:start */}
                <Button
                  type="solid-primary"
                  onClick={() => setOpen(isOpen => !isOpen)}
                >
                  Toggle
                </Button>
                {/* s3:end */}
              </Box>
              <Snippet tag="s1" src={snippets} />
              <Snippet tag="s2" src={snippets} />
              <Snippet tag="s3" src={snippets} />
              <Snippet tag="s4" src={snippets} />
            </Box>
          </Panel>
          {/* s4:start */}
          <Drawer isOpen={isOpen}>
            <Box
              direction="row"
              padding="large"
              justify="space-between"
              align="center"
            >
              <Text>Hello Drawer</Text>
              <Button type="solid-primary">Make Offer</Button>
            </Box>
          </Drawer>
          {/* s4:end */}
        </div>
      )}
    </Demo>
  );
};
