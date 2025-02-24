document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let experiences = '';
    const experienceElements = document.querySelectorAll('.experience');
    experienceElements.forEach(exp => {
        const poste = exp.children[0].value;
        const entreprise = exp.children[1].value;
        const annees = exp.children[2].value;
        
        experiences += <p><strong>${poste}</strong> chez ${entreprise} (${annees})</p>;
    });

    const previewContent = 
        <h3 class="font-bold">${name}</h3>
        <p>Email: ${email}</p>
        <p>Téléphone: ${phone}</p>
        <h4 class="font-semibold mt-4">Expériences Professionnelles:</h4>
        ${experiences}
    ;
    
    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('cvPreview').classList.remove('hidden');
});

document.getElementById('addExperience').addEventListener('click', function() {
    const experienceContainer = document.getElementById('experienceContainer');
    
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience', 'mb-4');
    newExperience.innerHTML = 
        <input type="text" placeholder="Poste" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
        <input type="text" placeholder="Entreprise" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
        <input type="text" placeholder="Années" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
    ;
    
    experienceContainer.appendChild(newExperience);
});
