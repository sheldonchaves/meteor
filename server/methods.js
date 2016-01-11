Meteor.methods ({
	add: function (obj){
		Tasks.insert({name:obj.name, date:new Date(), user:this.userId});
	},
	remove:function (id) {
		Tasks.remove({_id:id, user:this.userId});
	}
});