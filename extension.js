'use strict'

// In this example replicants are being declared in the extension first
// You can always declare them in panels or graphics

module.exports = nodecg => {
	const timeReplicant = nodecg.Replicant('timestamp', {defaultValue: 1562259347886})
	const nameReplicant = nodecg.Replicant('name', {defaultValue: "fellow reactive bundle craftsman"})
	const startTimeReplicant = nodecg.Replicant('time', {defaultValue: 600})

	//LowerThirds Replicants
	const ltCounter = nodecg.Replicant('ltCounter', {defaultValue: 0})

	//Overlay Replicants
	const currentOverlay = nodecg.Replicant('currentOverlay', {defaultValue: 0})
	const firstTeamPoints = nodecg.Replicant('firstTeamPoints', {defaultValue: 0})
	const secondTeamPoints = nodecg.Replicant('secondTeamPoints', {defaultValue: 0})
	const questionCounter = nodecg.Replicant('questionCounter', {defaultValue: 0})
	const resultCounter = nodecg.Replicant('resultCounter', {defaultValue: false})
	const ordnungSolution = nodecg.Replicant('ordnungSolution', {defaultValue: 0})
	const livesOrdnungStud = nodecg.Replicant('livesOrdnungStud', {defaultValue: 0})
	const livesOrdnungProf = nodecg.Replicant('livesOrdnungProf', {defaultValue: 0})
	const folgenCounter = nodecg.Replicant('folgenCounter', {defaultValue: 0})

	//Display
		//Timer
		const startTimer = nodecg.Replicant('startTimer', {defaultValue: false})
		const pauseTimer = nodecg.Replicant('pauseTimer', {defaultValue: false})
		const resumeTimer = nodecg.Replicant('resumeTimer', {defaultValue: false})
		const resetTimer = nodecg.Replicant('resetTimer', {defaultValue: false})
		const setTime = nodecg.Replicant('setTime', {defaultValue: 60})

		//Stopwatch
		const startWatch = nodecg.Replicant('startWatch', {defaultValue: false})
		const pauseWatch = nodecg.Replicant('pauseWatch', {defaultValue: false})
		const resumeWatch = nodecg.Replicant('resumeWatch', {defaultValue: false})
		const resetWatch = nodecg.Replicant('resetWatch', {defaultValue: false})

		//Stage Direction
		const directionText = nodecg.Replicant('directionText', {defaultValue: ""})

		const studOverallPoints = nodecg.Replicant('studOverallPoints', {defaultValue: 0})
		const profOverallPoints = nodecg.Replicant('profOverallPoints', {defaultValue: 0})
		const studPointCounter = nodecg.Replicant('studPointCounter', {defaultValue: 0})
		const profPointCounter = nodecg.Replicant('profPointCounter', {defaultValue: 0})

		const list = nodecg.Replicant('list', {defaultValue: []})
}
