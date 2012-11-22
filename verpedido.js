/*
 * JS for verpedido generated by Exadel Tiggzi
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
j_49_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel1_6': 'j_50',
        'mobilegrid_37': 'j_51',
        'mobilegridcell_38': 'j_52',
        'mobilelabel1_57': 'j_53',
        'mobilegridcell_44': 'j_58',
        'mobilegrid_13': 'j_59',
        'mobilegridcell_14': 'j_60',
        'mobilegrid_30': 'j_61',
        'mobilegridcell_31': 'j_62',
        'mobileimage_35': 'j_63',
        'mobilegridcell_33': 'j_64',
        'mobilelabel1_24': 'j_65',
        'mobilegridcell_15': 'j_66',
        'mobilegrid_19': 'j_67',
        'mobilegridcell_20': 'j_68',
        'mobilelabel1_25': 'j_69',
        'mobilegridcell_22': 'j_70',
        'mobilelabel1_29': 'j_71',
        'mobilegridcell_28': 'j_72',
        'mobilelabel1_36': 'j_73',
        'mobilegridcell_40': 'j_54',
        'mobilelabel1_58': 'j_55',
        'mobilegridcell_45': 'j_74',
        'mobilegrid_47': 'j_75',
        'mobilegridcell_48': 'j_76',
        'mobilegrid_60': 'j_77',
        'mobilegridcell_61': 'j_78',
        'mobileimage_82': 'j_79',
        'mobilegridcell_63': 'j_80',
        'mobilelabel1_91': 'j_81',
        'mobilegridcell_49': 'j_82',
        'mobilegrid_70': 'j_83',
        'mobilegridcell_71': 'j_84',
        'mobilelabel1_84': 'j_85',
        'mobilegridcell_73': 'j_86',
        'mobilelabel1_85': 'j_87',
        'mobilegridcell_75': 'j_88',
        'mobilelabel1_86': 'j_89',
        'mobilegridcell_42': 'j_56',
        'mobilelabel1_59': 'j_57',
        'mobilegridcell_46': 'j_90',
        'mobilegrid_52': 'j_91',
        'mobilegridcell_53': 'j_92',
        'mobilegrid_65': 'j_93',
        'mobilegridcell_66': 'j_94',
        'mobileimage_83': 'j_95',
        'mobilegridcell_68': 'j_96',
        'mobilelabel1_90': 'j_97',
        'mobilegridcell_54': 'j_98',
        'mobilegrid_76': 'j_99',
        'mobilegridcell_77': 'j_100',
        'mobilelabel1_87': 'j_101',
        'mobilegridcell_79': 'j_102',
        'mobilelabel1_89': 'j_103',
        'mobilegridcell_81': 'j_104',
        'mobilelabel1_88': 'j_105'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_49';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_49_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_49';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_1BE2_onLoad = j_49_onLoad = function() {
        screen_1BE2_elementsExtraJS();
        j_49_windowEvents();
        screen_1BE2_elementsEvents();
    }
    // screen window events
    screen_1BE2_windowEvents = j_49_windowEvents = function() {
        $('#j_49').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_1BE2_elementsExtraJS = j_49_elementsExtraJS = function() {
        // screen (screen-1BE2) extra code
    }
    // screen elements handler
    screen_1BE2_elementsEvents = j_49_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
    }
    $("#j_49").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_49_beforeshow();
    });
    if (runBeforeShow) {
        j_49_beforeshow();
    } else {
        j_49_onLoad();
    }
}
$("#j_49").die("pageinit").live("pageinit", function(event, ui) {
    j_49_js();
});