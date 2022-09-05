import notificationIcon from '../../assets/img/notification-icon.svg'

import './styles.css'

function NotificationButton() {

    return (
        <div className="dsmeta-red-btn">
            <img src={notificationIcon} alt="notificar" />
        </div>
    )
}

export default NotificationButton
