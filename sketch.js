const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");
canvas.width = 1000
canvas.height = 1000
canvas.style.backgroundColor = '#515151'

ctx.strokeStyle = 'rgba(255,255,255,0.5)'
ctx.lineWidth = 2
ctx.translate(ctx.canvas.width /2, ctx.canvas.height -100 )
// ctx.translate(10, ctx.canvas.height -10 )

const degree = 20
const length = 75
const turtle = new LSystem({
	// turtle swastika d=90 / star of david d=120
	// axiom: 'FFF+F+FF-F-FF+FFF+F+FF-F-FF+FFF+F+FF-F-FF+FFF+F+FF-F-FF+',
	// rules: {'F': 'F'},
	// tree d = ~22
	axiom: 'F',
	rules: { 'F': 'FF+[+F-F-F]-[-F+F+F]' },
	//koch d = 60
	// axiom: 'F++F++F',
	// rules: { 'F': 'F-F++F-F' },
	// quadratic Koch island d = 90
	// axiom: 'F+F+F+F',
	// rules: {	'F': 'F-F+F+FF-F-F+F'},
	// crystal d = 90
	// axiom: 'F+F+F+F',
	// rules: {'F': 'FF+F++F+F'},
	// board d = 90
	// axiom: 'F+F+F+F',
	// rules: {'F': 'FF+F+F+F+FF'},
	// from shiffman
	// axiom: 'F+F+F+F', // try both:)
	// axiom: 'F-F-F-F',
	// rules: {'F': 'F[F]-F+F[--F]+F-F'},

	renders: {
		'+': () => { ctx.rotate((Math.PI / 180) * degree) },
		'-': () => { ctx.rotate((Math.PI / 180) * -degree) },
		'F': () => {
			ctx.beginPath()
			ctx.moveTo(0, 0)
			// ctx.lineTo(0, -length)
			ctx.lineTo(0, -length / (turtle.iterations + 1))
			ctx.stroke()
			// ctx.translate(0, -length)
			ctx.translate(0, -length / (turtle.iterations + 1))
		},
		'[': () => { ctx.save() },
		']': () => { ctx.restore() }
	}
})

const string = turtle.generate(4)
console.log(turtle, string)
turtle.render()
