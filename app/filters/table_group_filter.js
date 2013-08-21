angular.module("Spirits").filter("groupFilter", function() {
	return _.memoize(function(input, groupSize) {
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
	});
})