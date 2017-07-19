import React from 'react';
import {Page, ContentBlock, Navbar,Accordion,AccordionItem,AccordionToggle,AccordionContent} from 'framework7-react';

export const KAccordion = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Accordion>
              <AccordionItem>
                <AccordionToggle>Item 1</AccordionToggle>
                <AccordionContent>
                  Item 1 content...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionToggle>Item 2</AccordionToggle>
                <AccordionContent>
                  Item 2 content...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </Page>
    );
};
