# Overview

Provides seven functions computing analytics over the [Hawaii Open Dataset for UH Degree Data](https://data.hawaii.gov/)

# Installations

Provide the following scripts in your html file:

```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/uhdata.js"></script>
<script src="uhdatafunctions.js"></script>
```

# Usage

Here are example function calls to the analytic functions

```
<script>
  console.log("Total Degrees", totalDegrees(uhdata));
  console.log("Percentage Hawaiian", percentageHawaiian(uhdata));
  console.log("Total Degrees By Year", totalDegreesByYear(uhdata, 2012));
  console.log("List Campuses", listCampuses(uhdata));
  console.log("List Campus Degrees", listCampusDegrees(uhdata));
  console.log("Max Degrees", maxDegrees(uhdata));
  console.log("Doctoral Degree Programs", doctoralDegreePrograms(uhdata));
</script>
```

consult the uhdatafunctions.js for info on these functions

#Credits

Use [Underscore](http://underscorejs.org/) library.