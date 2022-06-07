import { render } from '@testing-library/react';
import React, {useState} from 'react';
import '../css/usersList.css';
import pushIcon from '../img/push-icon.png';
import xIcon from '../img/x.png';
import vIcon from '../img/v.png';


export default function ActiveUsersList(props) {
    const usersStatus = props.usersStatus;

    const [activeUsers, setActiveUser] = useState ([
        { email: "asd1", fio: "Иван Иванов Иванович 1", status: "active"},
        { email: "asd2", fio: "Иван Иванов Иванович 2", status: "active"},
        { email: "asd3", fio: "Иван Иванов Иванович 3", status: "active"},
        { email: "asd4", fio: "Иван Иванов Иванович 4", status: "active"},
        { email: "asd5", fio: "Иван Иванов Иванович 5", status: "active"},
        { email: "asd6", fio: "Иван Иванов Иванович 6", status: "active"},
        { email: "asd7", fio: "Иван Иванов Иванович 7", status: "active"},
        { email: "asd8", fio: "Иван Иванов Иванович 8", status: "active"}
    ]);

    const [inactiveUsers, setInactiveUser] = useState ([
        { email: "asd9", fio: "Иван Иванов Иванович 9", status: "inactive"},
        { email: "asd10", fio: "Иван Иванов Иванович 10", status: "inactive"},
        { email: "asd11", fio: "Иван Иванов Иванович 11", status: "inactive"},
        { email: "asd12", fio: "Иван Иванов Иванович 12", status: "inactive"},
        { email: "asd13", fio: "Иван Иванов Иванович 13", status: "inactive"},
        { email: "asd14", fio: "Иван Иванов Иванович 14", status: "inactive"},
        { email: "asd15", fio: "Иван Иванов Иванович 15", status: "inactive"},
        { email: "asd16", fio: "Иван Иванов Иванович 16", status: "inactive"}
    ]);

    let activeList = activeUsers.map((user) => <ActiveUserElement key={user.email} user={user}/>);

    let inactiveList = inactiveUsers.map((user) => <InactiveUserElement key={user.email} user={user}/>)

    return (
        <div className="users-container">
            {usersStatus &&
                <div>
                    <h1>Пользователи</h1>
                    {activeList}    
                </div>
            }

            {usersStatus == false && 
                <div>
                    <h1>Удаленные пользователи</h1>
                    {inactiveList} 
                </div>
            }
        
        </div>
    );

    function ActiveUserElement(props) {
        const user = props.user;
        return (
            <div className="row">
                <div className="name">{user.fio}</div>
                <div className="sendPush">
                    <span>Отправить уведомление</span>
                    <img src={pushIcon} className="pushIcon"/>
                </div>
                <div className="removeAccess" /*onClick={() => updateUsers("remove", user)}*/>
                    <span>Удалить доступ</span>
                    <img src={xIcon} className="xIcon" />
                </div>     
            </div>
        );
    }
    
    function InactiveUserElement(props) {
        const user = props.user;
        return (
            <div className="row">
                <div className="name">{user.fio}</div>
                <div className="restoreAccess" /*onClick={() => updateUsers("restore", user)}*/>
                    <span>Восстановить доступ</span>
                    <img src={vIcon} className="vIcon" />
                </div>  
            </div>
        );
    };
    
    function updateUsers(action, user) {
        if (action == "remove") {
            setActiveUser(activeUsers.filter((x) => x.email !== user.email));
            user.status = false;
            let update = inactiveUsers;
            update.push(user);
            setInactiveUser(update);
        } else {
            setInactiveUser(inactiveUsers.filter((x) => x.email !== user.email));
            user.status = true;
            let update = activeUsers;
            update.push(user);
            setActiveUser(update);
        }
    }
}