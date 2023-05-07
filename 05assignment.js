// Promineo Tech Week 05 Coding Assignment

// Requirements: Create a Menu App
    // at least one array
    // at least two classes
    // create, view, and delete elements in menu

class WrittenWork {
    constructor(title, type, pages) {
        this.title = title;
        this.type = type;
        this.pages = pages;
    }
    describe() {
        return `${this.title} is the name of a ${this.type} and is ${this.pages} pages long.`;
    }
} 

class Author {
    constructor(name) {
        this.name = name;
        this.works = [];
    }
    description() {
        return `${this.name} is an author and has written ${this.works.length} works of literature.`;
    }
    addWrittenWorks() {
        if (work instanceof WrittenWork) {
            this.works.push(work);
        } else {
            throw new Error (`Invalid Written Work.`)
        }
    }
}

class Menu {
    constructor () {
        this.author = [];
        this.selectedAuthor = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.insertAuthor();
                    break;
                case '2':
                    this.viewAuthor();
                    break;
                case '3':
                    this.deleteAuthor();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
        alert("Thank you for visiting! See you!");
    }
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) Insert Author into Database
            2) View Authors in Current Database
            3) Delete Author(s) in the Database
        `);
    }
    insertAuthor() {
        let name = prompt(`Insert New Author's Name: `);
        this.author.push(new Author(name));
    }
    viewAuthor() {
        let authorString = "";
            for (let x= 0; x < this.author.length; x++) {
                authorString += x + ") " + this.author[x].name + "\n";
            }
        let index = prompt(`Select the Author's Index to View: \n${authorString}`);
        if (index > -1 && index < this.author.length) {
            this.selectedAuthor = this.author[index];
            let description = "Author " + this.selectedAuthor.name + " 's Works: \n\n";

            for (let i = 0; i< this.selectedAuthor.works.length; i++) {
                description += "\t" + i + ") " + this.selectedAuthor.works[i].title + " - " + this.selectedAuthor.works[i].type + " - " + this.selectedAuthor.works[i].pages + " pages \n";
            }

            let selection1 = this.showWorksOptions(description);
            switch (selection1) {
                case '1':
                    this.insertWrittenWorks();
                    break;
                case '2':
                    this.deleteWrittenWorks();
            }
        }
    }
    showWorksOptions(description){
        return prompt(`
            0) Back
            1) Insert A Written Work
            2) Delete A Written Work
            ----------------------
            ${this.selectedAuthor.description()}
            ${description}
        `);
    }
    deleteAuthor() {
        let deplete = prompt("Enter the index of the Author to banish: ")
        if (deplete > -1 && deplete < this.author.length) {
            this.author.splice(deplete,1);
        } else {
            throw new Error (`Error. Invaild Input.`)
        }
    }
    insertWrittenWorks(){
        let title = prompt("Enter Title of the Written Work: ");
        let type = prompt("Enter the Type of Written Work: ");
        let pages = prompt("Enter the Page Count of the Written Work: ");
        this.selectedAuthor.works.push(new WrittenWork(title,type,pages));
    }
    deleteWrittenWorks() {
        let number = prompt(`What is the unwanted written work's index? `);
        if (number > -1 && number < this.selectedAuthor.works.length) {
            this.selectedAuthor.works.splice(number,1);
        }
    }
}

let menu = new Menu;
menu.start();