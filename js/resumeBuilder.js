//Assignment HTML to be appended

var HTMLpanelbody = "<div class='panel-body'></div>";
var HTMLpanelbodyTitle = "<h4 class='pbtitle'>%data%</h4>";
var HTMLpanelbodyDate = "<div class='pbdate'>%data%</div>";
var HTMLpanelbodyText = "<div class='pbtext'>%data%</div>";

//Education HTML to be appended
var HTMLedubodyURL = "<h5><a href ='%data%' target='_blank'>";
var HTMLedubodyTitle = "%data%</a></h5>";
var HTMLedubodyDate = "<div class='date-text pbdate'>%data%</div>";
var HTMLedubodylocation = "<div class='location-text pbdate'>%data%</div>";

var HTMLdegree = "<div class='major-text pbtext'><br>%data%</div>";
var HTMLmajor = "<div>Major: %data%</div>";
var HTMLgpa = "<div><strong>GPA: %data%</strong></div>";

var assignments =
{
	"csharp":
	[
		{
			"title": "Banking App",
			"details": "Demonstrated use of properties, classes, and seperation of the Business Logic Layer and User Service Layer.",
			"date": "Spring 2015"
		},
		{
			"title": "Ticket Handler",
			"details": "Demonstrated knowledge of Windows Forms.",
			"date": "Spring 2015"
		},
		{
			"title": "String Function",
			"details": "Demonstrated knowledge of String functions.",
			"date": "Spring 2015"
		},
		{
			"title": "Database Demo",
			"details": "Demonstrated knowledge of how to set up a Database in Visual Studio and how to link it to controls.",
			"date": "Spring 2015"
		}
	],
	"Java":
	[
		{
			"title": "Bubble Sort",
			"details": "Implemented the Bubble Sort.",
			"date": "Spring 2015"
		},
		{
			"title": "Stacks",
			"details": "Implemented a Stack and demonstrates knowledge of Binary Conversions.",
			"date": "Spring 2015"
		},
		{
			"title": "Linked Lists",
			"details": "Implemented Linked Lists and knowledge of pointers.",
			"date": "Spring 2015"
		},
		{
			"title": "Binary Tree Word Count",
			"details": "Implemented a Binary Tree, reads files, parses words, and traverses the tree.",
			"date": "Spring 2015"
		},
		{
			"title": "Quicksort",
			"details": "Implemented Quicksort and reverses Arrays.",
			"date": "Spring 2015"
		},
		{
			"title": "Mergesort",
			"details": "Implemented Mergesort on a Linked List.",
			"date": "Spring 2015"
		},
		{
			"title": "Trilink Tree",
			"details": "Implemented a Trilink Tree that allows inserts, searches, and deletes.",
			"date": "Spring 2015"
		}
	],
	"python":
	[
		{
			"title": "Rename Files",
			"details": "Program that removes numbers from a filename.",
			"date": "Fall 2014"
		},
		{
			"title": "Take a Break",
			"details": "Program that pulls the time from OS and opens Youtube after 2 hours of running",
			"date": "Fall 2014"
		},
		{
			"title": "Turtles",
			"details": "Program that renders turtle graphics and draws shapes in the window.",
			"date": "Fall 2014"
		}
	],
	"HTMLandCSS":
	[
		{
			"title": "Portfolio",
			"details": "Web page created as a basis for a portfolio.",
			"date": "Spring 2015"
		}
	],
	"javascript":
	[
		{
			"title": "Resume",
			"details": "File that uses jQuery and JSON to append assignments and their descriptions as well as Schools and Courses to the Resume when the page is loaded.",
			"date": "Spring 2015"
		}
	]
};

var education = 
{
	"schools":
	[
		{
			"title": "Central Texas College",
			"location": "Killeen, TX",
			"degree": "AA",
			"major": "General Studies",
			"url": "https://www.ctcd.edu/",
			"date": "2013 - 2014",
			"gpa": "3.73/4.0"
		},
		{
			"title": "Texas A&M University - Central Texas",
			"location": "Killeen, TX",
			"degree": "BS",
			"major": "Computer Information Systems",
			"url": "http://www.tamuct.edu/",
			"date": "2014 - present",
			"gpa": "4.0/4.0"
		}
	],
	"courses":
	[
		{
			"title":"Programming Foundations with Python",
			"school":"Udacity",
			"date":"Fall 2014",
			"url":"https://www.udacity.com/course/programming-foundations-with-python--ud036"
		},
		{
			"title":"Intro to HTML and CSS",
			"school":"Udacity",
			"date":" January 2015",
			"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"date":"April 2015",
			"url":"https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title":"Intro to jQuery",
			"school":"Udacity",
			"date":"May 2015",
			"url":"https://www.udacity.com/course/intro-to-jquery--ud245"
		},
		{
			"title":"HTML5 Canvas",
			"school":"Udacity",
			"date":"May 2015",
			"url":"https://www.udacity.com/course/html5-canvas--ud292"
		}
	]
}

assignments.displayCsharp = function()
{
	for(assignment in assignments.csharp)
	{
		var formattedTitle = HTMLpanelbodyTitle.replace("%data%", assignments.csharp[assignment].title);
		var formattedDate = HTMLpanelbodyDate.replace("%data%", assignments.csharp[assignment].date);
		var formattedText = HTMLpanelbodyText.replace("%data%", assignments.csharp[assignment].details);
		$("#collapseCsharp").append(HTMLpanelbody);
		$("#collapseCsharp").children(".panel-body:last").append(formattedTitle);
		$("#collapseCsharp").children(".panel-body:last").append(formattedDate);
		$("#collapseCsharp").children(".panel-body:last").append(formattedText);
	}
};

assignments.displayJava = function()
{
	for(assignment in assignments.Java)
	{
		var formattedTitle = HTMLpanelbodyTitle.replace("%data%", assignments.Java[assignment].title);
		var formattedDate = HTMLpanelbodyDate.replace("%data%", assignments.Java[assignment].date);
		var formattedText = HTMLpanelbodyText.replace("%data%", assignments.Java[assignment].details);
		$("#collapseJava").append(HTMLpanelbody);
		$("#collapseJava").children(".panel-body:last").append(formattedTitle);
		$("#collapseJava").children(".panel-body:last").append(formattedDate);
		$("#collapseJava").children(".panel-body:last").append(formattedText);
	}
};

assignments.displayPython = function()
{
	for(assignment in assignments.python)
	{
		var formattedTitle = HTMLpanelbodyTitle.replace("%data%", assignments.python[assignment].title);
		var formattedDate = HTMLpanelbodyDate.replace("%data%", assignments.python[assignment].date);
		var formattedText = HTMLpanelbodyText.replace("%data%", assignments.python[assignment].details);
		$("#collapsePython").append(HTMLpanelbody);
		$("#collapsePython").children(".panel-body:last").append(formattedTitle);
		$("#collapsePython").children(".panel-body:last").append(formattedDate);
		$("#collapsePython").children(".panel-body:last").append(formattedText);
	}
};

assignments.displayHTMLandCSS = function()
{
	for(assignment in assignments.HTMLandCSS)
	{
		var formattedTitle = HTMLpanelbodyTitle.replace("%data%", assignments.HTMLandCSS[assignment].title);
		var formattedDate = HTMLpanelbodyDate.replace("%data%", assignments.HTMLandCSS[assignment].date);
		var formattedText = HTMLpanelbodyText.replace("%data%", assignments.HTMLandCSS[assignment].details);
		$("#collapseHTMLandCSS").append(HTMLpanelbody);
		$("#collapseHTMLandCSS").children(".panel-body:last").append(formattedTitle);
		$("#collapseHTMLandCSS").children(".panel-body:last").append(formattedDate);
		$("#collapseHTMLandCSS").children(".panel-body:last").append(formattedText);
	}
};

assignments.displayJavaScript = function()
{
	for(assignment in assignments.javascript)
	{
		var formattedTitle = HTMLpanelbodyTitle.replace("%data%", assignments.javascript[assignment].title);
		var formattedDate = HTMLpanelbodyDate.replace("%data%", assignments.javascript[assignment].date);
		var formattedText = HTMLpanelbodyText.replace("%data%", assignments.javascript[assignment].details);
		$("#collapseJavaScript").append(HTMLpanelbody);
		$("#collapseJavaScript").children(".panel-body:last").append(formattedTitle);
		$("#collapseJavaScript").children(".panel-body:last").append(formattedDate);
		$("#collapseJavaScript").children(".panel-body:last").append(formattedText);
	}
};

assignments.displayCsharp();
assignments.displayJava();
assignments.displayPython();
assignments.displayHTMLandCSS();
assignments.displayJavaScript();

education.displaySchools = function()
{
	for(school in education.schools)
	{
		var formattedURL = HTMLedubodyURL.replace("%data%", education.schools[school].url);
		var formattedName = HTMLedubodyTitle.replace("%data%", education.schools[school].title);
		var formattedTitle = formattedURL + formattedName;
		var formattedDate = HTMLedubodyDate.replace("%data%", education.schools[school].date);
		var formattedLocation = HTMLedubodylocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLdegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLmajor.replace("%data%", education.schools[school].major);
		var formattedSchool = formattedDegree + formattedMajor;
		var formattedGPA = HTMLgpa.replace("%data%", education.schools[school].gpa);
		$("#collapseSchools").append(HTMLpanelbody);
		$("#collapseSchools").children(".panel-body:last").append(formattedTitle);
		$("#collapseSchools").children(".panel-body:last").append(formattedDate);
		$("#collapseSchools").children(".panel-body:last").append(formattedLocation);
		$("#collapseSchools").children(".panel-body:last").append(formattedSchool);
		$("#collapseSchools").children(".panel-body:last").append(formattedGPA);
	}
};

education.displaySchools();

education.displayCourses = function()
{
	for(course in education.courses)
	{
		var formattedURL = HTMLedubodyURL.replace("%data%", education.courses[course].url);
		var formattedName = HTMLedubodyTitle.replace("%data%", education.courses[course].title);
		var formattedTitle = formattedURL + formattedName;
		var formattedDate = HTMLedubodyDate.replace("%data%", education.courses[course].date);
		var formattedSchool = HTMLedubodylocation.replace("%data%", education.courses[course].school);
		$("#collapseCourses").append(HTMLpanelbody);
		$("#collapseCourses").children(".panel-body:last").append(formattedTitle);
		$("#collapseCourses").children(".panel-body:last").append(formattedDate);
		$("#collapseCourses").children(".panel-body:last").append(formattedSchool);
	}
};

education.displayCourses();
