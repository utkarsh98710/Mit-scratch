// src/utils/collisionHelpers.js
export function detectCollision(sprite1, sprite2, threshold = 30) {
  const dx = sprite1.x - sprite2.x;
  const dy = sprite1.y - sprite2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < threshold;
}

export function handleCollision(sprite1, sprite2) {
  return {
    sprite1: { ...sprite1, animations: sprite2.animations },
    sprite2: { ...sprite2, animations: sprite1.animations }
  };
}