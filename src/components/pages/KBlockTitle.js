import React from 'react';
import {Page, Navbar, ContentBlockTitle, ContentBlock, List} from 'framework7-react';

export const KBlockTitle = () => {
    return (
        <Page>
          <Navbar title="About" backLink="Back" sliding />
            <ContentBlockTitle>Block Title</ContentBlockTitle>
            <ContentBlock>...</ContentBlock>

            <ContentBlockTitle>Another Block Title</ContentBlockTitle>
            <List>Here comes another text block additionaly wrapped with "content-block-inner".
            Praesent nec imperdiet diam. Maecenas vel lectus porttitor, consectetur magna nec,
            viverra sem. Aliquam sed risus dolor. Morbi tincidunt ut libero id sodales.
            Integer blandit varius nisi quis consectetur.</List>

        </Page>
    );
};
