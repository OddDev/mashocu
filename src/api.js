// Review - Is there best practice to mock data? If yes, is the given way anywhere near this practice? :)
const LessonsAPI = {
    characters: [['{', ['⌥', '8']], ['[', ['⌥', '5']], ['}', ['⌥', '9']], [']', ['⌥', '6']], ['~', ['⌥', 'n']]],
    all: function () { return this.characters },
    get: function (index) {
        return this.characters[index >= this.characters.length ? this.characters.length : index]
    }
}

export default LessonsAPI