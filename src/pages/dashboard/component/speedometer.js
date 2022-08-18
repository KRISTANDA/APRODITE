




import React , {useEffect , useState} from 'react';
import { Card } from 'react-bootstrap';
import { url_be } from "../../../config/app"
import ReactSpeedometer from "react-d3-speedometer"
import axios from "axios"
import "./speedometerStyle.css"

function Spedometer(props) {

    const [percent, setPercent] = useState(0)

    useEffect(()=>{
      getApiPercent()
    },
    [])

    const getApiPercent = async()=>{

      let url =`http://127.0.0.1:3333/api/v1`;
      if(props.name === "completed"){
        url += '/completedPercent'
      }
      else if(props.name === "onprogress"){
        url += '/onprogressPercent'
      }
      else {
        url += '/overdueNumeric'
      }

      const result = await axios.get(url).then(res=>{
        return res.data
      })
      .catch(err=> {throw err})

      setPercent(result[0].totalkeseluruhan)
    }

    return (
      <div className="spedometer-item">
        <div>
            <span className="text-title">{props.title}</span>
        </div>
        <ReactSpeedometer
        width={300}
        needleHeightRatio={0.8}
        value={percent}
        maxValue={100}
        customSegmentStops={ [0 , 25, 75, 100]}
        segmentColors={['#dc3545', '#ffc107', '#198754']}
        // customSegmentLabels={[
        //   {
        //     text: '00%',
        //     position: 'INSIDE',
        //     color: '#000000',
        //   },
        //   {
        //     text: '50%',
        //     position: 'INSIDE',
        //     color: '#000000',
        //   },
        //   {
        //     text: '100%',
        //     position: 'INSIDE',
        //     color: '#000000',
        //   },
        // ]}
        // ringWidth={60}
        // needleTransitionDuration={3333}
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