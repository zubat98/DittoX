// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setName("ffff")
                .setDesc("bgg")
                .setLeft("31.238095238095237em")
                .setTop("16.761904761904763em")
                .setWidth("23.771428571428572em")
                .setHeight("18.742857142857144em")
                .setCaption("DITTOX")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label19")
                .setLeft("18.285714285714285em")
                .setTop("10.666666666666666em")
                .setCaption("this is simple real mans dont design.")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input21")
                .setLeft("10.666666666666666em")
                .setTop("13.714285714285714em")
                .setWidth("38.55238095238095em")
                .setLabelSize("8em")
                .setLabelCaption("Code")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setLeft("19.80952380952381em")
                .setTop("16.761904761904763em")
                .setCaption("Execute")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "EXECUTED",
                            "Have fun. Code has been executed."
                        ],
                        "method" : "alert",
                        "onOK" : 2,
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button12")
                .setLeft("23.61904761904762em")
                .setTop("16em")
                .setWidth("5.257142857142857em")
                .setHeight("2.8190476190476192em")
                .setCaption("Clear")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Cleared",
                            "clear"
                        ],
                        "method" : "alert",
                        "onOK" : 2,
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});