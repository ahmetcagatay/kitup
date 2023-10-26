  var waitForJQuery = setInterval(function () {
    if (typeof $ != 'undefined') {
      $(function () {        
        // hide one time products
        for (var i = 1; i <= ps11_nProducts; i++) {
          $('input[value="' + eval("ps11_nProductOneID_" + i) + '"]')
            .closest(".elOrderProductOptinProducts")
            .hide();
          $('input[value="' + eval("ps11_nProductOneID_" + i) + '"]')
            .closest(".elOrderProductOptinProducts")
            .addClass("hide");
        }
        // handle changes
        var $input = $("#cfAR input");
        $(document).on("change", $input, function (e) {
          for (var i = 1; i <= ps11_nProducts; i++) {
            // hide one time product
            $('input[value="' + eval("ps11_nProductOneID_" + i) + '"]')
              .closest(".elOrderProductOptinProducts")
              .hide();
            // select one time product if subscription is checked
            if (
              $('#cfAR input[value="' + eval("ps11_nProductSubID_" + i) + '"]').is(
                ":checked"
              )
            ) {
              $(
                '#cfAR input[value="' + eval("ps11_nProductOneID_" + i) + '"]'
              ).prop("checked", true);
            }
            // hide from order summary
            var name = $(
              'input[value="' + eval("ps11_nProductOneID_" + i) + '"]'
            ).data("product-label");
            $(
              'table[data-title="cf-order-summary"] .elOrderProductOptinProducts'
            ).each(function (e) {
              var listname = $(this).find(".product-name").html();
              if (name === listname) {
                $(this).hide();
              }
            });
            // attempt #2
            name = $('input[value="' + eval("ps11_nProductOneID_" + i) + '"]').data(
              "product-name"
            );
            $(
              'div[data-title="cf-order-summary"] .elOrderProductOptinProducts'
            ).each(function (e) {
              var listname = $(this).find(".product-name").html();
              if (name === listname) {
                $(this).hide();
              }
            });
          }
        });
        // handle form submission
        $("#cfAR").on("submit", function (e) {
          for (var i = 1; i <= ps11_nProducts; i++) {
            // select one time product if subscription is checked
            if (
              $('#cfAR input[value="' + eval("ps11_nProductSubID_" + i) + '"]').is(
                ":checked"
              )
            ) {
              $(
                '#cfAR input[value="' + eval("ps11_nProductOneID_" + i) + '"]'
              ).prop("checked", true);
            }
          }
        });
      });
      clearInterval(waitForJQuery);
    }
  }, 10);