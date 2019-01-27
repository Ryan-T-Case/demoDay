import React, {Component} from "react";
import {ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip} from "recharts";
import API from "../../utils/API";
import "./styles.css";

class AdminDatataviz extends Component {
  state = {
    users: [],
    devs: [],
    projects: [],
  }
  
  componentDidMount = () => {
    API.getAllUsers()
      .then(res => 
        this.setState({
          users: res.data,
        })
        )
      .catch(err => console.log(err));
    API.getAllDevs()
        .then(res =>
          this.setState({
            devs: res.data,
          })
          )
        .catch(err => console.log(err));
    API.getAllProjects()
        .then(res =>
          this.setState({
            projects: res.data,
          })
          )
        .catch(err => console.log(err));
    
  };

  
  
  
  render() {
    let data = [
      {name: 'Guests', count: this.state.users.length, fill: '#8884d8'},
      {name: 'Projects', count: this.state.projects.length, fill: '#83a6ed'},
      {name: 'Developers', count: this.state.devs.length, fill: '#8dd1e1'},
      {name: 'Interviews', count: 10, fill: '#82ca9d'}
    ]
      return (
        <div>
          <a className="btn btn-large back-button" href="/manage-event">Back To Manage Event</a>
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