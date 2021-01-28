import React from 'react';
import { Demo, Snippet } from '../../../components/Demo';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import IconSuccess from '@cjdev/visual-stack/lib/components/IconSuccess';
import { Button } from '@cjdev/visual-stack/lib/components/Button';
import { Box } from '@cjdev/visual-stack';
import Text from '@cjdev/visual-stack/lib/experimental/Text';

export default () => {
  return (
    <Demo srcFile="/samples/src/containers/Components/Docs/box.js">
      {snippets => (
        <div>
          <Panel>
            <Body>
              <Text>
                Primitive layout component that renders a flex container with
                standardized styling props.
              </Text>
            </Body>
          </Panel>
          <Panel>
            <Header>Examples</Header>
            <Body>
              <Snippet tag="s21" src={snippets} />
              {/* s21:start */}
              <Box border gap="large" padding="xl" paddingTop="2xl">
                <Box direction="right" gap="medium" align="center">
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
                <Box justify="end" direction="right" gap="medium">
                  <Button type="text">Close</Button>
                  <Button type="solid-primary">Submit</Button>
                </Box>
              </Box>
              {/* s21:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Border</Header>
            <Body>
              Adds a border.
              <Snippet tag="s2" src={snippets} />
              {/* s2:start */}
              <Box border>Lorem Ipsum</Box>
              {/* s2:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Direction</Header>
            <Body>
              Sets the direction in which the children are laid out. Values can
              be one of "down", "right", "left", and "up". It defaults to
              "down".
              <Snippet tag="s3" src={snippets} />
              {/* s3:start */}
              <Box border>
                <Text>Lorem Ipsum</Text>
                <Text>Lorem Ipsum</Text>
              </Box>
              {/* s3:end */}
              <Snippet tag="s4" src={snippets} />
              {/* s4:start */}
              <Box direction="right" border>
                <Text>Lorem Ipsum</Text>
                <Text>Lorem Ipsum</Text>
              </Box>
              {/* s4:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Padding</Header>
            <Body>
              Adds padding inside the border of the box. Available props are
              padding, paddingTop, paddingBottom, paddingLeft, and paddingRight.
              Values can be one of "small" (4px), "medium" (8px), "large"
              (16px), "xl" (24px), "2xl" (32px), "3xl" (40px), "4xl" (48px).
              <Snippet tag="s5" src={snippets} />
              {/* s5:start */}
              <Box border padding="medium">
                Lorem Ipsum
              </Box>
              {/* s5:end */}
              <Snippet tag="s6" src={snippets} />
              {/* s6:start */}
              <Box border padding="small">
                Lorem Ipsum
              </Box>
              {/* s6:end */}
              <Snippet tag="s7" src={snippets} />
              {/* s7:start */}
              <Box border padding="large">
                Lorem Ipsum
              </Box>
              {/* s7:end */}
              <Snippet tag="s8" src={snippets} />
              {/* s8:start */}
              <Box border padding="xl" paddingTop="2xl">
                Lorem Ipsum
              </Box>
              {/* s8:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Gap</Header>
            <Body>
              Adds spacing between children. Values can be one of "small" (4px),
              "medium" (8px), "large" (16px), "xl" (24px), "2xl" (32px), "3xl"
              (40px), or "4xl" (48px).
              <Snippet tag="s9" src={snippets} />
              {/* s9:start */}
              <Box gap="medium">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s9:end */}
              <Snippet tag="s10" src={snippets} />
              {/* s10:start */}
              <Box gap="xl">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s10:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Align</Header>
            <Body>
              Aligns children along the cross axis (perpendicular to the
              direction). Values can be one of "start", "center", or "end".
              <Snippet tag="s11" src={snippets} />
              {/* s11:start */}
              <Box gap="medium" align="center">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s11:end */}
              <Snippet tag="s12" src={snippets} />
              {/* s12:start */}
              <Box gap="medium" align="start">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* ss12:end */}
              <Snippet tag="s13" src={snippets} />
              {/* s13:start */}
              <Box gap="medium" align="end">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s13:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Justify</Header>
            <Body>
              Justifies children along the main axis (direction axis). Values
              can be one of "start", "center", "end", "space-around",
              "space-between", or "space-evenly".
              <Snippet tag="s14" src={snippets} />
              {/* s14:start */}
              <Box direction="right" gap="medium" justify="center">
                <Box direction="right" border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box direction="right" border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s14:end */}
              <Snippet tag="s15" src={snippets} />
              {/* s15:start */}
              <Box direction="right" gap="medium" justify="start">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s15:end */}
              <Snippet tag="s16" src={snippets} />
              {/* s16:start */}
              <Box direction="right" gap="medium" justify="end">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s16:end */}
              <Snippet tag="s17" src={snippets} />
              {/* s17:start */}
              <Box direction="right" gap="medium" justify="space-around">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s17:end */}
              <Snippet tag="s18" src={snippets} />
              {/* s18:start */}
              <Box direction="right" gap="medium" justify="space-between">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s18:end */}
              <Snippet tag="s19" src={snippets} />
              {/* s19:start */}
              <Box direction="right" gap="medium" justify="space-evenly">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s19:end */}
            </Body>
          </Panel>
          <Panel>
            <Header>Grow</Header>
            <Body>
              Grows component to fill available space in the container component
              (sets flex to 1).
              <Snippet tag="s20" src={snippets} />
              {/* s20:start */}
              <Box direction="right" gap="medium">
                <Box border padding="medium">
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border grow padding="medium" align="center">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s20:end */}
            </Body>
          </Panel>
        </div>
      )}
    </Demo>
  );
};
