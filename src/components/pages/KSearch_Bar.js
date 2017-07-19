import React from 'react';
import {Page, ContentBlock, Navbar, Searchbar} from 'framework7-react';

export const KSearch_Bar = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Searchbar
              cancelLink="Cancel"
              placeholder="Search in items"
              clearButton={true}
            />
        </Page>
    );
};
