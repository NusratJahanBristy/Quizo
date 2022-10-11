import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const [chart, setchart] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const chart = data.data.data;

                const chartData = chart.map(chart => {
                    const singleChart = {
                        name: chart.name,
                        total: chart.total
                    }
                    return singleChart;
                })
                console.log(chartData)
                setchart(chartData)

            })
    }, [])
    return (
        <div>
            <h2>Statisics</h2>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart width={150} height={40} data={chart}>
                    <Bar dataKey="total" fill="#008000" />
                    <XAxis dataKey="name" />
                    <Tooltip></Tooltip>
                    <YAxis />
                </BarChart>
            </ResponsiveContainer>
            <p>hhk</p>
        </div>
    );
};

export default Statistics;