import { useState, useEffect } from 'react'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import Table from '../Table'

import axios from 'axios'

import { BASE_URL } from '../../utils/request'

import { Sale } from '../../models/sale'

import './styles.css'

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)
    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10)
        const dmax = maxDate.toISOString().slice(0, 10)

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content)
            })
            .catch(error => {
                console.log(error)
            })

    }, [minDate, maxDate])

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>

            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <Table
                data={sales}
            />

        </div>
    )
}

export default SalesCard