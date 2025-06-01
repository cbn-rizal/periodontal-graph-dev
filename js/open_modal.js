// Open analysis
function open_analysis() {
    var modal_analysis = document.getElementById("modal_analysis");
    
    document.getElementById('modal_analysis').style.display = 'block';

    window.onclick = function(event_analysis) {
        if (event_analysis.target == modal_analysis) {
            document.getElementById('modal_analysis').style.display = 'none';
        }
    }
}

// Close analysis
function close_analysis() {
    document.getElementById('modal_analysis').style.display = 'none';
}

// Open Settings
function open_settings() {
    var modal_settings = document.getElementById("modal_settings");
    
    document.getElementById('modal_settings').style.display = 'block';

    window.onclick = function(event_settings) {
        if (event_settings.target == modal_settings) {
            document.getElementById('modal_settings').style.display = 'none';
        }
    }
}

// Close settings
function close_settings() {
    document.getElementById('modal_settings').style.display = 'none';
}