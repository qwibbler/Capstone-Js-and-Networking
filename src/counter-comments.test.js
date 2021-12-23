import countComments from "./counter-comments.js";
const array = ['comment 1', 'comment 2', 'comment 3', 'comment 4'];
test('Testing comments', () => { expect(countComments(array)).toBe(4) }); 

