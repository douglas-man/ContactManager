define(["marionette"], function(Marionette){
    var ContactManager = new Marionette.Application();
    
    ContactManager.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region",
        // dialogRegion: Marionette.Region.Dialog.extend({
        //     el: "#dialog-region"
        // })
    });

    ContactManager.navigate = function(route, optons) {
        Option || (options = {});
        Backbone.history.navigate(route, options);
    };

    ContactManager.getCurrentRoute = function() {
        Backbone.history.fragment
    };


    
    ContactManager.on("start", function() {
        if(Backbone.history) {
            Backbone.history.start();

            if(this.getCurrentRoute() === "") {
                ContactManager.trigger("contacts:list");
            }
        }
    });

    return ContactManager;
});

