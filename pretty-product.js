  var highlightProductName = "3 Months";
  var highlightedText = "Recommended";
  var highlightProductID = "4602003";
  var currencySymbol = "$"; // copy paste the symbols -> "$" "₺" "€"
  // LEFT PRICE PARAMS
  var total_discounts = ["15.99", "32.99", "65.99"];
  var total_prices = ["11.99", "24.99", "49.99"];
  // RIGHT PRICE PARAMS
  var discount_prices = ["0.57", "0.36", "0.36"];
  var prices = ["0.39", "0.27", "0.27"];
  var dayText = "day";

  // HIGHLIGHTED - RECOMMENDED ELEMENT BEAUTY
  var dataProductNameElement = document.querySelector(`[data-product-name="${highlightProductName}"]`);

  if (dataProductNameElement) {
    var closestTr = dataProductNameElement.closest('tr');

    if (closestTr) {
      var spanElement = document.createElement('span');
      spanElement.classList.add('pretty-highlighted-text');
      spanElement.innerHTML = highlightedText;

      closestTr.insertBefore(spanElement, closestTr.firstChild);

      var pullLeftTd = closestTr.querySelector('.pull-left');
      var pullRightTd = closestTr.querySelector('.pull-right');

      if (pullLeftTd) {
        pullLeftTd.classList.add('pretty-highlighted');
      }

      if (pullRightTd) {
        pullRightTd.classList.add('pretty-highlighted');
      }
    }
  }

  // ADD DISCOUNTED TEXTS TO RIGHT OF PRICE
  var parentElement = document.querySelector('[data-title="Select Product 2.0"]');

  if (parentElement) {
    var pullRightTdsWithinParent = parentElement.querySelectorAll('td.pull-right');

    for (let i = 0; i < Math.min(3, pullRightTdsWithinParent.length); i++) {
      pullRightTdsWithinParent[i].innerHTML = `
        <span class="pretty-product-price">${currencySymbol}${discount_prices[i]}</span>
        <span class="pretty-product-currency">${currencySymbol}</span>
        <span class="pretty-product-price-big">${prices[i].split('.')[0]}</span>
        <span class="pretty-product-price-small">${prices[i].split('.')[1]} / ${dayText}</span>`;
    }
  }

  // ADD TOTAL PRICE
  var parentElement = document.querySelector('[data-title="Select Product 2.0"]');

  if (parentElement) {
    var pullLeftTdsWithinParent = parentElement.querySelectorAll('td.pull-left');

    for (let i = 0; i < Math.min(3, pullLeftTdsWithinParent.length); i++) {
      pullLeftTdsWithinParent[i].innerHTML += `
        <br>
         <label class="pretty-label-dash">--</label>
        <label class="pretty-product-price-final pretty-product-price-line-through">${currencySymbol}${total_discounts[i]}</label>
        <label class="pretty-product-price-final">${currencySymbol}${total_prices[i]}</label>`;
    }
  }

  // Choice highlighted product
  $(document).ready(function () {
    $('input[value="' + highlightProductID + '"]')
      .first()
      .click();
    console.log("document ready");
    $('table tr').click(function () {
      $('.activeRadioProduct').removeClass('activeRadioProduct');
      $(this).addClass('activeRadioProduct');
      $(this).find('td input:radio').prop('checked', true);
    });
  });

  // Update order summary (on popup)
  $(".elOrderProductOptinProducts").on("click", function (e) {
    e.stopPropagation();
    $(this).find('input[id*="pid-"]').trigger("change");
  });
