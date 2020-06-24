import React from 'react';
import { Demo, Snippet } from '../../../components/Demo';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import Box from '@cjdev/visual-stack/lib/experimental/Box';
import Text from '@cjdev/visual-stack/lib/experimental/Text';

export default () => {
  return (
    <Demo srcFile="/samples/src/containers/Experimental/Docs/box.js">
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
            <Header>Default</Header>
            <Body>
              {/* s1:start */}
              <Box>
                <Text>Lorem Ipsum</Text>
              </Box>
              {/* s1:end */}
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Border</Header>
            <Body>
              {/* s2:start */}
              <Box border>Lorem Ipsum</Box>
              {/* s2:end */}
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Direction</Header>
            <Body>
              {/* s3:start */}
              <Box border direction="row">
                <Text>Lorem Ipsum</Text>
                <Text>Lorem Ipsum</Text>
              </Box>
              {/* s3:end */}
              <Snippet tag="s3" src={snippets} />

              {/* s4:start */}
              <Box border direction="column">
                <Text>Lorem Ipsum</Text>
                <Text>Lorem Ipsum</Text>
              </Box>
              {/* s4:end */}
              <Snippet tag="s4" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Padding</Header>
            <Body>
              {/* s6:start */}
              <Box border padding>
                Lorem Ipsum
              </Box>
              {/* s6:end */}
              <Snippet tag="s6" src={snippets} />

              {/* s7:start */}
              <Box border padding="small">
                Lorem Ipsum
              </Box>
              {/* s7:end */}
              <Snippet tag="s7" src={snippets} />

              {/* s8:start */}
              <Box border padding="large">
                Lorem Ipsum
              </Box>
              {/* s8:end */}
              <Snippet tag="s8" src={snippets} />

              {/* s9:start */}
              <Box border padding="xl">
                Lorem Ipsum
              </Box>
              {/* s9:end */}
              <Snippet tag="s9" src={snippets} />

              {/* s10:start */}
              <Box border padding="xxl">
                Lorem Ipsum
              </Box>
              {/* s10:end */}
              <Snippet tag="s10" src={snippets} />

              {/* s11:start */}
              <Box border paddingLeft>
                Lorem Ipsum
              </Box>
              {/* s11:end */}
              <Snippet tag="s11" src={snippets} />

              {/* s12:start */}
              <Box border paddingLeft="small">
                Lorem Ipsum
              </Box>
              {/* s12:end */}
              <Snippet tag="s12" src={snippets} />

              {/* s13:start */}
              <Box border paddingLeft="large">
                Lorem Ipsum
              </Box>
              {/* s13:end */}
              <Snippet tag="s13" src={snippets} />

              {/* s14:start */}
              <Box border paddingLeft="xl">
                Lorem Ipsum
              </Box>
              {/* s14:end */}
              <Snippet tag="s14" src={snippets} />

              {/* s15:start */}
              <Box border paddingLeft="xxl">
                Lorem Ipsum
              </Box>
              {/* s15:end */}
              <Snippet tag="s15" src={snippets} />

              {/* s16:start */}
              <Box direction="row">
                <Box border paddingRight>
                  Lorem Ipsum
                </Box>
                <Text>Lorem ipsum</Text>
              </Box>
              {/* s16:end */}
              <Snippet tag="s16" src={snippets} />

              {/* s17:start */}
              <Box direction="row">
                <Box border paddingRight="small">
                  Lorem Ipsum
                </Box>
                <Text>Lorem ipsum</Text>
              </Box>
              {/* s17:end */}
              <Snippet tag="s17" src={snippets} />

              {/* s18:start */}
              <Box direction="row">
                <Box border paddingRight="large">
                  Lorem Ipsum
                </Box>
                <Text>Lorem ipsum</Text>
              </Box>
              {/* s18:end */}
              <Snippet tag="s18" src={snippets} />

              {/* s19:start */}
              <Box direction="row">
                <Box border paddingRight="xl">
                  Lorem Ipsum
                </Box>
                <Text>Lorem ipsum</Text>
              </Box>
              {/* s19:end */}
              <Snippet tag="s19" src={snippets} />

              {/* s20:start */}
              <Box direction="row">
                <Box border paddingRight="xxl">
                  Lorem Ipsum
                </Box>
                <Text>Lorem ipsum</Text>
              </Box>
              {/* s20:end */}
              <Snippet tag="s20" src={snippets} />

              {/* s21:start */}
              <Box border paddingBottom>
                Lorem Ipsum
              </Box>
              {/* s21:end */}
              <Snippet tag="s21" src={snippets} />

              {/* s22:start */}
              <Box border paddingBottom="small">
                Lorem Ipsum
              </Box>
              {/* s22:end */}
              <Snippet tag="s22" src={snippets} />

              {/* s23:start */}
              <Box border paddingBottom="large">
                Lorem Ipsum
              </Box>
              {/* s23:end */}
              <Snippet tag="s23" src={snippets} />

              {/* s24:start */}
              <Box border paddingBottom="xl">
                Lorem Ipsum
              </Box>
              {/* s24:end */}
              <Snippet tag="s24" src={snippets} />

              {/* s25:start */}
              <Box border paddingBottom="xxl">
                Lorem Ipsum
              </Box>
              {/* s25:end */}
              <Snippet tag="s25" src={snippets} />

              {/* s26:start */}
              <Box border paddingTop>
                Lorem Ipsum
              </Box>
              {/* s26:end */}
              <Snippet tag="s26" src={snippets} />

              {/* s27:start */}
              <Box border paddingTop="small">
                Lorem Ipsum
              </Box>
              {/* s27:end */}
              <Snippet tag="s27" src={snippets} />

              {/* s28:start */}
              <Box border paddingTop="xl">
                Lorem Ipsum
              </Box>
              {/* s28:end */}
              <Snippet tag="s28" src={snippets} />

              {/* s29:start */}
              <Box border paddingTop="xxl">
                Lorem Ipsum
              </Box>
              {/* s29:end */}
              <Snippet tag="s29" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Gap</Header>
            <Body>
              {/* s30:start */}
              <Box gap>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s30:end */}
              <Snippet tag="s30" src={snippets} />

              {/* s31:start */}
              <Box gap="small">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s31:end */}
              <Snippet tag="s31" src={snippets} />

              {/* s32:start */}
              <Box gap="large">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s32:end */}
              <Snippet tag="s32" src={snippets} />

              {/* s33:start */}
              <Box gap="xl">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s33:end */}
              <Snippet tag="s33" src={snippets} />

              {/* s34:start */}
              <Box gap="xxl">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s34:end */}
              <Snippet tag="s34" src={snippets} />

              {/* s35:start */}
              <Box direction="column" gap>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s35:end */}
              <Snippet tag="s35" src={snippets} />

              {/* s36:start */}
              <Box direction="column" gap="small">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s36:end */}
              <Snippet tag="s36" src={snippets} />

              {/* s37:start */}
              <Box direction="column" gap="xl">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s37:end */}
              <Snippet tag="s37" src={snippets} />

              {/* s38:start */}
              <Box direction="column" gap="xxl">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s38:end */}
              <Snippet tag="s38" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Align</Header>
            <Body>
              {/* s39:start */}
              <Box direction="column" gap align="center">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s39:end */}
              <Snippet tag="s39" src={snippets} />

              {/* s40:start */}
              <Box direction="column" gap align="start">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s40:end */}
              <Snippet tag="s40" src={snippets} />

              {/* s41:start */}
              <Box direction="column" gap align="end">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s41:end */}
              <Snippet tag="s41" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Justify</Header>
            <Body>
              {/* s42:start */}
              <Box gap justify="center">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s42:end */}
              <Snippet tag="s42" src={snippets} />

              {/* s43:start */}
              <Box gap justify="start">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s43:end */}
              <Snippet tag="s43" src={snippets} />

              {/* s44:start */}
              <Box gap justify="end">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s44:end */}
              <Snippet tag="s44" src={snippets} />

              {/* s45:start */}
              <Box gap justify="space-around">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s45:end */}
              <Snippet tag="s45" src={snippets} />

              {/* s46:start */}
              <Box gap justify="space-between">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s46:end */}
              <Snippet tag="s46" src={snippets} />

              {/* s47:start */}
              <Box gap justify="space-evenly">
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s47:end */}
              <Snippet tag="s47" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Grow</Header>
            <Body>
              {/* s48:start */}
              <Box gap>
                <Box border padding>
                  <Text>Lorem Ipsum</Text>
                </Box>
                <Box border grow padding justify="center">
                  <Text>Lorem Ipsum</Text>
                </Box>
              </Box>
              {/* s48:end */}
              <Snippet tag="s48" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>Nested Boxes</Header>
            <Body>
              {/* s49:start */}
              <Box gap>
                <Box border padding>
                  A
                </Box>
                <Box direction="column" gap grow>
                  <Box border padding>
                    B
                  </Box>
                  <Box border padding>
                    C
                  </Box>
                </Box>
                <Box border padding>
                  D
                </Box>
              </Box>
              {/* s49:end */}
              <Snippet tag="s49" src={snippets} />
            </Body>
          </Panel>
        </div>
      )}
    </Demo>
  );
};
