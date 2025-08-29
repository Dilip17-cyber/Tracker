import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
        let datacopy = [["Date", "Prices"]];
        if (historicalData) {
            historicalData.price.map((item) => {
                const date = new Date(item[0]);
                const formattedDate = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
                datacopy.push([formattedDate, item[1]])
            })
            setData(datacopy);
        }
    }, [historicalData])

    const options = {
        backgroundColor: 'transparent',
        chartArea: { width: '80%', height: '70%' },
        legend: { position: 'none' },
        hAxis: {
            textStyle: { color: '#fff' },
            gridlines: { color: 'transparent' }
        },
        vAxis: {
            textStyle: { color: '#fff' },
            gridlines: { color: 'rgba(255,255,255,0.1)' }
        },
        lineWidth: 2,
        colors: ['#7927ff']
    }

    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    )
}

export default LineChart