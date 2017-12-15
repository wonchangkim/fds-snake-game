import { ROWS, COLS } from './config';

function SnakeGameLogic() {
    // 각 마디의 좌표를 저장하는 배열
    this.joints = [
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 0 }];

    // 먹이의 좌표
    this.fruit = { x: 3, y: 5 };
    this.direction = 'right'
}
SnakeGameLogic.prototype.up = function () {
  console.log('up');
  this.direction = 'up'
}
SnakeGameLogic.prototype.down = function () {
  console.log('down');
  this.direction = 'down'
  }

SnakeGameLogic.prototype.left = function () {
  console.log('left');
  this.direction = 'left'
}
SnakeGameLogic.prototype.right = function () {
  console.log('right');
  this.direction = 'right'
}

SnakeGameLogic.prototype.nextState = function () {

  console.log(`nextState`);
let newHead;
if(this.direction === 'up'){
  newHead = {
    x : this.joints[0].x,
    y : this.joints[0].y -1
    };
  }else if (this.direction === 'down' ){
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    };
  } else if (this.direction === 'left') {
    newHead = {
      x: this.joints[0].x -1,
      y: this.joints[0].y
    };
  } else if (this.direction === 'right') {
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    };
  }
  //게임이 끝나는 상황
  if(
    newHead.x < 0 ||
    newHead.x >= COLS ||
    newHead.y < 0 ||
    newHead.y >= ROWS || //벽에 부딛힌경우
    this.joints.some(j => j.x === newHead.x && j.y === newHead.y) //자기몸에 부딧혔는지.
  ){
    return false;
  }

  // 먹이를 먹었을때
  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    do {
    this.fruit.x = Math.floor(Math.random() * COLS);
    this.fruit.y = Math.floor(Math.random() * ROWS);
   } while (
    this.joints.some(j => j.x === this.fruit.x && j.y === this.fruit.y) ||
    (newHead.x === this.fruit.x && newHead.y === this.fruit.y) //연산자 우선순위 And가 먼저 계산.
    );
  } else {
    this.joints.pop();
  }
  this.joints.unshift(newHead);
  return true;
}

export default SnakeGameLogic;
