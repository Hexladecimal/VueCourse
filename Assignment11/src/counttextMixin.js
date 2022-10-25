export  const counttextMixin = {
    computed: {
        countText(text) {
            return this.text + '(' + this.text.length + ')';
             }    
        }
    };