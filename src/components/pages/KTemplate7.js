import React from 'react';
import {Page, ContentBlock, Navbar, Template7Template, Card} from 'framework7-react';

export const KTemplate7 = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Template7Template>
              <Card title="Title" content={'Hello, {{name}}'} footer="Footer"></Card>
            </Template7Template>
        </Page>
    );
};
