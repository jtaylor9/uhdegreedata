/**
 * Created by jtayl_000 on 9/29/2015.
 */
//for totalDegrees
var partData = uhdata.slice(0,2).concat(_.find(uhdata, isHawLegacy));

//adds all the number, found in the "Awards" field of the list
//
function addDegrees(runningTotal, record) {
  return runningTotal + record["AWARDS"];
}

function totalDegrees(inData) {
  return _.reduce(inData, addDegrees, 0);
}

function isHawLegacy(record) {
  return record["HAWAIIAN_LEGACY"] === "HAWAIIAN";
}

function findHawLegacy(inData) {
  return _.filter(inData, isHawLegacy);
}

function totalHawLegacy(indata) {
  return _.reduce(findHawLegacy(indata), addDegrees, 0);
}

function listCampuses(inData) {
  return _.uniq(_.pluck(uhdata, "CAMPUS"));
}

function percentageHawaiian(indata) {
  return  ( totalHawLegacy(indata) / totalDegrees(indata) ) * 100;
}

function isYear(year) {
  return function(record) {
    return record["FISCAL_YEAR"] === year;
  }
}

function findYears(inData, year) {
  return _.filter(inData, isYear(year));
}

function totalDegreesByYear(inData, year) {
  return _.reduce(findYears(inData, year), addDegrees, 0);
}

function groupByCampus(inData) {
  return _.groupBy(inData, "CAMPUS");
}

function listCampusDegrees(inData) {
  return _.mapObject(groupByCampus(inData),
      function(val, key) {
        return _.reduce(val, addDegrees, 0);
      });
}

function groupByYear(inData) {
  return _.groupBy(inData, "FISCAL_YEAR");
}

function maxDegrees(inData) {
  return _.max(_.mapObject(groupByYear(inData),
      function(val, key) {
        return _.reduce(val, addDegrees,0);
      }));
}

function isDoctor(record) {
  return record["OUTCOME"] === "Doctoral Degrees";
}

function getDoctorRecords(indata) {
  return _.filter(indata, isDoctor)
}

function doctorDegreePrograms(indata) {
  return _.uniq(_.pluck(getDoctorRecords(indata), "CIP_DESC"));
}

//Running totalDegrees()
console.log(totalDegrees(uhdata));

//Running percentageHawaiian
console.log(percentageHawaiian(uhdata));

//Running listCampuses()
console.log(listCampuses(uhdata));
console.log(listCampuses(uhdata).length)

//Running totalDegreesByYear
console.log(totalDegreesByYear(uhdata, 2014));

console.log(listCampusDegrees(uhdata));

console.log(maxDegrees(uhdata));

console.log(doctorDegreePrograms(uhdata));