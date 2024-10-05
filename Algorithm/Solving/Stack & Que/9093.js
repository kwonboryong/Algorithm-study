const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');
// ['I am happy today', 'We want to win the first prize']


// input의 각 줄을 하나씩 처리하는 함수
const result = input.slice(1).map(line => { 
  // 첫 번째 줄을 제외한 나머지 줄 처리
  // line은 현재 처리하고 있는 줄
  
  const reversedWords = line.split(' ').map(word => word.split('').reverse().join(''));
  // 1. line.split(' ') - 한 줄을 공백을 기준으로 나누어 단어로 나눈 배열 생성 (['I', 'am', 'happy', 'today'])
  // 2. map() - 각 단어에 어떤 작업을 하고 그 결과를 배열로 반환
  // 3. word.split('') - 각 단어를 문자 하나씩 분리 ("happy" → ['h', 'a', 'p', 'p', 'y'])
  // 4. reverse() - 배열의 순서를 뒤집음 (['h', 'a', 'p', 'p', 'y'] → ['y', 'p', 'p', 'a', 'h'])
  // 5. join('') - 배열을 다시 하나의 문자열로 합침 (['y', 'p', 'p', 'a', 'h'] → "yppah")

  return reversedWords.join(' ');
  // 각 줄의 결과를 하나의 문자열로 반환
});

console.log(result.join('\n'));

