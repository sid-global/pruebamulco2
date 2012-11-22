/*
 * JS for Menu generated by Exadel Tiggzi
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
j_22_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar2_22': 'j_23',
        'mobilenavbaritem4_23': 'j_24',
        'mobilenavbaritem4_24': 'j_25',
        'mobilenavbaritem4_25': 'j_26',
        'mobileimage_66': 'j_28',
        'space_46': 'j_27',
        'mobilelist1_67': 'j_29',
        'menu_catalogo': 'j_30',
        'menu_pedido': 'j_31',
        'menu_status_pedido': 'j_32',
        'menu_distribuidores': 'j_33'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_22';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_22_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_22';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_62FC_onLoad = j_22_onLoad = function() {
        screen_62FC_elementsExtraJS();
        j_22_windowEvents();
        screen_62FC_elementsEvents();
    }
    // screen window events
    screen_62FC_windowEvents = j_22_windowEvents = function() {
        $('#j_22').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_62FC_elementsExtraJS = j_22_elementsExtraJS = function() {
        // screen (screen-62FC) extra code
        listView = $("#j_29");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#j_29 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
    }
    // screen elements handler
    screen_62FC_elementsEvents = j_22_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_3 [name="menu_catalogo"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('catalogo', {
                        reverse: false
                    });
                }
            },
        });
        $('#j_3 [name="menu_pedido"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('verpedido', {
                        reverse: false
                    });
                }
            },
        });
        $('#j_3 [name="menu_distribuidores"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('distribuidoreszona', {
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_22").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_22_beforeshow();
    });
    if (runBeforeShow) {
        j_22_beforeshow();
    } else {
        j_22_onLoad();
    }
}
$("#j_22").die("pageinit").live("pageinit", function(event, ui) {
    j_22_js();
});