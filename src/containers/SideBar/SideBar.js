
import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';
import {Subscriptions} from './Subscriptions/Subscriptions';
import './SideBar.scss';



export class SideBar extends React.Component{
    render(){
        return(
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
<SideBarItem highlight={true} label ='Home' icon='home'/>
<SideBarItem label ='Trending' icon='fire'/>
<SideBarItem label ='Following' icon='spy'/>
<Divider/>
<SideBarHeader title='Library'/>
<SideBarItem label ='History' icon='history'/>
<SideBarItem label ='Watch Later' icon='clock'/>
<SideBarItem label ='Liked Videos' icon='thumbs up'/>
<Divider/>
<Subscriptions/>
<SideBarHeader title='More From Youtube'/>
<SideBarItem label ='Moves and Shows' icon='film'/>
<Divider/>
<SideBarItem label ='Report history' icon=' flag'/>
<SideBarItem label ='Help' icon='help circle'/>
<SideBarItem label ='Send Feedback' icon='comment'/>
<Divider/>
<SideBarFooter/>
            </Menu>
        );
    }
}
