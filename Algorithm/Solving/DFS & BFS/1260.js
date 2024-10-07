const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


// 입력 받기
const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []); // 정점의 개수만큼 배열 생성

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b); // 양방향 그래프이므로 양쪽에 연결
  graph[b].push(a);
}

// 정점 번호가 작은 순서대로 방문해야 하므로 정렬
graph.forEach((adjList) => adjList.sort((a, b) => a - b));

// DFS 함수 (재귀적 방식)
const dfs = (start, visited) => {
  visited[start] = true;
  process.stdout.write(start + ' '); // 탐색 순서 출력

  for (const neighbor of graph[start]) {
    if (!visited[neighbor]) {
      dfs(neighbor, visited);
    }
  }
};

// BFS 함수 (큐 방식)
const bfs = (start) => {
  const visited = Array(N + 1).fill(false);
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift(); // 큐에서 꺼낸 노드를 방문
    process.stdout.write(node + ' ');

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor); // 큐에 인접 노드 추가
      }
    }
  }
};

// DFS 탐색
const visitedDFS = Array(N + 1).fill(false);
dfs(V, visitedDFS);
process.stdout.write('\n');

// BFS 탐색
bfs(V);

