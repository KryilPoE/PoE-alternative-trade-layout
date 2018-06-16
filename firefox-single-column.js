// ==UserScript==
// @name         Path of Exile centered single column trade layout
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Path of Exile centered single column trade layout
// @author       Kryil-
// @match        http://www.pathofexile.com/trade/*
// @match        https://www.pathofexile.com/trade/*
// @grant        GM_addStyle
// ==/UserScript==

if (typeof GM_addStyle == 'undefined') {
    this.GM_addStyle = (aCss) => {
        'use strict';
        let head = document.getElementsByTagName('head')[0];
        if (head) {
            let style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.textContent = aCss;
            head.appendChild(style);
            return style;
        }
        return null;
    };
}

(function() {
    'use strict';

    GM_addStyle("* {font-family: Helvetica !important;}");
    GM_addStyle(".resultset {display: flex;flex-wrap: wrap;");
    GM_addStyle(".resultset .row.exchange {flex-grow:1;}");
    GM_addStyle(".resultset .row:not(.exchange) {width: 100%;border: 1px solid;margin-bottom: 1rem;overflow:hidden}");
    GM_addStyle(".results .resultset .row:not(.exchange) .left {position: relative;height:inherit;width: 30%;margin-bottom:175px;}");
    GM_addStyle(".results .resultset .row:not(.exchange) .left .copy {top: 8px;right: 8px;left: inherit;");
    GM_addStyle(".results .resultset .row:not(.exchange) .left .searchBy {top: 8px;right: 38px;left: inherit;");
    GM_addStyle(".results .resultset .row:not(.exchange) .middle {padding-right:0.5rem;width: 70%;}");
    GM_addStyle(".results .resultset .row:not(.exchange) .right {position: absolute;left: 0;bottom:3px;width: 30%;}");
    GM_addStyle(".row:not(.exchange) .right .btns {display:flex}");
    GM_addStyle(".row:not(.exchange) .right .btns > .pull-right {margin-left: auto!important}");
    GM_addStyle(".ignore-btn {font-size: 0px!important;border: 1px solid rgb(150, 0, 0) !important;}");
    GM_addStyle(".ignore-btn:after {content: 'ign';font-size: 12px;}");
})();