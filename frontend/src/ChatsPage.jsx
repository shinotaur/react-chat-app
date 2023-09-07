
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import {Helmet} from "react-helmet";

// import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'da558b27-efc0-460a-8d42-00d5de213078',
        props.user.username, props.user.secret);

    return (
        <div style={{height: '100vh'}}>
             <Helmet>
                <meta charSet="utf-8" />
                <title>My Chats</title>
            </Helmet>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%' }} />

        </div>
    )
}

// const ChatsPage = (props) => {
//   return (
//     <div className="background">
//       <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>My Chats</title>
//             </Helmet>  
//       <PrettyChatWindow
//         projectId={'da558b27-efc0-460a-8d42-00d5de213078'}
//         username={props.user.username}
//         secret={props.user.secret}
//       />
//     </div>
//   );
// }

export default ChatsPage;

