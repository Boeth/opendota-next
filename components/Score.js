import PropTypes from 'prop-types';
import { getTimeInMS } from '../utils'

const Score = (props) => {
    const { radiant_score, dire_score, duration } = props.match
    return (
        <div>
            <div className="radiant">
                {radiant_score ? radiant_score : 'unknown'}
            </div>
            <div className="time">
                {duration ? getTimeInMS(duration) : 'unknown'}
            </div>
            <div className="dire">
                {dire_score ? dire_score : 'unknown'}
            </div>
            <style jsx>{`
            div{
                display: flex;
                justify-content: center;
                text-align: center;
            }
            .radiant{
                font-size: 28px;
                text-align: center;             
            }
            .dire{
                font-size: 28px;
                text-align: center;             
            }
            .time{
                font-size: 20px;
                margin: 0 10px;   
                position: relative;
                top: 4px;         
            }
            `}
            </style>
        </div>
    )
}

Score.propTypes = {
    radiant_score: PropTypes.number,
    dire_score: PropTypes.number,
    duration: PropTypes.number
};

export default Score;