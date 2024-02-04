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







//* Typescript Documentation -------------------------------------------------------------------------------------

    /*
        ~Every Day Types (90% of whats covered): 
            - https://www.typescriptlang.org/docs/handbook/2/everyday-types.htmlLinks to an external site.

        ~Enums:
            - https://www.typescriptlang.org/docs/handbook/enums.htmlLinks to an external site.

        ~Generics (There is a lot more to generics than what I covered. But what I did cover covers pretty much all use cases for the class)
            - https://www.typescriptlang.org/docs/handbook/2/generics.htmlLinks to an external site.
    */


