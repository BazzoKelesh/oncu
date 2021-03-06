var normaletijden = true;
var customtagtext = "Zondag opening";
var customtaginfo = "Vanaf 12:00";
var greentag = true;

var dagen = [
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
  "Zondag",
];

var date = new Date();
var hourofday = date.getUTCHours();
var dayofweekindex = date.getDay();
var dayofweek = dagen[dayofweekindex - 1];

var openTag = $(".time-tag");
var timeValue = $(".time-tag-value");
var timeInfo = $(".time-info");

function setTime() {
  if (normaletijden) {
    if (hourofday >= 8 && hourofday <= 16) {
      openTag.removeClass("closed");
      openTag.addClass("open");
      timeValue.text("Nu open");
      timeInfo.text("Tot 18:00");
      if (dayofweek === 'Donderdag') {
        openTag.removeClass("closed");
        openTag.addClass("open");
        timeValue.text("Nu open");
        timeInfo.text("Tot 21:00");
      }
    } else if (!(hourofday >= 8 && hourofday <= 16)) {
      if (dayofweek === "Zaterdag") {
        openTag.addClass("closed");
        openTag.removeClass("open");
        timeValue.text("Zondag open");
        timeInfo.text("Vanaf 12:00");
      } else if (!(dayofweek === "Zaterdag")) {
        openTag.addClass("closed");
        openTag.removeClass("open");
        timeValue.text(`${dagen[dayofweekindex]} open`);
        timeInfo.text("Vanaf 10:00");
          if (dayofweek === "Zondag") {
          openTag.addClass("closed");
          openTag.removeClass("open");
          timeValue.text("Maandag open");
          timeInfo.text("Vanaf 13:00");
        }
      }
    }
  } else if (!(normaletijden)) {
    // openTag.addClass("closed");
    // openTag.removeClass("open");
    timeValue.text(customtagtext);
    timeInfo.text(customtaginfo);
    if (!greentag) {
      openTag.addClass("closed");
    }
  }
}
setTime();
