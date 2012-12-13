// Defaults for form validation
$.validator.setDefaults({
    errorClass: "error-message",
    errorElement: "span",
    onfocusout: function(element, event) {
        if ( !this.checkable(element) ) {
            this.element(element);
        }
    },
    onkeyup: function(element, event) {
        if ( event.which === 9 && this.elementValue(element) === '' ) {
            return;
        } else if ( !this.invalid[element.name] ) {
            return;
        } else if ( element.name in this.submitted || element === this.lastActive ) {
            this.element(element);
        }
    }
});
