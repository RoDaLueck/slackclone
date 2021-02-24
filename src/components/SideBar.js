import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData, newChannelList } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import Tooltip from "@material-ui/core/Tooltip";
import { NavigateBeforeSharp } from '@material-ui/icons';

function SideBar() {
   return (
      <Container>
         <WorkspaceContainer>
            <Name> 
               CleverProgrammer
            </Name>
            <NewMessage>
               <Tooltip title="New Messages" placement="bottom">
                  <AddCircleOutlineIcon />
               </Tooltip>
            </NewMessage>
         </WorkspaceContainer>
         <MainChannels>
            { 
               sidebarItemsData.map(item => (
                  <Tooltip title={item.tooltip} placement="bottom">                                       
                     <MainChannelItem>
                        {item.icon}
                        {item.text}
                     </MainChannelItem>
                  </Tooltip>

               ))
            }
         </MainChannels>
         <ChannelsContainer>
            <NewChannelContainer>
               <div>Channels</div>
               <Tooltip title="Add new channel" placement="bottom"> 
                  <AddIcon />
               </Tooltip>
            </NewChannelContainer>
            <ChannelList>
            { 
               newChannelList.map((item, index) => (
                  <Tooltip title={`${item.tooltip} ${index + 1}`} placement="bottom">                                       
                     <MainChannelItem>
                        {item.icon} 
                        {item.text}
                        {index + 1}
                     </MainChannelItem>
                  </Tooltip>
               ))
            }            
            </ChannelList>
         </ChannelsContainer>
      </Container>
   )
}

export default SideBar

const Container = styled.div `
   background: #3f0E40;
`
const WorkspaceContainer = styled.div `
   color: white;
   height: 64px;
   display: flex;
   align-items: center;
   padding-left: 19px;
   justify-content: space-between;
   border-bottom: 1px solid #532753;
`

const Name = styled.div `
`

const NewMessage = styled.div `
   width: 36px;
   height: 36px;
   background: white;
   color: #3F0E40;
   fill: #3F0E40;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   margin-right: 20px;
   cursor: pointer;
`

const MainChannels = styled.div`
   padding-top: 20px;

`

const MainChannelItem = styled.div`
   color: rgb(188,171,188);
   display: grid;
   grid-template-columns: 15% auto;
   height: 28px;
   align-items: center;
   padding-left: 19px;
   cursor: pointer;

   :hover { 
      background: #350D36; 
   }
`

const ChannelsContainer = styled.div `
   color: rgb(188,171,188);
   margin-top: 10px;
`

const NewChannelContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 28px;
   padding-left: 19px;
   padding-right: 12px;
`

const ChannelList = styled.div`
`

const Channel = styled.div`
   height: 28px;
   display: flex;
   align-items: center;
   padding-left: 19px;
   cursor: pointer;

   :hover {
      background: #350D36;
   }
`