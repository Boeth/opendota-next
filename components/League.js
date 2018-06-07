import PropTypes from 'prop-types';

const League = (props) => {
    const { leagueid, name } = props.league
    return (
        <div>
            <span>League ID  {leagueid ? leagueid : 'leagueid unknown'}</span>
            {name ? name : 'name unknown'}

            <style jsx>{`
            span {
                display: block;
                text-transform: uppercase;
                font-size: 12px;
            } 
            `}
            </style>
        </div>
    );
}

League.propTypes = {
    leagueid: PropTypes.number,
    name: PropTypes.string
};

export default League;