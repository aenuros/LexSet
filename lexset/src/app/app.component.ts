import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryService } from './dictionary.service';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lexset';
  myText = 'test';
  dictionary;
  line: string;
  result: string;
  resultsArray = [];
  // resultObject = {};
  // TODO - create interface for a result Object

  constructor(private dictionaryService: DictionaryService) {
    this.dictionaryService.getAllWords().subscribe(resp => {
      this.dictionary = resp;
    });
  }


  public containsThisPhoneme(phoneme, song) {
    // byNewLine is an array where each member is a line of the text
    const byNewLine = song.split('\n');
    for (let i = 0; i < byNewLine.length; i++) {
        // split each line into an array of words
        const currentLine = byNewLine[i].split(' ');
        for (let j = 0; j < currentLine.length; j++) {
          // all words are capitalized for regularization and because the ARPAbet is already all-caps
            const word =  currentLine[j].toUpperCase();
            if (this.dictionary[word] && this.dictionary[word]['arpabet'].includes(this.convertLexicalSetToPhoneticDictionary(phoneme))) {
              // create a 'result object' that tells you the line and the word that matched the selected lexical set
                const resultObj = {
                  line: byNewLine[i],
                  result: currentLine[j],
                  matchingPhoneme: phoneme
                };
                this.resultsArray.push(resultObj);
            }
        }
    }
  }

  public convertLexicalSetToPhoneticDictionary(lexicalSet: string): string {
    switch (lexicalSet) {
      case 'KIT': return 'IH';
      case 'DRESS': return 'EH';
      case 'TRAP': return 'AE';
      case 'LOT': return 'AA';
      case 'STRUT': return 'AH';
      case 'FOOT': return 'UH';
      case 'BATH': return 'AE';
      case 'CLOTH': return 'AO';
      case 'NURSE': return 'ER';
      case 'FLEECE': return 'IY';
      case 'FACE': return 'EY';
      case 'PALM': return 'AA';
      case 'THOUGHT': return 'AO';
      case 'GOAT': return 'OW';
      case 'GOOSE': return 'UW';
      case 'PRICE': return 'AY';
      case 'CHOICE': return 'OY';
      case 'MOUTH': return 'AW';
      // TODO - the following require more
      // case 'NEAR': return ;
      // case 'SQUARE': return;
      // case 'START': return;
      // case 'NORTH': return;
      // case 'FORCE': return;
      // case 'CURE': return;
    }
  }
}
