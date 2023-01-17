const { nextISSTimesForMyLocation } = require('./iss')

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error)
  }

  for (const pass of passTimes) {
    const dateTime = new Date(0)
    dateTime.setUTCSeconds(pass.risetime)
    console.log(`Next pass at ${dateTime} for ${pass.duration} seconds!`)
  }
})