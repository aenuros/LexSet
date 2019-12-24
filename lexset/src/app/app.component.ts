import { Component } from '@angular/core';
import dictionary from '../assets/dictionary.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lexset';
  myText = `On a dark desert highway, cool wind in my hair
  Warm smell of colitas, rising up through the air
  Up ahead in the distance, I saw a shimmering light
  My head grew heavy and my sight grew dim
  I had to stop for the night
  There she stood in the doorway
  I heard the mission bell
  And I was thinking to myself
  "This could be Heaven or this could be Hell"
  Then she lit up a candle and she showed me the way
  There were voices down the corridor
  I thought I heard them say
  Welcome to the Hotel California
  Such a lovely place (Such a lovely place)
  Such a lovely face
  Plenty of room at the Hotel California
  Any time of year (Any time of year)
  You can find it here
  Her mind is Tiffany-twisted, she got the Mercedes bends
  She got a lot of pretty, pretty boys she calls friends
  How they dance in the courtyard, sweet summer sweat
  Some dance to remember, some dance to forget
  So I called up the Captain
  "Please bring me my wine."
  He said, "We haven't had that spirit here since nineteen sixty nine."
  And still those voices are calling from far away
  Wake you up in the middle of the night
  Just to hear them say
  Welcome to the Hotel California
  Such a lovely place (Such a lovely place)
  Such a lovely face
  They livin' it up at the Hotel California
  What a nice surprise (what a nice surprise)
  Bring your alibis
  Mirrors on the ceiling
  The pink champagne on ice
  And she said "We are all just prisoners here, of our own device"
  And in the master's chambers
  They gathered for the feast
  They stab it with their steely knives
  But they just can't kill the beast
  Last thing I remember
  I was running for the door
  I had to find the passage back to the place I was before
  "Relax," said the night man
  "We are programmed to receive
  You can check-out any time you like
  But you can never leave!"
  `;

  line: string;
  result: string;
  resultsArray = [];
  selectedWords = {};


  public createUniqueList(phoneme, song): any {
    const list = song.toUpperCase().split(/[\s\n,"().!]+/);
    const uniqueList = new Set(list);
    const uniqueListArray = Array.from(uniqueList);
    this.selectedWords[phoneme] = [];

    for (const word of uniqueListArray) {
      const upperWord = String(word).toUpperCase();
      if
       (dictionary[upperWord] &&
        dictionary[upperWord]['arpabet'].includes(this.convertLexicalSetToPhoneticDictionary(phoneme))) {
        this.selectedWords[phoneme].push(upperWord);
      }
    }
  }

  public containsThisPhoneme(phoneme, song) {
    this.createUniqueList(phoneme, song);
    this.resultsArray[phoneme] = [];
    this.resultsArray[phoneme].push();
    // byNewLine is an array where each member is a line of the text
    const byNewLine = song.split('\n');
    for (let i = 0; i < byNewLine.length; i++) {
      // split each line into an array of words
      const currentLine = byNewLine[i].split(' ');
      const intersection = currentLine.filter(x => this.selectedWords[phoneme].includes(x.toUpperCase()));
      if (intersection.length) {
        const resultObj = {
          lineNumber: i + 1,
          line: byNewLine[i],
          resultObj: [intersection]
        };
        this.resultsArray[phoneme].push(resultObj);
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
      // case 'NEAR': return ;
      // case 'SQUARE': return;
      // case 'START': return;
      // case 'NORTH': return;
      // case 'FORCE': return;
      // case 'CURE': return;
    }
  }
}
