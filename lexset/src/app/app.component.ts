import { Component } from '@angular/core';
import { DictionaryService } from './dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lexset';
  myText = 'test';
  dictionary;

constructor(private dictionaryService: DictionaryService) {
  this.dictionaryService.getAllWords().subscribe(resp => {
    this.dictionary = resp;
  });
}


public containsThisPhoneme(phoneme, song) {
  console.log(phoneme);
  // this is the entire line
  const byNewLine = song.split('\n');
  for (let i = 0; i < byNewLine.length; i++) {
      const currentLine = byNewLine[i].split(' ');
      for (let j = 0; j < currentLine.length; j++) {
          const word =  currentLine[j].toUpperCase();
          if (this.dictionary[word] && this.dictionary[word]['arpabet'].includes(phoneme)) {
              console.log(`Line: ${currentLine}`);
              console.log(`${currentLine[j]}: ${this.dictionary[word]['arpabet']}`);
              console.log('********');
          }
      }
  }
}

  public analyzeText() {
    console.log(this.myText);
  }
}
