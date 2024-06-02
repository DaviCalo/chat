const chat = document.getElementById('messanges');
const form = document.getElementById('form-message');
const input = document.getElementById('messange-input');

window.onload = function() {
    chat.scrollTop = chat.scrollHeight;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const element = createMessage();

  chat.appendChild(element);
  input.value = '';

  chat.scrollTop = chat.scrollHeight;
})


const createMessage = () => {
    const Message = document.createElement('div');
    const Name = document.createElement('span');
    const Content = document.createElement('span');

    Name.textContent = "Davi Calô";
    Content.textContent = input.value;

    Message.appendChild(Name);
    Message.appendChild(Content);
    console.log(Message);

    return Message;
}
