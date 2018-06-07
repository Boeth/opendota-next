import React from 'react';
import { connect } from 'react-redux'
import { List } from 'antd';

import MatchItem from '../components/MatchItem';

const MatchList = ({ pro_matches, isFetching, error }) => {
    if (isFetching && pro_matches == null) {
        return <h2><i>Loading</i></h2>
    }
    if (error) {
        return <h2><i>{error}</i></h2>
    }
    return (
        <div >
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    pageSize: 20,
                }}
                dataSource={pro_matches}
                renderItem={item => (
                    <List.Item
                        key={item.match_id}
                    >
                        <MatchItem {...item} />

                    </List.Item>
                )}
            />
            <style jsx>{`
         @media screen and (min-width: 1240px)  {
             div {
                margin: auto;
                width: 60%;           
             }
        }        
       `}
            </style>
        </div>
    )
}


const mapStateToProps = ({ pro_matches, isFetching, error }) => ({ pro_matches, isFetching, error })

export default connect(mapStateToProps)(MatchList)

