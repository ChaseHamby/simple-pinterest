const loadPinsForBoard =(boardId) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json')
            .done((data) => {
                const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId)
                resolve(pinsForBoards);
        })
            .fail((error) => {
                reject(error);
        })
    })
};

const loadPinsOnBoards = (boards) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json')
            .done((data) => {
                const boardsWithPins = boards.map(board => { // map function goes through the array - doesn't manipulate the array but returns out different options
                    const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
                    board.pins = matchingPins; // board.pins is now a new variable created here that is used later on boards.js
                    return board;
                }) 
                resolve(boardsWithPins);
        })
            .fail((error) => {
                reject('error loadsPinsOnBoards', error);
        })
    })
}

export {loadPinsForBoard, loadPinsOnBoards};