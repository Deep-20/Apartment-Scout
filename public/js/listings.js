document.querySelectorAll('.edit-btn').forEach(editBtn => {
  editBtn.addEventListener('click', () => {
    const listingForm = editBtn.closest('.listing-card').querySelector('.listing-form');
    listingForm.querySelectorAll('input').forEach(input => {
      input.readOnly = false;
    });
    editBtn.style.display = 'none';
    editBtn.nextElementSibling.style.display = 'block';
  });
});

document.querySelectorAll('.save-btn').forEach(saveBtn => {
  saveBtn.addEventListener('click', async () => {
    const listingForm = saveBtn.closest('.listing-card').querySelector('.listing-form');
    listingForm.querySelectorAll('input').forEach(input => {
      input.readOnly = true;
    });
    saveBtn.style.display = 'none';
    saveBtn.previousElementSibling.style.display = 'block';

    const listingId = listingForm.dataset.listingId;
    const formData = new FormData(listingForm);

    const updatedData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`/updateListing/${listingId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        console.log('Listing updated successfully');
        alert("Listing Updated Successfully");
      } else {
        console.error('Error updating listing');
        alert("Error updating listing");
      }
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelectorAll('.OpenListingButton').forEach(function(button) {
    button.addEventListener('click', function(event) {
      
      event.preventDefault();
      
      // Get the parent element with the 'card-content' class and extract the '_id' attribute so that i can get my listingID
      let listingId = event.target.closest('.card-content').getAttribute('data-listing-id');
      
      // NavigatING to the '/trackListing' route with the '_id' as a query parameter
      window.location.href = `/trackListing?id=${listingId}`;
    });
  });
});


//for scout user view task from a listing

document.addEventListener("DOMContentLoaded", () => {
  const viewTaskButtons = document.querySelectorAll(".viewTaskButton");

  console.log("View Task Button is working!!");

  viewTaskButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      // Get the parent element with the 'listing-card' class and extract the '_id' attribute so that i can get my listingID
      let listingId = event.target.closest('.listing-card').getAttribute('data-listing-id');

      // NavigatING to the '/viewTask' route with the listing ID as a query parameter
      window.location.href = `/viewTask?listingId=${listingId}`;
    });
  });
});





