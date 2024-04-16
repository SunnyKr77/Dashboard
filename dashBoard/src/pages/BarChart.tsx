import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './BarChat.css'

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const BarChart: React.FC = () => {

  const data = {
    labels: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08' , '23/08'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [350,390,290, 320, 380, 180, 360, 390],
        backgroundColor: 'rgba(78, 117, 229, 1)',
	borderWidth: 0.2,
      },
      {
        label: 'Dataset 2',
        data: [280,250,320, 210, 240, 310, 280, 240],
        backgroundColor: 'rgba(119, 195, 239, 1)',
	borderWidth: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top' as const,
        },
        title: {
        display: true,
        text: 'Sales Overview',
        },
    },
};
    

  return (
      <div className="chart">
          <div className='holder'>
            <div className='graph'>
            <Bar
              data={data}
              options={options}
            >
            </Bar>
            </div>
            <div className='holder2'>
              <div className='box'>
                <h2>Yearly breakup</h2>
                <p>$36,358</p>
                <small>+9% last year</small>
              </div>
              <div className='box'>
                <h2>Monthly Earnings</h2>
                <p>$6,820</p>
                <small>-9% last year</small>
              </div>
            </div>
          </div>
      </div>
  );
};

export default BarChart;