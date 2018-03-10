var socket = io.connect('http://localhost:8080');

function addMessage (message) {
  let el = document.createElement("div");
  el.className = 'message';

  let text = document.createTextNode(message);
  el.appendChild(text);

  let chat = document.getElementById('chat');
  chat.append(el);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage () {
  let message = document.getElementById('message').value;

  if (message.trim().length != 0) {
    socket.emit('message', message);
    addMessage(message);
    document.getElementById('message').value = '';
  }
}

socket.on('message', function(message) {
  addMessage(message);
});
