import { Card } from 'antd';
import Link from 'next/link'
import PropTypes from 'prop-types';

import { getTimeFromNow, getTimeInMS } from '../utils'

const MatchItem = ({
    match_id,
    duration,
    start_time,
    radiant_name,
    dire_name,
    league_name,
    radiant_win
}) => (
        <Card title={league_name ? league_name : 'unknown'}
            extra={
                <Link href={{ pathname: '/match', query: { id: match_id } }}>
                    <a>{match_id ? match_id : 'unknown'}</a>
                </Link>
            }>
            <div>
                <p>{radiant_name ? radiant_name : 'unknown'} vs &nbsp;</p>
                <p>{dire_name ? dire_name : 'unknown'}</p>
            </div>
            <div>
                Started {start_time ? getTimeFromNow(start_time) : 'unknown'}
            </div>
            <div>
                Duration {duration ? getTimeInMS(duration) : 'unknown'}
            </div>
            <div>
                Winner {radiant_win ? radiant_name : dire_name}
            </div>
            <style jsx>{`
                 div{
                     display: flex;
                     flex-direction: row;
                     justify-content:  center; 
                     align-items: center;        
                     margin: auto;    
                    }  
                `}
            </style>
        </Card>
    );

MatchItem.propTypes = {
    match_id: PropTypes.number,
    name: PropTypes.string,
    duration: PropTypes.number,
    start_time: PropTypes.number,
    radiant_name: PropTypes.string,
    dire_name: PropTypes.string,
    league_name: PropTypes.string,
    radiant_win: PropTypes.bool
};

export default MatchItem;