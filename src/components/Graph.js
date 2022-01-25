import React from 'react';

import {VictoryLine, VictoryChart, VictoryZoomContainer}  from 'victory';
export default class Graph extends React.Component {

    constructor() {
      super();
      this.state = {};
    }
  
    handleZoom(domain) {
      this.setState({selectedDomain: domain});
    }
  
    handleBrush(domain) {
      this.setState({zoomDomain: domain});
    }
  
    render() {
      return (
        <div>
            
            <VictoryChart
              // width={100}
              // height={100}
              // scale={{x: "time"}}
              // containerComponent={
              //   <VictoryZoomContainer responsive={false}
              //     zoomDimension="x"
              //     zoomDomain={this.state.zoomDomain}
              //     onZoomDomainChange={this.handleZoom.bind(this)}
              //   />
              // }
           
            responsive={false}
            zoomDimension="x"
            zoomDomain={this.state.zoomDomain}
            onZoomDomainChange={this.handleZoom.bind(this)}
      
          
            >
              <VictoryLine
                style={{
                  data: {stroke: "tomato"}
                }}
                data={[
                  {x: new Date(1982, 1, 1), y: 125},
                  {x: new Date(1987, 1, 1), y: 257},
                  {x: new Date(1993, 1, 1), y: 345},
                  {x: new Date(1997, 1, 1), y: 515},
                  {x: new Date(2001, 1, 1), y: 132},
                  {x: new Date(2005, 1, 1), y: 305},
                  {x: new Date(2011, 1, 1), y: 270},
                  {x: new Date(2015, 1, 1), y: 470}
                ]}
              />
  
            </VictoryChart>
  
           
        </div>
      );
    }
  }


