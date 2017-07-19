import React from 'react';
import {Page, ContentBlock, Navbar, Badge} from 'framework7-react';

export const KBadge = () => {
    return (
        <Page>
        <Navbar title="About" backLink="Back" sliding />
              <Badge>5</Badge>
              <Badge color="red">5</Badge>
        </Page>
    );
};
