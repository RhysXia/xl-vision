import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Col, Row } from 'xl-vision'
import Aside from '../aside'
import Content from '../content'
import Footer from '../footer'
import Header from '../header'

import './index.scss'

export default class Layout extends React.Component<{}, {}> {
  render () {
    return (
      <Router>
        <div className='layout'>
          <Header />
          <Row className={'content-wrapper'}>
            <Col span={6}>
              <Aside />
            </Col>
            <Col span={18}>
              <Content />
            </Col>
          </Row>
          <Footer />
        </div>
      </Router>
    )
  }
}