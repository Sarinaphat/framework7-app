import React from 'react';
import {Page, ContentBlock, Navbar, Timeline, TimelineItem} from 'framework7-react';

export const KTimeline = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Timeline>
              <TimelineItem day="21" month="DEC" inner content="Some text goes here"></TimelineItem>
              <TimelineItem day="22" month="DEC" inner content="Another text goes here"></TimelineItem>
              ...
            </Timeline>
        </Page>
    );
};
