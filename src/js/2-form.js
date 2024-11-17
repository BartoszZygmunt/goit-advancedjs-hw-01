// Deklaracja obiektu formData poza jakąkolwiek funkcją
const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

// Pobranie referencji do formularza i jego elementów
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Funkcja ładująca dane z localStorage i wypełniająca formularz
function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      emailInput.value = parsedData.email;
      formData.email = parsedData.email;
    }

    if (parsedData.message) {
      messageInput.value = parsedData.message;
      formData.message = parsedData.message;
    }
  }
}

// Funkcja obsługująca zdarzenie input
function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Funkcja obsługująca zdarzenie submit
function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Proszę wypełnić wszystkie pola');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}

// Nasłuchiwanie zdarzeń
form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

// Wczytanie danych przy załadowaniu strony
loadFormData();
