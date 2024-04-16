import React from "react";
import './Chart.css'
import BarChart from "./BarChart";
 
const Chart: React.FC = () => {
    

    return (
        <div className="card">
            <h1>Charts</h1>
            <BarChart />
        </div>
    );
};
 
export default Chart;