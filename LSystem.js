
class LSystem {
	constructor(options) {
		this.axiom = options.axiom
		this.rules = options.rules
		this.renders = options.renders
		this.sentence = this.axiom
		this.iterations = 1
	}

	generate(num = 1) {
		this.iterations = num
		for (let i = 0; i < num; i++) {
			let nextSentence = ''
			for (let char of this.sentence) {
				Object.keys(this.rules).forEach( rule => {
					if (char === rule) {
						nextSentence += this.rules[char]
					} else {
						nextSentence += char
					}
				});
			}
			this.sentence = nextSentence
		}
		return this.sentence
	}

	render() {
		for (let letter of this.sentence) {
			if (this.renders[letter] && typeof this.renders[letter] === 'function') {
				this.renders[letter]()
			} else {
				console.error(`Error in render function '${letter}'. Type: ${typeof this.renders[letter]} Value: ${this.renders[letter]}` )
			}
		}
	}
}

