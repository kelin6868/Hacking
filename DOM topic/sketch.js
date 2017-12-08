
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

  // var bubble = {
  //   changeWhat: function(){
  //     var txt;
  //     ellipse(100,100,100,100);
  //           if (confirm("What is hacking?'is someone who seeks to breach defenses and exploit weaknesses in a computer system or network. Hackers may be motivated by a multitude of reasons, such as profit, protest, information gathering, challenge, recreation, or to evaluate system weaknesses to assist in formulating defenses against potential hackers'(Wika) so what does this mean? Hackers don't have to always be bad guys. White hat hackers experimetn and test security breaches out, making sure that they are safe. They might also create anti-virus software, too. Black hat hackers are ones that really do the 'cool' stuff, getting access into other's computers and passwords. But what are viruses? Viruses are malicious software that allow ackers to gain access to your computer.") == true) {
  //             txt = "You great job! You just got hacked too!";
  //         } else {
  //           txt = "You great job! You just got hacked too!";
  //        }
  //
  //
  //   }
  // }

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

/*function changeexam() {
  var val = random(255);
  background(val);
      //   window.location='https://www.youtube.com/watch?v=Nep1qytq9JM&t=3684s';
  //virusPic = loadImage('viruspic.14.28 AM.png');
  var img;

  }
  function preload() {
    img = loadImage("viruspic.14.28 AM.png");
  }
  function setup() {
    image(img, 0, 0);}*/

function changeMAL() {
  myWindow = window.open("", "myWindow", "width=200,height=100");
  /*var val = random(255);
  background(val);
  window.location='file:///Users/kevinlin/Documents/p5/virus%20example/index.html';*/

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
              myWindow.document.write("<p>This is what a popup looks like. It brings another window or tab without your permission. </p>");
      } else {
          my_window.close();
      }


}




function changeERS(){

  var txt;
  if(confirm("Hackers don't have to always be bad guys. White hat hackers experiment and test security breaches out, making sure that they are safe. They might also create anti-virus software, too. Black hat hackers are ones that really do the 'cool' stuff, getting access into other's computers and passwords.") == true) {
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

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-2.5, 2.5);
    this.y = this.y + random(-2.5, 2.5);
  }

  condition(){
    if(x > canvas.width){
      for(let i = 0; i < 15; i++){
      this.x = this.x - 5
      }
    }
    if(y > canvas.width){
      for(let i = 0; i < 15; i++){
      this.y = this.y - 5
      }
    }
    if(x > this.r){
      for(let i = 0; i < 15; i++){
      this.x = this.x + 5
      }
    }
    if(y < this.r){
      for(let i = 0; i < 15; i++){
      this.y = this.y + 5
        }
      }
    }

  show() {
    strokeWeight(4);
    noFill();
    stroke(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x, this.y, this.r * 2);
  }
}

function draw(){
background(0);
  for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
  }
}


function mousePressed() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}
