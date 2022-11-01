//~~tv:1203.20191118
//~~tc: Update status to orderstatus

//tealium universal tag - utag.sender.1203 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
    (function (id, loader) {
      var u = {"id" : id};
      utag.o[loader].sender[id] = u;
      // Please do not modify
      if (utag.ut === undefined) { utag.ut = {}; }
      // Start Tealium loader 4.41
      var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
      if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
      // End Tealium loader
      // Start Tealium typeOf 4.35
      if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
      // End Tealium typeOf
  
      u.ev = {"view" : 1, "link" : 1};
      u.scriptrequested = false;
      u.escape = window.encodeURIComponent || window.escape;
  
      u.clearEmptyKeys = function (object) {
        for (var key in object) {
          if (object[key] === "" || object[key] === undefined) {
            delete object[key];
          }
          else if (typeof object[key] === 'object') {
            u.clearEmptyKeys(object[key]);
          }
        }
        return object;
      };
  
      ##UTGEN##
  
      u.send = function (a, b) {
        if (u.ev[a] || u.ev.all !== undefined) {
          utag.DB("send:##UTID##");
          utag.DB(b);
  
          var c, d, e, f, prop, i, customvar;
  
          u.data = {
            "base_url" : "//a1.adform.net/serving/scripts/trackpoint/async/",
            "campaignid" : "##UTVARconfig_campaignid##",
            "page_name" : "##UTVARconfig_page_name##",
            "divider" : "|",
            "adform_tracking_object" : {},
            // E-Commerce Vars
            "step" : "",
            "customer_agegroup" : "",
            "customer_gender" : "",
            "order_id" : "",
            "order_subtotal" : "",
            "order_currency" : "",
            "customer_country" : "",
            "product_id" : [],
            "product_name" : [],
            "product_brand" : [],
            "product_category" : [],
            "product_category_id" : [],
            "product_quantity" : [],
            "product_unit_price" : [],
            "product_weight" : []
          };
  
          // Start tag-scoped extensions
          ##UTEXTEND##
          utag.DB("send:##UTID##:EXTENSIONS");
          utag.DB(b);
          // End tag-scoped extensions
  
          // Start Mapping
          for (d in utag.loader.GV(u.map)) {
            if (b[d] !== undefined && b[d] !== "") {
              e = u.map[d].split(",");
              for (f = 0; f < e.length; f++) {
                u.data[e[f]] = b[d];
              }
            }
          }
          utag.DB("send:##UTID##:MAPPINGS");
          utag.DB(u.data);
          // End Mapping
  
          window._adftrack = u.typeOf(window._adftrack) === "array" ? window._adftrack : (window._adftrack ? [window._adftrack] : []);
  
          u.data.adform_tracking_object.pm = u.escape(u.data.campaignid);
          u.data.adform_tracking_object.divider = u.escape(u.data.divider);
          if (u.data.page_name) {
            u.data.adform_tracking_object.pagename = u.escape(u.data.page_name);
          }
  
          // Pull E-Commerce extension values
          // Mappings override E-Commerce extension values
          u.data.order_id = u.data.order_id || b._corder || "";
          u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
          u.data.order_currency = u.data.order_currency || b._ccurrency || "";
          u.data.customer_country = u.data.customer_country || b._ccountry || "";
          if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
          if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
          if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
          if(u.typeOf(u.data.product_category_id) === "string"){u.data.product_category_id = u.data.product_category_id.split(","); }
          if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
          if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }
          if(u.typeOf(u.data.product_weight) === "string"){u.data.product_weight = u.data.product_weight.split(","); }
          u.data.step = u.data.step || (b._corder ? "3" : "1"); //step defaults to 3 if not specified, and there is an order ID
  
          // Report required config is missing, and stop tag from firing.
          if (!u.data.campaignid) {
            utag.DB(u.id + ": Tag not fired: Required attribute not populated");
            return;
          }
  
          u.data.adform_tracking_object.order = {};
          u.data.adform_tracking_object.order.sales = u.data.order_subtotal || "";
          u.data.adform_tracking_object.order.currency = u.data.order_currency || "";
          u.data.adform_tracking_object.order.basketsize = u.data.product_id.length || 1;
          u.data.adform_tracking_object.order.country = u.data.customer_country || "";
          u.data.adform_tracking_object.order.orderid = u.data.order_id || "";
          u.data.adform_tracking_object.order.orderstatus = u.data.order_status || "";
          u.data.adform_tracking_object.order.gender = u.data.customer_gender || "";
          u.data.adform_tracking_object.order.agegroup = u.data.customer_agegroup || "";
          u.data.adform_tracking_object.order.itms = [];
  
          for (i = 0; i < u.data.product_id.length; i++) {
            var product = {}; //initialize product
            product.categoryname = u.data.product_category[i] || "";
            product.productid = u.data.product_id[i];
            product.productname = u.data.product_name[i] || "";
            product.productcount = u.data.product_quantity[i] || "";
            product.productsales = u.data.product_unit_price[i] || "";
            product.categoryid = u.data.product_category_id[i] || "";
            product.weight = u.data.product_weight[i] || 1;
            product.step = u.data.step; //step 3 is the checkout page, 2 is basket, and 1 is product view
            u.data.adform_tracking_object.order.itms.push(product);
          }
  
          u.data.adform_tracking_object.order = u.clearEmptyKeys(u.data.adform_tracking_object.order);
  
          for (prop in u.data) {
            if (u.data.hasOwnProperty(prop)) {
              customvar = prop.split(".")[1]; //take the 2nd part of the custom var name, ignoring "order." or "product."
              if (/^order\.(sv|var)/.test(prop)) {
                //possible options are "var" for custom data, "sv" for custom strings or "svn" for custom numerical values
                //everything is sent as a string, so no need to
                u.data.adform_tracking_object.order[customvar] = "" + (u.data[prop]);
              } else if (/^product\.(sv|var)/.test(prop)) {
                if ((u.data[prop] instanceof Array) && u.data[prop].length === u.data.product_id.length) {
                  for (i = 0; i < u.data.product_id.length; i++) {
                    u.data.adform_tracking_object.order.itms[i][customvar] = "" + (u.data[prop][i]);
                  }
                }
              }
            }
          }
  
          if (!u.scriptrequested) {
            u.scriptrequested = true;
            window._adftrack.push(u.data.adform_tracking_object);
            u.loader({
              "type" : "script",
              "src" : u.data.base_url,
              "cb" : null,
              "loc" : "script",
              "id" : "utag_##UTID##",
              "attrs" : {}
            });
          } else {
            if (a === "view") {
              window.adf.async.TrackOne(u.data.adform_tracking_object);
            } else {
              window.adf.ClickTrack(this,u.data.campaignid,u.data.page_name,u.data.adform_tracking_object.order);
            }
          }
  
          utag.DB("send:##UTID##:COMPLETE");
        }
      };
      utag.o[loader].loader.LOAD(id);
    }("##UTID##", "##UTLOADERID##"));
  } catch (error) {
    utag.DB(error);
  }
  //end tealium universal tag
  