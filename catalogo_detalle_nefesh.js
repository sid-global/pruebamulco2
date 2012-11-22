/*
 * JS for catalogo_detalle_nefesh generated by Exadel Tiggzi
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
j_0_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_2': 'j_4',
        'mobilelabel1_4': 'j_5',
        'mobilelabel1_6': 'j_6',
        'mobilegrid_26': 'j_7',
        'mobilegridcell_27': 'j_8',
        'mobilelabel1_31': 'j_9',
        'mobilegridcell_28': 'j_10',
        'mobiletextinput1_25': 'j_11',
        'boton_comprar': 'j_12'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_0';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_0_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_0';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_3227_onLoad = j_0_onLoad = function() {
        screen_3227_elementsExtraJS();
        j_0_windowEvents();
        screen_3227_elementsEvents();
    }
    // screen window events
    screen_3227_windowEvents = j_0_windowEvents = function() {
        $('#j_0').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_3227_elementsExtraJS = j_0_elementsExtraJS = function() {
        // screen (screen-3227) extra code
    }
    // screen elements handler
    screen_3227_elementsEvents = j_0_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
    }
    $("#j_0").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_0_beforeshow();
    });
    if (runBeforeShow) {
        j_0_beforeshow();
    } else {
        j_0_onLoad();
    }
}
$("#j_0").die("pageinit").live("pageinit", function(event, ui) {
    j_0_js();
});