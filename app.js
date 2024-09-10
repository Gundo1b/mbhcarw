document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const printButton = document.getElementById('printButton');
    const dataGrid = document.getElementById('dataGrid').getElementsByTagName('tbody')[0];
    const dateInput = document.getElementById('date');
    
    // Add row to data grid
    addButton.addEventListener('click', () => {
        const date = dateInput.value;
        const carBrand = document.getElementById('carBrand').value;
        const carModel = document.getElementById('carModel').value;
        const carRegistration = document.getElementById('carRegistration').value;
        const washed = document.getElementById('washed').checked ? 'Yes' : 'No';
        const comment = document.getElementById('comment').value;

        if (date && carBrand && carModel && carRegistration) {
            const row = dataGrid.insertRow();
            row.insertCell().textContent = date;
            row.insertCell().textContent = carBrand;
            row.insertCell().textContent = carModel;
            row.insertCell().textContent = carRegistration;
            row.insertCell().textContent = washed;
            row.insertCell().textContent = comment;

            // Add Edit and Delete buttons
            const editCell = row.insertCell();
            const deleteCell = row.insertCell();

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-button';
            editButton.addEventListener('click', () => {
                // Implement edit functionality if needed
            });
            editCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', () => {
                dataGrid.deleteRow(row.rowIndex - 1);
            });
            deleteCell.appendChild(deleteButton);
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Print the data grid
    printButton.addEventListener('click', () => {
        const printWindow = window.open('', '', 'height=800,width=600');
        const date = dateInput.value;

        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css" type="text/css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="print-header">');
        printWindow.document.write('<img src="logo.png" class="print-logo">');
        printWindow.document.write('<div class="print-title">MBH Car Wash Report</div>');
        if (date) {
            printWindow.document.write('<div class="print-date">Date: ' + date + '</div>');
        }
        printWindow.document.write('</div>');
        printWindow.document.write('<table>' + document.getElementById('dataGrid').innerHTML + '</table>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    });
});
