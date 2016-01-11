Template.insert.events({
	"submit form" :function (e,template){
		e.preventDefault();
		var input = $("#task");
		var name = input.val();

		Meteor.call("add", {name:name, user:this.userId})
		input.val("");
	}
});