
import React from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, PolarArea } from 'react-chartjs-2';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export function ToyDashboard() {

    const toys = useSelector(storeState => storeState.toyModule.toys)
    console.log(toys)
    let stockCount = toys.reduce((acc, toy) => {
        if (toy.inStock) {
            acc.inStock++
        } else {
            acc.outOfStock++
        }
        return acc;
    }, { inStock: 0, outOfStock: 0 });


    const data = {
        labels: ['In Stock', 'Out Of Stock'],
        datasets: [
            {
                label: '',
                data: [stockCount.inStock, stockCount.outOfStock],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <section>
            <Pie data={data} />
            <PolarArea data={data} />
        </section>
    )

}
