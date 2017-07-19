import React from 'react';
import {Page, ContentBlock, Navbar, GridRow, GridCol} from 'framework7-react';

export const KGrid = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <GridRow>
              <GridCol>Col 1</GridCol>
              <GridCol>Col 2</GridCol>
              <GridCol>Col 3</GridCol>
            </GridRow>
        </Page>
    );
};
