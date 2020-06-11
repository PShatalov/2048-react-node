interface IGame {
    moveLeft(): void;
    moveRight(): void;
    moveUp(): void;
    moveDown(): void;
    getCells(): number[][];
    isGameOver(): boolean;
    getScore(): number;
}
export class Game implements IGame{
    protected size: number;
    protected gameOver = false;
    protected score: number;
    protected cells: any[];
    protected changed = false;

    constructor(size = 4) {
        this.size = size;
        this.score = 0;
        this.cells = this.fillCells();

        this.addRandomCell();
        this.addRandomCell();
    }
    static getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    public isChanged(): boolean {
        return this.changed;
    }
    public getCells(): number[][] {
        return this.cells;
    }
    public moveLeft() {
        this.setChanged(false);
        for (let y = 0; y < this.size; y++) {
            for (let x = 1; x < this.size; x++) {
                this.lift(x, y, -1, 0);
            }
            for (let x = 1; x < this.size; x++) {
                this.join(x, y, -1, 0);
            }
        }
        if (this.isChanged()) {
            this.addRandomCell();
        }
    }
    public moveRight() {
        this.setChanged(false);
        for (let y = 0; y < this.size; y++) {
            for (let x = this.size - 2 ; x >= 0; x--) {
                this.lift(x, y, 1, 0);
            }
            for (let x = this.size - 2 ; x >= 0; x--) {
                this.join(x, y, 1, 0);
            }
        }
        if (this.isChanged()) {
            this.addRandomCell();
        }
    }
    public moveDown() {
        this.setChanged(false);
        for (let x = 0; x < this.size; x++) {
            for (let y = this.size - 2 ; y >= 0; y--) {
                this.lift(x, y, 0, 1);
            }
            for (let y = this.size - 2 ; y >= 0; y--) {
                this.join(x, y, 0, 1);
            }
        }
        if (this.isChanged()) {
            this.addRandomCell();
        }
    }
    public moveUp() {
        this.setChanged(false);
        for (let x = 0; x < this.size; x++) {
            for (let y = 1 ; y < this.size; y++) {
                this.lift(x, y, 0, -1);
            }
            for (let y = 1 ; y < this.size; y++) {
                this.join(x, y, 0, -1);
            }
        }
        if (this.isChanged()) {
            this.addRandomCell();
        }
    }
    public isGameOver() {
        if (this.gameOver) {
            return this.gameOver;
        }
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y ++) {
                if (this.getCell(x,y) === 0) {
                    return false;
                }
            }
        }
        this.gameOver = true;
        return this.gameOver;
    }
    public getScore() {
        return this.score;
    }
    protected setChanged(value: boolean ) {
        this.changed = value;
    }
    protected addRandomCell(): void {
        if (this.isGameOver()) return;
        for (let j = 0; j < 100; j++) {
            const x = Game.getRandomInt(this.size - 1);
            const y = Game.getRandomInt(this.size - 1);
            if(this.getCell(x,y) === 0) {
                const value = Math.random() > 0.5 ? 4 : 2;
                this.setCell(x, y, value);
                return;
            }
        }
    }
    protected getCell(x: number, y: number){
        if(this.cells[y]) {
            return this.cells[y][x];
        }
    }
    protected setCell(x: number, y: number, value: number){
        if(this.cells[y]) {
            this.cells[y][x] = value;
            return this.cells[y][x];
        }
    }
    protected fillCells (): number[][] {
        let cells: number[][] = [];
        for (let y = 0; y < this.size; y++) {
            cells[y] = [];
            for (let x = 0; x < this.size; x++) {
                cells[y][x] = 0;
            }
        }

        return cells;
    }
    protected lift(x: number, y: number, stepX: number, stepY: number) {
        const moveCell = this.getCell(x,y);
        if(moveCell > 0) {
            while (this.getCell(x + stepX, y + stepY) === 0) {
                this.setCell(x + stepX,  y + stepY, this.getCell(x, y));
                this.setCell(x, y, 0);
                x += stepX;
                y += stepY;
                this.setChanged(true);
            }
        }
    }
    protected join(x: number, y: number, stepX: number, stepY: number) {
        const moveCell = this.getCell(x,y);
        if(moveCell > 0) {
            const nextCell = this.getCell(x + stepX, y + stepY);
            if(nextCell === moveCell) {
                this.setCell(x + stepX, y + stepY, moveCell * 2);
                while (this.getCell(x - stepX, y - stepY) > 0) {
                    this.setCell(x,y, this.getCell(x - stepX, y - stepY));
                    x -= stepX;
                    y -= stepY;
                    this.setChanged(true);
                }
                this.setCell(x, y, 0);
            }
        }
    }
    protected move() {} // TODO: implement common move method
    protected updateScore() {} // TODO: implement method for calculating score
}