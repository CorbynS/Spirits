/**
 * Created with IntelliJ IDEA.
 * User: corbyns
 * Date: 4/19/13
 * Time: 11:02 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('Spirits', ['ui.bootstrap'], function($routeProvider) {
    $routeProvider.when("/", { redirectTo: "/Home" }).
        when("/Home",{
            templateUrl: "app/view/home_view.html",
            controller: "HomeCtrl"
        }).when("/Spirit", {
        	templateUrl: "app/view/spirit_view.html"
        }).when("/Service", {
        	templateUrl: "app/view/service_view.html"
        }).when("/Social", {
        	templateUrl: "app/view/social_view.html"
        }).when("/Weenies", {
        	templateUrl: "app/view/weenies_view.html"
        }).when("/Join", {
        	templateUrl: "app/view/join_view.html"
        }).when("/Members", {
        	templateUrl: "app/view/members_view.html",
        	controller: "MembersCtrl"
        }).when("/Alumni", {
        	templateUrl: "app/view/alumni_view.html"
        }).when("/Contact", {
        	templateUrl: "app/view/contact_view.html",
        	controller: "ContactCtrl"
        }).otherwise({
            template: "<div class='displayed'>This page does not yet exist</div>"
        });
});

!function(d,s,id)
{
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id))
	{
		js=d.createElement(s);
		js.id=id;
		js.src=p+"://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}
(document,"script","twitter-wjs");
