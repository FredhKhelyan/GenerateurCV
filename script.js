


        const infoForm = document.getElementById('infoForm');

        infoForm.addEventListener('input', function() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const email = document.getElementById('email').value;
            const photo = document.getElementById('photo').value;

            document.getElementById('previewName').textContent = name ? `Nom: ${name}`: 'Votre Nom';
            document.getElementById('previewAge').textContent = age ? `Âge: ${age}` : 'Votre Âge';
            document.getElementById('previewEmail').textContent = email ? `email: ${email}` : 'Votre email';
            document.getElementById('previewPhoto').src = photo;
            document.getElementById('previewPhoto').classList.toggle('hidden', !photo);

            const experienceElements = document.querySelectorAll('.experience');
            let experiences = '';
            experienceElements.forEach(exp => {
                const poste = exp.children[0].value;
                const entreprise = exp.children[1].value;
                const annees = exp.children[2].value;

                if (poste && entreprise && annees) {
                    experiences += `<p><strong>${poste}</strong> chez ${entreprise} (${annees})</p>`;
                }
            });
            document.getElementById('previewExperiences').innerHTML = experiences || 'Aucune expérience ajoutée.';
        });

        //ajout des experiences

        document.getElementById('addExperience').addEventListener('click', function() {
            const experienceContainer = document.getElementById('experienceContainer');
            const newExperience = document.createElement('div');
            newExperience.classList.add('experience', 'mb-4');
            newExperience.innerHTML =`<hr>
                <input type="text" placeholder="Poste" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
                <input type="text" placeholder="Entreprise" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
                <input type="text" placeholder="Années" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
            `;
            experienceContainer.appendChild(newExperience);
        });

        //impressoin du cv

    function imprimer() {
        const content = document.getElementById("previewContent").innerHTML;  // Récupère le contenu de la div
        // Ouvre une nouvelle fenêtre
        const printWindow = window.open('', '', 'height=600,width=800');
        // Écrit le contenu dans la fenêtre de l'impression
        printWindow.document.write('<html><head><title>Impression du CV</title></head><body>');
        printWindow.document.write(content);  // Écrit le contenu HTML de la div dans le document de la fenêtre
        printWindow.document.write('</body></html>');
        // Fermeture du document et lancement de l'impression
        printWindow.document.close();
        printWindow.print();  // Lancement de l'impression
    }
            
        // affichae de l'image
          document.getElementById('photo').addEventListener('change', function(event) {
            const file = event.target.files[0]; // Récupérer le premier fichier
            if (file) {
                // Créer un lecteur de fichiers
              const reader = new FileReader(); 
        
              reader.onload = function(e) {
                // Créer une balise <img>
                const img = document.createElement('img'); 
                // Définir l'URL de l'image
                img.src = e.target.result; 
                img.alt = 'Image choisie'; 
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                img.style.borderRadius = '50%'; 
                // Ajouter l'image dans la div vue_image
                document.querySelector('.vue_image').innerHTML = ''; // Nettoyer la div avant d'ajouter l'image
                document.querySelector('.vue_image').appendChild(img);
              }
              reader.readAsDataURL(file); // Lire le fichier comme URL de données
            }
          });
          
    