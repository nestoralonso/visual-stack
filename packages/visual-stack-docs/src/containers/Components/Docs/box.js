import React from 'react';
import { Demo, Snippet } from '../../../components/Demo';
import { Panel } from '@cjdev/visual-stack/lib/components/Panel';
import IconSuccess from '@cjdev/visual-stack/lib/components/IconSuccess';
import { Button } from '@cjdev/visual-stack/lib/components/Button';
import {
  Table,
  THead,
  TBody,
  Th,
  Tr,
  Td,
} from '@cjdev/visual-stack/lib/components/Table';
/* s1:start */
import { Box } from '@cjdev/visual-stack';
/* s1:end */
import Text from '@cjdev/visual-stack/lib/experimental/Text';

export default () => {
  return (
    <Demo srcFile="/samples/src/containers/Components/Docs/box.js">
      {snippets => (
        <div>
          <Panel>
            <Box padding="2xl" gap="2xl">
              <Text>
                A Box is a primitive layout component with standardized styling
                props that renders a div container using flexbox. You can think
                of it as a div with superpowers.
              </Text>
              <Box gap="large">
                <Text type="h4">Import</Text>
                <Snippet tag="s1" src={snippets} />
              </Box>

              <Box gap="large">
                <Text type="h4">Props</Text>
                <Table>
                  <THead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Description</Th>
                      <Th>Values</Th>
                      <Th>Default</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td>direction</Td>
                      <Td>
                        Sets the direction in which the children are laid out.
                      </Td>
                      <Td>"column" | "row"</Td>
                      <Td>"column"</Td>
                    </Tr>
                    <Tr>
                      <Td>border</Td>
                      <Td>Adds a border around the box.</Td>
                      <Td>true | false</Td>
                      <Td>false</Td>
                    </Tr>
                    <Tr>
                      <Td>gap</Td>
                      <Td>Adds spacing between the children.</Td>
                      <Td>
                        "small" (4px) | "medium" (8px) | "large" (16px) | "xl"
                        (24px) | "2xl" (32px) | "3xl" (40px) | "4xl" (48px)
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>align</Td>
                      <Td>
                        Aligns children along the cross axis (perpendicular to
                        the direction).
                      </Td>
                      <Td>"start" | "center" | "end"</Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>justify</Td>
                      <Td>
                        Justifies children along the main axis (direction axis).
                      </Td>
                      <Td>
                        "start" | "center" | "end" | "space-around" |
                        "space-between" | "space-evenly"
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>padding</Td>
                      <Td>Adds padding inside the box.</Td>
                      <Td>
                        "small" (4px) | "medium" (8px) | "large" (16px) | "xl"
                        (24px) | "2xl" (32px) | "3xl" (40px) | "4xl" (48px)
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>paddingTop</Td>
                      <Td>Adds padding-top inside the box.</Td>
                      <Td>
                        "small" (4px) | "medium" (8px) | "large" (16px) | "xl"
                        (24px) | "2xl" (32px) | "3xl" (40px) | "4xl" (48px)
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>paddingBottom</Td>
                      <Td>Adds padding-bottom inside the box.</Td>
                      <Td>
                        "small" (4px) | "medium" (8px) | "large" (16px) | "xl"
                        (24px) | "2xl" (32px) | "3xl" (40px) | "4xl" (48px)
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>paddingLeft</Td>
                      <Td>Adds padding-left inside the box.</Td>
                      <Td>
                        "small" (4px) | "medium" (8px) | "large" (16px) | "xl"
                        (24px) | "2xl" (32px) | "3xl" (40px) | "4xl" (48px)
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>paddingRight</Td>
                      <Td>Adds padding-right inside the box.</Td>
                      <Td>
                        "small" (4px) | "medium" (8px) | "large" (16px) | "xl"
                        (24px) | "2xl" (32px) | "3xl" (40px) | "4xl" (48px)
                      </Td>
                      <Td>unset</Td>
                    </Tr>
                    <Tr>
                      <Td>expand</Td>
                      <Td>
                        Expands the box along the main axis (direction axis) to
                        fill available space (sets flex to 1).
                      </Td>
                      <Td>true | false</Td>
                      <Td>false</Td>
                    </Tr>
                  </TBody>
                </Table>
                <Text type="light" italic>
                  Note: the absence of a margin prop is intentional. Exporting
                  components using outer margin or any spacing around its
                  contents is considered a bad practice since it makes it harder
                  for its container to control the layout.
                </Text>
              </Box>

              <Box gap="large">
                <Text type="h4">A confirmation dialog</Text>
                {/* s2:start */}
                <Box padding="xl" paddingTop="2xl" gap="large" border>
                  <Box direction="row" gap="medium" align="center">
                    <IconSuccess />
                    <Text type="h4">Your offer has been sent!</Text>
                  </Box>
                  <Text>
                    You will be notified by email if the publisher accepts your
                    offer.
                  </Text>
                  <Box gap="small">
                    <Text type="bold">Program Terms</Text>
                    <Text>Test terms 1</Text>
                  </Box>
                  <Box gap="small">
                    <Text type="bold">Publisher Group</Text>
                    <Text>Test group 1</Text>
                  </Box>
                  <Box direction="row" gap="medium" justify="end">
                    <Button type="text">Close</Button>
                    <Button type="solid-primary">Submit</Button>
                  </Box>
                </Box>
                {/* s2:end */}
                <Snippet tag="s2" src={snippets} />
              </Box>

              <Box gap="large">
                <Text type="h4">An expanded box</Text>
                {/* s3:start */}
                <Box direction="row" gap="medium">
                  <Box expand padding="medium" align="center" border>
                    <Text>Lorem Ipsum</Text>
                  </Box>
                  <Box padding="medium" border>
                    <Text>Lorem Ipsum</Text>
                  </Box>
                </Box>
                {/* s3:end */}
                <Snippet tag="s3" src={snippets} />
              </Box>

              <Box gap="large">
                <Text type="h4">A bunch of boxes stacking other boxes</Text>
                {/* s4:start */}
                <Box padding="medium" gap="medium" border>
                  <Box padding="medium" gap="medium" border>
                    <Text>📦</Text>
                  </Box>
                  <Box direction="row" padding="medium" gap="medium" border>
                    <Box padding="medium" gap="medium" border>
                      <Text>📦</Text>
                    </Box>
                    <Box padding="medium" gap="medium" border>
                      <Text>📦</Text>
                    </Box>
                  </Box>
                  <Box direction="row" padding="medium" gap="medium" border>
                    <Box padding="medium" gap="medium" border>
                      <Box padding="medium" border>
                        <Text>📦</Text>
                      </Box>
                      <Box padding="medium" border>
                        <Text>📦</Text>
                      </Box>
                    </Box>
                    <Box
                      direction="row"
                      expand
                      padding="medium"
                      align="center"
                      justify="center"
                      border
                    >
                      <Text>📦</Text>
                    </Box>
                  </Box>
                </Box>
                {/* s4:end */}
                <Snippet tag="s4" src={snippets} />
              </Box>
            </Box>
          </Panel>
        </div>
      )}
    </Demo>
  );
};
