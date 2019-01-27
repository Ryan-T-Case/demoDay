import React, {Component} from "react";
import {ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip} from "recharts";
import API from "../../utils/API";

class AdminDatataviz extends Component {
  state = {
    users: [],
  }
  
  componentDidMount = () => {
    API.getAllUsers()
      .then(res => 
        this.setState({
          users: res.data,
        })
        )
      .catch(err => console.log(err));

    
  };

  
  
  
  render() {
    let data = [
      {name: 'Guests', count: this.state.users.length, fill: '#8884d8'},
      {name: 'Projects', count: 25, fill: '#83a6ed'},
      {name: 'Interviews', count: 10, fill: '#8dd1e1'}
    ]
      return (
        <div>
          <div className="container text-center">
            <h1 className="text-center">Event Data</h1>
            <ResponsiveContainer width="100%" height={500}>
              <RadialBarChart innerRadius="20%" outerRadius="80%" data={data} startAngle={180} endAngle={0}>
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='count' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right"/>
                <Tooltip labelFormatter={(index) => data[index].name} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }
}

export default AdminDatataviz;