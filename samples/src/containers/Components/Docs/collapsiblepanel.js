import * as React from 'react';
import { Body, Panel, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { CollapsiblePanel, PureCollapsiblePanel } from '@cjdev/visual-stack/lib/components/CollapsiblePanel';
import './collapsiblepanel.css';
import {
  FieldContent,
  Input,
  Label,
  ChoiceInput,
  Field,
} from '@cjdev/visual-stack/lib/components/Form';
import { Demo, Snippet } from '../../../components/Demo';
import SVG from 'react-inlinesvg';
import sampleIconPath from './reporting.svg';
import { useState } from 'react';

const SampleIcon = () => {
  return <SVG src={sampleIconPath} />;
};

export default () => {

  const [ collapsed, setCollapsed ] = useState(false);

  return (
    <Demo srcFile="/samples/src/containers/Components/Docs/collapsiblepanel.js">
      {snippets => (
        <Panel>
          <Header>Collapsible Panels</Header>
          <Body paddingSize="none">

            {/* s1:start */}
            <PureCollapsiblePanel onChange={setCollapsed} collapsed={collapsed} title="Pure Collapsible Panel">
              <div>Use the PureCollapsiblePanel if you want to manage the 'collapsed' state yourself.  Unlike CollapsiblePanel, it
                does not keep track of the state itself and merely calls you back with the state via 'onChange' when a
                user clicks on it.
              </div>
            </PureCollapsiblePanel>
            {/* s1:end */}
            <Snippet tag="s1" src={snippets} />


            {/* s2:start */}
            <CollapsiblePanel
              title={
                <h3 className="inline-remove-margin">Collapsible Panel 1</h3>
              }
              initializedCollapsed={false}
            >
              <Field label="# of vacation days" help="Enter vacation rules">
                <FieldContent>
                  <ChoiceInput
                    name="vacationDays"
                    label="Unlimited"
                    value="unlimited"
                  />
                  <div>
                    <ChoiceInput
                      name="vacationDays"
                      label="Limit to"
                      value="limitTo"
                      className="inline-other-text-box-style"
                    />
                    <Input
                      name="days"
                      className="make-text-box-smaller-style"
                    />
                    <Label>days</Label>
                  </div>
                </FieldContent>
              </Field>
              <Field
                name="vacationtypes"
                label="Vacation Type"
                help="Choose all applicable"
                optional={true}
                optionalLabel="Optional"
              >
                <FieldContent>
                  <ChoiceInput
                    name="vacationtypes.cruise"
                    type="checkbox"
                    label="Cruise"
                    value="cruise"
                  />
                  <ChoiceInput
                    name="vacationtypes.hiking"
                    type="checkbox"
                    label="Hiking"
                    value="hiking"
                  />
                </FieldContent>
              </Field>
            </CollapsiblePanel>
            {/* s2:end */}
            <Snippet tag="s2" src={snippets} />

            {/* s3:start */}
            <CollapsiblePanel title="Collapsible Panel 2">
              <div className="summary-content">
                <Label>Default commissioning</Label>
                <Label fontWeight="normal">3%</Label>
              </div>
              <div className="summary-content">
                <Label>Situation 1</Label>
                <Label fontWeight="normal">4%</Label>
              </div>
              <div className="summary-content">
                <Label>Situation 2</Label>
                <Label fontWeight="normal">5%</Label>
              </div>
            </CollapsiblePanel>
            {/* s3:end */}
            <Snippet tag="s3" src={snippets} />

            {/* s4:start */}
            <CollapsiblePanel
              title="Collapsible Panel With Icon"
              titleIcon={<SampleIcon />}
            >
              <div className="summary-content">
                <Label>Default commissioning</Label>
                <Label fontWeight="normal">3%</Label>
              </div>
              <div className="summary-content">
                <Label>Situation 1</Label>
                <Label fontWeight="normal">4%</Label>
              </div>
              <div className="summary-content">
                <Label>Situation 2</Label>
                <Label fontWeight="normal">5%</Label>
              </div>
            </CollapsiblePanel>
            {/* s4:end */}
            <Snippet tag="s4" src={snippets} />

            {/* s5:start */}
            <CollapsiblePanel
              title={
                <h3 className="inline-remove-margin">
                  Collapsible Panel With Large Padding
                </h3>
              }
              titleIcon={<SampleIcon />}
              padding="large"
            >
              <div className="summary-content">
                <Label>Default commissioning</Label>
                <Label fontWeight="normal">3%</Label>
              </div>
              <div className="summary-content">
                <Label>Situation 1</Label>
                <Label fontWeight="normal">4%</Label>
              </div>
              <div className="summary-content">
                <Label>Situation 2</Label>
                <Label fontWeight="normal">5%</Label>
              </div>
            </CollapsiblePanel>
            {/* s5:end */}
            <Snippet tag="s5" src={snippets} />

          </Body>
        </Panel>
      )}
    </Demo>
  );
};
