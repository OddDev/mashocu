// Review - Is there best practice to mock data? If yes, is the given way anywhere near this practice? :)
const LessonsAPI = {
    characters: [['{', ['⌥', '8']], ['[', ['⌥', '5']], ['}', ['⌥', '9']], [']', ['⌥', '6']], ['~', ['⌥', 'n']]],
    all: function () { return this.characters },
    get: function (index) {
        return this.characters[
            // Making sure that the given index cannot be out of bound
            index % this.characters.length]
    }
}

export default LessonsAPI