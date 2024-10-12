const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


// 입력값 처리
const [N, M] = input[0].split(' ').map(Number); // 첫 줄에서 N과 M 값 가져옴
const maze = input.slice(1).map(line => line.split('').map(Number)); // 나머지 줄에서 미로 정보 가져옴

function bfs(maze, N, M) {
  const directions = [
    [0, 1],  // 오른쪽
    [1, 0],  // 아래쪽
    [0, -1], // 왼쪽
    [-1, 0]  // 위쪽
  ];

  const queue = [[0, 0]]; // 시작점 (0, 0)
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    // 도착지에 도달하면 그 칸의 값을 리턴 (최단 경로)
    if (x === N - 1 && y === M - 1) {
      return maze[x][y];
    }

    // 상하좌우 탐색
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 범위를 벗어나지 않고, 벽이 아니고, 아직 방문하지 않았다면
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && maze[nx][ny] === 1 && !visited[nx][ny]) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        maze[nx][ny] = maze[x][y] + 1; // 이전 경로에서 +1
      }
    }
  }

  return -1; // 도달할 수 없는 경우
}

// 최단 경로 출력
console.log(bfs(maze, N, M));
