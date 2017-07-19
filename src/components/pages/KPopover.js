import React from 'react';
import {Page, ContentBlock, Navbar, Popover, Pages} from 'framework7-react';

export const KPopover = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Pages Popover>
              <div class="navbar">
                <div class="navbar-inner">
                  <div class="left"><a href="#" class="link open-about">About</a></div>
                  <div class="center">Popover</div>
                  <div class="right"><a href="#" class="link open-about">Links</a></div>
                </div>
                </div>
                <div class="page-content">
                <div class="content-block">
                  <p><a href="#" class="open-about">Open About Popover</a></p>
                  <p><a href="#" class="open-links">Open Links Popover</a></p>
                  <p>Praesent urna mi, sodales ac dolor vitae, dictum mattis sem. Mauris a dui faucibus, condimentum arcu quis, porta felis. Sed at metus arcu. Maecenas sodales tellus risus, id <a href="#" class="open-about">About</a> nibh iaculis quis. Suspendisse dignissim ante lobortis, molestie nibh id, pharetra risus. Proin blandit neque nec nibh scelerisque, eu vulputate ipsum malesuada. Phasellus sapien diam, fermentum eget ornare in, <a href="#" class="open-links">Links</a> rutrum vel justo. Integer accumsan posuere quam.</p>
                </div>
                </div>
                </Pages>

        </Page>
    );
};
