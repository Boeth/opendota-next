import React from 'react';
import { connect } from 'react-redux'

import League from '../components/League'
import Team from '../components/Team'
import Score from '../components/Score'
import PlayersList from '../components/PlayersList'


const MatchDetails = ({ matches, isFetching, error }) => {
    if (isFetching && matches == null) {
        return <h2><i>Loading</i></h2>
    }
    if (error) {
        return <h2><i>{error}</i></h2>
    }

    return (
        <div>
            <div className="Info">         
                <div className="Winner">{matches.radiant_win ? <Team team={matches.radiant_team} /> : <Team team={matches.dire_team} />}</div>
                <div className="Score"><Score match={matches} /></div>
                <div className="League"><League league={matches.league} /></div>
            </div>
            <div>
                <PlayersList players={matches.players} radiant={matches.radiant_team} dire={matches.dire_team}/>
            </div>
            <style jsx>{`
        .Info{
             display: flex;
             flex-direction: row;
             align-items: center;
             padding: 30px 0px;
      
        }
        .Info *{
               margin: auto;     
        }
        .Winner{   
            color:green;     
            text-align:left;
        }  
        `}
            </style>
        </div>
    )
}

const mapStateToProps = ({ matches, isFetching, error }) => ({ matches, isFetching, error })

export default connect(mapStateToProps)(MatchDetails)