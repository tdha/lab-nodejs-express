const students = [
    {name: 'Natasha Romanov', attendance: true},
    {name: 'Bruce Banner', attendance: true},
    {name: 'Bruce Wayne', attendance: false},
    {name: 'Clark Kent', attendance: false},
    {name: 'Thor Odinson', attendance: true},
    {name: 'Diana Prince', attendance: false},
    {name: 'Wally West', attendance: false},
    {name: 'Hal Jordan', attendance: false},
    {name: 'Tony Stark', attendance: true},
    {name: 'Steve Rogers', attendance: true},
    {name: 'Clint Barton', attendance: true},
    {name: 'Scott Lang', attendance: true}
  ];


  module.exports = {
    getAll: function() {
        return students;
    }
  };