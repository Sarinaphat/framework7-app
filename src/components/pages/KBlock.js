import React from 'react';
import {Page, ContentBlock, Navbar,ContentBlockTitle} from 'framework7-react';

export const KBlock = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <ContentBlock>...</ContentBlock>


            <ContentBlock inner>...</ContentBlock>


            <ContentBlockTitle>Block Title</ContentBlockTitle>
            <ContentBlock>...</ContentBlock>


            <ContentBlock inset>...</ContentBlock>
        </Page>
    );
};
