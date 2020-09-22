import React from 'react';
import { Body, Panel, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
import {
  ToolTipWithIcon,
  ToolTip,
  Hover,
  Instructions,
} from '@cjdev/visual-stack/lib/components/ToolTip';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/tooltips.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Header>Tool Tips with Icon</Header>
            <Body>
              <p>
                The Tool Tip allows you to place a information icon, when you
                hover over the info icon the tool tip will appear. The fill
                color for the icon is inherited by the text color. The direction
                must be specifyfied through the direction prop, see examples.
              </p>
              {/* s1:start */}
              <p>
                This is something that needs more infomation
                <ToolTipWithIcon>Information Down</ToolTipWithIcon>
              </p>

              <p>
                This is something that needs more infomation
                <ToolTipWithIcon direction="top">
                  Information Up
                </ToolTipWithIcon>
              </p>

              <p>
                This is something that needs more infomation
                <ToolTipWithIcon direction="left">
                  Information Left
                </ToolTipWithIcon>
              </p>

              <p>
                This is something that needs more infomation
                <ToolTipWithIcon direction="right">
                  Information Right
                </ToolTipWithIcon>
              </p>
              {/* s1:end */}
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>Tool Tips with Hoverable Content</Header>
            <Body>
              <p>
                The Tool Tip can be used with text/HTML elements in place of the
                icon. You can actually specify any html or JSX inside the Hover
                component. You can see that the tool tip pop up will contain the
                contents of the Instructions component.
              </p>
              {/* s2:start */}
              <p>
                <ToolTip direction="top">
                  <Hover>Hover here</Hover>
                  <Instructions>Information Up</Instructions>
                </ToolTip>

                <span style={{ margin: '100px' }}></span>

                <ToolTip direction="left">
                  <Hover>Hover here</Hover>
                  <Instructions>Information Left</Instructions>
                </ToolTip>
              </p>

              <p>
                <ToolTip>
                  <Hover>Hover here</Hover>
                  <Instructions>Information Down</Instructions>
                </ToolTip>

                <span style={{ margin: '100px' }}></span>

                <ToolTip direction="right">
                  <Hover>Hover here</Hover>
                  <Instructions>Information Right</Instructions>
                </ToolTip>
              </p>
              {/* s2:end */}
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>Width, Offset, Gap</Header>
            <Body>
              <p>
                You can can adjust the width, offset, gap with the coresponding
                props width, offset, offestGap.
              </p>
              {/* s3:start */}
              <p>
                <ToolTip width="200">
                  <Hover>Lots of Instructions</Hover>
                  <Instructions>
                    In most cases you will want to specify a width for the tool
                    tip. In some cases you will need to also provide an offset
                  </Instructions>
                </ToolTip>
              </p>

              <p>
                <ToolTip width="200" offset="100">
                  <Hover>Offset Instuctions</Hover>
                  <Instructions>
                    This can be helpful if the hoverable content is against an
                    edge and the instructions are cut off or the instructions
                    need to be adjusted for asthetic resons.
                  </Instructions>
                </ToolTip>
              </p>

              <p>
                <ToolTipWithIcon width="200" offset="250">
                  This can be helpful if the hoverable content is against an
                  edge and the instructions are cut off or the instructions need
                  to be adjusted for asthetic resons.
                </ToolTipWithIcon>
              </p>

              <p>
                <ToolTipWithIcon direction="right" width="200" offsetGap="250">
                  This can be helpful if the tool tip appears too close to the
                  hoverable content.
                </ToolTipWithIcon>
              </p>

              <p>
                Changing the iconSize can adjust to suit the text it's next to
                <ToolTipWithIcon direction="right" width="90" iconSize="14">
                  smaller icon
                </ToolTipWithIcon>
              </p>

              <p>
                Changing the iconSize can adjust to suit the text it's next to
                <ToolTipWithIcon
                  direction="right"
                  width="90"
                  iconSize="24"
                  style={{ margin: '5px' }}
                >
                  larger icon
                </ToolTipWithIcon>
              </p>
              {/* s3:end */}
              <Snippet tag="s3" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
