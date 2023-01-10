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
    temp.source = element.key;
    temp.title = [element.title];
    temp.authors = [element.creators];
    temp.publicationDate.startDate = element.publicationDate;
    temp.publicationDate.endDate = element.publicationDate;
    temp.uid = [element.ISBN];
    temp.referenceGroup.heirarchy = element.itemType;
    temp.referenceGroup.value = element.edition;
    temp.highlight = element.notes;
    temp.interpretation = element.abstractNote;
    temp.interpreter = [element.creators]
    temp.interpretationDate.startDate = element.interpretationDate;
    temp.interpretationDate.endDate = element.interpretationDate;

    console.log(temp);

    fs.writeFile("/home/sajjad/vimwiki/Green_New_World/" + temp.title + ".md", JSON.stringify(temp), (err) => {
        if (err) console.log("oops", err);
    })

};