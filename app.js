function Hello() {
	console.log("Hello", this)
}

const whoami = {
	name: "Nikita",
	age: 24,
	sayHello: Hello,
	sayHelloWindow: Hello.bind(window),
	logInfo: function (job, phone) {
		console.group(`${this.name} info:`)
		console.log(`My name is ${this.name}`);
		console.log(`My age is ${this.age}`);
		console.log(`My job is ${job}`);
		console.log(`My phone is ${phone}`);
		console.groupEnd()
	}
}

const oleg = {
	name: "Oleg",
	age: 25
}

// whoami.logInfo.bind(oleg)()

// const olegLogInfo = whoami.logInfo.bind(oleg)
// olegLogInfo('Aircraft Engineer', '89882281488')

// const olegLogInfo = whoami.logInfo.bind(oleg, 'Aircraft Engineer', '89882281488')
// olegLogInfo()

// whoami.logInfo.bind(oleg, 'Aircraft Engineer', '89882281488')()
// bind необходимо вызвать одним из вышеперчисленных способов

// whoami.logInfo.call(oleg, 'Aircraft Engineer', '89882281488')
// call сразу вызывает нам эту функцию

// whoami.logInfo.apply(oleg, ['Aircraft Engineer', '89882281488'])
//apply необходимо передать два параметра, второй из которых должен быть массивом, после этого сразу вызывается