import {loadBoards} from '../data/boardsData.js'
import {loadPinsOnBoards} from '../data/pinsData.js'
import {initializePinView} from './pins.js'

const bindEvents = () => {
    $('#user-boards').on('click', '.board-card', (e) => {
        const clickedBoardId = $(e.target).closest('.board-card').attr('id'); // attr targets the id within that specific div id
        $('#boards-page').hide(); // hiding the boards page when you click it
        $('#pins-page').show(); // show the pins page when you click it
        initializePinView(clickedBoardId);
    })
}

const writeBoards = (boards) => {
    let domString = '';
    boards.forEach(board => {
        const boardImg = board.pins[0] ? board.pins[0].image_url : './db/default-img.jpeg'; // this line says that if you come across board that has zero pins then display this default image
        domString += `
        <div id='${board.id}' class="board-card p-2">
            <img class="card-img-top" src="${boardImg}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${board.name}</h5>
              <p class="card-text">${board.pins.length} Pins</p>
            </div>
        </div>
        `
    });
    $('#user-boards').html(domString);
}

// Call this function above ^^ in the .then section below in initializeBoardView //

const initializeBoardView = () => {
    loadBoards().then((boards) => {
        return loadPinsOnBoards(boards);
    }).then((boardsWithPins) => {
        writeBoards(boardsWithPins); // calling the function above
        bindEvents();
    }).catch((error) => {
        console.error(error);
    })
};

export {initializeBoardView}