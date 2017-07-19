import React from 'react';
import {Page, ContentBlock, Navbar, Card} from 'framework7-react';

export const KCard = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Card title="Card Title" content="Card Content" footer="Card Footer"></Card>
            <Card title="Card Title" content="Card Content" footer="Card Footer"></Card>
        </Page>
    );
};
