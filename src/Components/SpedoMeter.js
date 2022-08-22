import React from 'react';
import { Card } from 'react-bootstrap';
import ReactSpeedometer from "react-d3-speedometer"

function Spedometer(props) {
    return (
      <div>
        <ReactSpeedometer
        width={250}
        needleHeightRatio={0.8}
        value={780}
        customSegmentStops={[0, 270, 700, 1000]}
        segmentColors={['#dc3545', '#ffc107', '#198754']}
        customSegmentLabels={[
          {
            text: '00%',
            position: 'INSIDE',
            color: '#000000',
          },
          {
            text: '50%',
            position: 'INSIDE',
            color: '#000000',
          },
          {
            text: '100%',
            position: 'INSIDE',
            color: '#000000',
          },
        ]}
        ringWidth={60}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#0071FF'}
        textColor={'#000000'}
      />
      </div>
    )
    // <Pie
    //     data={{
    //         labels: ['CRITICAL', 'URGENT', 'SUCCESS'],
    //         datasets: [
    //         {
    //             label: '# of votes',
    //             data: [35, 30, 35 ],
    //             backgroundColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             ],
    //             borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             ],
    //             borderWidth: 2,
    //             cutout: '80%',
    //             circumference:120,
    //             rotation:300,

    //         },
    //         ],
    //     }}

        
    //     height={200}
    //     width={200}
    //  />;
}

export default Spedometer;