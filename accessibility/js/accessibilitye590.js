/**
 * 文字サイズ関連
 * @param size
 * @returns
 */
//文字サイズ変更
function setFontSize(size) {
	var fontSize = '';
	if(size == 1){
		fontSize = '0.95em';
	} else if(size == 2){
		fontSize = '2em';
	}
	if(fontSize) {
		document.body.style.fontSize = fontSize;
	}
}
//文字サイズリセット
function resetFontSize() {
	$.cookie('fontSize', '', {expire: 30, path: '/'});
	document.body.style.fontSize = '';
}
//文字サイズ保存
function saveFontSize(fontSize) {
	$.cookie('fontSize', fontSize, {expire: 30, path: '/'});
}

/**
 * スタイル関連
 * @param val
 * @returns
 */
//スタイル変更
function setStyleCss(val) {
	var pass = $('#pass').val();
	if(val == 1) {
		var url = pass + "accessibility/css/color1.css";
		document.getElementById("setStyle").href = url;
	} else if(val == 2) {
		var url = pass + "accessibility/css/color2.css";
		document.getElementById("setStyle").href = url;
	}
}
//スタイル保存
function saveStyle(val) {
	$.cookie('st', val, {expire: 30, path: '/'});
}
//スタイルリセット
function resetStyle() {
	var pass = $('#pass').val();
	var url = pass + "accessibility/css/color.css";
	document.getElementById("setStyle").href = url;
	$.cookie('st', '', {expire: 30, path: '/'});
}

/**
 * 行間関連
 */
//行間変更
function setPadding(val) {
	if(val == 1) {
		document.body.style.lineHeight = '0.95';
	} else if(val == 2) {
		document.body.style.lineHeight = '2';
	}
}
//行間リセット
function resetPadding() {
	$.cookie('pa', '', {expire: 30, path: '/'});
	document.body.style.lineHeight = '';
}

//行間保存
function savePadding(val) {
	$.cookie('pa', val, {expire: 30, path: '/'});
}

//画面読み込み時にスタイル反映
$(function(){
    var fontSize = jQuery.cookie('fontSize');
    if(fontSize == '1' || fontSize == '2') {
    	setFontSize(fontSize);
    }
    var st = jQuery.cookie('st');
    if(st == '1' || st == '2') {
    	setStyleCss(st);
    }
    var pa = jQuery.cookie('pa');
    if(pa == '1' || pa == '2') {
    	setPadding(pa);
    }
 });