import React from 'react';
import { Demo, Snippet } from '../../../components/Demo';
import { Panel } from '@cjdev/visual-stack/lib/components/Panel';
import IconSuccess from '@cjdev/visual-stack/lib/components/IconSuccess';
import { Button } from '@cjdev/visual-stack/lib/components/Button';
import { AppIcon } from '@cjdev/visual-stack/lib/components/Icons';
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
                of it as a div with superpowers. Use it to lay out components in
                columns, rows, add spacing between them, center them, and more.
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
                      <Th>
                        <Text type="bold">Name</Text>
                      </Th>
                      <Th>
                        <Text type="bold">Description</Text>
                      </Th>
                      <Th>
                        <Text type="bold">Type</Text>
                      </Th>
                      <Th>
                        <Text type="bold">Default Value</Text>
                      </Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td>
                        <Text>direction</Text>
                      </Td>
                      <Td>
                        <Text>
                          Sets the direction in which the children are laid out.
                        </Text>
                      </Td>
                      <Td>
                        <Text>"column" | "row"</Text>
                      </Td>
                      <Td>
                        <Text>"column"</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>gap</Text>
                      </Td>
                      <Td>
                        <Text>Adds spacing between the children.</Text>
                      </Td>
                      <Td>
                        <Text>
                          "small" | "medium" | "large" | "xl" | "2xl" | "3xl" |
                          "4xl"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>align</Text>
                      </Td>
                      <Td>
                        <Text>
                          Aligns children along the cross axis (perpendicular to
                          the direction).
                        </Text>
                      </Td>
                      <Td>
                        <Text>"start" | "center" | "end"</Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>justify</Text>
                      </Td>
                      <Td>
                        <Text>
                          Justifies children along the main axis (direction
                          axis).
                        </Text>
                      </Td>
                      <Td>
                        <Text>
                          "start" | "center" | "end" | "space-around" |
                          "space-between" | "space-evenly"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>padding</Text>
                      </Td>
                      <Td>
                        <Text>Adds padding inside the box.</Text>
                      </Td>
                      <Td>
                        <Text>
                          "small" | "medium" | "large" | "xl" | "2xl" | "3xl" |
                          "4xl"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>paddingTop</Text>
                      </Td>
                      <Td>
                        <Text>Adds padding-top inside the box.</Text>
                      </Td>
                      <Td>
                        <Text>
                          "small" | "medium" | "large" | "xl" | "2xl" | "3xl" |
                          "4xl"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>paddingBottom</Text>
                      </Td>
                      <Td>
                        <Text>Adds padding-bottom inside the box.</Text>
                      </Td>
                      <Td>
                        <Text>
                          "small" | "medium" | "large" | "xl" | "2xl" | "3xl" |
                          "4xl"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>paddingLeft</Text>
                      </Td>
                      <Td>
                        <Text>Adds padding-left inside the box.</Text>
                      </Td>
                      <Td>
                        <Text>
                          "small" | "medium" | "large" | "xl" | "2xl" | "3xl" |
                          "4xl"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>paddingRight</Text>
                      </Td>
                      <Td>
                        <Text>Adds padding-right inside the box.</Text>
                      </Td>
                      <Td>
                        <Text>
                          "small" | "medium" | "large" | "xl" | "2xl" | "3xl" |
                          "4xl"
                        </Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>border</Text>
                      </Td>
                      <Td>
                        <Text>Adds a border around the box.</Text>
                      </Td>
                      <Td>
                        <Text>Boolean</Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text>expand</Text>
                      </Td>
                      <Td>
                        <Text>
                          Expands the box along the main axis (direction axis)
                          to fill available space. (Sets flex to 1.)
                        </Text>
                      </Td>
                      <Td>
                        <Text>Boolean</Text>
                      </Td>
                      <Td></Td>
                    </Tr>
                  </TBody>
                </Table>
                <Text type="light" italic>
                  Note: the absence of a margin prop is intentional. Exporting a
                  component using outer margin or any spacing around its
                  contents is considered a bad practice since it makes it harder
                  for its container to control the layout.
                </Text>
              </Box>

              <Box gap="large">
                <Text type="h4">Size Aliases</Text>
                <Text>
                  Props with size values like padding and gap use a set of
                  standardized string aliases instead of number values. This is
                  so that we have a predefined standard scaling system. They
                  work in increments of 8px, e.g. "medium" is 8px, "large" is
                  16px, and so on. Here's the full set and the equivalent px
                  values:
                </Text>

                <Box direction="row" gap="xl">
                  <Box gap="small">
                    <Text>"small"</Text>
                    <Text>"medium"</Text>
                    <Text>"large"</Text>
                    <Text>"xl"</Text>
                    <Text>"2xl"</Text>
                    <Text>"3xl"</Text>
                    <Text>"4xl"</Text>
                  </Box>
                  <Box gap="small">
                    <Text>4px</Text>
                    <Text>8px</Text>
                    <Text>16px</Text>
                    <Text>24px</Text>
                    <Text>32px</Text>
                    <Text>40px</Text>
                    <Text>48px</Text>
                  </Box>
                </Box>
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
                    <AppIcon />
                  </Box>
                  <Box direction="row" padding="medium" gap="medium" border>
                    <Box padding="medium" gap="medium" border>
                      <AppIcon />
                    </Box>
                    <Box padding="medium" gap="medium" border>
                      <AppIcon />
                    </Box>
                  </Box>
                  <Box direction="row" padding="medium" gap="medium" border>
                    <Box padding="medium" gap="medium" border>
                      <Box padding="medium" border>
                        <AppIcon />
                      </Box>
                      <Box padding="medium" border>
                        <AppIcon />
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
                      <AppIcon />
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
