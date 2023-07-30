import React from 'react'

type MessageType = {
    author: string,
    text: string,
}

const Message: React.FC<MessageType> = () => {
    return (<div>message</div>)
}

export default Message