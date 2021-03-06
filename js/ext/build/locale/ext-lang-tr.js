﻿/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Turkish translation by Alper YAZGAN
 * 2008-01-24 , 10:29 AM 
*/

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Yükleniyor ...</div>';

if(Ext.View){
  Ext.View.prototype.emptyText = "";
}

if(Ext.grid.Grid){
  Ext.grid.Grid.prototype.ddText = "Secili satir sayisi : {0}";
}

if(Ext.TabPanelItem){
  Ext.TabPanelItem.prototype.closeText = "Sekmeyi kapat";
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "Bu alandaki deger gecersiz";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "Yükleniyor ...";
}

Date.monthNames = [
  "Ocak",
  "Subat",
  "Mart",
  "Nisan",
  "Mayis",
  "Haziran",
  "Temmuz",
  "Agustos",
  "Eylül",
  "Ekim",
  "Kasim",
  "Aralik"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Jan : 0,
  Feb : 1,
  Mar : 2,
  Apr : 3,
  May : 4,
  Jun : 5,
  Jul : 6,
  Aug : 7,
  Sep : 8,
  Oct : 9,
  Nov : 10,
  Dec : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "Pazar",
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi"
];

Date.shortDayNames = [
  "Paz",
  "Pzt",
  "Sal",
  "Crs",
  "Prs",
  "Cum",
  "Cmt"
];

Date.getShortDayName = function(day) {
  return Date.shortDayNames[day];
};

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
    ok     : "Tamam",
    cancel : "Iptal",
    yes    : "Evet",
    no     : "Hayir"
  };
}

if(Ext.util.Format){
  Ext.util.Format.date = function(v, format){
    if(!v) return "";
    if(!(v instanceof Date)) v = new Date(Date.parse(v));
    return v.dateFormat(format || "d/m/Y");
  };
}

if(Ext.DatePicker){
  Ext.apply(Ext.DatePicker.prototype, {
    todayText         : "Bugün",
    minText           : "Bu tarih izin verilen en kücük tarihten daha "once",
    maxText           : "Bu tarih izin verilen en büyük tarihten daha sonra",
    disabledDaysText  : "",
    disabledDatesText : "",
    monthNames        : Date.monthNames,
    dayNames          : Date.dayNames,
    nextText          : 'Gelecek Ay (Control+Right)',
    prevText          : '"Onceki Ay (Control+Left)',
    monthYearText     : 'Bir ay seciniz (Yili artirmak/azaltmak icin Control+Up/Down)',
    todayTip          : "{0} (Bosluk Tusu - Spacebar)",
    format            : "d/m/Y",
    okText            : "&#160;Tamam&#160;",
    cancelText        : "Iptal",
    startDay          : 1
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
    beforePageText : "Sayfa",
    afterPageText  : " / {0}",
    firstText      : "Ilk Sayfa",
    prevText       : ""Onceki Sayfa",
    nextText       : "Sonraki Sayfa",
    lastText       : "Son Sayfa",
    refreshText    : "Yenile",
    displayMsg     : "G"osterilen {0} - {1} / {2}",
    emptyMsg       : 'G"osterilebilecek veri yok'
  });
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
    minLengthText : "Girilen verinin uzunlugu en az {0} olabilir",
    maxLengthText : "Girilen verinin uzunlugu en fazla {0} olabilir",
    blankText     : "Bu alan bos birakilamaz",
    regexText     : "",
    emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
    minText : "En az {0} girilebilir",
    maxText : "En cok {0} girilebilir",
    nanText : "{0} gecersiz bir sayidir"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
    disabledDaysText  : "Disabled",
    disabledDatesText : "Disabled",
    minText           : "Bu tarih, {0} tarihinden daha sonra olmalidir", 
    maxText           : "Bu tarih, {0} tarihinden daha "once olmalidir",
    invalidText       : "{0} gecersiz bir tarihdir - tarih formati {1} seklinde olmalidir",
    format            : "d/m/Y",
    altFormats        : "d.m.y|d.m.Y|d/m/y|d-m-Y|d-m-y|d.m|d/m|d-m|dm|dmY|dmy|d|Y.m.d|Y-m-d|Y/m/d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
    loadingText       : "Yükleniyor ...",
    valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
    emailText    : 'Bu alan "user@domain.com" seklinde elektronik posta formatinda olmalidir',
    urlText      : 'Bu alan "http://www.domain.com" seklinde URL adres formatinda olmalidir',
    alphaText    : 'Bu alan sadece harf ve _ icermeli',
    alphanumText : 'Bu alan sadece harf, sayi ve _ icermeli'
  });
}

if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : 'Lütfen bu baglanti icin gerekli URL adresini giriniz:',
    buttonTips : {
      bold : {
        title: 'Kalin(Bold) (Ctrl+B)',
        text: 'Secili yaziyi kalin yapar.',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: 'Italik(Italic) (Ctrl+I)',
        text: 'Secili yaziyi italik yapar.',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: 'Alt Cizgi(Underline) (Ctrl+U)',
        text: 'Secili yazinin altini cizer.',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: 'Fontu büyült',
        text: 'Yazi fontunu büyütür.',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: 'Fontu kücült',
        text: 'Yazi fontunu kücültür.',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: 'Arka Plan Rengi',
        text: 'Secili yazinin arka plan rengini degistir.',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: 'Yazi Rengi',
        text: 'Secili yazinin rengini degistir.',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: 'Sola Daya',
        text: 'Yaziyi sola daya.',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: 'Ortala',
        text: 'Yaziyi edit"orde ortala.',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: 'Saga daya',
        text: 'Yaziyi saga daya.',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: 'Noktali Liste',
        text: 'Noktali listeye basla.',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: 'Numarali Liste',
        text: 'Numarali lisyeye basla.',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: 'Web Adresi(Hyperlink)',
        text: 'Secili yaziyi web adresi(hyperlink) yap.',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: 'Kaynak kodu Düzenleme',
        text: 'Kaynak kodu düzenleme moduna gec.',
        cls: 'x-html-editor-tip'
      }
    }
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
    sortAscText  : "Artan sirada sirala",
    sortDescText : "Azalan sirada sirala",
    lockText     : "Kolonu kilitle",
    unlockText   : "Kolon kilidini kaldir",
    columnsText  : "Kolonlar"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
    emptyGroupText : '(Yok)',
    groupByText    : 'Bu Alana G"ore Grupla',
    showGroupsText : 'Gruplar Halinde G"oster'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
    nameText   : "Ad",
    valueText  : "Deger",
    dateFormat : "d/m/Y"
  });
}

if(Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
    splitTip            : "Yeniden boyutlandirmak icin sürükle.",
    collapsibleSplitTip : "Yeniden boyutlandirmak icin sürükle. Saklamak icin cift tikla."
  });
}
