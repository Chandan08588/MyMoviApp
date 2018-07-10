(function(angular, undefined) {
  angular.module("myMoviAppApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);