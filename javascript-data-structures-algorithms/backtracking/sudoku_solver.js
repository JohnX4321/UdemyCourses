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
