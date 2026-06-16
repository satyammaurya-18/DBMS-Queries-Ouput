// The list of your categories
const categories = [
    "Select Query",
    "Where Clause",
    "Like Operator",
    "Group Function, Group By, Having",
    "Subqueries",
    "Order By & Alias",
    "Joins",
    "Set Operators",
    "Views",
    "Scalar Functions",
    "DDL Commands",
    "DML Commands",
    "DQL Commands",
    "TCL & DCL Commands",
    "PL/SQL: OUTPUT STATEMENT, DATATYPES, VARIABLES, CONSTANTS",
    "PL/SQL: DECISION CONTROL STATEMENT",
    "PL/SQL: ITERATIVE CONTROL STATEMENT",
    "PL/SQL: SELECT, %TYPE AND %ROWTYPE",
    "PL/SQL: CURSORS",
    "PL/SQL: STORED PROCEDURES, STORED FUNCTIONS",
    "PL/SQL: PACKAGES",
    "PL/SQL: EXCEPTION HANDLING",
    "PL/SQL: TRIGGERS"
];

// Your massive list of 500 queries
const selectData = [
    {
        id: 1,
        category: "Select Query",
        title: "Display all columns of the EMP table.",
        inputImg: "Select/input/1.png",
        outputImg: "Select/output/1.png"
    },
    {
        id: 2,
        category: "Select Query",
        title: "Display EMPNO, ENAME, and SAL of all employees.",
        inputImg: "Select/input/2.png",
        outputImg: "Select/output/2.png"
    },
    {
        id: 3,
        category: "Select Query",
        title: "Display unique job titles from EMP.",
        inputImg: "Select/input/3.png",
        outputImg: "Select/output/3.png"
    },
    {
        id: 4,
        category: "Select Query",
        title: "Display employee names along with their department numbers.",
        inputImg: "Select/input/4.png",
        outputImg: "Select/output/4.png"
    },
    {
        id: 5,
        category: "Select Query",
        title: "Display all department details.",
        inputImg: "Select/input/5.png",
        outputImg: "Select/output/5.png"
    },
    {
        id: 6,
        category: "Select Query",
        title: "Display distinct department numbers from EMP.",
        inputImg: "Select/input/6.png",
        outputImg: "Select/output/6.png"
    },
    {
        id: 7,
        category: "Select Query",
        title: "Display employee name and annual salary (SAL × 12).",
        inputImg: "Select/input/7.png",
        outputImg: "Select/output/7.png"
    },
    {
        id: 8,
        category: "Select Query",
        title: "Display employee name, salary, and commission.",
        inputImg: "Select/input/8.png",
        outputImg: "Select/output/8.png"
    },
    {
        id: 9,
        category: "Select Query",
        title: "Display job and salary of all employees.",
        inputImg: "Select/input/9.png",
        outputImg: "Select/output/9.png"
    },
    {
        id: 10,
        category: "Select Query",
        title: "Display employees along with their manager numbers.",
        inputImg: "Select/input/10.png",
        outputImg: "Select/output/10.png"
    }
];

const whereData = [
    {
        id: 11,
        category: "Where Clause",
        title: "Display employees whose salary is greater than 3000.",
        inputImg: "where/input/1.png",
        outputImg: "where/output/1.png"
    },
    {
        id: 12,
        category: "Where Clause",
        title: "Display employees working in department 10.",
        inputImg: "where/input/2.png",
        outputImg: "where/output/2.png"
    },
    {
        id: 13,
        category: "Where Clause",
        title: "Display employees whose job is 'CLERK'.",
        inputImg: "where/input/3.png",
        outputImg: "where/output/3.png"
    },
    {
        id: 14,
        category: "Where Clause",
        title: "Display employees hired after 01-JAN-81.",
        inputImg: "where/input/4.png",
        outputImg: "where/output/4.png"
    },
    {
        id: 15,
        category: "Where Clause",
        title: "Display employees whose salary is less than 1500.",
        inputImg: "where/input/5.png",
        outputImg: "where/output/5.png"
    },
    {
        id: 16,
        category: "Where Clause",
        title: "Display employees whose salary is > 2000 and job is 'MANAGER'.",
        inputImg: "where/input/6.png",
        outputImg: "where/output/6.png"
    },
    {
        id: 17,
        category: "Where Clause",
        title: "Display employees working in department 10 or 20.",
        inputImg: "where/input/7.png",
        outputImg: "where/output/7.png"
    },
    {
        id: 18,
        category: "Where Clause",
        title: "Display employees whose job is 'SALESMAN' and salary > 1500.",
        inputImg: "where/input/8.png",
        outputImg: "where/output/8.png"
    },
    {
        id: 19,
        category: "Where Clause",
        title: "Display employees who are either CLERK or ANALYST.",
        inputImg: "where/input/9.png",
        outputImg: "where/output/9.png"
    },
    {
        id: 20,
        category: "Where Clause",
        title: "Display employees hired before 1982 and working in department 30.",
        inputImg: "where/input/10.png",
        outputImg: "where/output/10.png"
    }, {
        id: 21,
        category: "Where Clause",
        title: "Display employees working in departments 10, 20, or 30.",
        inputImg: "where/input/11.png",
        outputImg: "where/output/11.png"
    },
    {
        id: 22,
        category: "Where Clause",
        title: "Display employees whose job is not MANAGER or CLERK.",
        inputImg: "where/input/12.png",
        outputImg: "where/output/12.png"
    },
    {
        id: 23,
        category: "Where Clause",
        title: "Display employees whose department is not 10.",
        inputImg: "where/input/13.png",
        outputImg: "where/output/13.png"
    },
    {
        id: 24,
        category: "Where Clause",
        title: "Display employees whose salary is between 1000 and 3000.",
        inputImg: "where/input/14.png",
        outputImg: "where/output/14.png"
    },
    {
        id: 25,
        category: "Where Clause",
        title: "Display employees hired between 01-JAN-81 and 31-DEC-81.",
        inputImg: "where/input/15.png",
        outputImg: "where/output/15.png"
    },
    {
        id: 26,
        category: "Where Clause",
        title: "Display employees whose name starts with 'A'.",
        inputImg: "where/input/16.png",
        outputImg: "where/output/16.png"
    },
    {
        id: 27,
        category: "Where Clause",
        title: "Display employees whose name ends with 'N'.",
        inputImg: "where/input/17.png",
        outputImg: "where/output/17.png"
    },
    {
        id: 28,
        category: "Where Clause",
        title: "Display employees whose name contains 'LL'.",
        inputImg: "where/input/18.png",
        outputImg: "where/output/18.png"
    },
    {
        id: 29,
        category: "Where Clause",
        title: "Display employees whose name has exactly 5 characters.",
        inputImg: "where/input/19.png",
        outputImg: "where/output/19.png"
    },
    {
        id: 30,
        category: "Where Clause",
        title: "Display employees whose second character is 'A'.",
        inputImg: "where/input/20.png",
        outputImg: "where/output/20.png"
    },
    {
        id: 31,
        category: "Where Clause",
        title: "Display all employees ordered by salary in ascending order.",
        inputImg: "where/input/21.png",
        outputImg: "where/output/21.png"
    },
    {
        id: 32,
        category: "Where Clause",
        title: "Display all employees ordered by salary in descending order.",
        inputImg: "where/input/22.png",
        outputImg: "where/output/22.png"
    },
    {
        id: 33,
        category: "Where Clause",
        title: "Display employees ordered by hire date.",
        inputImg: "where/input/23.png",
        outputImg: "where/output/23.png"
    },
    {
        id: 34,
        category: "Where Clause",
        title: "Display employees ordered by department number and salary.",
        inputImg: "where/input/24.png",
        outputImg: "where/output/24.png"
    },
    {
        id: 35,
        category: "Where Clause",
        title: "Display employees ordered by job (ascending) and salary (descending).",
        inputImg: "where/input/25.png",
        outputImg: "where/output/25.png"
    },
    {
        id: 36,
        category: "Where Clause",
        title: "Display employee names ordered alphabetically.",
        inputImg: "where/input/26.png",
        outputImg: "where/output/26.png"
    },
    {
        id: 37,
        category: "Where Clause",
        title: "Display employees of department 30 ordered by salary.",
        inputImg: "where/input/27.png",
        outputImg: "where/output/27.png"
    },
    {
        id: 38,
        category: "Where Clause",
        title: "Display employees ordered by annual salary.",
        inputImg: "where/input/28.png",
        outputImg: "where/output/28.png"
    },
    {
        id: 39,
        category: "Where Clause",
        title: "Display employees ordered by commission.",
        inputImg: "where/input/29.png",
        outputImg: "where/output/29.png"
    },
    {
        id: 40,
        category: "Where Clause",
        title: "Display employees ordered by job and name.",
        inputImg: "where/input/30.png",
        outputImg: "where/output/30.png"
    },
    {
        id: 41,
        category: "Where Clause",
        title: "Display employee name as Employee_Name.",
        inputImg: "where/input/31.png",
        outputImg: "where/output/31.png"
    },
    {
        id: 42,
        category: "Where Clause",
        title: "Display salary as Monthly_Salary.",
        inputImg: "where/input/32.png",
        outputImg: "where/output/32.png"
    },
    {
        id: 43,
        category: "Where Clause",
        title: "Display salary × 12 as Annual_Salary.",
        inputImg: "where/input/33.png",
        outputImg: "where/output/33.png"
    },
    {
        id: 44,
        category: "Where Clause",
        title: "Display employee name and job with aliases.",
        inputImg: "where/input/34.png",
        outputImg: "where/output/34.png"
    },
    {
        id: 45,
        category: "Where Clause",
        title: "Display department number as Dept_No.",
        inputImg: "where/input/35.png",
        outputImg: "where/output/35.png"
    },
    {
        id: 46,
        category: "Where Clause",
        title: "Display employee name and salary with meaningful aliases.",
        inputImg: "where/input/36.png",
        outputImg: "where/output/36.png"
    },
    {
        id: 47,
        category: "Where Clause",
        title: "Display commission as Incentive.",
        inputImg: "where/input/37.png",
        outputImg: "where/output/37.png"
    },
    {
        id: 48,
        category: "Where Clause",
        title: "Display hire date as Joining_Date.",
        inputImg: "where/input/38.png",
        outputImg: "where/output/38.png"
    },
    {
        id: 49,
        category: "Where Clause",
        title: "Display employee name and department number with aliases.",
        inputImg: "where/input/39.png",
        outputImg: "where/output/39.png"
    },
    {
        id: 50,
        category: "Where Clause",
        title: "Display job and salary using aliases.",
        inputImg: "where/input/40.png",
        outputImg: "where/output/40.png"
    },
    {
        id: 51,
        category: "Where Clause",
        title: "Display employees whose commission is NULL.",
        inputImg: "where/input/41.png",
        outputImg: "where/output/41.png"
    },
    {
        id: 52,
        category: "Where Clause",
        title: "Display employees who are getting commission.",
        inputImg: "where/input/42.png",
        outputImg: "where/output/42.png"
    },
    {
        id: 53,
        category: "Where Clause",
        title: "Display employees who do not have a manager.",
        inputImg: "where/input/43.png",
        outputImg: "where/output/43.png"
    },
    {
        id: 54,
        category: "Where Clause",
        title: "Display employees whose manager is not NULL.",
        inputImg: "where/input/44.png",
        outputImg: "where/output/44.png"
    },
    {
        id: 55,
        category: "Where Clause",
        title: "Display employees whose commission is NULL and salary > 2000.",
        inputImg: "where/input/45.png",
        outputImg: "where/output/45.png"
    },
    {
        id: 56,
        category: "Where Clause",
        title: "Display employees whose commission is NULL or salary > 3000.",
        inputImg: "where/input/46.png",
        outputImg: "where/output/46.png"
    },
    {
        id: 57,
        category: "Where Clause",
        title: "Display employees whose commission is NOT NULL and department is 30.",
        inputImg: "where/input/47.png",
        outputImg: "where/output/47.png"
    },
    {
        id: 58,
        category: "Where Clause",
        title: "Display employees who do not earn commission and work in department 20.",
        inputImg: "where/input/48.png",
        outputImg: "where/output/48.png"
    },
    {
        id: 59,
        category: "Where Clause",
        title: "Display employees whose manager is NULL and salary > 4000.",
        inputImg: "where/input/49.png",
        outputImg: "where/output/49.png"
    },
    {
        id: 60,
        category: "Where Clause",
        title: "Display employees whose commission is NULL but job is SALESMAN.",
        inputImg: "where/input/50.png",
        outputImg: "where/output/50.png"
    },
    {
        id: 61,
        category: "Where Clause",
        title: "Display employee name and annual salary, ordered by annual salary.",
        inputImg: "where/input/51.png",
        outputImg: "where/output/51.png"
    },
    {
        id: 62,
        category: "Where Clause",
        title: "Display employees whose commission is NULL, ordered by salary descending.",
        inputImg: "where/input/52.png",
        outputImg: "where/output/52.png"
    },
    {
        id: 63,
        category: "Where Clause",
        title: "Display employee name as Name and salary as Pay for department 10.",
        inputImg: "where/input/53.png",
        outputImg: "where/output/53.png"
    },
    {
        id: 64,
        category: "Where Clause",
        title: "Display employees hired before 1982 with aliases, ordered by hire date.",
        inputImg: "where/input/54.png",
        outputImg: "where/output/54.png"
    },
    {
        id: 65,
        category: "Where Clause",
        title: "Display employees whose name starts with 'S', ordered by salary.",
        inputImg: "where/input/55.png",
        outputImg: "where/output/55.png"
    },
    {
        id: 66,
        category: "Where Clause",
        title: "Display employee name and department, ordered by department and name.",
        inputImg: "where/input/56.png",
        outputImg: "where/output/56.png"
    },
    {
        id: 67,
        category: "Where Clause",
        title: "Display employees whose salary is between 1500 and 3000, ordered by salary.",
        inputImg: "where/input/57.png",
        outputImg: "where/output/57.png"
    },
    {
        id: 68,
        category: "Where Clause",
        title: "Display employees whose commission is NOT NULL, ordered by commission.",
        inputImg: "where/input/58.png",
        outputImg: "where/output/58.png"
    },
    {
        id: 69,
        category: "Where Clause",
        title: "Display employees of department 30 whose salary > 1500, ordered by salary.",
        inputImg: "where/input/59.png",
        outputImg: "where/output/59.png"
    },
    {
        id: 70,
        category: "Where Clause",
        title: "Display employee name, job, and salary with aliases, ordered by job.",
        inputImg: "where/input/60.png",
        outputImg: "where/output/60.png"
    }

];

const likeData = [
    { id: 71, category: "Like Operator", title: "Display employees whose name starts with A.", inputImg: "like/input/1.png", outputImg: "like/output/1.png" },
    { id: 72, category: "Like Operator", title: "Display employees whose name starts with S.", inputImg: "like/input/2.png", outputImg: "like/output/2.png" },
    { id: 73, category: "Like Operator", title: "Display employees whose name ends with N.", inputImg: "like/input/3.png", outputImg: "like/output/3.png" },
    { id: 74, category: "Like Operator", title: "Display employees whose name ends with R.", inputImg: "like/input/4.png", outputImg: "like/output/4.png" },
    { id: 75, category: "Like Operator", title: "Display employees whose name contains LL.", inputImg: "like/input/5.png", outputImg: "like/output/5.png" },
    { id: 76, category: "Like Operator", title: "Display employees whose name contains AR.", inputImg: "like/input/6.png", outputImg: "like/output/6.png" },
    { id: 77, category: "Like Operator", title: "Display employees whose job starts with M.", inputImg: "like/input/7.png", outputImg: "like/output/7.png" },
    { id: 78, category: "Like Operator", title: "Display employees whose job ends with AN.", inputImg: "like/input/8.png", outputImg: "like/output/8.png" },
    { id: 79, category: "Like Operator", title: "Display employees whose job contains CL.", inputImg: "like/input/9.png", outputImg: "like/output/9.png" },
    { id: 80, category: "Like Operator", title: "Display departments whose location starts with N.", inputImg: "like/input/10.png", outputImg: "like/output/10.png" },

    { id: 81, category: "Like Operator", title: "Display employees whose name has exactly 4 characters.", inputImg: "like/input/11.png", outputImg: "like/output/11.png" },
    { id: 82, category: "Like Operator", title: "Display employees whose name has exactly 5 characters.", inputImg: "like/input/12.png", outputImg: "like/output/12.png" },
    { id: 83, category: "Like Operator", title: "Display employees whose name has A as the second character.", inputImg: "like/input/13.png", outputImg: "like/output/13.png" },
    { id: 84, category: "Like Operator", title: "Display employees whose name has L as the third character.", inputImg: "like/input/14.png", outputImg: "like/output/14.png" },
    { id: 85, category: "Like Operator", title: "Display employees whose job has exactly 6 characters.", inputImg: "like/input/15.png", outputImg: "like/output/15.png" },
    { id: 86, category: "Like Operator", title: "Display employees whose name starts with any letter but ends with N.", inputImg: "like/input/16.png", outputImg: "like/output/16.png" },
    { id: 87, category: "Like Operator", title: "Display employees whose job starts with any one character and ends with ER.", inputImg: "like/input/17.png", outputImg: "like/output/17.png" },
    { id: 88, category: "Like Operator", title: "Display employees whose name has A as the first and N as the last character.", inputImg: "like/input/18.png", outputImg: "like/output/18.png" },
    { id: 89, category: "Like Operator", title: "Display employees whose name has exactly 2 characters before 'E'.", inputImg: "like/input/19.png", outputImg: "like/output/19.png" },
    { id: 90, category: "Like Operator", title: "Display employees whose name has exactly 1 character after 'A'.", inputImg: "like/input/20.png", outputImg: "like/output/20.png" },

    { id: 91, category: "Like Operator", title: "Display employees whose name starts with A and ends with N.", inputImg: "like/input/21.png", outputImg: "like/output/21.png" },
    { id: 92, category: "Like Operator", title: "Display employees whose name contains E anywhere.", inputImg: "like/input/22.png", outputImg: "like/output/22.png" },
    { id: 93, category: "Like Operator", title: "Display employees whose name does not contain A.", inputImg: "like/input/23.png", outputImg: "like/output/23.png" },
    { id: 94, category: "Like Operator", title: "Display employees whose job contains MAN.", inputImg: "like/input/24.png", outputImg: "like/output/24.png" },
    { id: 95, category: "Like Operator", title: "Display employees whose job does not start with C.", inputImg: "like/input/25.png", outputImg: "like/output/25.png" },
    { id: 96, category: "Like Operator", title: "Display employees whose name contains two L consecutively.", inputImg: "like/input/26.png", outputImg: "like/output/26.png" },
    { id: 97, category: "Like Operator", title: "Display employees whose name starts with J and has S anywhere.", inputImg: "like/input/27.png", outputImg: "like/output/27.png" },
    { id: 98, category: "Like Operator", title: "Display employees whose job starts with S and ends with AN.", inputImg: "like/input/28.png", outputImg: "like/output/28.png" },
    { id: 99, category: "Like Operator", title: "Display employees whose name contains A as the second last character.", inputImg: "like/input/29.png", outputImg: "like/output/29.png" },
    { id: 100, category: "Like Operator", title: "Display employees whose name contains exactly one character between A and E.", inputImg: "like/input/30.png", outputImg: "like/output/30.png" },

    { id: 101, category: "Like Operator", title: "Display employees whose name starts with S and salary > 2000.", inputImg: "like/input/31.png", outputImg: "like/output/31.png" },
    { id: 102, category: "Like Operator", title: "Display employees whose job ends with MAN and department is 20.", inputImg: "like/input/32.png", outputImg: "like/output/32.png" },
    { id: 103, category: "Like Operator", title: "Display employees whose name contains A and commission is NULL.", inputImg: "like/input/33.png", outputImg: "like/output/33.png" },
    { id: 104, category: "Like Operator", title: "Display employees whose job starts with C and salary < 1500.", inputImg: "like/input/34.png", outputImg: "like/output/34.png" },
    { id: 105, category: "Like Operator", title: "Display employees whose name ends with S and hired after 1981.", inputImg: "like/input/35.png", outputImg: "like/output/35.png" },
    { id: 106, category: "Like Operator", title: "Display employees whose name starts with M and department is not 10.", inputImg: "like/input/36.png", outputImg: "like/output/36.png" },
    { id: 107, category: "Like Operator", title: "Display employees whose job contains ER and salary between 2000 and 3000.", inputImg: "like/input/37.png", outputImg: "like/output/37.png" },
    { id: 108, category: "Like Operator", title: "Display employees whose name starts with A or job starts with S.", inputImg: "like/input/38.png", outputImg: "like/output/38.png" },
    { id: 109, category: "Like Operator", title: "Display employees whose name contains I and manager is NOT NULL.", inputImg: "like/input/39.png", outputImg: "like/output/39.png" },
    { id: 110, category: "Like Operator", title: "Display employees whose name ends with N and commission is NOT NULL.", inputImg: "like/input/40.png", outputImg: "like/output/40.png" },

    { id: 111, category: "Like Operator", title: "Display employee name as Name whose name starts with S, ordered alphabetically.", inputImg: "like/input/41.png", outputImg: "like/output/41.png" },
    { id: 112, category: "Like Operator", title: "Display employee name and salary as Pay whose name contains A, ordered by salary.", inputImg: "like/input/42.png", outputImg: "like/output/42.png" },
    { id: 113, category: "Like Operator", title: "Display employees whose job starts with M, ordered by job and salary.", inputImg: "like/input/43.png", outputImg: "like/output/43.png" },
    { id: 114, category: "Like Operator", title: "Display employees whose name ends with E, ordered by hire date.", inputImg: "like/input/44.png", outputImg: "like/output/44.png" },
    { id: 115, category: "Like Operator", title: "Display employee name and annual salary for employees whose name starts with J.", inputImg: "like/input/45.png", outputImg: "like/output/45.png" },
    { id: 116, category: "Like Operator", title: "Display employees whose name contains R, ordered by department number.", inputImg: "like/input/46.png", outputImg: "like/output/46.png" },
    { id: 117, category: "Like Operator", title: "Display employee name as Employee whose job ends with AN.", inputImg: "like/input/47.png", outputImg: "like/output/47.png" },
    { id: 118, category: "Like Operator", title: "Display employees whose name starts with K, ordered by salary descending.", inputImg: "like/input/48.png", outputImg: "like/output/48.png" },
    { id: 119, category: "Like Operator", title: "Display employees whose name contains L, ordered by name and salary.", inputImg: "like/input/49.png", outputImg: "like/output/49.png" },
    { id: 120, category: "Like Operator", title: "Display employees whose job starts with C, ordered by job.", inputImg: "like/input/50.png", outputImg: "like/output/50.png" },

    { id: 121, category: "Like Operator", title: "Display employees whose name has exactly 6 characters and ends with R.", inputImg: "like/input/51.png", outputImg: "like/output/51.png" },
    { id: 122, category: "Like Operator", title: "Display employees whose name has A as the third character from start.", inputImg: "like/input/52.png", outputImg: "like/output/52.png" },
    { id: 123, category: "Like Operator", title: "Display employees whose name has E as the second character from end.", inputImg: "like/input/53.png", outputImg: "like/output/53.png" },
    { id: 124, category: "Like Operator", title: "Display employees whose name contains at least two characters before 'A'.", inputImg: "like/input/54.png", outputImg: "like/output/54.png" },
    { id: 125, category: "Like Operator", title: "Display employees whose job contains exactly one 'A'.", inputImg: "like/input/55.png", outputImg: "like/output/55.png" },
    { id: 126, category: "Like Operator", title: "Display employees whose name does not start with a vowel.", inputImg: "like/input/56.png", outputImg: "like/output/56.png" },
    { id: 127, category: "Like Operator", title: "Display employees whose job does not contain ER.", inputImg: "like/input/57.png", outputImg: "like/output/57.png" },
    { id: 128, category: "Like Operator", title: "Display employees whose name starts and ends with the same character.", inputImg: "like/input/58.png", outputImg: "like/output/58.png" },
    { id: 129, category: "Like Operator", title: "Display employees whose name contains A and E in any order.", inputImg: "like/input/59.png", outputImg: "like/output/59.png" },
    { id: 130, category: "Like Operator", title: "Display employees whose name contains A but not as the first character.", inputImg: "like/input/60.png", outputImg: "like/output/60.png" }
];

const groupData = [
    { id: 131, category: "Group Function, Group By, Having", title: "Display the total number of employees.", inputImg: "group/input/1.png", outputImg: "group/output/1.png" },
    { id: 132, category: "Group Function, Group By, Having", title: "Display the total salary of all employees.", inputImg: "group/input/2.png", outputImg: "group/output/2.png" },
    { id: 133, category: "Group Function, Group By, Having", title: "Display the average salary of all employees.", inputImg: "group/input/3.png", outputImg: "group/output/3.png" },
    { id: 134, category: "Group Function, Group By, Having", title: "Display the highest salary.", inputImg: "group/input/4.png", outputImg: "group/output/4.png" },
    { id: 135, category: "Group Function, Group By, Having", title: "Display the lowest salary.", inputImg: "group/input/5.png", outputImg: "group/output/5.png" },
    { id: 136, category: "Group Function, Group By, Having", title: "Display the total number of departments in EMP table.", inputImg: "group/input/6.png", outputImg: "group/output/6.png" },
    { id: 137, category: "Group Function, Group By, Having", title: "Display the number of employees who are managers.", inputImg: "group/input/7.png", outputImg: "group/output/7.png" },
    { id: 138, category: "Group Function, Group By, Having", title: "Display the total commission paid to employees.", inputImg: "group/input/8.png", outputImg: "group/output/8.png" },
    { id: 139, category: "Group Function, Group By, Having", title: "Display the average commission.", inputImg: "group/input/9.png", outputImg: "group/output/9.png" },
    { id: 140, category: "Group Function, Group By, Having", title: "Display the number of employees who are getting commission.", inputImg: "group/input/10.png", outputImg: "group/output/10.png" },

    { id: 141, category: "Group Function, Group By, Having", title: "Display department-wise total salary.", inputImg: "group/input/11.png", outputImg: "group/output/11.png" },
    { id: 142, category: "Group Function, Group By, Having", title: "Display department-wise average salary.", inputImg: "group/input/12.png", outputImg: "group/output/12.png" },
    { id: 143, category: "Group Function, Group By, Having", title: "Display department-wise number of employees.", inputImg: "group/input/13.png", outputImg: "group/output/13.png" },
    { id: 144, category: "Group Function, Group By, Having", title: "Display job-wise number of employees.", inputImg: "group/input/14.png", outputImg: "group/output/14.png" },
    { id: 145, category: "Group Function, Group By, Having", title: "Display job-wise total salary.", inputImg: "group/input/15.png", outputImg: "group/output/15.png" },
    { id: 146, category: "Group Function, Group By, Having", title: "Display job-wise maximum salary.", inputImg: "group/input/16.png", outputImg: "group/output/16.png" },
    { id: 147, category: "Group Function, Group By, Having", title: "Display job-wise minimum salary.", inputImg: "group/input/17.png", outputImg: "group/output/17.png" },
    { id: 148, category: "Group Function, Group By, Having", title: "Display department-wise maximum salary.", inputImg: "group/input/18.png", outputImg: "group/output/18.png" },
    { id: 149, category: "Group Function, Group By, Having", title: "Display department-wise minimum salary.", inputImg: "group/input/19.png", outputImg: "group/output/19.png" },
    { id: 150, category: "Group Function, Group By, Having", title: "Display department-wise average commission.", inputImg: "group/input/20.png", outputImg: "group/output/20.png" },

    { id: 151, category: "Group Function, Group By, Having", title: "Display department-wise job-wise number of employees.", inputImg: "group/input/21.png", outputImg: "group/output/21.png" },
    { id: 152, category: "Group Function, Group By, Having", title: "Display department-wise job-wise total salary.", inputImg: "group/input/22.png", outputImg: "group/output/22.png" },
    { id: 153, category: "Group Function, Group By, Having", title: "Display department-wise job-wise average salary.", inputImg: "group/input/23.png", outputImg: "group/output/23.png" },
    { id: 154, category: "Group Function, Group By, Having", title: "Display job-wise department-wise maximum salary.", inputImg: "group/input/24.png", outputImg: "group/output/24.png" },
    { id: 155, category: "Group Function, Group By, Having", title: "Display job-wise department-wise minimum salary.", inputImg: "group/input/25.png", outputImg: "group/output/25.png" },
    { id: 156, category: "Group Function, Group By, Having", title: "Display department and job having highest total salary.", inputImg: "group/input/26.png", outputImg: "group/output/26.png" },
    { id: 157, category: "Group Function, Group By, Having", title: "Display department and job having lowest average salary.", inputImg: "group/input/27.png", outputImg: "group/output/27.png" },
    { id: 158, category: "Group Function, Group By, Having", title: "Display department-wise job-wise total commission.", inputImg: "group/input/28.png", outputImg: "group/output/28.png" },
    { id: 159, category: "Group Function, Group By, Having", title: "Display department-wise job-wise employee count.", inputImg: "group/input/29.png", outputImg: "group/output/29.png" },
    { id: 160, category: "Group Function, Group By, Having", title: "Display department and job having maximum number of employees.", inputImg: "group/input/30.png", outputImg: "group/output/30.png" },

    { id: 161, category: "Group Function, Group By, Having", title: "Display department-wise total salary for department numbers greater than 10.", inputImg: "group/input/31.png", outputImg: "group/output/31.png" },
    { id: 162, category: "Group Function, Group By, Having", title: "Display job-wise employee count where salary > 2000.", inputImg: "group/input/32.png", outputImg: "group/output/32.png" },
    { id: 163, category: "Group Function, Group By, Having", title: "Display department-wise average salary for employees hired after 1981.", inputImg: "group/input/33.png", outputImg: "group/output/33.png" },
    { id: 164, category: "Group Function, Group By, Having", title: "Display job-wise total salary for CLERK and MANAGER.", inputImg: "group/input/34.png", outputImg: "group/output/34.png" },
    { id: 165, category: "Group Function, Group By, Having", title: "Display department-wise number of employees where commission is NOT NULL.", inputImg: "group/input/35.png", outputImg: "group/output/35.png" },
    { id: 166, category: "Group Function, Group By, Having", title: "Display job-wise average salary where department is 20.", inputImg: "group/input/36.png", outputImg: "group/output/36.png" },
    { id: 167, category: "Group Function, Group By, Having", title: "Display department-wise total salary excluding department 30.", inputImg: "group/input/37.png", outputImg: "group/output/37.png" },
    { id: 168, category: "Group Function, Group By, Having", title: "Display job-wise max salary where salary > 1500.", inputImg: "group/input/38.png", outputImg: "group/output/38.png" },
    { id: 169, category: "Group Function, Group By, Having", title: "Display department-wise employee count where job is SALESMAN.", inputImg: "group/input/39.png", outputImg: "group/output/39.png" },
    { id: 170, category: "Group Function, Group By, Having", title: "Display job-wise total commission where commission is NOT NULL.", inputImg: "group/input/40.png", outputImg: "group/output/40.png" },

    { id: 171, category: "Group Function, Group By, Having", title: "Display departments having more than 3 employees.", inputImg: "group/input/41.png", outputImg: "group/output/41.png" },
    { id: 172, category: "Group Function, Group By, Having", title: "Display jobs having average salary greater than 2500.", inputImg: "group/input/42.png", outputImg: "group/output/42.png" },
    { id: 173, category: "Group Function, Group By, Having", title: "Display departments whose total salary is greater than 10000.", inputImg: "group/input/43.png", outputImg: "group/output/43.png" },
    { id: 174, category: "Group Function, Group By, Having", title: "Display jobs having more than 2 employees.", inputImg: "group/input/44.png", outputImg: "group/output/44.png" },
    { id: 175, category: "Group Function, Group By, Having", title: "Display departments having maximum salary greater than 4000.", inputImg: "group/input/45.png", outputImg: "group/output/45.png" },
