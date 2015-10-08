/*globals _, uhdata, totalDegrees, isHawLegacy*/

describe("TotalDegrees", function () {
  var partData = uhdata.slice(0, 2).concat(_.find(uhdata, isHawLegacy));

  it("should compute total number of awards for correctly specified sample data", function () {
    expect(totalDegrees(partData)).toEqual(403);
  });

  var noAwardsField = partData.concat({foo:"bar"});

  it("should throw an error when a record does not have the AWARDS field", function () {
    expect(function(){totalDegrees(noAwardsField);}).toThrowError("No AWARDS field.");
  });

  var noNumericAwards = partData.concat({"AWARDS":"bar"});

  it("should throw an error when a record has a non-numeric awards field", function () {
    expect(function(){totalDegrees(noNumericAwards);}).toThrowError("Non-numeric AWARDS.");
  });
});
