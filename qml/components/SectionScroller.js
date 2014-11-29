
var sections = [];

function fillSections(listview,sectionProperty) {
    sections = [];
    if(!listview || !listview.model) {
        return;
    }
    var count = listview.model.count;

    var currentSection = "";
    var currentItem;
    console.debug("Filling sections of: " + count + " elements");
    for(var i = 0; i < count; i++) {
        currentItem = listview.model.get(i);
        if(currentItem[sectionProperty] !== currentSection ) {
            currentSection = currentItem[sectionProperty];
            sections.push({index: i, value: currentSection});
            console.debug("New section: " + currentSection);
        }
    }
}


function getSectionNameAtRelativePos(position) {
    var index = Math.ceil(((sections.length)*position)/100);
    return sections[index-1];
}

