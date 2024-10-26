const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const N = parseInt(input[0]); // 첫 번째 줄은 보드 크기

const board = input.slice(1).map(line => line.split(' ').map(Number)); // 나머지는 보드 배열


function solution(board) {
    const N = board.length;
    const dp = Array.from(Array(N), () => Array(N).fill(0));
    dp[0][0] = 1;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === N - 1 && j === N - 1) continue; // 도착 지점에 도달하면 종료
            const move = board[i][j];
            if (move === 0) continue; // 이동 불가 시 스킵

            // 오른쪽 이동
            if (j + move < N) dp[i][j + move] += dp[i][j];

            // 아래로 이동
            if (i + move < N) dp[i + move][j] += dp[i][j];
        }
    }

    return dp[N - 1][N - 1]; // 도착 지점까지의 경로 수 반환
}

console.log(solution(board));
