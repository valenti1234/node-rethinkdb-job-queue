// const logger = require('./logger')(module)
// Logging has been removed due to circular dependencies.
function isDate (value) {
  // logger(`isDate`, value)
  return value instanceof Date ||
    Object.prototype.toString.call(value) === '[object Date]'
}


function addMilliseconds (dateObject, ms) {
  dateObject = isDate(dateObject) ? dateObject : new Date(dateObject)
  return new Date(dateObject.getTime() + ms)
}

function addSeconds (dateObject, sec) {
  dateObject = isDate(dateObject) ? dateObject : new Date(dateObject)
  return addMilliseconds(dateObject, sec * 1000)
}

function addMinutes (dateObject, min) {
  dateObject = isDate(dateObject) ? dateObject : new Date(dateObject)
  return addMilliseconds(dateObject, min * 60000)
}

function addHours (dateObject, hours) {
  dateObject = isDate(dateObject) ? dateObject : new Date(dateObject)
  return addMilliseconds(dateObject, hours * 3600000)
}

function addDays (dateObject, days) {
  dateObject = isDate(dateObject) ? dateObject : new Date(dateObject)
  return addMilliseconds(dateObject, days * 86400000)
}

module.exports.add = {
  ms: addMilliseconds,
  sec: addSeconds,
  min: addMinutes,
  hours: addHours,
  days: addDays
}

function formatDate (dateObject) {
  let year = dateObject.getFullYear().toString()
  let month = (dateObject.getMonth() + 1).toString() // zero-based
  month = month[1] ? month : `0${month}`
  let day = dateObject.getDate().toString()
  day = day[1] ? day : `0${day}`
  return `${year}-${month}-${day}`
}

module.exports.formatDate = formatDate

function formatTime (dateObject) {
  let hour = dateObject.getHours().toString()
  hour = hour[1] ? hour : `0${hour}`
  let min = dateObject.getMinutes().toString()
  min = min[1] ? min : `0${min}`
  let sec = dateObject.getSeconds().toString()
  sec = sec[1] ? sec : `0${sec}`
  let ms = dateObject.getMilliseconds().toString()
  ms = ms.length > 1 ? ms : `00${ms}`
  ms = ms.length > 2 ? ms : `0${ms}`
  return `${hour}:${min}:${sec}.${ms}`
}

module.exports.formatTime = formatTime

function format (dateObject) {
  return `${formatDate(dateObject)} ${formatTime(dateObject)}`
}

module.exports.format = format
