import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import PropTypes from 'prop-types';

import { formatNumber } from '../utils';

const Players = ({ players }) =>
    <div>
        <Table
            pagination={false}
            dataSource={players}
            rowKey={players => players.personaname}>
            <Column width="120px"
                title="Name"
                key="personaname"
                render={players => (
                    players.name ? players.name : players.personaname
                )}
            />
            <Column width="100px"
                title="Hero"
                key="hero_id"
                render={players => (
                    <img className="Hero" src={"static/heroes/" + players.hero_id + ".png"} alt={players.hero_id} />
                )}
            />
            <Column width="50px"
                title="Lvl"
                dataIndex="level"
                key="level"
            />
            <Column width="50px"
                title="K"
                dataIndex="kills"
                key="kills"
            />
            <Column width="50px"
                title="D"
                dataIndex="deaths"
                key="deaths"
            />
            <Column width="50px"
                title="A"
                dataIndex="assists"
                key="assists"
            />
            <Column width="50px"
                title="LH"
                dataIndex="last_hits"
                key="last_hits"
            />
            <Column width="50px"
                title="DN"
                dataIndex="denies"
                key="denies"
            />
            <Column width="50px"
                title="HD"
                key="hero_damage"
                render={players => (
                    formatNumber(players.hero_damage)
                )}
            />
            <Column width="50px"
                title="HH"
                key="hero_healing"
                render={players => (
                    formatNumber(players.hero_healing)
                )}
            />
            <Column width="50px"
                title="TD"
                key="tower_damage"
                render={players => (
                    formatNumber(players.tower_damage)
                )}
            />
            <Column width="50px"
                title="NW"
                key="gold_spent"
                render={players => (
                    formatNumber(players.gold_spent)
                )}
            />
            <Column width="50px"
                title="GPM"
                dataIndex="gold_per_min"
                key="gold_per_min"
            />
            <Column width="50px"
                title="XPM"
                dataIndex="xp_per_min"
                key="xp_per_min"
            />
        </Table>
    </div>

Players.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        personaname: PropTypes.string,
        hero_id: PropTypes.number,
        level: PropTypes.number,
        kills: PropTypes.number,
        deaths: PropTypes.number,
        assists: PropTypes.number,
        last_hits: PropTypes.number,
        denies: PropTypes.number,
        hero_damage: PropTypes.number,
        hero_healing: PropTypes.number,
        tower_damage: PropTypes.number,
        gold_spent: PropTypes.number,
        gold_per_min: PropTypes.number,
        xp_per_min: PropTypes.number,
    }))
}

export default Players;