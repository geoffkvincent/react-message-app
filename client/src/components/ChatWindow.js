import React from 'react'
import { connect } from 'react-redux'
import { setFlash } from '../reducers/flash'
import { addMessage } from '../reducers/messages'
import { segement, Header, Form, TextArea, Button } from 'semantic-ui-react'
// import ChatMeassage from './ChatMessage'

const MainWindo = styled(Segemnet) `
  border: 3px solid black;
  height: 60 vh;
  overflow-y: scroll;
  background-color: lightgray;
  border-radius: 10px;
`

const MessageInput = styled(Segement)`
  border-radius 10px;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
`

const Underline = styled(Header) `
text-decoration: underline;
`

class ChatWindow extends React.Component ={
  render() {
    return(
      <Segement basic>
        <Underline>
          
        </Underline>
      </Segement>

    )
  }
  
}
  
const mapStateToProps = (state) => {
return {
    user: state_user,
    messages: state.messages,
  }
}


export default connect(mapStateToProps)(ChatWindow)