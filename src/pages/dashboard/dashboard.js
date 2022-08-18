
import React from 'react'
import "./style.css"

import Speedometer  from "./component/speedometer"

export default function dashboard() {
  return (
        <div className="container-dashboard">
            <div className="body-parent-1">
                <div className="body-child-1">
                    <div className="body-speedometer">
                        <Speedometer title="Completed Task"name="completed"></Speedometer>
                        <Speedometer title="Task in Progress"name="onprogress"></Speedometer>
                        <Speedometer title="Overdue Task"name="overdue"></Speedometer>
                    </div>
                    <div className="body-taskdistribution">
                        Task Distribution
                    </div>
                </div>
                <div className="body-child-2">
                    <div className="body-calendar">
                        Calendar
                    </div>
                    <div className="body-list-user">
                        List User
                    </div>
                </div>
            </div>
        </div>
  )
}
