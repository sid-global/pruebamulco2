/*
 * JS for distribuidoreszona generated by Exadel Tiggzi
 *
 * Created on: Wednesday, November 21, 2012, 07:28:49 PM (PST)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "bundle";
Tiggr.getProjectGUID = function() {
    return '590393b3-68b2-4942-8d51-7378c56bbc43';
}
Tiggr.getTargetPlatform = function() {
    return '0';
}

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
/*************************
 *      SERVICES          *
 *************************/
createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Tiggr.AppPages = [{
    "name": "catalogo_detalle_nefesh",
    "location": "catalogo_detalle_nefesh.html"
}, {
    "name": "catalogo_detalle_fondo",
    "location": "catalogo_detalle_fondo.html"
}, {
    "name": "Menu",
    "location": "Menu.html"
}, {
    "name": "catalogo_detalle_blue",
    "location": "catalogo_detalle_blue.html"
}, {
    "name": "distribuidoreszona",
    "location": "distribuidoreszona.html"
}, {
    "name": "verpedido",
    "location": "verpedido.html"
}, {
    "name": "Inicio",
    "location": "Inicio.html"
}, {
    "name": "catalogo",
    "location": "catalogo.html"
}, {
    "name": "map_distribuidores",
    "location": "map_distribuidores.html"
}, {
    "name": "status_pedido",
    "location": "status_pedido.html"
}, {
    "name": "pedido",
    "location": "pedido.html"
}];
j_34_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'googlemap1_2': 'j_35',
        'mobilelabel1_5': 'j_37',
        'mobileselectmenu1_4': 'j_36',
        'mobilelist1_6': 'j_38',
        'mobilelistitem1_7': 'j_39',
        'mobilelistitem1_8': 'j_40',
        'mobilelistitem1_9': 'j_41'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_34';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_34_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_34';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_F73B_onLoad = j_34_onLoad = function() {
        screen_F73B_elementsExtraJS();
        j_34_windowEvents();
        screen_F73B_elementsEvents();
    }
    // screen window events
    screen_F73B_windowEvents = j_34_windowEvents = function() {
        $('#j_34').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_F73B_elementsExtraJS = j_34_elementsExtraJS = function() {
        // screen (screen-F73B) extra code
        var googlemap1_2_options = {
            markerSourceName: "googlemap1_2_markers",
            latitude: "",
            longitude: "",
            address: "Concord, CA",
            zoom: 10,
            showLocationMarker: false
        }
        Tiggr.__registerComponent('googlemap1_2', new Tiggr.TiggrMapComponent("googlemap1_2", googlemap1_2_options));
        $("[name='googlemap1_2']").closest("[data-role='page']").bind({
            pageshow: function() {
                if (Tiggr('googlemap1_2') != undefined) {
                    Tiggr('googlemap1_2').refresh();
                }
            }
        });
        $("#j_36").parent().find("a.ui-btn").attr("tabindex", "1");
        listView = $("#j_38");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#j_38 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
    }
    // screen elements handler
    screen_F73B_elementsEvents = j_34_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
    }
    $("#j_34").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_34_beforeshow();
    });
    if (runBeforeShow) {
        j_34_beforeshow();
    } else {
        j_34_onLoad();
    }
}
$("#j_34").die("pageinit").live("pageinit", function(event, ui) {
    j_34_js();
});