export default function handleFullScreen(element: HTMLElement) {
  if (!document.fullscreenElement) {
    element.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
