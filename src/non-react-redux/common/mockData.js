export function getNextTimeline() {
  return { id: Date.now(), desc: `${Date.now()}번째 게시글...`, likes: Math.floor(Math.random * 100 + 1) };
}
export function getNextFriend() {
  return { id: Date.now(), name: `로봇 ${Date.now()}호`, age: Math.floor(Math.random * 100 + 1) };
}