import PropTypes from 'prop-types';

const Team = (props) => {
    const { name, logo_url } = props.team
    return (
        <div>
            <span className="Team">
                <img alt="TeamLogo" src={logo_url} />
                {name ? name : 'name unknown'}
            </span>
            <style jsx>{`
            .Team {
                  display: flex;
                  flex-direction: row; 
                  font-size: 28px;
            } 
            img {
                width: 32px;
                height: 32px;  
                margin: 0px 10px;
            }
            `}
            </style>
        </div>
    );
}

Team.propTypes = {
    name: PropTypes.string,
    logo_url: PropTypes.string
};

export default Team;
