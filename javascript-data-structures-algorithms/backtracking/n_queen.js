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
