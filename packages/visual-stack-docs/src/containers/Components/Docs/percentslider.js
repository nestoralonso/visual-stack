import React, { useState } from 'react';
import { Body, Header, Panel } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

/* s1:start */
import { PercentSlider } from '@cjdev/visual-stack/lib/components/PercentSlider';
/* s1:end */

export default () => {
  /* s2:start */
  const [percent, setPercent] = useState(50);
  /* s2:end */

  return (
    <Demo srcFile="/samples/src/containers/Components/Docs/percentslider.js">
      {snippets => {
        return (
          <div>
            <Panel>
              <Header>Percent Slider</Header>
              <Body>
                <div style={{width: "300px"}}>
                  {/* s3:start */}
                  <PercentSlider
                    label="Example Percent"
                    id="slider-example"
                    value={percent}
                    onChange={setPercent}
                  />
                  {/* s3:end */}
                </div>
                
                <Snippet tag="s1" src={snippets} />
                <Snippet tag="s2" src={snippets} />
                <Snippet tag="s3" src={snippets} />
              </Body>
            </Panel>
          </div>
        );
      }}
    </Demo>
  );
};
