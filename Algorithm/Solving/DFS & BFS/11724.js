const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n')


const [n, m] = input[0].split(' ').map(Number); 
// n: 노드 수, m: 간선 수

const graph = Array.from({ length: n + 1 }, () => []); 
// 노드끼리 연결된 정보를 저장할 인접 리스트
// - 노드 번호가 1부터 시작하기 때문에 length: n + 1

// 그래프 구축
for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(' ').map(Number); 
  // 두 번째 줄부터 간선 정보 가져오기

  graph[u].push(v); 
  // u의 배열에 v를 추가(= 노드 u와 노드 v가 연결됨)

  graph[v].push(u); 
  // 반대로 v의 배열에 u를 추가
}

// 노드가 방문했는지 여부를 기록
const visited = Array(n + 1).fill(false); 

// DFS 함수
const dfs = (node) => {
  // 현재 노드를 방문했는지 기록
  visited[node] = true;

  // 현재 노드와 연결된 노드들(neighbor)을 차례대로 탐색
  for (let neighbor of graph[node]) {

    // 방문하지 않은 neighbor가 있다면
    if (!visited[neighbor]) {
      // 그 노드에 대해 다시 dfs(neighbor)를 호출하여 계속해서 연결된 노드들을 탐색
      dfs(neighbor);
    }
  }
};

// 연결 요소의 개수를 저장하는 변수
let connectedComponents = 0;

// 모든 노드에 대해 DFS 수행
for (let i = 1; i <= n; i++) {

  // 아직 방문하지 않은 노드라면
  if (!visited[i]) { 
    connectedComponents++; 
    // 연결 요소 1 증가
    
    dfs(i); 
    //  그 노드를 시작점으로 DFS 수행
  }
}

// 연결 요소의 개수 출력
console.log(connectedComponents);
