import React from 'react';
import {Page, ContentBlock, Navbar, Panel} from 'framework7-react';

export const KPanel = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Panel left reveal>
              <p>Hello</p>
            </Panel>


            <Panel right cover layout="dark">

            </Panel>
        </Page>
    );
};
