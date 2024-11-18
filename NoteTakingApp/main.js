console.log('Hello World!');

const newNote = document.getElementById('addNote');

newNote.addEventListener('click', () => {
  window.location.href = 'input.html';
})
  
function addNewNote(){
  const heading = document.getElementById('heading').value;
  const content = document.getElementById('content').value;
  localStorage.setItem(`notes${noteId}-heading`, heading);
  localStorage.setItem(`notes${noteId}-content`, content);
  heading = '';
  content = '';
};