import React , {useEffect , useState} from 'react';
import { Card } from 'react-bootstrap';
// import { url_be } from "../../../../config/app" /// UN COMMENT JIKA INGIN DI PAKAI
import ReactSpeedometer from "react-d3-speedometer"
import axios from "axios"
import "./speedometerStyle.css"

function Speedometer2(props) {

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
        <div className="title">
            <span className="text-title">{props.title}</span>
        </div>
        <div className="spedometer-svg">
          <ReactSpeedometer
          width={300}
          height={200}
          needleHeightRatio={0.8}
          value={percent}
          maxValue={100}
          customSegmentStops={ [0 , 25, 50, 75, 100]}
          segmentColors={['#13ac57', '#ffd154', '#ffd154', '#fb0216']}
          needleTransition="easeElastic"
          needleColor={'#0071FF'}
          textColor={'#000000'}
        />
        </div>
      </div>
    )
  }

export default Speedometer2;