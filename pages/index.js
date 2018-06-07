import React from "react";
import { connect } from "react-redux";
import { promatches } from '../redux/actions'
import { Layout } from 'antd';

import Head from '../components/head'
import MatchList from '../containers/MatchList'

const { Header, Footer, Content } = Layout;

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx
    store.dispatch(promatches.request())
  }

  render() {
    return (
      <div>
        <Head />
        <Layout>
          <Header></Header>
          <Content><MatchList /></Content>
          <Footer></Footer>
        </Layout>
      </div>
    )
  }
}

export default connect()(Index)
