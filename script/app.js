document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("JavaScript file loaded");
  
    // Récupération des valeurs du formulaire
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Validation des champs du formulaire
    if (!firstName || !lastName || !message) {
      errorMessage.style.display = 'block';
      return;
    } else {
      errorMessage.style.display = 'none';
    }
  
    // Création d'un nouvel élément de commentaire
    const newComment = document.createElement('div');
    newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200', 'py-10');
    newComment.innerHTML = `
      <div class="flex-1">
        <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>${message}</p>
        </div>
      </div>
    `;
  
    // Ajout du nouveau commentaire à la liste
    document.getElementById('comment-list').appendChild(newComment);
  
    // Reset des champs du formulaire
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('message').value = '';
  });
  