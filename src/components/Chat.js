import React from 'react'
import styled from 'styled-components'

function Chat() {
   return (
      <Container>
         <ChatHeader>
            # CleverProgrammer
         </ChatHeader>
         <ChatContainer>
            chat
         </ChatContainer>
         <InputContainer>
            <input type = "text" placeholder="Type message here..." />
         </InputContainer>
      </Container>
   )
}

export default Chat

const Container = styled.div`
   display: grid;
   height: 94vh;
   width: 99%;
   grid-template-rows: 45px auto 45px;
`
const ChatHeader = styled.div`
   display: flex;
   border: 1px solid silver;   
   border-radius: 10px;
   padding: 5px;
   width: 98%;
   align-items: center;
   margin: 5px;
`
const ChatContainer = styled.div`   
   display: flex;
   border: 1px solid silver;   
   padding: 6px;
   border-radius: 10px;
   margin: 5px;
   width: 98%;
`
const InputContainer = styled.div`
   display: flex;
   border: 1px solid silver;   
   border-radius: 10px;
   padding: 5px;
   width: 98%;
   align-items: center;
   margin: 5px;

   input {
      background-color: transparent;
      border: none;
      padding-left: 8px;
      padding right: 8px;
      color: black;
      width: 100%;
      height: 100%;
   }

   input: focus {
      outline: none;
   }
`
