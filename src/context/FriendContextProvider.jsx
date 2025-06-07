import { useState } from 'react';
import { FriendContext } from './FriendContext';

export const FriendContextProvider = ({children}) => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    return (
        <FriendContext.Provider value={{selectedFriend, setSelectedFriend}}>
            {children}
        </FriendContext.Provider>
    )
}