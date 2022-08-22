import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

function Spedometer2(props) {
    return <ReactSpeedometer
        width={250}
        needleHeightRatio={0.8}
        value={780}
        customSegmentStops={[0, 270, 700, 1000]}
        segmentColors={['#198754', '#ffc107', ' #dc3545']}
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
}

export default Spedometer2;