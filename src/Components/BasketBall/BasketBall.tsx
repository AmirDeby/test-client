import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer';
import { getBasketAction } from '../../action';
import Table from 'react-bootstrap/Table';

export interface IBasketBallProps {
  getBasket(): void,
  games:string[],
}

class _BasketBall extends React.Component<IBasketBallProps> {

  componentDidMount() {
    const { getBasket } = this.props
    
    getBasket()
  }

  public render() {
    const {games} = this.props
    return (
      <div>
        <h1>Basket Area</h1>
        
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
          {games.map((team: any) => {
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
  const{games} = state
  return {
    games,
  }
}

const mapDispatchToProps = {
  getBasket: getBasketAction
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_BasketBall)