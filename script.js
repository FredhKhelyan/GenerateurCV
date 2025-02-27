
// informations personnelles
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
       
         });         
//experience
var poste = document.getElementById('poste');
poste.addEventListener('input', function(){
    previewPoste.textContent = "Poste :"  + this.value;
});
var entreprise = document.getElementById('entreprise');
entreprise.addEventListener('input', function(){
    previewEntreprise.textContent = "Entreprise :" + this.value;
});
var annee = document.getElementById('annee');
annee.addEventListener('input', function(){
    previewAnnee.textContent = "Annee :" + this.value;
});

//formation
// var etablissement = document.getElementById('etablissement');
// poste.addEventListener('input', function(){
//     previewPoste.textContent = "Etablissement :" + this.value;
// });
// var diplome = document.getElementById('diplome');
// diplome.addEventListener('input', function(){
//     previewEntreprise.textContent = "Diplome obtenu :" + this.value;
// });
// var anneed = document.getElementById('anneed');
// anneed.addEventListener('input', function(){
//     previewAnnee.textContent = "Annee :" + this.value;
// });

 //centre d'interet

// var loisir1 = document.getElementById('c1');
// loisir1.addEventListener('input', function(){
//     previewPoste.textContent = "Loisir1 :" + this.value;
// });
// var loisir2 = document.getElementById('c2');
// loisir2.addEventListener('input', function(){
//     previewEntreprise.textContent = "Loisir2 :" + this.value;
// });
// var passion = document.getElementById('c3');
// passion.addEventListener('input', function(){
//     previewAnnee.textContent = "Passion :" + this.value;
// })

//Langues

// var l1 = document.getElementById('l1');
// poste.addEventListener('input', function(){
//     previewPoste.textContent = "Langue :"  + this.value;
// });
// var l1 = document.getElementById('niveau');
// l1.addEventListener('input', function(){
//     previewEntreprise.textContent = "Niveau :" + this.value;
// });


// statut matrimoniale
const radios = document.getElementsByName('statut');
radios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            const selectedValue = this.value;
            document.getElementById('previewStatut').textContent = "Situation Matrimoniale : " + selectedValue;
        }
    });
});






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
         //ajout des formation
         document.getElementById('addformation').addEventListener('click', function() {
            const formation = document.getElementById('formation');
            const newformation = document.createElement('div');
            newformation.classList.add('formation', 'mb-4');
            newformation.innerHTML =`<hr>
                <input type="text" placeholder="Diplome obtenu" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
                <input type="text" placeholder="Etablissement" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
                <input type="text" placeholder="annee" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
            `;
            formation.appendChild(newformation);
        });



        //Ajout des langues
        document.getElementById('addlangue').addEventListener('click', function() {
            const formation = document.getElementById('langue');
            const newformation = document.createElement('div');
            newformation.classList.add('langue', 'mb-4');
            newformation.innerHTML =`<hr>
                <input type="text" placeholder="Langue Maitrisé" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
                <input type="text" placeholder="Niveau de compétence" class="block w-full border border-gray-300 rounded-md p-2 mb-2" required>
            `;
            formation.appendChild(newformation);
        });

        //impressoin du cv
 function imprimer() {

    //vérification du formulaire
        const nom = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const poste = document.getElementById('poste').value;
        const entreprise = document.getElementById('entreprise').value;
        const photo = document.getElementById('photo').value;
        const etablissement = document.getElementById('etablissement').value;
        const diplome = document.getElementById('diplome').value;
        const annee = document.getElementById('annee').value;
        const langue = document.getElementById('langue').value;
        const niveau = document.getElementById('niveau').value;
        const centre_interet = document.getElementById('c1').value;
        const centre_interet2 = document.getElementById('c2').value;
        const centre_interet3 = document.getElementById('c3').value;

        if(age>=18 || age<=65 || nom.trim() === "" || email.trim() === "" || poste.trim() === "" || 
        photo.trim() === "" || entreprise.trim() === "" || etablissement.trim() === "" || diplome.trim() === "" || annee.trim() === "" ||
        langue.trim() === "" || niveau.trim() === "" || centre_interet.trim() === "" || centre_interet2.trim() === "" || centre_interet3.trim() === ""){
           
           alert("veuillez remplir correctement les champs");

        }else{

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
    }



    //stockage local


    function Enregistrement(){
        const nom = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const poste = document.getElementById('poste').value;
        const entreprise = document.getElementById('entreprise').value;
        const photo = document.getElementById('photo').value;
        const etablissement = document.getElementById('etablissement').value;
        const diplome = document.getElementById('diplome').value;
        const annee = document.getElementById('annee').value;
        const langue = document.getElementById('langue').value;
        const niveau = document.getElementById('niveau').value;
        const centre_interet = document.getElementById('c1').value;
        const centre_interet2 = document.getElementById('c2').value;
        const centre_interet3 = document.getElementById('c3').value;

        if(age>=18 || age<=65 || nom.trim() === "" || email.trim() === "" || poste.trim() === "" || 
        photo.trim() === "" || entreprise.trim() === "" || etablissement.trim() === "" || diplome.trim() === "" || annee.trim() === "" ||
        langue.trim() === "" || niveau.trim() === "" || centre_interet.trim() === "" || centre_interet2.trim() === "" || centre_interet3.trim() === ""){
           alert("veuillez remplir correctement les champs");
        }else{
    const donnees = {
        nom:nom,
        age:age,
        email:email,
        poste:poste,
        entreprise:entreprise,
        photo:photo,
        etablissement:etablissement,
        diplome:diplome,
        annee:annee,
        langue:langue,
        niveau:niveau,
        centre_interet:centre_interet,
        centre_interet2:centre_interet2,
        centre_interet3:centre_interet3
        };
        localStorage.setItem('formData', JSON.stringify(donnees));
       alert("Les données ont été enregistrées avec succès.");
      };
      
         
    }    




    


























        
          
    