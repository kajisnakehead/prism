function loadComponent(file, elementId, isHeader = false) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Re-init Dropotron jika yang dimuat adalah Header
            if (isHeader) {
                if (window.jQuery && jQuery.fn.dropotron) {
                    $('#nav > ul').dropotron({
                        offsetY: -15,
                        hoverDelay: 0,
                        alignment: 'center'
                    });
                }
            }
        })
        .catch(error => console.error('Error loading ' + file, error));
}

// Eksekusi pemanggilan
loadComponent('head.html', 'dynamic-head');
loadComponent('header.html', 'dynamic-header', true); // True karena ini header
loadComponent('about-summary.html', 'dynamic-about-summary');
loadComponent('footer.html', 'dynamic-footer');