import data from "/home/sajjad/vimwiki/Green_New_World/Zotero/better-bibtex/Iraq - BCE.json" assert { type: "json" };
import * as fs from "fs";

const empath = {
	"source": "",
	"title": [""],
	 "authors": [],
	 "publicationDate": {
		 "startDate": "",
		 "endDate": "",
		 "distribution": "uncertain"
	 },
	 "uid": [""],
	 "referenceGroup": {
		 "heirarchy": "",
		 "value": ""
	 },
	 "highlight": "",
	 "interpretation": "",
	 "interpreter": [],
	 "interpretationDate": {
		 "startDate": "",
		 "endDate": "",
		 "distribution": "uncertain"
	 },
	  "chain": [],
	  "reliability": "reliable",
	  "tags": [""]
};

for (let index = 0; index < data.items.length; index++) {
    const element = data.items[index];

    var temp = empath;
    temp.source = element.key; // Link to zotero key
    temp.title = [element.title]; 
    temp.authors = [element.creators]; // Process creators add to list
    temp.publicationDate.startDate = element.date;
    temp.publicationDate.endDate = element.date;
    if (element.ISBN) {temp.uid = [element.ISBN]};// Conditional on it being a book, website will get uid from memex
    temp.referenceGroup.heirarchy = element.itemType;
    if (element.edition) {temp.referenceGroup.value = element.edition};// Conditional on it being a book, website will get uid from memex
    temp.highlight = element.notes;
    temp.interpretation = element.abstractNote;
    temp.interpreter = [temp.authors[0]]
    temp.interpretationDate.startDate = temp.publicationDate;
    temp.interpretationDate.endDate = temp.publicationDate;

    for (let j = 0; j < element.notes.length; j++) {
        var note = element.notes[j];


        // console.log();
        
    };

    // console.log(temp);

    fs.writeFile("/home/sajjad/vimwiki/Green_New_World/" + temp.title + ".md", JSON.stringify(temp, null, 2), (err) => {
        if (err) console.log("oops", err);
    })

};