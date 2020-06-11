import { Game } from "./Game";

describe("Game algorithm", () => {
    it("should init game", () => {
        const boardSize = 3;
        const game = new Game(boardSize);

        expect(game.getCells()).toHaveLength(boardSize);
    });
    it("should move board to the left", () => {
        const boardSize = 3;
        const game = new Game(boardSize);
        game.moveLeft();

        expect(game.isChanged()).toBeTruthy();
    });
    it("should move board to the right", () => {
        const boardSize = 3;
        const game = new Game(boardSize);
        game.moveRight();

        expect(game.isChanged()).toBeTruthy();
    });
    it("should move board to the down", () => {
        const boardSize = 3;
        const game = new Game(boardSize);
        game.moveDown();

        expect(game.isChanged()).toBeTruthy();
    });
    it("should move board to the up", () => {
        const boardSize = 3;
        const game = new Game(boardSize);
        game.moveUp();
        expect(game.isChanged()).toBeTruthy();
    });
    it("should end game if no moves available", () => {
        const boardSize = 1;
        const game = new Game(boardSize);
        expect(game.isGameOver()).toBeTruthy();
    });
});