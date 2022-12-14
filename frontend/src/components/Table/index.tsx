import { Sale } from '../../models/sale'
import NotificationButton from '../NotificationButton'
import './styles.css'

type Props = {
    data: Sale[];
}

function formatDate(date: string) {
    var day: string = date.slice(8, 10)
    var month: string = date.slice(5, 7)
    var year: string = date.slice(0, 4)

    return day + "/" + month + "/" + year
}

function Table({data}: Props) {
    return (
        <div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((sale: Sale) => {
                        return (
                            <tr key={sale.id}>
                                <td className="show992">#{sale.id}</td>
                                <td className="show576">{formatDate(sale.date)}</td>
                                <td>{sale.sellerName}</td>
                                <td className="show992">{sale.visited}</td>
                                <td className="show992">{sale.deals}</td>
                                <td>R$ {sale.amount.toFixed(2)}</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton
                                            saleId={sale.id}
                                        />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table