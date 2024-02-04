//* Primitive Types----------------------------------------------------------------------------------------------
/*  
    ?  boolean
    ?  string
    ?  number
*/ 
    const myString: string = 'Hello World'
    const myNum: number = 5
    const isBool: boolean = true

    const isAny: string | number | boolean = true
    const isNumOrString: string | number = 0
    const isNumOrBool: number | boolean = false

    //~ Set both parameters and return type to number
    const add = (num1: number, num2: number): number => {
        return num1 + num2
    }

    console.log(add(1, 2))


//* Array Types --------------------------------------------------------------------------------------------------

    const addMulti = (numbers: number[]): number => {
        return numbers.reduce((acc, x) => acc + x, 0)
    }


    //~ Multi-Dimension Arrays

        const multiDimArray: number[][] = [
            [ 1, 2, 3 ],
            [ 1, 2, 3 ]
        ]

    const myArray: (string | number | boolean)[] = [ 1, 'M', 5, true ]


//* Type Aliases -------------------------------------------------------------------------------------------------
    /*
        ? When declaring type aliases it is best practice to Capitalize the type to distinguish it from regular variables
    */
    
    type FirstName = string
    type FirstNameBool = string | boolean

    const myFirstName: FirstName = 'Jeremy'

    type Department = 'Comp Sci' | 'Math' | 'English'

    const myDepartment: Department = 'English' // can now only be one of the 3 strings


//* Object Type and Interfaces ------------------------------------------------------------------------------------
    
    //~ Object Type

        type Class = {
            name: string
            code: string
            semester: 'Spring' | 'Summer' | 'Fall'
        }    

        type Faculty = {
            firstName: string
            lastName: string
            Department: Department
            isAdjunct?: boolean //!   ?: to make any property optional we need a question mark
            yearsEmployed: number
        }

        //? To add a new property create a new type and link old type and add property
        type FacultyWithClasses = Faculty & {
            classes: Class[]
        }

        const teacher: FacultyWithClasses = {
            firstName: 'Mike',
            lastName: 'Weinberg',
            Department: 'Comp Sci',
            //isAdjunct: true,
            yearsEmployed: 4,
            classes: [ 
                {
                    name: 'Avanced Web',
                    code: '4011',
                    semester: 'Spring'
                }
             ]
        }

    //~ Interfaces

        interface Class1 {
            name: string
            code: string
            semester: 'Spring' | 'Summer' | 'Fall'
        }

        interface Faculty1 {
            firstName: string
            lastName: string
            Department: Department
            isAdjunct?: boolean //!   ?: to make any property optional we need a question mark
            yearsEmployed: number
        }

        interface FacultyWithClasses1 extends Faculty {
            classes: Class[]
        }


//* Enums -------------------------------------------------------------------------------------------------------

    enum Semester {
        Spring = 'Spring',
        Summer = ' Summer',
        Fall = 'Fall',
    }

    type Class2 = {
        name: string
        code: string
        semester: Semester // enum Here
    }    

    type Faculty2 = {
        firstName: string
        lastName: string
        Department: Department
        isAdjunct?: boolean //!   ?: to make any property optional we need a question mark
        yearsEmployed: number
    }

    type FacultyWithClasses2 = Faculty & {
        classes: Class2[]
    }

    const teacher2: FacultyWithClasses2 = {
        firstName: 'Mike',
        lastName: 'Weinberg',
        Department: 'Comp Sci',
        //isAdjunct: true,
        yearsEmployed: 4,
        classes: [ 
            {
                name: 'Avanced Web',
                code: '4011',
                semester: Semester.Spring
            }
         ]
    }

    //? Useful for Logging
    enum LogLevel {
        INFO,
        WARNING,
        ERROR
    }


//* Generics -----------------------------------------------------------------------------------------------------



//* Typescript Documentation -------------------------------------------------------------------------------------

    /*
        ~Every Day Types (90% of whats covered): 
            - https://www.typescriptlang.org/docs/handbook/2/everyday-types.htmlLinks to an external site.

        ~Enums:
            - https://www.typescriptlang.org/docs/handbook/enums.htmlLinks to an external site.

        ~Generics (There is a lot more to generics than what I covered. But what I did cover covers pretty much all use cases for the class)
            - https://www.typescriptlang.org/docs/handbook/2/generics.htmlLinks to an external site.
    */


