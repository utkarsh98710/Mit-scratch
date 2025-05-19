// src/utils/animationHelpers.js
export function executeAnimation(sprite, animation, updateSprite) {
  switch (animation.type) {
    case 'move':
      const angleInRadians = (sprite.rotation * Math.PI) / 180;
      const newX = sprite.x + animation.steps * Math.cos(angleInRadians);
      const newY = sprite.y + animation.steps * Math.sin(angleInRadians);
      updateSprite(sprite.id, { x: newX, y: newY });
      break;
      
    case 'rotate':
      const newRotation = sprite.rotation + animation.degrees;
      updateSprite(sprite.id, { rotation: newRotation });
      break;
      
    case 'goTo':
      updateSprite(sprite.id, { x: animation.x, y: animation.y });
      break;
      
    default:
      break;
  }
}

export function getNextAnimationIndex(sprite) {
  if (sprite.animations.length === 0) return 0;
  return (sprite.currentAnimationIndex + 1) % sprite.animations.length;
}