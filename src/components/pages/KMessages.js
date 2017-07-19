import React from 'react';
import {Page, ContentBlock, Navbar, Messages, Message} from 'framework7-react';

export const KMessages = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Messages>
              <Message name="John" text="Hello, Kate!" type="received"></Message>
              <Message name="Kate" text="Hi, John!" type="sent"></Message>
            </Messages>
        </Page>
    );
};
