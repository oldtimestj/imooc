import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import { formateDate } from '../../utils/utils'
import axios from '../../axios'

class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName:'河畔一角'
    })
    setInterval(() => {
      let systemTime = formateDate(new Date().getTime())
      this.setState({
        systemTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }
  getWeatherAPIData() {
    let city = '北京'
    axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',

    }).then((res) => {
      console.log('res', res)
      if(res.status === 'success'){
        let data = res.results[0].weather_data[0]
        this.setState({
          dayPicture:data.dayPictureUrl,
          weather:data.weather
        })
      }
    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb" >
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.systemTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPicture}/>
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header


