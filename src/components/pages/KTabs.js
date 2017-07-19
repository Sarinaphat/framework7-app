import React from 'react';
import {Page, ContentBlock, Navbar, Tabs, Tab} from 'framework7-react';

export const KTabs = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Tabs>
              <Tab id="tab1" active>Tab 1 content...</Tab>
              <Tab id="tab2">Tab 2 content...</Tab>
            </Tabs>
        </Page>
    );
};
