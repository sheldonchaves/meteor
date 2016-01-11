Meteor.startup(function(){

	Meteor.publish("tasks", function(){
		return Tasks.find({user:this.userId});
	});

});