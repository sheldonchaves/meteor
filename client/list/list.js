Template.list.helpers({
	tasksList:function(){
		return Tasks.find({});
	},
	formatDate : function () {
		return moment (this.date).format("DD/MM/YYYY HH:mm");
	}
});

Template.list.events({
	"click button":function(e, template){
		var task = this;
		Meteor.call("remove", task._id);
	}
});