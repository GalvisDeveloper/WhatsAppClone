
// Imports from react
import React, { useEffect, useState } from 'react';

// Imports from material-ui
import { Avatar } from '@material-ui/core';

// Imports another files
import '../styles/SidebarChat.css';
import db from '../firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // database stuff
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebar__chat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last msg</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new chat</h2>
            </div>
        );
}

export default SidebarChat;
