angular.module("Spirits").controller("MembersCtrl", function($scope) {
	$scope.spiritMembers = [
	    {
	    	"year" : "Fall 2009",
	    	"members" : ["Caitlin Davis", "Chelsea Bucklew", "Christine Laramy", "Courtney Davis",
	    	             "Sharilyn Stone"]
	    },
	    {
	    	"year" : "Spring 2010",
	    	"members" : ["Alex Janecka", "Jenna Fahle",	"Jessica Agyemang", "Andrea Chao", "Jessie Davis",
	    	             "Rachel Sawyers", "Kelcey Bacon", "Bobbie Renfro",	"Sarah Smith", "Caroline Suter",
	    	             "Leah Spector", "Sierra van den Dries", "Hannah Waitt", "Maysie Ocera",
	    	             "Simone Schroeder"]
	    },
	    {
	    	"year" : "Fall 2010",
	    	"members" : ["Aly Kasberg", "Angie Avera", "Ari Rios", "Becca Alexander", "Becki Kendall",
	    				"Bridget Dunn", "Calli Conti", "Cynthia Velasco", "Dana Holmes", "Dannye Osburn",
	    				"Dionne Dias", "Ghada Soufan", "Hilary Elrod", "Jocelyn Matyas", "Lauren Means",
	    				"Morgan Riley", "Natalie Johnson", "Rebecca Moore", "Taylor Forman",
	    				"Taylor Francis", "Tori Kazmierski"]
	    },
	    {
	    	"year" : "Spring 2011",
	    	"members" : ["Alexa Pawlowski", "Alysse Fisher", "Amy Conto", "Ashley Hsu", "Ashley Wallace",
	    			     "Cara Bessom", "Emily Murray", "Chelsea Demel", "Christine Hak", "Jenny Feng",
	    			     "Jacqueline Watson",	"Jenna VonHofe", "Kendall Connolly", "Julia Bunch", 
	    			     "Katarina Schirren",	"Mayte Salazar", "Lauren Gray", "Miranda Rudy",
	    			     "Sarah Seymour", "Supriya Misra", "Veronica Seng"]
		},
		{
			"year" : "Fall 2011",
			"members" : ["Aliyah McRoberts", "Ashley Embry", "Ashley McAdams", "Audrey Mehrl",
			            "Bailey Baker", "Caitlin O'Brien", "Calitlin Pawlowski", "Carly Colville",
			            "Emily Lamon", "Emily Poston", "Erin Crandall", "Jacqui Bontke", "Katie Folger",
			            "Katy Wainwright", "Kayla Jones", "Laura Bailey", "Lily Patterson",	"Madison Russ",
			            "Madison Moody", "Maggie Widodo", "Marilyn McKee", "Namanda Nusoke",
			            "Nicole Martinez", "Sabina Anwar", "Sami Griffel", "Sierra Welch"]
		},
		{
			"year" : "Spring 2012",
			"members" : ["Alexa Gould", "Allison Ammann", "Aly Starling", "Anjali Sethi", "Carmen Collins",
			             "Danielle Gibbons", "Doha Hussein", "Hannah Roberts", "Hannah Sabella",
			             "Heather Dai", "Isabella Pereira", "Jac Mizeur", "Jessie Neuendorff",
			             "Joanne Chien", "Jordan Kohler", "Kayla Kotara", "Kaytelynn Fabre", "Mary Slater",
			             "Maya Brown", "Michelle Nguyen", "Molly Farrell", "Morgan Bruton",
			             "Olivia Tibiletti", "Quynh Pham", "Willa Altman",]
		},
		{
			"year" : "Fall 2013",
			"members" : ["Ally Willauer", "Amanda Haight", "Amy Woodhull", "Ashley Cubley", "Ashley Dowell",
			             "Devanne Parent", "Emily Twa", "Jessica Wong", "Kaci Nguyen", "Kaitlin Evans",
			             "Lauren Berrong", "Lauren Rinaldi", "Lindsey Kellam", "Maria Heinonen",
			             "Marnie Lemonik", "Meghan Kahlig", "Michelle Song", "Priscilla Patterson",
			             "Sarah Micheletti", "Sarah Mithani", "Savannah Hampton", "Sheena Mohebalian",
			             "Shelly Miller", "Skyla Sale"]
		},
		{
			"year" : "Spring 2013 Weenies",
			"members" : ["Alyssa Pappas", "Bea Scott", "Carissa Weber", "Christle Nwora", "Dara Oke",
			             "Farah Mithani", "Gabby Garza", "Halleh Ghaemi", "Hannah Ivancie", 
			             "Jennifer Farar", "Julianne Perry", "Karlie Cox", "Katherine Nye", "Kelsey Ni",
			             "Kc Munoz", "Laurel Lunsford", "Lauren Chiappe", "Lindsey White",
			             "Madison McCorkle", "Maria Benson", "Montana Blair", "Morgan Lundy",
			             "Olivia Leitch", "Paige Kroll", "Rachel Bennett", "Shera Williamson"]
		}];
	
	$scope.subGroup = function(input, groupSize) {
		var groupedLists = [];
		
		var i = 0;
		while(i < input.length) {
			var subList = [];
			var count = 0;
			while(count < groupSize && i < input.length) {
				subList.push(input[i]);
				i++;
				count++;
			}
			groupedLists.push(subList);
		}
		
		return groupedLists;
	}
});

/**	

**/