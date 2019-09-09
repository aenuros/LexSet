mysong = `For a home sweet, no sweet home
Running with my roots pulled up
caught me cold so they could cut
What there was left of love`;

const dictionary = {
    "ship": {
      "lexical-set": "KIT",
      "IPA": ["/ʃɪp/"]
    },
    "bit": {
      "lexical-set": "KIT"
    },
    "step": {
      "lexical-set": "DRESS"
    },
    "fetch": {
      "lexical-set": "DRESS"
    },
    "caught": {
        "lexical-set": "THOUGHT",
        "IPA": ["/kɔ(ː)t/"]
    },
    "left": {
        "lexical-set": "DRESS"
    },
    "home": {
        "lexical-set": "GOAT"
    },
    "law": {
      "lexical-set": "THOUGHT",
      "UK_IPA": ["lɔ"],
      "US_IPA": ["lɔ","lɑ"]
    },
    "face": {
      "lexical-set": "FACE"
    }
  }


lexical_sets = {}

// popular lexical sets
Object.keys(dictionary).forEach((key) => {
    if(!lexical_sets[dictionary[key]['lexical-set']]) {
      lexical_sets[dictionary[key]['lexical-set']] = [];
    }
    lexical_sets[dictionary[key]['lexical-set']].push(key);
});
  
function returnLexicalSet(word) {
      if (dictionary[word] !== undefined && dictionary[word]['lexical-set']) {
          return dictionary[word]['lexical-set'];
      }
      else  {
          return false
      }
}

// return the lexical set of every word in the song
function songSplit(songee) {
    byNewLine = songee.split("\n");
    for (i =0;i<byNewLine.length;i++) {
        currentLine = byNewLine[i].split(" ");
        for(j=0;j<currentLine.length;j++) {
            if(returnLexicalSet(currentLine[j])) {
                console.log(byNewLine[i] + " KEY: *" + currentLine[j] + "* : " + returnLexicalSet(currentLine[j]));
            }
        }
    }
}
songSplit(mysong);

function isThisLexicalSetHere(lexicalset, songee) {
    console.log(`Looking for ${lexicalset}`);
    byNewLine = songee.split("\n");
    // line by line
    for (i =0;i<byNewLine.length;i++) {
        currentLine = byNewLine[i].split(" ");
        //word by word
        for(j=0;j<currentLine.length;j++) {
            if(dictionary[currentLine[j]] !== undefined && dictionary[currentLine[j]]['lexical-set'] === lexicalset) {
                console.log(byNewLine[i] + " KEY: *" + currentLine[j] + "* : " + returnLexicalSet(currentLine[j]));                
            }
        }
    }
}

isThisLexicalSetHere("THOUGHT", mysong);