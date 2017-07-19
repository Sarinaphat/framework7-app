import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const KList = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List>
              <ListItem title="Item 1"></ListItem>
              <ListItem title="Item 2"></ListItem>
            </List>
        </Page>
    );
};
