const user1 = {
    name: "David Sen",
    sun: [0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    mon: [],
    tues: [],
    wed: [],
    thurs: [],
    fri: [],
    sat: [],
};

const user2 = {
    name: "Ryan Vreeke",
    sun: [1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    mon: [],
    tues: [],
    wed: [],
    thurs: [],
    fri: [],
    sat: [],
};

const matchTimes = (userList) => {
    //Initialize Array
    const numberTimeIncrements = userList[0].sun.length; //Assuming 10min increments
    const matrix = [[], [], [], [], [], [], []];
    for (let b = 0; b < numberTimeIncrements; b++) {
        for (let m = 0; m < 7; m++) {
            matrix[m][b] = [];
        }
    }

    const dayKeys = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
    for (let n = 0; n < 7; n++) { //Each day of the week
        for (let i = 0; i < userList.length; i++) { //Each user
            for (let x = 0; x < numberTimeIncrements; x++) { //Each timeslot in a day
                // if ( i === userList.length - 1) { //On the last user, while we're already going through, keep track of the best times
                //     matrix[n][x][ matrix[n][x].length ] = userList[i].name;
                //     //TODO log best slots?
                // } else {
                matrix[n][x][matrix[n][x].length] = userList[i].name;
                // }
            }
        }
    }
    return (matrix);
}
