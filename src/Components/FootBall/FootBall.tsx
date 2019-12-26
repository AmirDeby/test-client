import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from "../../reducer";
import { getGamesAction } from '../../action';
import Table from 'react-bootstrap/Table';

export interface IFootBallProps {
    GetFGames(): void,
    football:string[],
}



class _FootBall extends React.Component<IFootBallProps> {
    componentDidMount() {
        const { GetFGames } = this.props;

        GetFGames();

    }
     
    // football.map((team: any) => {
    //     const { teamA, teamB, scoreA, ScoreB, time } = team
    public render() {
        const {football} = this.props
    return (
      <div>
            <h1>Foot Ball Area</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Team A</th>
                        <th>Team B</th>
                        <th>Score A</th>
                        <th>Score B</th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                    {football.map((team: any) => {
                        const { teamA, teamB, scoreA, scoreB, time } = team
                        return (
                            <tr>
                                <td >{teamA}</td>
                                <td>{teamB}</td>
                                <td>{scoreA}</td>
                                <td>{scoreB}</td>
                                <td>{time}</td>

                            </tr>
                        )
                    })}


                </tbody>
            </Table>
           
               
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
    const { football } = state;
    return {
        football
    }
}

const mapDispatchToProps = {
    GetFGames: getGamesAction
}

export const FootBall = connect(
    mapStateToProps,
    mapDispatchToProps
)(_FootBall)