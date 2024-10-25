let previousScrollPosition = 0;

export const isScrollingDown = () => {
  let scrolledPosition = window.scrollY;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
}

export const elementInViewport = (el) => {
  var rect = el.getBoundingClientRect();

  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 1.5
  );
}

export const handleTriggerClasses = (activeTrigger, nextTrigger, activeClass, nextClass) => {
  if (nextTrigger) {
    return nextClass;
  }
  if (activeTrigger) {
    return activeClass;
  } else {
    return "";
  }
};