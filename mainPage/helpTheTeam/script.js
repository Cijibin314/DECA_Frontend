function goNew(link){
    const ele = document.createElement("a");
    ele.href = link;
    ele.target = "_blank";
    ele.click();
}
function donate(){
    //goNew("")
}
function judge(){
    goNew("https://docs.google.com/forms/d/e/1FAIpQLScilZY1erTu28XUxtYn3TgZwm45_FdUtJMMlRMqbXTnyrwJ8w/viewform?usp=header");
}
function member(){
    goNew("https://docs.google.com/forms/d/e/1FAIpQLSfMfz8VKBjFhDfQRcTv5rnW48eO2fOkKIpFGMJkBMu8F1wsFA/viewform?usp=header")
}
function proMember(){
    goNew("https://docs.google.com/forms/d/e/1FAIpQLScoOLG-EiXD2p2tYqnFIS5qhCfFhcjBQIrwgHl9etOYNN718Q/viewform?usp=header")
}