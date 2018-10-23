import {loadBoards} from '../data/boardsData.js'
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
        domString += `
        <div id='${board.id}' class="board-card p-2">
            <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${board.name}</h5>
              <p class="card-text">42 Pins</p>
            </div>
        </div>
        `
    });
    $('#user-boards').html(domString);
}

// Call this function above ^^ in the .then section below in initializeBoardView //

const initializeBoardView = () => {
    loadBoards().then((boards) => {
        writeBoards(boards); // calling the function above
        bindEvents();
    }).catch((error) => {
        console.error(error);
    })
};

export {initializeBoardView}