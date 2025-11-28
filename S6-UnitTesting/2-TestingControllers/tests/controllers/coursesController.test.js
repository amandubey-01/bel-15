const coursesController = require('../../src/controllers/coursesController.js')
const coursesModel = require('../../src/models/coursesModel.js');

jest.mock("../../src/models/coursesModel.js");

// Test get all courses.

// getAllcourses has no business logic, it just calls the
// model and returns back. Testing this means checking 
// if the model is called or not.
// This is done by mocking the response if the courses.find
// is called.

// The coursesModel can be backed by anything, it may be in
// memory, connecting to db, file system and what not.
// If we try to test the coursesController we would have to
// set everything up. That takes time, and even test
// execution takes time.
// But when we test the controller our purpose is to test 
// just the business logic in the function. That is why 
// should  mock the dependency.

describe("Testing courses controller", () => {
    describe("Testing getAllcourses function", () => {
        it("Should return all the courses", () => {
            const mockCourses = [
                {_id: "1", name:"Course 1"},
                {_id: "2", name:"Course 2"}
            ]
            coursesModel.find.mockReturnValue(mockCourses); // this is one way wherein we just return the value as it is.
                                                            // We can write some mock

            const result = coursesController.getAllCourses();
            expect(result).toBe(mockCourses);

            // jest provides way of writing multiple assertions 
            expect(coursesModel.find).toHaveBeenCalledTimes(1); // Checks if the function is called multiple 
            // number of times.
        });
    });
    // describe("Testing the deleteACourse function", () => {
    //     it("Should delete a course by id", ()=> {
    //         const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
    //         const responseAfterDeletion = [{ _id: "1", name: "Course 1" }]
    //         coursesModel.delete.mockReturnValue(responseAfterDeletion);

    //         const result = coursesController.deleteACourse(2);

    //         expect(result).toBe(responseAfterDeletion);
    //     });
    // })

    
    describe("Testing getAcourses function", () => {
    it("Should return a course", () => {
            const mockCourses = [
                {_id: "1", name:"Course 1"},
                {_id: "2", name:"Course 2"}
            ]
            coursesModel.findById = jest.fn().mockImplementation((id)=> { // provided a mock Implentation for findById
                return mockCourses.filter(m => m._id == id)[0]; 
            })

            const result = coursesController.getAcourse("1");
            expect(result).toBe(mockCourses[0]);
            expect(coursesModel.findById).toHaveBeenCalledTimes(1);
        });
    });

})
// When we test the method we just checks the logic, any downward dependency should be mocked.