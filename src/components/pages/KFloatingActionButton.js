import React from 'react';
import {Page, ContentBlock, Navbar, Fab, Icon} from 'framework7-react';

export const KFloatingActionButton = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Fab color="pink" onClick={{}}>
              <Icon icon="icon-plus"></Icon>
            </Fab>
        </Page>
    );
};
