function setup(){


  button = createButton("       click here to spin the wheel!       " );
  button.position(203, 277);
  button.mousePressed(myPopup);
  button.style("padding-top","15px");
  button.style("padding-bottom","15px");
  button.style("padding-right","32px");
  button.style("padding-left","29px");




}

function myPopup() {
    var txt;
    if (confirm("You just got a trojan virus! Great job! You just got hacked!") == true) {
        changeexplain();
    } else {
        changeexplain();
    }

}


function changeexplain() {
    var txt;
    if (confirm("Just kidding, it was a prank! However, the page you just saw was an example of a website that contained a virus. What are viruses? They are software that can allow hackers to damage or gain access to other's computers. Viruses can be found everywhere; They can be in ads, webpages, and pop up sites. Mainly, hackers will lure you into a suspcious website, in which they implicate malicious software onto your computer. Here are some ways hackers can imput malicious software: -Emails with links to malicious websites - Hijacking ads, or even- Malware sold as legitimate software. Aside from that, Javascript also has the ability to access other's computers, just clicking on a link can gaurentee access for a hacker into your computer. How to stop these hackers? Don't click suspicious links." ) == true) {
      myWindow.close();
    } else {
    myWindow.close();
    }
  //  document.getElementById("demo").innerHTML = txt;
}
