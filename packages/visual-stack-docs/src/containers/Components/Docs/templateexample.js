import React from 'react';
import { Body, Header, Panel } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, MarginTopSnippet as Snippet } from '../../../components/Demo';

/* s1:start */
// uncomment line below
// import TemplateExample from '@cjdev/visual-stack/lib/components/TemplateExample';
/* s1:end */

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/templateexample.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Header>Template Example</Header>
            <Body>
              {/* s2:start */}
              <div>
                <h1>Add example of your component here</h1>
              </div>
              {/* s2:end */}
              <Snippet tag="s1" src={snippets} />
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
