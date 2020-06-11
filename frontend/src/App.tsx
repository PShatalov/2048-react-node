import React, { Component } from "react";

import Layout from "./UI/Layout";
import ControlPanel from "./UI/ControlPanel";
import Button from "./UI/Button";
import Score from "./UI/Score";
import Field from "./UI/Field";

import { Game } from "./Game";

interface IProps {
}

interface IState {
  game: Game,
  cells: any[];
  score: number
}
enum GameController {
  W = "KeyW",
  S = "KeyS",
  A = "KeyA",
  D = "KeyD"
}
enum Move {
  Up = GameController.W,
  Down = GameController.S,
  Left = GameController.A,
  Right = GameController.D
}
class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const game = new Game(4); // TODO: add user ability to select field size
    this.state = {
      game,
      cells: game.getCells(),
      score: game.getScore()
    };
  }
  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = async (event: KeyboardEvent) => {
    switch(event.code as any) {
      case Move.Up:
        this.state.game.moveUp();
        this.setState(state => ({
          ...state,
          cells: this.state.game.getCells()
        }));
        break;
      case Move.Down:
        this.state.game.moveDown();
        this.setState(state => ({
          ...state,
          cells: this.state.game.getCells()
        }));
        break;
      case Move.Left:
        this.state.game.moveLeft();
        this.setState(state => ({
          ...state,
          cells: this.state.game.getCells()
        }));
        break;
      case Move.Right:
        this.state.game.moveRight();
        this.setState(state => ({
          ...state,
          cells: this.state.game.getCells()
        }));
        break;
      default:
        alert("UNKNOWN");
        break;
    }
  };

  render() {
    const { score, cells } = this.state;
    // score and new game button are not working
    return (
        <Layout>
          <ControlPanel>
            <Button>New Game</Button>
            <Score>{score}</Score>
          </ControlPanel>
          <Field cells={cells} />
        </Layout>
    )
  }
}

export default App;
