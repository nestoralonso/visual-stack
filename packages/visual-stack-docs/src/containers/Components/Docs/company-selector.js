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
        <br/>
        <Snippet tag="s4" src={snippets} />
        {/* s4:start */}
        <CompanySelector
          selectedCompany={{ name: 'Foobar', id: '111111' }}
          companies={[
            { name: 'Foobar', id: '111111' },
            { name: 'Bazbox', id: '222222' },
          ]}
        />
        {/* s4:end */}
        <br/>
        <Snippet tag="s2" src={snippets} />
        {/* s2:start */}
        <CompanySelector
          selectedCompany={{ name: 'Foobar', id: '111111' }}
          companies={[
            { name: 'Foobar', id: '111111' },
            { name: 'Bazbox', id: '222222' },
          ]}
          selectText="Look!"
          searchAccountsText="These are the accounts."
        />
        {/* s2:end */}
        <br/>
        <Snippet tag="s3" src={snippets} />
        {/* s3:start */}
        <CompanySelector
          selectedCompany={{ name: 'Foobar', id: '111111' }}
          companies={[
            { name: 'Foobar', id: '111111' }
          ]}
        />
        {/* s3:end */}
      </>
    )}
  </Demo>
);
