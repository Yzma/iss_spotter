const { nextISSTimesForMyLocation } = require('./iss_promised')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const pass of passTimes) {
      const dateTime = new Date(0)
      dateTime.setUTCSeconds(pass.risetime)
      console.log(`Next pass at ${dateTime} for ${pass.duration} seconds!`)
    }
  }).catch((error) => {
    console.log("It didn't work: ", error.message)
  })
