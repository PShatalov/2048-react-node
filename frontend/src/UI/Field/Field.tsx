import React, { Component } from "react"
import styled from "styled-components"

interface IProps {
    cells: any[]
}

class Field extends Component<IProps> {
  render() {
    const { cells } = this.props;
    return (
      <BoardContainer>
        <PlayBoard>
          {cells.map( (column: [], y ) => (
              column.map( (row: [], x) => (
                  <Cell key={Math.random()} x={x} y={y} value={cells[y][x]}>
                      {cells[y][x] ? cells[y][x] : ""}
                  </Cell>
              ))
          ))}
        </PlayBoard>
      </BoardContainer>
    )
  }
}

const BoardContainer = styled.div`
  height: 475px;
  position: relative;
  width: 475px;
`;

const PlayBoard = styled.div`
  align-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 450px;
  justify-content: space-between;
  padding: 5px;
  position: absolute;
  width: 450px;
`;

const Cell = styled.div<{
    x: number;
    y: number;
    value: number;
}>`
  margin: 5px;
  height: 100px;
  width: 100px;
  
  transform: translate(${({ x }) => x * 110}px, ${({ y }) => y * 110}px);
  text-align: center;
  line-height: 100px;
  
  background-color: ${({ value }) => calculateBackgroundColor(value)};
  position: absolute;  
  color: #6a4e4e;
  font-weight: 900;
  font-size: 30px;
`;

// methods below copied from stackoverflow
const calculateBackgroundColor = (value: number) => {
  if (value === 0) {
    return "rgb(252, 251, 251)";
  }

  const step = Math.min(16, Math.log2(value));
  return `hsl(0, ${calculateSaturation(step)}%, ${calculateLightness(step)}%);`
};

const calculateSaturation = (step: number) => Math.floor(100 / 16 * step);
const calculateLightness = (step: number) => 100 - Math.floor(50 / 16 * step);

export default Field;
