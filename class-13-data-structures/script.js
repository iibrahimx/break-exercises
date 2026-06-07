const employees = [];

for (let i = 1; i <= 25; i++) {
  employees.push({
    id: i,
    name: `Employee ${i}`,
    department: i % 2 === 0 ? "Engineering" : "Design",
    salary: 50000 + i * 1000,
  });
}

const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageInfo = document.getElementById("page-info");

let currentPage = 1;
let rowsPerPage = 10;

let sortColumn = null;
let sortDirection = "asc";

renderTable();

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderTable();
});

document.querySelectorAll("th[data-column]").forEach((header) => {
  header.addEventListener("click", () => {
    const column = header.dataset.column;

    if (sortColumn === column) {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      sortColumn = column;
      sortDirection = "asc";
    }

    renderTable();
  });
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(getFilteredData().length / rowsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
});

function getFilteredData() {
  let filtered = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchInput.value.toLowerCase()),
  );

  if (sortColumn) {
    filtered.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }

      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });
  }

  return filtered;
}

function renderTable() {
  tableBody.innerHTML = "";

  const filtered = getFilteredData();

  const start = (currentPage - 1) * rowsPerPage;

  const paginated = filtered.slice(start, start + rowsPerPage);

  paginated.forEach((employee) => {
    const row = document.createElement("tr");

    row.className = "border-b";

    row.innerHTML = `
      <td class="p-4">
        ${employee.id}
      </td>

      <td
        class="p-4 editable"
        contenteditable="true"
        data-id="${employee.id}"
        data-field="name"
      >
        ${employee.name}
      </td>

      <td
        class="p-4 editable"
        contenteditable="true"
        data-id="${employee.id}"
        data-field="department"
      >
        ${employee.department}
      </td>

      <td
        class="p-4 editable"
        contenteditable="true"
        data-id="${employee.id}"
        data-field="salary"
      >
        ${employee.salary}
      </td>
    `;

    tableBody.appendChild(row);
  });

  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  document.querySelectorAll(".editable").forEach((cell) => {
    cell.addEventListener("blur", () => {
      const id = Number(cell.dataset.id);

      const field = cell.dataset.field;

      const employee = employees.find((employee) => employee.id === id);

      employee[field] = cell.textContent.trim();
    });
  });
}
