let p1, p2;
const gravity = 0.6;
let gameState = "PLAY";
let winner = "";

function setup() {
  createCanvas(800, 400);
  resetGame();
}

function resetGame() {
  p1 = new Player(150, 200, color(0, 100, 255), {
    up: 87, left: 65, down: 83, right: 68, punch: 81, kick: 69, dash: 16 
  }, "Blue");
  
  p2 = new Player(600, 200, color(255, 50, 50), {
    up: UP_ARROW, left: LEFT_ARROW, down: DOWN_ARROW, right: RIGHT_ARROW, punch: 188, kick: 190, dash: 191 
  }, "Red");
  
  gameState = "PLAY";
}

function draw() {
  background(220);
  stroke(0); strokeWeight(2);
  line(0, height - 20, width, height - 20);

  drawUI();

  if (gameState === "PLAY") {
    p1.lookAt(p2); p2.lookAt(p1);
    p1.update(p2); p2.update(p1);
    checkHit(p1, p2); checkHit(p2, p1);

    if (p1.health <= 0) { gameState = "GAMEOVER"; winner = "Red"; }
    if (p2.health <= 0) { gameState = "GAMEOVER"; winner = "Blue"; }
  } else {
    textAlign(CENTER); textSize(50); fill(0);
    text(winner + " Wins!", width/2, height/2);
    textSize(20); text("Press SPACE to Play Again", width/2, height/2 + 40);
    if (keyIsDown(32)) resetGame();
  }

  p1.show();
  p2.show();
}

function drawUI() {
  fill(100); rect(50, 20, 300, 20);
  fill(0, 100, 255); rect(50, 20, map(p1.health, 0, 100, 0, 300), 20);
  fill(100); rect(450, 20, 300, 20);
  fill(255, 50, 50); rect(450, 20, map(p2.health, 0, 100, 0, 300), 20);
}

function checkHit(atk, def) {
  if (atk.isAttacking && !atk.hasHit) {
    let hitX, hitY, hitW, hitH;
    if (atk.attackType === 'punch') { 
      hitW = 15; hitH = 70;
      hitX = atk.facingRight ? atk.pos.x + atk.w : atk.pos.x - hitW;
      hitY = atk.pos.y - 30;
    } else { 
      hitW = 45; hitH = 15;
      hitX = atk.facingRight ? atk.pos.x + atk.w : atk.pos.x - hitW;
      hitY = atk.pos.y + 55;
    }
    
    if (hitX < def.pos.x + def.w && hitX + hitW > def.pos.x &&
        hitY < def.pos.y + def.h && hitY + hitH > def.pos.y) {
      
      let damage = atk.attackType === 'kick' ? 15 : 10;
      if (def.isBlocking) { damage *= 0.2; def.hitstun = 0; } 
      else { def.hitstun = atk.attackType === 'kick' ? 25 : 15; }
      
      def.health = max(0, def.health - damage);
      let kbX = atk.facingRight ? (atk.attackType === 'kick' ? 50 : 15) : (atk.attackType === 'kick' ? -50 : -15);
      def.pos.x += kbX;
      if (atk.attackType === 'punch') def.vel.y = -7; 
      
      atk.hasHit = true; 
      // SUCCESSFUL HIT: Apply standard short recovery
      atk.recovery = 8; 
    }
  }
}

function keyPressed() {
  if (p1) p1.handleJump(keyCode);
  if (p2) p2.handleJump(keyCode);
}

class Player {
  constructor(x, y, col, keys, name) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.w = 40; this.h = 80;
    this.color = col;
    this.keys = keys;
    this.health = 100;
    this.isAttacking = false;
    this.isBlocking = false;
    this.attackType = '';
    this.timer = 0;
    this.recovery = 0;
    this.hitstun = 0;
    this.facingRight = true;
    this.hasHit = false;
    this.jumps = 0;
    this.dashCooldown = 0;
    this.isDashing = false;
    this.dashTimer = 0;
  }

  handleJump(code) {
    if (code === this.keys.up && this.jumps < 2 && !this.isBlocking && !this.isAttacking && this.hitstun <= 0) {
      this.vel.y = -11;
      this.jumps++;
    }
  }

  lookAt(enemy) {
    if (this.hitstun <= 0 && !this.isDashing) {
        this.facingRight = (this.pos.x < enemy.pos.x);
    }
  }

  update(enemy) {
    if (this.hitstun > 0) this.hitstun--;
    if (this.recovery > 0) this.recovery--;
    if (this.dashCooldown > 0) this.dashCooldown--;

    // DASH LOGIC
    if (keyIsDown(this.keys.dash) && this.dashCooldown <= 0 && this.hitstun <= 0 && !this.isAttacking) {
      this.isDashing = true;
      this.dashTimer = 8;
      this.dashCooldown = 15;
      let dashDir = keyIsDown(this.keys.left) ? -1 : (keyIsDown(this.keys.right) ? 1 : (this.facingRight ? 1 : -1));
      this.vel.x = dashDir * 22;
      this.vel.y = 0;
    }

    if (this.isDashing) {
      this.dashTimer--;
      this.pos.x += this.vel.x;
      if (this.dashTimer <= 0) this.isDashing = false;
    }

    // ATTACK UPDATE
    if (this.isAttacking) {
      this.timer--;
      if (this.timer <= 0) { 
        this.isAttacking = false; 
        // WHIFF LOGIC: If timer ends and hasHit is still false, apply extra lag
        if (!this.hasHit) {
          this.recovery = (this.attackType === 'kick') ? 35 : 25; // Massive lag for missing a kick
        }
      }
    }

    // Blocking condition
    this.isBlocking = keyIsDown(this.keys.down) && this.pos.y >= height - this.h - 20 && !this.isAttacking && this.recovery <= 0 && !this.isDashing;

    // Standard Movement
    if (this.hitstun <= 0 && !this.isAttacking && this.recovery <= 0 && !this.isDashing) {
      if (!this.isBlocking) {
        if (keyIsDown(this.keys.left)) this.pos.x -= 6;
        if (keyIsDown(this.keys.right)) this.pos.x += 6;
        if (keyIsDown(this.keys.punch)) this.startAttack('punch', 10);
        else if (keyIsDown(this.keys.kick)) this.startAttack('kick', 18);
      }
      this.preventOverlap(enemy);
    }

    if (!this.isDashing) {
      this.vel.y += gravity;
      this.pos.y += this.vel.y;
    }

    if (this.pos.y > height - this.h - 20) {
      this.pos.y = height - this.h - 20;
      this.vel.y = 0;
      this.jumps = 0;
    }
    this.pos.x = constrain(this.pos.x, 0, width - this.w);
  }

  preventOverlap(enemy) {
    let d = dist(this.pos.x + this.w/2, 0, enemy.pos.x + enemy.w/2, 0);
    let verticalOverlap = (this.pos.y + this.h > enemy.pos.y) && (this.pos.y < enemy.pos.y + enemy.h);
    if (d < this.w && verticalOverlap) {
      if (this.pos.x < enemy.pos.x) this.pos.x = enemy.pos.x - this.w;
      else this.pos.x = enemy.pos.x + enemy.w;
    }
  }

  startAttack(type, duration) {
    this.isAttacking = true;
    this.attackType = type;
    this.timer = duration;
    this.hasHit = false;
    this.isBlocking = false;
  }

  show() {
    let displayColor = (this.hitstun > 0) ? color(255) : (this.isBlocking ? lerpColor(this.color, color(0), 0.4) : this.color);
    
    // VISUAL FEEDBACK: Turn gray if whiffing (stuck in recovery)
    if (this.recovery > 0 && !this.isAttacking) {
      displayColor = lerpColor(this.color, color(150), 0.7);
    }
    if (this.isDashing) displayColor = color(255, 255, 0);

    fill(displayColor);
    rect(this.pos.x, this.pos.y, this.w, this.h);

    if (this.isAttacking) {
      fill(255, 255, 0);
      if (this.attackType === 'punch') {
        let xPos = this.facingRight ? this.pos.x + this.w : this.pos.x - 15;
        rect(xPos, this.pos.y - 30, 15, 70); 
      } else {
        let xPos = this.facingRight ? this.pos.x + this.w : this.pos.x - 45;
        rect(xPos, this.pos.y + 55, 45, 15);
      }
    }
  }
}