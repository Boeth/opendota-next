import React from 'react';
import Players from './Players'
import Team from './Team'
import { Divider } from 'antd';

const PlayersList = ({ players, radiant, dire }) =>
<div>
   <div className="radiant">
   <Team team={radiant}/>
   <Players players ={players.slice(0,5)}/>
   </div>
   <Divider />
   <div className="dire">
   <Team team={dire}/>
   <Players players ={players.slice(5)}/>
   </div>
    <style jsx>{`
         @media screen and (min-width: 1240px)  {
          div {
             margin: auto;
             width: 80%;           
          }
     }  
       `}
            </style>
   </div>
   
    

export default PlayersList;