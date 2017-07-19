import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {KAccordion} from './components/pages/KAccordion';
import {KBadge} from './components/pages/KBadge';
import {KBlockTitle} from './components/pages/KBlockTitle';
import {KBlock} from './components/pages/KBlock';
import {KButton} from './components/pages/KButton';
import {KCard} from './components/pages/KCard';
import {KChips} from './components/pages/KChips';
import {KFloatingActionButton} from './components/pages/KFloatingActionButton';
import {KCheckboxes_Radios} from './components/pages/KCheckboxes_Radios';
import {KForm_Elements} from './components/pages/KForm_Elements';
import {KSmartSelect} from './components/pages/KSmartSelect';
import {KIcon} from './components/pages/KIcon';
import {KGrid} from './components/pages/KGrid';
import {KList} from './components/pages/KList';
import {KListItem} from './components/pages/KListItem';
import {KListButton} from './components/pages/KListButton';
import {KAccordionList} from './components/pages/KAccordionList';
import {KContactsList} from './components/pages/KContactsList';
import {KSortableList} from './components/pages/KSortableList';
import {KSwipeout_List} from './components/pages/KSwipeout_List';
import {KVirtual_List} from './components/pages/KVirtual_List';
import {KLink} from './components/pages/KLink';
import {KMessages} from './components/pages/KMessages';
import {KMessage_Bar} from './components/pages/KMessage_Bar';
import {KAction_Sheet} from './components/pages/KAction_Sheet';
import {KLogin} from './components/pages/KLogin';
import {KPicker_Modal} from './components/pages/KPicker_Modal';
import {KPopover} from './components/pages/KPopover';
import {KPopup} from './components/pages/KPopup';
import {KNavbar} from './components/pages/KNavbar';
import {KToolbar} from './components/pages/KToolbar';
import {KSub_Navbar} from './components/pages/KSub_Navbar';
import {KPanel} from './components/pages/KPanel';
// import {KPreloader} from './components/pages/KPreloader';
import {KSearch_Bar} from './components/pages/KSearch_Bar';
import {KSwiper} from './components/pages/KSwiper';
import {KTabs} from './components/pages/KTabs';
import {KTemplate7} from './components/pages/KTemplate7';
import {KTimeline} from './components/pages/KTimeline';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/accordion/',
    component: KAccordion
}, {
  path: '/badge/',
  component: KBadge
},{
  path: '/blockTitle/',
  component: KBlockTitle
},{
  path: '/block/',
  component: KBlock
},{
  path: '/button/',
  component: KButton
},{
  path: '/card/',
  component: KCard
},{
  path: '/chips/',
  component: KChips
},{
  path: '/fab/',
  component: KFloatingActionButton
},{
  path: '/list/',
  component: KCheckboxes_Radios
},{
  path: '/form_elements/',
  component: KForm_Elements
},{
  path: '/smartselect/',
  component: KSmartSelect
},{
  path: '/icon/',
  component: KIcon
},{
  path: '/grid/',
  component: KGrid
},{
  path: '/listreact/',
  component: KList
},{
  path: '/listitem/',
  component: KListItem
},{
  path: '/listbutton/',
  component: KListButton
},{
  path: '/accordionList/',
  component: KAccordionList
},{
  path: '/contactslist/',
  component: KContactsList
}
,{
  path: '/sortablelist/',
  component: KSortableList
}
,{
  path: '/swipeoutlist/',
  component: KSwipeout_List
},{
  path: '/virtuallist/',
  component: KVirtual_List
},{
  path: '/link',
  component: KLink
},{
  path: '/message',
  component: KMessages
},{
  path: '/message_bar',
  component: KMessage_Bar
},{
  path: '/action_sheet',
  component: KAction_Sheet
},{
  path: '/login',
  component: KLogin
},{
  path: '/picker_modal',
  component: KPicker_Modal
},{
  path:'/popover',
  component: KPopover
},{
  path:'/popup',
  component: KPopup
},{
  path: '/navbar',
  component: KNavbar
},{
  path: '/toolbar',
  component: KToolbar
},{
  path: '/sub_navbar',
  component: KSub_Navbar
},{
  path: '/panel',
  component: KPanel
},{
  path: '/search_bar',
  component: KSearch_Bar
},{
  path: '/swiper',
  component: KSwiper
},{
  path: '/tabs',
  component: KTabs
},{
  path: '/template',
  component: KTemplate7
},{
  path:'/timeline',
  component: KTimeline
}

];
