export function waitUntilAnimationsFinish(element) {
  const animationPromises = element
    .getAnimations()
    .map((animation) => animation.finised);

  return Promise.allSettled(animationPromises);
}
