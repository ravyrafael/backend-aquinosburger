

const myDefaultHelper = {
    
    isEmpty : function(obj) {
        return obj === null || obj === undefined || obj === "" || obj === [] || obj.length === 0;
    },

    objHasProp : function(objWithProp){
        return typeof(objWithProp)!=="undefined";
    },

    lprint : function(msg, type){
        if(this.isEmpty(type))
            type = "log";
    
            console.log(`${type.toUpperCase()} : ${msg}`);
    }
};

module.exports = myDefaultHelper;