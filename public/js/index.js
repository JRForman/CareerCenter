// Click events for the submit button
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $("#member-name").text(data.email);
  });

  $.get("/api/popCategory").then(function(dbData) {
    for (data in dbData) {
      $("#category-search").append(
        "<option>" + dbData[data].category + "</option>"
      );
    }
  });

  $.get("/api/popAsCode").then(function(dbData) {
    console.log(dbData);
    for (data in dbData) {
      $("#salary-search").append(
        "<option>" + dbData[data].asCode + "</option>"
      );
    }
  });

  $.get("/api/popEducation").then(function(dbData) {
    console.log(dbData);
    for (data in dbData) {
      $("#education-search").append(
        "<option>" + dbData[data].typicalEntryLevelEducation + "</option>"
      );
    }
  });
});

$("#logout").on("click", function() {
  console.log("Logging out....");
  $.get("/logout/", function() {
    window.location.href = "/";
  });
});

// user subission click request
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
    function(dbData) {
      // log the data to our console
      console.log(dbData);
      // empty to resultSection before adding new content
      $("#resultSection").empty();
      // if the data is not there, then return an error message
      if (!dbData) {
        $("#resultSection").append(
          "<h2> No results found. Please change selections </h2>"
        );
      } else {
        // otherwise
        // append icon to save selections
        $("#resultSection").append(
          "<td>" +
            "<button type='button'>" +
            "../images/iconmonstr-plus-circle-thin-24.png+" +
            "</button>" +
            "</td>"
        );
        // append the ocupation name
        $("#resultSection").append(
          "<td>" + dbData[data].occupationTitle + "</td>"
        );
        // the annual catagory
        $("#resultSection").append("<td>" + dbData[data].catagory + "</td>");
        // the annual wage
        $("#resultSection").append(
          "<td>" + dbData[data].MedianAnnualWage + "</td>"
        );
        // append the education requirement
        $("#resultSection").append(
          "<td>" + dbData[data].typicalEntryLevelEducation + "</td>"
        );
        // the employment level 2016
        $("#resultSection").append(
          "<td>" + dbData[data].employment2016Thousands + "</td>"
        );
        // the 10 yr employment change
        $("#resultSection").append(
          "<td>" + dbData[data].employmentChange20162026Percent + "</td>"
        );
        // append the work experience
        $("#resultSection").append(
          "<td>" + dbData[data].workExperienceInARelatedOccupation + "</td>"
        );
        // append the job training
        $("#resultSection").append(
          "<td>" + dbData[data].typicalOnheJobTraining + "</td>"
        );
      }
    }
  );
});
