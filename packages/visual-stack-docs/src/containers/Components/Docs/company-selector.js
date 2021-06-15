import React from 'react';
import { Demo, Snippet } from '../../../components/Demo';

/* s1:start */
import { CompanySelector } from '@cjdev/visual-stack';
/* s1:end */

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/company-selector.js">
    {snippets => (
      <>
        <Snippet tag="s1" src={snippets} />
        <Snippet tag="s2" src={snippets} />
        {/* s2:start */}
        <CompanySelector
          selectedCompany={{ name: 'Foobar', id: '111111' }}
          companies={[
            { name: 'Foobar', id: '111111' },
            { name: 'Bazbox', id: '222222' },
          ]}
        />
        {/* s2:end */}
      </>
    )}
  </Demo>
);
