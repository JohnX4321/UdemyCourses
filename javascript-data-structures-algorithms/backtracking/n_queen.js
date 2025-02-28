/*
 * Coding Exercise: N Queen
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


 */
var solveNQueens = function(n) {
    //Write Code here
    let res=[];
    let board=new Array(n).fill().map(()=>new Array(n).fill('.'));
    function convert(board) {
        return board.map(r => r.join(''));
    }
    function isValid(row,col,board) {
        for (let x=0;x<row;x++)
            if (board[x][col]==='Q') return false;
        for (let r=row,c=col;r>=0 && c>=0;r--,c--)
            if (board[r][c]==='Q') return false;
        for (let r=row,c=col;r>=0&&c<n;r--,c++)
            if (board[r][c]==='Q') return false;
        return true;
    }

    function helper(board,row) {
        if (row===n) {
            res.push(convert(board));
            return;
        }
        for (let col=0;col<n;col++) {
            if (isValid(row,col,board)){
                board[row][col]='Q';
                helper(board,row+1);
                board[row][col]='.';
            }
        }
    }
    helper(board,0);
    return res;
};
