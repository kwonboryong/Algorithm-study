const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n')

const N = parseInt(input[0], 10); // 첫 번째 줄은 지도의 크기 N
const map = input.slice(1).map((line) => line.split('').map(Number)); // 2차원 배열로 변환


function solution(N, map) {
  const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
  const dy = [0, 0, -1, 1];

  const visited = Array.from({ length: N }, () => Array(N).fill(false)); // 방문 배열
  const complexes = []; // 단지별 집의 수를 저장할 배열

  // DFS 함수
  const dfs = (x, y) => {
    let count = 1; // 집 하나를 발견했으므로 초기 값 1
    visited[x][y] = true;

    // 상하좌우로 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 지도의 범위를 벗어나지 않도록
      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {

        // 방문하지 않았고, 집이 있을 경우
        if (!visited[nx][ny] && map[nx][ny] === 1) {

          // 재귀적으로 탐색하면서 집의 수를 더해줌
          count += dfs(nx, ny);
        }
      }
    }

    return count; // 해당 단지의 총 집 수 반환
  };


  // 전체 맵 탐색
  for (let i = 0; i < N; i++) {

    for (let j = 0; j < N; j++) {

      // 집이 있는 위치에서 DFS 시작
      if (map[i][j] === 1 && !visited[i][j]) {
        const complexSize = dfs(i, j);

        complexes.push(complexSize); // 단지 크기를 저장
      }
    }
  }

  complexes.sort((a, b) => a - b); // 오름차순 정렬

  console.log(complexes.length); // 총 단지 수 출력
  complexes.forEach((size) => console.log(size)); // 각 단지의 집 수 출력
}

solution(N, map);
