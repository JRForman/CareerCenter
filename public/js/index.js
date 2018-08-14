// Click events for the submit button
$("#submit").on("click", function() {
  var searchedCategory = $("#category-search")
    .val()
    .trim();
  var searchedSalary = $("#salary-search")
    .val()
    .trim();
  var searchedEducation = $("#education-search")
    .val()
    .trim();
  // get request from database
  $.get(
    "/api/" + searchedCategory,
    +searchedSalary,
    +searchedEducation,
    function(data) {
      // log the data to our console
      console.log(data);
      // empty to resultSection before adding new content
      $("#resultSection").empty();
      // if the data is not there, then return an error message
      if (!data) {
        $("#resultSection").append(
          "<h2> No results found. Please change selections </h2>"
        );
      } else {
        // otherwise
        // append the ocupation name
        $("#resultSection").append("<td>" + data.occupationTitle + "</td>");
        // the annual catagory
        $("#resultSection").append("<td>Role: " + data.catagory + "</td>");
        // the annual wage
        $("#resultSection").append(
          "<td>Role: " + data.MedianAnnualWage + "</td>"
        );
        // append the education requirement
        $("#resultSection").append(
          "<td>" + data.typicalEntryLevelEducation + "</td>"
        );
        // the employment level 2016
        $("#resultSection").append(
          "<td>Role: " + data.employment2016Thousands + "</td>"
        );
        // the 10 yr employment change
        $("#resultSection").append(
          "<td>Age: " + data.employmentChange20162026Percent + "</td>"
        );
        // append the work experience
        $("#resultSection").append(
          "<td>" + data.workExperienceInARelatedOccupation + "</td>"
        );
        // append the job training
        $("#resultSection").append(
          "<td>" + data.typicalOnheJobTraining + "</td>"
        );
      }
    }
  );
});
