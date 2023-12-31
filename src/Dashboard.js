import React from 'react'
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faDollarSign,faClipboardList,faComments } from '@fortawesome/free-solid-svg-icons'
function Dashboard() {
    const cards = [
        {
            title: "EARNINGS (MONTHLY)",
            price: "$25,000",
            theme: "primary",

            icon:  <FontAwesomeIcon className={`fas  fa-2x text-gray-300`} icon={faCalendar} />
        },
        {
            title: "EARNINGS (ANNUAL)",
            price: "$100,000",
            theme: "success",

            icon: <FontAwesomeIcon className={`fas  fa-2x text-gray-300`} icon={faDollarSign} />
        },
        {
            title: "TASKS",
            price: "70%",
            theme: "info",

            icon: <FontAwesomeIcon className={`fas  fa-2x text-gray-300`} icon={faClipboardList} />
        },
        {
            title: "PENDING REQUESTS",
            price: "22",
            theme: "warning",

            icon: <FontAwesomeIcon className={`fas  fa-2x text-gray-300`} icon={faComments} />
        }
    ];
    return (
        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="http://localhost:3000/portal/dashboard" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row">
                {
                    cards.map((card) => {
                        return <Card card={card}></Card>
                    })
                }




            </div>
        </div>
    )
}

export default Dashboard;
