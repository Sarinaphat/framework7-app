import React from 'react';
import {Page, ContentBlock, Navbar,List, ListButton} from 'framework7-react';

export const KListButton = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List>
              <ListButton>Button 1</ListButton>
              <ListButton>Button 2</ListButton>
            </List>
        </Page>
    );
};
