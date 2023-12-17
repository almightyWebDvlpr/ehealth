 // Get all custom select containers
 const customSelects = document.querySelectorAll('.custom-select');

 // Add click event listener to each custom select
 customSelects.forEach(function(select) {
   const arrowIcon = select.querySelector('.arrow-icon');
   const selectHeader = select.querySelector('.select-header p');
   const resetButton = select.querySelector('.reset-button');
   const optionsList = select.querySelector('.options-list');
   const hiddenInput = select.querySelector('input[type="hidden"]');
   const displayedValueElement = select.querySelector('.selected-value');

   // Store the original header text (new line)
   const originalHeaderText = selectHeader ? selectHeader.textContent : '';

   // Add click event listener to each reset button (new line)
   if (resetButton) {
     resetButton.addEventListener('click', function() {
       // Reset the selected value and displayed text
       hiddenInput.value = '';
       if (displayedValueElement) {
         displayedValueElement.textContent = '';
       }
       if (selectHeader) {
         selectHeader.textContent = originalHeaderText; // Restore the original text
       }

       // Hide the reset button
       if (resetButton) {
         resetButton.classList.add('hidden');
       }
     });
   }

   select.addEventListener('click', function(event) {
     // Toggle the visibility of the options list
     optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';

     // Toggle the rotation of the arrow icon
     arrowIcon.classList.toggle('select-icon-rotate', optionsList.style.display === 'block');

     // Check if the click is on an option
     if (event.target.tagName === 'LI') {
       // Set the selected option value to the hidden input
       hiddenInput.value = event.target.dataset.value;

       // Update the displayed value
       if (displayedValueElement) {
         displayedValueElement.textContent = event.target.textContent;
       }

       // Update the select header text content
       if (selectHeader) {
         selectHeader.textContent = event.target.textContent;
       }

       // Show the reset button
       if (resetButton) {
         resetButton.classList.remove('hidden');
       }

       // Close the options list
       optionsList.style.display = 'none';

       // Reset the rotation of the arrow icon
       arrowIcon.classList.remove('select-icon-rotate');
     }
   });
 });