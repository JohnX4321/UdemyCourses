/*
 * Coding Exercise: Sudoku Solver
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.

Each of the digits 1-9 must occur exactly once in each column.

Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.

Constraints:

board.length == 9

board[i].length == 9

board[i][j] is a digit between 1 and 9 , inclusive or '.'.

It is guaranteed that the input board has only one solution.

Example:

board = [

["5", "3", ".", ".", "7", ".", ".", ".", "."],

["6", ".", ".", "1", "9", "5", ".", ".", "."],

[".", "9", "8", ".", ".", ".", ".", "6", "."],

["8", ".", ".", ".", "6", ".", ".", ".", "3"],

["4", ".", ".", "8", ".", "3", ".", ".", "1"],

["7", ".", ".", ".", "2", ".", ".", ".", "6"],

[".", "6", ".", ".", ".", ".", "2", "8", "."],

[".", ".", ".", "4", "1", "9", ".", ".", "5"],

[".", ".", ".", ".", "8", ".", ".", "7", "9"]

]

Output :


[

["5", "3", "4", "6", "7", "8", "9", "1", "2"],

["6", "7", "2", "1", "9", "5", "3", "4", "8"],

["1", "9", "8", "3", "4", "2", "5", "6", "7"],

["8", "5", "9", "7", "6", "1", "4", "2", "3"],

["4", "2", "6", "8", "5", "3", "7", "9", "1"],

["7", "1", "3", "9", "2", "4", "8", "5", "6"],

["9", "6", "1", "5", "3", "7", "2", "8", "4"],

["2", "8", "7", "4", "1", "9", "6", "3", "5"],

["3", "4", "5", "2", "8", "6", "1", "7", "9"]

]
 */
var solveSudoku = function(board) {
    //The function modifies the board in place to present the solution. Hence there is no need to return the board
    function isValid(board,r,c,n) {
        for (let i=0;i<9;i++) {
            if (board[i][c]===n || board[r][i]===n) return false;
            let zr = 3*Math.floor(r/3)+Math.floor(i/3);
            let zc = 3*Math.floor(c/3)+i%3;
            if (board[zr][zc]===n) return false;
        }
        return true;
    }

    function helper(board) {
        for (let r=0;r<9;r++) {
            for (let c=0;c<9;c++) {
                if (board[r][c]==='.') {
                    for (let n=1;n<=9;n++) {
                        let char=n.toString();
                        if (isValid(board,r,c,char)) {
                            board[r][c]=char;
                            if (helper(board))
                                return true;
                            board[r][c]='.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    helper(board);
};

//Time Complexity: O(9^(n*n))
//Space Complexity: O(n)
