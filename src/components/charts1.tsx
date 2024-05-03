
import { FC } from "react";
import Chart from "react-apexcharts";

interface ChartProps {
    type: 'bar' | 'line';
}
const Chart1 : FC<ChartProps> = ( { type = "bar" } ) => {
    
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={{
                chart: {
                    id: "basic-bar"
                },
              }}
              series={[
                    {
                      name: "series-1",
                      data: [30, 40, 45, 50, 49, 60, 70, 91]
                    }
                ]
              }
              type={type}
              width="500"
            />
          </div>
        </div>
      </div>
    );
}

export default Chart1;