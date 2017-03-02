/**
 * http://usejsdoc.org/
 */
describe("hello world example", function() {
	
	describe('hc', function() {
		beforeEach(function() {
	        module('myApp');
	    });

	    beforeEach(inject(function($controller, $rootScope){
	        $scope = $rootScope.$new();
	    }));

	    it('Say Hello world', inject(function($controller) {
	        var scope = {},
	            ctrl = $controller('hellocntrl', { $scope: scope });
	        expect(scope.data).toBe('Hi!');
	    }));
	});
});
	

