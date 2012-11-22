function Navigator() {
    var frame;

    var getInstance = function() {
        if (!Navigator.instance) {
            Navigator.instance = createInstance();
        }
        return Navigator.instance;
    };

    var createInstance = function() {
        return {
            init : function(frame) {
                this.locations = new Array();
                this.lastLocation = 0;
                this.frame = frame;
            },

            navigate : function(location) {
                ++this.lastLocation;
                this.locations[this.lastLocation] = location;
                this.frame.attr("src", this.locations[this.lastLocation]);
            },

            back : function() {
                --this.lastLocation;
                this.frame.attr("src", this.locations[this.lastLocation]);

            },

            canGoBack : function() {
                return this.lastLocation && this.lastLocation > 1 ? true : false;
            }
        }
    };

    return getInstance();
}