//chat bot . demonstrating the include method
var chat = "thanks , bye"
print(chat);
var lengthOfChat = chat.length
print(lengthOfChat)
if (chat.includes('hello')) {
  print('Hi, can I help you pick a destination?');
}
if (chat.includes("bye")) {
  print('See you later, have a great trip!');
}
//demonstrating the replace method
var message = 'Today we are going shopping!';
message = message.replace('day', 'marrow');
print(message);