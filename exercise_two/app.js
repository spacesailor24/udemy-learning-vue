new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('Howdy!');
        },
        updateValue: function(e) {
            this.value = e.target.value;
        }
    }
})