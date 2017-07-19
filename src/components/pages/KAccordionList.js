import React from 'react';
import {Page, ContentBlock, NavbarList, Navbar, List, ListItem, AccordionContent} from 'framework7-react';

export const KAccordionList = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List accordion>
              <ListItem accordionItem title="Accordion Item 1">
                <AccordionContent>
                  <ContentBlock>
                    <p>Accordion Item 1 Content</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
                  </ContentBlock>
                </AccordionContent>
              </ListItem>
              <ListItem accordionItem title="Accordion Item 2">
                <AccordionContent>
                  <ContentBlock>
                    <p>Accordion Item 2 Content</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
                  </ContentBlock>
                </AccordionContent>
              </ListItem>
            </List>
        </Page>
    );
};
