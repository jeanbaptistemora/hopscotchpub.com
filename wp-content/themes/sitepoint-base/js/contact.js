(function () {
    function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }

    var type = getURLParameter('type');

    if (type) {
        console.log(type);
        select = jQuery('#form-field-field_1');
        if (type == 'brunch') {
            select.val('Réservation brunch week-end');
        } else if (type == 'soir') {
            select.val('Réservation groupe soir');
        } else {
            select.val('Contact');
        }
    }
})();
