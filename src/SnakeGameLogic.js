import { ROWS, COLS } from './config';

function SnakeGameLogic() {
    // 각 마디의 좌표를 저장하는 배열
    this.joints = [
      { x: 3, y: 0 },//머리 배열첫번째
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 0 }];
     this.direction = 'right';

    // 먹이의 좌표
    this.fruit = { x: 3, y: 10 };

}
SnakeGameLogic.prototype.up = function () {
  console.log('up');
  this.direction = 'up';
}
SnakeGameLogic.prototype.down = function () {
  console.log('down');
  this.direction = 'down';
  }

SnakeGameLogic.prototype.left = function () {
  console.log('left');
  this.direction = 'left';
}
SnakeGameLogic.prototype.right = function () {
  console.log('right');
  this.direction = 'right';
}

SnakeGameLogic.prototype.nextState = function () {

  switch (this.direction) {
    case 'up':
      this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
      break;
    case 'down':
      this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
      break;
    case 'left':
      this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
      break;
    case 'right':
      this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
      break;
  }
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.fruit.x = Math.floor(Math.random() * 5);
    this.fruit.y = Math.floor(Math.random() * 5);

    for(let c of this.joints){
      if(this.fruit.x === c.x && this.fruit.y === c.y){
        this.fruit.x = Math.floor(Math.random() * 5);
        this.fruit.y = Math.floor(Math.random() * 5);
        console.log('ccccccccc');
      }
    }

    }else{
    this.joints.pop();
  }

  if(!this.joints.includes(this.joints[0] , 1)){
    console.log('aaaa');

  }
  console.log(`nextState`);
  return true;
}



export default SnakeGameLogic;
