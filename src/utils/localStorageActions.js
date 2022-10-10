const { REACT_APP_LOCALSTORAGE_KEY } = process.env;

export const get = () => {
    try {
        let dataRestore = localStorage.getItem(REACT_APP_LOCALSTORAGE_KEY);
        return dataRestore === null ? undefined : JSON.parse(dataRestore);
    } catch (error) {
        console.error(error.name, error.message);
    }
};

export const set = (value) => {
    try {
        if (value.length === 0) {
            localStorage.removeItem(REACT_APP_LOCALSTORAGE_KEY);
            return;
        }
        // console.log('save value:', value);
        localStorage.setItem(REACT_APP_LOCALSTORAGE_KEY, JSON.stringify(value));
    } catch (error) {
        console.error(error.name, error.message);
    }
};