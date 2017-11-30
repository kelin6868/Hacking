
/*
Title:HACKING!!!
Imagined, Designed, and Programmed by: Kevin Lin
Date:11/29

Description: 
Describe how to use your app.
How did you choose this topic, and what does it mean to you personally?
What specific feedback did you receive from your classmates and teacher during the feedback session. How did you incorporate this feedback into your final design?
How have your technical skills and/or problem strategies grown since the textile design project?
What advice do you have for anyone (for example, future Computing students) who plans to take on this project, based on what you learned?
If you had more time, how would you build on this project?






Sources of ideas and inspiration (title, author, URL):
 * 
 *
 *
 
Includes code from (title, author, URL):
 * 
 * 
 *
 
<Reminders, you can delete:>
<Use command + T to auto-indent your code for cleaner formatting>
<Check that variable and function names are easy to read and understand. eg. "squareButton" vs.
"shapeButton2">
<If you can't remember where you found some code, Google the text to find it.>
<Put your name in the name of this file!>

*/
function setup() {
  createCanvas(1000, 1000);
  background(0);
  //button = createButton('click me');
  //button.position(19, 50);
  //button.mousePressed(changeexam);

  button = createButton('What is hacking?');
  button.position(19, 50);
  button.mousePressed(changeWhat);

  button = createButton('What is the optimal coding language for hackers?');
  button.position(19, 350);
  button.mousePressed(changeOPTIMAL);

  

  button = createButton('Malware examples');
  button.position(19, 150);
  button.mousePressed(changeHK);

  button = createButton('click here to learn more about Viruses');
  button.position(19, 100);
  button.mousePressed(changeMAL);

  button = createButton('but how do you if you got hacked?');
  button.position(19, 200);
  button.mousePressed(changeHOW);

  button = createButton('what to do if you are actually hacked?');
  button.position(19, 250);
  button.mousePressed(changeDO);


  button = createButton('Are some hackers good?');
  button.position(19, 300);
  button.mousePressed(changeERS);

}


function changeMAL() {
  var myWindow;

      myWindow = window.open("file:///Users/kevinlin/Documents/p5/virus%20example/index.html", "_blank", "width=500, height=500");


}

function changeHK() {

      var txt;
      if (confirm("Malware is found on alot of popup sites. Here is an keys of a malware sample(DONT USE IT FOR ANY MALICIOUS CONTENT):(javascript) malware uses concepts such as 'createServer' to connect the program or code that runs on the website with the target computer. Through this, hackers can access target computers, delete files, and many more tools. (python) python is an extremely useul method in targeting specific documents and information on target computers, and performing multiple functions on them, including deleting random files to destroying the user's wifi and other electronic devices. ") == true) {
          txt = "You great job! You just got hacked too!";
      } else {
          txt = "You great job! You just got hacked too!";
      }
    //  document.getElementById("demo").innerHTML = txt;

}

function changeHOW() {
  var txt;
  if (confirm("Here is some good ways to know if you just have been hacked (or just to be aware) 1. if your antivirus software is disabled (this one is the most important. Check this first) 2. if random popups (websites) are being loaded, or when suspicious sites are being loaded without the mouse interaction 3. when random files are being deleted without your consent 4. when the mouse is moving in it's own accord 5. fake virus messages 6. any suspicious website 7. if you feel like there is something suspicious") == true) {
      ;
  } else {
      ;
  }

}

function changeDO() {
  var txt;
  if (confirm("The first thing to do is to just shut down, or restart your computer. This stops any foreign access or malicious content from coming into your computer, therefore making any access impossible. Also, another good tip is to stop wifi from getting to your computer, or even turning off the wifi. This allows hackers little to no acces to your computer, mainly because their hacking is mainly compromised using the wifi. Also, turning off any electronic devices is extremely helpful when being hacked, as many hackers can access electronic devices. ") == true) {
      txt = "You great job! You just got hacked too!";
  } else {
      txt = "You great job! You just got hacked too!";
  }

}

function changeWhat() {

      var txt;
      if (confirm("What is hacking? It is someone who seeks to breach defenses and exploit weaknesses in a computer system or network. Hackers may be motivated by a multitude of reasons, such as profit, protest, information gathering, challenge, recreation, or to evaluate system weaknesses to assist in formulating defenses against potential hackers'(Wika) so what does this mean? But what are viruses? Viruses are malicious software that allow ackers to gain access to your computer.") == true) {
           myWindow = window.open("", "myWindow", "width=200,height=100");
              myWindow.document.write("<p>This is wht a popup looks like. It brings another window or tab without your permission. </p>");
      } else {
          my_window.close();
      }


}




function changeERS(){

  var txt;
  if(confirm("Hackers don't have to always be bad guys. White hat hackers experimetn and test security breaches out, making sure that they are safe. They might also create anti-virus software, too. Black hat hackers are ones that really do the 'cool' stuff, getting access into other's computers and passwords.") == true) {
    ;
  } else{
    ;
  }


}

function changeOPTIMAL(){
  var txt;
  if(confirm("The most optimal language for hackers is either javascript of Python. Python's usefulness is mainly because of its useful accessibility to other sites and documents that are on someone's computer. Javascript is useful for adding and accessing foreign computers, mainly for 'invading' different computers and attacking and accessing through a website.") == true) {
  ;
  } else{
  ;
  }
}
