import axios from 'axios'
import { toast } from 'react-toastify';

import notificationIcon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.success("SMS enviado com sucesso")
        })
        .catch(error => {
            toast.error("Erro no envio do SMS")
        })
}

function NotificationButton({saleId}: Props) {

    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={notificationIcon} alt="notificar" />
        </div>
    )
}

export default NotificationButton
