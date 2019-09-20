import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lexset';
  myText = 'test';

  public containsThisPhoneme(phoneme, song) {
    console.log(phoneme);
    // this is the entire line
    let byNewLine = song.split("\n");
    for (let i = 0; i <byNewLine.length;i++) {
        let currentLine = byNewLine[i].split(" ");
        for (let j=0;j < currentLine.length; j++) {
            const word =  currentLine[j].toUpperCase();
            if (dictionary[word] && dictionary[word]["arpabet"].includes(phoneme)) {
                console.log(`Line: ${currentLine}`);
                console.log(`${currentLine[j]}: ${dictionary[word]["arpabet"]}`);
                console.log('********')
            }
        }
    }
}

  public analyzeText() {
    console.log(this.myText);
  }
}
