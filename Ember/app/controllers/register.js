import Controller from '@ember/controller';

export default Controller.extend({

    userType: null,

    actions: {
        updateUserType: function(value) {
            this.set('userType', value);
        }
    }
    
});
