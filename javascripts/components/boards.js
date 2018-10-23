import {loadBoards} from '../data/boardsData.js'

const writeBoards = (boards) => {
    let domString = '';
    boards.forEach(board => {
        domString += `
        <div class="board-card p-2">
            <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
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
    }).catch((error) => {
        console.error(error);
    })
};

export {initializeBoardView}