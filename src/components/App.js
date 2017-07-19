import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import {routes} from '../routes';

const LeftPanel = (props, context) => (
	<Panel left reveal layout="dark">
		<View id="left-panel-view" navbarThrough dynamicNavbar="true">
			{context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
					<ContentBlock inner>
						<p>Left panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

LeftPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

const RightPanel = (props, context) => (
	<Panel right cover layout="dark">
		<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
			{context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding /> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Right Panel" sliding /> : null}
					<ContentBlock>
						<p>Right panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

RightPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavLeft>
							<Link icon="icon-bars" openPanel="left" />
						</NavLeft>
						<NavCenter sliding>Framework7</NavCenter>
						<NavRight>
							<Link icon="icon-bars" openPanel="right"></Link>
						</NavRight>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavLeft>
									<Link icon="icon-bars" openPanel="left" />
								</NavLeft>
								<NavCenter sliding>Framework7</NavCenter>
								<NavRight>
									<Link icon="icon-bars" openPanel="right"></Link>
								</NavRight>
							</Navbar>
						) : null}
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
							<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
						</ContentBlock>
						<ContentBlockTitle>Navigation</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About"></ListItem>
							<ListItem link="/form/" title="Form"></ListItem>
							<ListItem link="/accordion/" title="Accordion"></ListItem>
							<ListItem link="/badge/" title="Badge"></ListItem>
							<ListItem link="/blockTitle/" title="BlockTitle"></ListItem>
							<ListItem link="/block/" title="Block"></ListItem>
							<ListItem link="/button/" title="Button"></ListItem>
							<ListItem link="/card/" title="Card"></ListItem>
							<ListItem link="/chips/" title="Chips"></ListItem>
							<ListItem link="/fab/" title="Fab"></ListItem>
							<ListItem link="/list/" title="List"></ListItem>
							<ListItem link="/form_elements/" title="Form Elements"></ListItem>
							<ListItem link="/smartselect/" title="SmartSelect"></ListItem>
							<ListItem link="/icon/" title="Icon"></ListItem>
							<ListItem link="/grid/" title="Grid"></ListItem>
							<ListItem link="/listreact/" title="List"></ListItem>
							<ListItem link="/listitem/" title="ListItem"></ListItem>
							<ListItem link="/listbutton/" title="ListButton"></ListItem>
							<ListItem link="/accordionList/" title="AccordionList"></ListItem>
							<ListItem link="/contactslist/" title="ContactsList"></ListItem>
							<ListItem link="/sortablelist/" title="SortableList"></ListItem>
							<ListItem link="/swipeoutlist/" title="Swipeout List"></ListItem>
							<ListItem link="/virtuallist/" title="Virtual List"></ListItem>
							<ListItem link="/link/" title="Link"></ListItem>
							<ListItem link="/message/" title="Message"></ListItem>
							<ListItem link="/message_bar" title="Message Bar"></ListItem>
							<ListItem link="/action_sheet" title="Action Sheet"></ListItem>
							<ListItem link="/login" title="Login"></ListItem>
							<ListItem link="/picker_modal" title="Picker Modal"></ListItem>
							<ListItem link="/popover" title="Popover"></ListItem>
							<ListItem link="/popup" title="Popup"></ListItem>
							<ListItem link="/navbar" title="Navbar"></ListItem>
							<ListItem link="/toolbar" title="Toolbar"></ListItem>
							<ListItem link="/sub_navbar" title="Sub Navbar"></ListItem>
							<ListItem link="/search_bar" title="Search Bar"></ListItem>
							<ListItem link="/swiper" title="Swiper"></ListItem>
							<ListItem link="/tabs" title="Tabs"></ListItem>
							<ListItem link="/template" title="Template7"></ListItem>
							<ListItem link="/timeline" title="Timeline"></ListItem>

						</List>
						<ContentBlockTitle>Side Panels</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPanel="left">Left Panel</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openPanel="right">Right Panel</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
						<ContentBlockTitle>Modals</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPopup="#popup">Popup</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openLoginScreen="#login-screen">Login Screen</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

const AppPopup = () => (
	<Popup id="popup">
		<View navbarFixed>
			<Pages>
				<Page>
					<Navbar title="Popup">
						<NavRight>
							<Link closePopup>Close</Link>
						</NavRight>
					</Navbar>
					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
				</Page>
			</Pages>
		</View>
	</Popup>
);

const AppLoginScreen = () => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>Username</FormLabel>
							<FormInput name="username" placeholder="Username" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput name="password" type="password" placeholder="Password" />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
						<ListLabel>
							<p>Click Sign In to close Login Screen</p>
						</ListLabel>
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

export const App = () => (
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="material" routes={routes}>
		<Statusbar />
		<LeftPanel />
		<RightPanel />
		<MainViews />
		<AppPopup />
		<AppLoginScreen />
	</Framework7App>
);
