function emptyObj(obj) {
	var key;
	for (key in obj) { return false; }
	return true;
}

function empty(item) {
	if (typeof(item) === 'object') {
		var key; for (key in item) { return false; }
		return true;
	} else {
		return false;
	}
}

function falsey(n) { // only w ecmascript 5
	return (!x || x.length === 0 || Object.keys(x).length === 0);
}

function falsey(n) {
	return (!x || empty(x));
}
function truthy(n) {
	return (!falsey(n));
}
