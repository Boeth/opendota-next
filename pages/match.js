import React from 'react';
import { connect } from 'react-redux'
import { match } from '../redux/actions'
import { Layout } from 'antd';

import Head from '../components/head'
import MatchDetails from '../containers/MatchDetails'

const { Header, Footer, Content } = Layout;

class Match extends React.Component {
    static async  getInitialProps(props) {
        const { store, query } = props.ctx
        store.dispatch(match.request(query.id))
    }

    render() {
        return (
            <div>
                <Head />
                <Layout>
                    <Header></Header>
                    <Content><MatchDetails /></Content>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
}

export default connect()(Match)

