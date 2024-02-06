const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const saveState = JSON.parse(localStorage.getItem(localStorageKey));
if(saveState){
    form.elements.email.value = saveState.email || '';  
    form.elements.message.value = saveState.message || '';
}

form.addEventListener('input', () => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: form.email.value.trim(),
        message: form.message.value.trim()
      }));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email && message) {
      console.log( email, message );
      form.reset();
      localStorage.removeItem('feedback-form-state');
    } 
  });



