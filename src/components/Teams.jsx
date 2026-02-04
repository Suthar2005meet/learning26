import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
    var teams = [
        {teamId:1, teamName:'CSK'},
        {teamId:2, teamName:'Mi'},
        {teamId:3, teamName:'RCB'},
        {teamId:4, teamName:'KKR'},
        {teamId:5, teamName:'PBKS'},
        {teamId:6, teamName:'SRH'},
        {teamId:7, teamName:'GT'},
        {teamId:8, teamName:'RR'},
        {teamId:9, teamName:'LSG'},
        {teamId:10, teamName:'DC'}
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>Teams</h1>
        {
            teams.map((te) => {
                return <li>
                <Link to={`/teamdetails/${te.teamName}`}>{te.teamName}</Link>
                </li>
            })
        }
    </div>
  )
}
