import { Stat } from '../../../styles/styles'
import { Radar } from 'react-chartjs-2';


const Stats = ({ combat, power, speed, strength, intelligence, durability, name, align}) => {
    const total = combat + power + speed + strength + intelligence + durability 
    const data = {
        labels: ['Power', 'Speed', 'Strength', 'Intelligence', 'Durability'],
        datasets: [
          {
            label:  `${name + "'s"} stats`,
            data: [power, speed, strength, intelligence, durability],
            backgroundColor: align === 'good' ? 'rgba(0, 0, 255, 0.3)' : 'rgba(255, 0, 0, 0.3)',
            borderColor: align === 'good' ? 'blue' : 'red',
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        plugins: {
          legend: {
              labels: {
                  font: {
                      size: 18,
                  },
                  color: align === 'good' ? 'blue' : 'red'
              },
          },
          title: {
            display: true,
            text: "Total Lvl:" + total,
            color: align === 'good' ? 'blue' : 'red',
            font: {
              size: 24
            }
          }
        },
        elements: {
          point: {
            pointRadius: 5,
            pointBackgroundColor: align === 'good' ? 'blue' : 'red'
          }
        },
        scales: {
          ticks: {
            beginAtZero: true,
            display: false,
            showLabelBackdrop: false,
          },
          r: {
           ticks: {
            backdropColor: 'white'
           },
           grid: {
             color: align === 'good' ? 'blue' : 'red'
           },
           gridLines: {
             display: false
           },
           angleLines: {
             color: align === 'good' ? 'blue' : 'red'
           },
           pointLabels: {
             font: {
               size: 18
             },
             color: align === 'good' ? 'blue' : 'red',
           }
          },
        },
        maintainAspectRatio: false
      };
    return (
        <Stat>
            <Radar data={data} options={options} />
        </Stat> 
    )
}

export default Stats;