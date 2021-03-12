const arrayAnalysis = (array) => {
    if(Array.isArray(array)) {
        if (array.length) {
            let max = array[0];
            let min = array[0];
            let sum = array[0];

            for (let i = 1; i < array.length; i++) {
                if(max < array[i]) {
                    max = array[i];
                }
                if(min > array[i]) {
                    min = array[i];
                }
                sum += array[i];
            }

            return {
                max: max,
                min: min,
                avg: sum/array.length,
                length: array.length
            }
        } else {
            return {
                max: 0,
                min: 0,
                avg: 0,
                length: 0
            }
        }
    } else {
        return null;
    }
}

export default arrayAnalysis;