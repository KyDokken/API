$(document).ready(function () {});

$(function () {
    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function (data) {
        showResults(data.Search);
    });
});

// Seperate the GET DATA part of the app from the SHOW DATA part of the APP ^^^^ becomes >>>>

function showResults(results) {
    $.each(results, function (index, value) {
        console.log(value.Title);
    });
