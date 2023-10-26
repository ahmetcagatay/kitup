
    // CHANGE IMAGES DEPENDS ON LANGUAGE
  targetPage = "sales";
  // Get the data for the target page
  var targetData = data[translatedLanguage][targetPage];
  // Loop through all data entries
  for (var i = 0; i < targetData.length; i++) {
      var dataTitle = targetData[i].data_title; // Kullanılacak olan data-title
      // Select the target element using CSS Selector based on data-title
      var targetElement = document.querySelector('[data-title="' + dataTitle + '"]');
      if (targetElement) {
          // Select the img element underneath
          var imgElement = targetElement.querySelector("img");
          if (imgElement) {
              var newImageUrl = targetData[i].image_url; // Yeni resim URL'si
              // Change the src attribute
              imgElement.src = newImageUrl;
              console.log("Image updated successfully:", dataTitle);
          } else {
              console.log("No img element found under the target element with data-title:", dataTitle);
          }
      } else {
          console.log("Target element not found with data-title:", dataTitle);
      }
  }