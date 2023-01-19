const insert = (content) => {
  const elements = document.getElementsByClassName('droid');
  if (elements.length === 0) {
    return;
  }
  const element = elements[0];
  const pToRemove = element.childNodes[0];
  pToRemove.remove();
  const splitContent = content.split('\n');
  splitContent.forEach((content) => {
    const p = document.createElement('p');
    p.textContent = content;
    element.appendChild(p);
  });
  return true;
}

chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;

      // Call this insert function
      const result = insert(content);

      // If something went wrong, send a failed status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
);
