function showAll(prefix) {
	var members = document.getElementsByClassName(prefix);
	_.map(members, function(member) {
		member.style.display = "block";
	});
}

function showFilter(filter, tags, prefix) {
	//var memberCounter = document.querySelector("#memberCounter");

	// Add the filter buttons, their html should be:
	// <button class="filter-button" onclick='onlyShow("Företag");'>Företag</button>
	_.forEach(tags, function(tag) {
		var pinne = document.createElement('span');
		pinne.innerHTML = " | ";
		filter.appendChild(pinne);
		var filterButton = document.createElement('button');
		filterButton.innerHTML = tag;
		filterButton.className = "filter-button";
		filterButton.onclick = function() { onlyShow(tag); };
		filter.appendChild(filterButton);
	});

	function randomizeOrder() {
		var members = document.getElementsByClassName(prefix);
		var shuffledMembers = _.shuffle(members);

		var memberList = document.querySelector("." + prefix + "-list");
		memberList.innerHTML = "";

		_.map(shuffledMembers, function(member) {
			memberList.appendChild(member);
		});
	}

	randomizeOrder();

	function onlyShow(tagName) {
		var members = document.getElementsByClassName(prefix);
		_.map(members, function(member) {
			var tagDivs = member.getElementsByClassName(prefix + "-tag");
			var tagContents = _.map(tagDivs, function(tag) {
				return tag.innerHTML;
			});
			if(_.contains(tagContents, tagName)) {
				member.style.display = "block";
			} else {
				member.style.display = "none";
			}
		});
	}
}