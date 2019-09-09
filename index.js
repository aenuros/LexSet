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
  },
  "thought": {
    "lexical-set": "THOUGHT",
    "IPA": ["/θɔːt/"]
  },
  "all": {
    "lexical-set": "THOUGHT",
    "IPA": ["/ɔːl"]
  }

}

lexical_sets = {}

// popular lexical sets
Object.keys(dictionary).forEach((key) => {
  if(!lexical_sets[dictionary[key]['lexical-set']]) {
    lexical_sets[dictionary[key]['lexical-set']] = [];
  }
  lexical_sets[dictionary[key]['lexical-set']].push(key);
} )




console.log(lexical_sets);