const tableEl = document.querySelector('[data-select-option]');

const sortedRows = Array.from(tableEl.rows)
    .slice(1)
    .sort((rowA, rowB) => (rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1));

tableEl.tBodies[0].append(...sortedRows);
