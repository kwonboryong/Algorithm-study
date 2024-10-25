const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


// 첫 번째 줄: N, S, M 값
const [N, S, M] = input[0].split(' ').map(Number);

// 두 번째 줄: 볼륨 변화값
const volumes = input[1].split(' ').map(Number);

function guitarist(N, S, M, volumes) {
  // DP 테이블을 초기화 (볼륨 범위는 0부터 M까지)
  let dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  dp[0][S] = true;  // 시작 볼륨

  // DP 테이블 갱신
  for (let i = 0; i < N; i++) {
    for (let v = 0; v <= M; v++) {
      if (dp[i][v]) {
        if (v + volumes[i] <= M) dp[i + 1][v + volumes[i]] = true; // 볼륨 더하기
        if (v - volumes[i] >= 0) dp[i + 1][v - volumes[i]] = true; // 볼륨 빼기
      }
    }
  }

  // 마지막 곡에서 가능한 볼륨 중 최대값 찾기
  for (let v = M; v >= 0; v--) {
    if (dp[N][v]) return v;  // 최대 볼륨
  }

  // 가능한 볼륨이 없으면 -1 반환
  return -1;
}

console.log(guitarist(N, S, M, volumes));
