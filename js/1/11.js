	// Definition of variables for the form
    var Tooth_11 = 1;
    var Implantat_11 = 0;
    var BOP_11_db = 0;
    var BOP_11_b = 0;
    var BOP_11_mb = 0;
    var PI_11_db = 0;
    var PI_11_b = 0;
    var PI_11_mb = 0;
    var BOP_11_dp = 0;
    var BOP_11_p = 0;
    var BOP_11_mp = 0;
    var PI_11_dp = 0;
    var PI_11_p = 0;
    var PI_11_mp = 0;
    var mg_11_db = 0;
    var mg_11_b = 0;
    var mg_11_mb = 0;
    var st_11_db = 0;
    var st_11_b = 0;
    var st_11_mb = 0;
    var mg_11_dp = 0;
    var mg_11_p = 0;
    var mg_11_mp = 0;
    var st_11_dp = 0;
    var st_11_p = 0;
    var st_11_mp = 0;

function clear_data_11() {
    if (Tooth_11 == 1) {
        mg_11_db = 0;
        mg_11_b = 0;
        mg_11_mb = 0;
        st_11_db = 0;
        st_11_b = 0;
        st_11_mb = 0;

            document.getElementById('mg_11_db_txt').value = 0;
            document.getElementById('mg_11_b_txt').value = 0;
            document.getElementById('mg_11_mb_txt').value = 0;
            
            document.getElementById('st_11_db_txt').value = 0;
            document.getElementById('st_11_b_txt').value = 0;
            document.getElementById('st_11_mb_txt').value = 0;
        
            document.forms[0]["st_11_db"].style.color = 'black'
            document.forms[0]["st_11_b"].style.color = 'black'
            document.forms[0]["st_11_mb"].style.color = 'black'
        
        mg_11_dp = 0;
        mg_11_p = 0;
        mg_11_mp = 0;
        st_11_dp = 0;
        st_11_p = 0;
        st_11_mp = 0;

            document.getElementById('mg_11_dp_txt').value = 0;
            document.getElementById('mg_11_p_txt').value = 0;
            document.getElementById('mg_11_mp_txt').value = 0;
            
            document.getElementById('st_11_dp_txt').value = 0;
            document.getElementById('st_11_p_txt').value = 0;
            document.getElementById('st_11_mp_txt').value = 0;

            document.forms[0]["st_11_dp"].style.color = 'black'
            document.forms[0]["st_11_p"].style.color = 'black'
            document.forms[0]["st_11_mp"].style.color = 'black'
        
        change_probing_11();
        
        mobility_11 = 0;

            document.getElementById('mobility_11_txt').value = "0";

        note_11 = "";

            document.getElementById('note_11_txt').value = "";

        BOP_11_db = 0;
        BOP_11_b = 0;
        BOP_11_mb = 0;
                
        BOP_11_dp = 0;
        BOP_11_p = 0;
        BOP_11_mp = 0;
                
            document.getElementById('BOP_11_db_rectangle').style.display = 'none';
            document.getElementById('BOP_11_b_rectangle').style.display = 'none';
            document.getElementById('BOP_11_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_11_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_11_p_rectangle').style.display = 'none';
            document.getElementById('BOP_11_mp_rectangle').style.display = 'none';
            
        PI_11_db = 0;
        PI_11_b = 0;
        PI_11_mb = 0;
                
        PI_11_dp = 0;
        PI_11_p = 0;
        PI_11_mp = 0;

            document.getElementById('PI_11_db_rectangle').style.display = 'none';
            document.getElementById('PI_11_b_rectangle').style.display = 'none';
            document.getElementById('PI_11_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_11_dp_rectangle').style.display = 'none';
            document.getElementById('PI_11_p_rectangle').style.display = 'none';
            document.getElementById('PI_11_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_11() {
    if (Tooth_11 === 1) {
        Tooth_11 = 0;
        document.getElementById('tooth_line_11_b').style.display = 'block';
        document.getElementById('tooth_line_11_p').style.display = 'block';
        
        document.getElementById('mobility_11_txt').style.display = 'none';
        
        document.getElementById('implantat_11_btn').style.display = 'none';
        document.getElementById('implantat_11_tab').style.display = 'none';
        document.getElementById('implantat_11_b_image').style.display = 'none';
        document.getElementById('implantat_11_p_image').style.display = 'none';

        document.getElementById('mg_11_db_txt').style.display = 'none';
        document.getElementById('mg_11_b_txt').style.display = 'none';
        document.getElementById('mg_11_mb_txt').style.display = 'none';
        
        document.getElementById('st_11_db_txt').style.display = 'none';
        document.getElementById('st_11_b_txt').style.display = 'none';
        document.getElementById('st_11_mb_txt').style.display = 'none';
        
        document.getElementById('mg_11_dp_txt').style.display = 'none';
        document.getElementById('mg_11_p_txt').style.display = 'none';
        document.getElementById('mg_11_mp_txt').style.display = 'none';
        
        document.getElementById('st_11_dp_txt').style.display = 'none';
        document.getElementById('st_11_p_txt').style.display = 'none';
        document.getElementById('st_11_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_11_db_rectangle').style.display = 'none';
        document.getElementById('BOP_11_b_rectangle').style.display = 'none';
        document.getElementById('BOP_11_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_11_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_11_p_rectangle').style.display = 'none';
        document.getElementById('BOP_11_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_11_db_btn').style.display = 'none';
        document.getElementById('BOP_11_b_btn').style.display = 'none';
        document.getElementById('BOP_11_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_11_dp_btn').style.display = 'none';
        document.getElementById('BOP_11_p_btn').style.display = 'none';
        document.getElementById('BOP_11_mp_btn').style.display = 'none';
        
        document.getElementById('PI_11_db_rectangle').style.display = 'none';
        document.getElementById('PI_11_b_rectangle').style.display = 'none';
        document.getElementById('PI_11_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_11_dp_rectangle').style.display = 'none';
        document.getElementById('PI_11_p_rectangle').style.display = 'none';
        document.getElementById('PI_11_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_11_db_btn').style.display = 'none';
        document.getElementById('PI_11_b_btn').style.display = 'none';
        document.getElementById('PI_11_mb_btn').style.display = 'none';
        
        document.getElementById('PI_11_dp_btn').style.display = 'none';
        document.getElementById('PI_11_p_btn').style.display = 'none';
        document.getElementById('PI_11_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_11_b').style.display = 'none';
        document.getElementById('polyline_an_11_b').style.display = 'none';
        document.getElementById('polyline_mg_11_b').style.display = 'none';
        
        document.getElementById('polygon_11_p').style.display = 'none';
        document.getElementById('polyline_an_11_p').style.display = 'none';
        document.getElementById('polyline_mg_11_p').style.display = 'none';
        
        document.getElementById('polygon_inter_12_11_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_12_11_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_12_11_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_12_11_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_12_11_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_12_11_p').style.display = 'none';            
        
        document.getElementById('note_11_txt').style.display = 'none';
    }
    else if (Implantat_11 !== 1) {
        Tooth_11 = 1;
        document.getElementById('tooth_line_11_b').style.display = 'none';
        document.getElementById('tooth_line_11_p').style.display = 'none';

        document.getElementById('mobility_11_txt').style.display = 'block';

        document.getElementById('implantat_11_btn').style.display = 'block';

        document.getElementById('mg_11_db_txt').style.display = 'block';
        document.getElementById('mg_11_b_txt').style.display = 'block';
        document.getElementById('mg_11_mb_txt').style.display = 'block';
        
        document.getElementById('st_11_db_txt').style.display = 'block';
        document.getElementById('st_11_b_txt').style.display = 'block';
        document.getElementById('st_11_mb_txt').style.display = 'block';
        
        document.getElementById('mg_11_dp_txt').style.display = 'block';
        document.getElementById('mg_11_p_txt').style.display = 'block';
        document.getElementById('mg_11_mp_txt').style.display = 'block';
        
        document.getElementById('st_11_dp_txt').style.display = 'block';
        document.getElementById('st_11_p_txt').style.display = 'block';
        document.getElementById('st_11_mp_txt').style.display = 'block';
        
        document.getElementById('note_11_txt').style.display = 'block';

        document.getElementById('polygon_11_b').style.display = 'block';
        document.getElementById('polyline_an_11_b').style.display = 'block';
        document.getElementById('polyline_mg_11_b').style.display = 'block';
        
        document.getElementById('polygon_11_p').style.display = 'block';
        document.getElementById('polyline_an_11_p').style.display = 'block';
        document.getElementById('polyline_mg_11_p').style.display = 'block';

        if (Tooth_12 == 1 && Tooth_11 == 1) {
            document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_p').style.display = 'block';            
        }

        document.getElementById('BOP_11_db_btn').style.display = 'block';
        document.getElementById('BOP_11_b_btn').style.display = 'block';
        document.getElementById('BOP_11_mb_btn').style.display = 'block';

        document.getElementById('BOP_11_dp_btn').style.display = 'block';
        document.getElementById('BOP_11_p_btn').style.display = 'block';
        document.getElementById('BOP_11_mp_btn').style.display = 'block';
        
        if (BOP_11_db == 1) {
            document.getElementById('BOP_11_db_rectangle').style.display = 'block';
        }
        if (BOP_11_b == 1) {
            document.getElementById('BOP_11_b_rectangle').style.display = 'block';
        }
        if (BOP_11_mb == 1) {
            document.getElementById('BOP_11_mb_rectangle').style.display = 'block';
        }
        if (BOP_11_dp == 1) {
            document.getElementById('BOP_11_dp_rectangle').style.display = 'block';
        }
        if (BOP_11_p == 1) {
            document.getElementById('BOP_11_p_rectangle').style.display = 'block';
        }
        if (BOP_11_mp == 1) {
            document.getElementById('BOP_11_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_11_db_btn').style.display = 'block';
        document.getElementById('PI_11_b_btn').style.display = 'block';
        document.getElementById('PI_11_mb_btn').style.display = 'block';

        document.getElementById('PI_11_dp_btn').style.display = 'block';
        document.getElementById('PI_11_p_btn').style.display = 'block';
        document.getElementById('PI_11_mp_btn').style.display = 'block';
        
        if (PI_11_db == 1) {
            document.getElementById('PI_11_db_rectangle').style.display = 'block';
        }
        if (PI_11_b == 1) {
            document.getElementById('PI_11_b_rectangle').style.display = 'block';
        }
        if (PI_11_mb == 1) {
            document.getElementById('PI_11_mb_rectangle').style.display = 'block';
        }
        if (PI_11_dp == 1) {
            document.getElementById('PI_11_dp_rectangle').style.display = 'block';
        }
        if (PI_11_p == 1) {
            document.getElementById('PI_11_p_rectangle').style.display = 'block';
        }
        if (PI_11_mp == 1) {
            document.getElementById('PI_11_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_11 == 1) {
        Tooth_11 = 1;
        document.getElementById('tooth_line_11_b').style.display = 'none';
        document.getElementById('tooth_line_11_p').style.display = 'none';

        document.getElementById('mobility_11_txt').style.display = 'block';
        
        document.getElementById('note_11_txt').style.display = 'block';

        document.getElementById('implantat_11_btn').style.display = 'block';
        document.getElementById('implantat_11_tab').style.display = 'block';
        document.getElementById('implantat_11_b_image').style.display = 'block';
        document.getElementById('implantat_11_p_image').style.display = 'block';

        document.getElementById('mg_11_db_txt').style.display = 'block';
        document.getElementById('mg_11_b_txt').style.display = 'block';
        document.getElementById('mg_11_mb_txt').style.display = 'block';
        
        document.getElementById('st_11_db_txt').style.display = 'block';
        document.getElementById('st_11_b_txt').style.display = 'block';
        document.getElementById('st_11_mb_txt').style.display = 'block';
        
        document.getElementById('mg_11_dp_txt').style.display = 'block';
        document.getElementById('mg_11_p_txt').style.display = 'block';
        document.getElementById('mg_11_mp_txt').style.display = 'block';
        
        document.getElementById('st_11_dp_txt').style.display = 'block';
        document.getElementById('st_11_p_txt').style.display = 'block';
        document.getElementById('st_11_mp_txt').style.display = 'block';

        document.getElementById('polygon_11_b').style.display = 'block';
        document.getElementById('polyline_an_11_b').style.display = 'block';
        document.getElementById('polyline_mg_11_b').style.display = 'block';
        
        document.getElementById('polygon_11_p').style.display = 'block';
        document.getElementById('polyline_an_11_p').style.display = 'block';
        document.getElementById('polyline_mg_11_p').style.display = 'block';

        if (Tooth_12 == 1 && Tooth_11 == 1) {
            document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_p').style.display = 'block';            
        }

        document.getElementById('BOP_11_db_btn').style.display = 'block';
        document.getElementById('BOP_11_b_btn').style.display = 'block';
        document.getElementById('BOP_11_mb_btn').style.display = 'block';

        document.getElementById('BOP_11_dp_btn').style.display = 'block';
        document.getElementById('BOP_11_p_btn').style.display = 'block';
        document.getElementById('BOP_11_mp_btn').style.display = 'block';
        
        document.getElementById('PI_11_db_btn').style.display = 'block';
        document.getElementById('PI_11_b_btn').style.display = 'block';
        document.getElementById('PI_11_mb_btn').style.display = 'block';

        document.getElementById('PI_11_dp_btn').style.display = 'block';
        document.getElementById('PI_11_p_btn').style.display = 'block';
        document.getElementById('PI_11_mp_btn').style.display = 'block';
        
        if (BOP_11_db == 1) {
            document.getElementById('BOP_11_db_rectangle').style.display = 'block';
        }
        if (BOP_11_b == 1) {
            document.getElementById('BOP_11_b_rectangle').style.display = 'block';
        }
        if (BOP_11_mb == 1) {
            document.getElementById('BOP_11_mb_rectangle').style.display = 'block';
        }
        if (BOP_11_dp == 1) {
            document.getElementById('BOP_11_dp_rectangle').style.display = 'block';
        }
        if (BOP_11_p == 1) {
            document.getElementById('BOP_11_p_rectangle').style.display = 'block';
        }
        if (BOP_11_mp == 1) {
            document.getElementById('BOP_11_mp_rectangle').style.display = 'block';
        }
        
        if (PI_11_db == 1) {
            document.getElementById('PI_11_db_rectangle').style.display = 'block';
        }
        if (PI_11_b == 1) {
            document.getElementById('PI_11_b_rectangle').style.display = 'block';
        }
        if (PI_11_mb == 1) {
            document.getElementById('PI_11_mb_rectangle').style.display = 'block';
        }
        if (PI_11_dp == 1) {
            document.getElementById('PI_11_dp_rectangle').style.display = 'block';
        }
        if (PI_11_p == 1) {
            document.getElementById('PI_11_p_rectangle').style.display = 'block';
        }
        if (PI_11_mp == 1) {
            document.getElementById('PI_11_mp_rectangle').style.display = 'block';
        }
    }
}		

function toggle_implant_11() {
    if (Implantat_11 == 0) {
        Implantat_11 = 1;
        
        document.getElementById('implantat_11_b_image').style.display = 'block';
        document.getElementById('implantat_11_p_image').style.display = 'block';
        document.getElementById('implantat_11_tab').style.display = 'block';
    }
    else {
        Implantat_11 = 0;
        
        document.getElementById('implantat_11_b_image').style.display = 'none';
        document.getElementById('implantat_11_p_image').style.display = 'none';
        document.getElementById('implantat_11_tab').style.display = 'none';
    }
}

function toggle_BOP_11_db() {
    if (BOP_11_db == 0) {
        BOP_11_db = 1;
        document.getElementById('BOP_11_db_rectangle').style.display = 'block';
    }
    else {
        BOP_11_db = 0;
        document.getElementById('BOP_11_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_11_b() {
    if (BOP_11_b == 0) {
        BOP_11_b = 1;
        document.getElementById('BOP_11_b_rectangle').style.display = 'block';
    }
    else {
        BOP_11_b = 0;
        document.getElementById('BOP_11_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_11_mb() {
    if (BOP_11_mb == 0) {
        BOP_11_mb = 1;
        document.getElementById('BOP_11_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_11_mb = 0;
        document.getElementById('BOP_11_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_11_db() {
    if (PI_11_db == 0) {
        PI_11_db = 1;
        document.getElementById('PI_11_db_rectangle').style.display = 'block';
    }
    else {
        PI_11_db = 0;
        document.getElementById('PI_11_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_11_b() {
    if (PI_11_b == 0) {
        PI_11_b = 1;
        document.getElementById('PI_11_b_rectangle').style.display = 'block';
    }
    else {
        PI_11_b = 0;
        document.getElementById('PI_11_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_11_mb() {
    if (PI_11_mb == 0) {
        PI_11_mb = 1;
        document.getElementById('PI_11_mb_rectangle').style.display = 'block';
    }
    else {
        PI_11_mb = 0;
        document.getElementById('PI_11_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_11_dp() {
    if (BOP_11_dp == 0) {
        BOP_11_dp = 1;
        document.getElementById('BOP_11_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_11_dp = 0;
        document.getElementById('BOP_11_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_11_p() {
    if (BOP_11_p == 0) {
        BOP_11_p = 1;
        document.getElementById('BOP_11_p_rectangle').style.display = 'block';
    }
    else {
        BOP_11_p = 0;
        document.getElementById('BOP_11_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_11_mp() {
    if (BOP_11_mp == 0) {
        BOP_11_mp = 1;
        document.getElementById('BOP_11_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_11_mp = 0;
        document.getElementById('BOP_11_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_11_dp() {
    if (PI_11_dp == 0) {
        PI_11_dp = 1;
        document.getElementById('PI_11_dp_rectangle').style.display = 'block';
    }
    else {
        PI_11_dp = 0;
        document.getElementById('PI_11_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_11_p() {
    if (PI_11_p == 0) {
        PI_11_p = 1;
        document.getElementById('PI_11_p_rectangle').style.display = 'block';
    }
    else {
        PI_11_p = 0;
        document.getElementById('PI_11_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_11_mp() {
    if (PI_11_mp == 0) {
        PI_11_mp = 1;
        document.getElementById('PI_11_mp_rectangle').style.display = 'block';
    }
    else {
        PI_11_mp = 0;
        document.getElementById('PI_11_mp_rectangle').style.display = 'none';
    }
}

function change_probing_11() {
    if (Tooth_11 == 1) {
        
    // Variablen aus dem Formular
        st_11_db = document.forms[0]["st_11_db"].value;
        st_11_b = document.forms[0]["st_11_b"].value;
        st_11_mb = document.forms[0]["st_11_mb"].value;

        if (document.forms[0]["st_11_dp"].value > 3) {document.forms[0]["st_11_dp"].style.color = 'red';} else {document.forms[0]["st_11_dp"].style.color = 'black'}
        if (document.forms[0]["st_11_p"].value > 3) {document.forms[0]["st_11_p"].style.color = 'red';} else {document.forms[0]["st_11_p"].style.color = 'black'}
        if (document.forms[0]["st_11_mp"].value > 3) {document.forms[0]["st_11_mp"].style.color = 'red';} else {document.forms[0]["st_11_mp"].style.color = 'black'}
        
        mg_11_db = document.forms[0]["mg_11_db"].value;
        mg_11_b = document.forms[0]["mg_11_b"].value;
        mg_11_mb = document.forms[0]["mg_11_mb"].value;
        
        st_11_dp = document.forms[0]["st_11_dp"].value;
        st_11_p = document.forms[0]["st_11_p"].value;
        st_11_mp = document.forms[0]["st_11_mp"].value;

        if (document.forms[0]["st_11_db"].value > 3) {document.forms[0]["st_11_db"].style.color = 'red';} else {document.forms[0]["st_11_db"].style.color = 'black'}
        if (document.forms[0]["st_11_b"].value > 3) {document.forms[0]["st_11_b"].style.color = 'red';} else {document.forms[0]["st_11_b"].style.color = 'black'}
        if (document.forms[0]["st_11_mb"].value > 3) {document.forms[0]["st_11_mb"].style.color = 'red';} else {document.forms[0]["st_11_mb"].style.color = 'black'}
        
        mg_11_dp = document.forms[0]["mg_11_dp"].value;
        mg_11_p = document.forms[0]["mg_11_p"].value;
        mg_11_mp = document.forms[0]["mg_11_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 11 (bukkal) in der Bitmap
        var x_db_11 = 628;							// distal 11
        var x_mb_11 = 660;							// mesial 11
        var x_b_11 = (x_db_11 + x_mb_11)/2;			// bukkal 11
        
    // Set der horizontalen Koordinaten von Zahn 11 (palatinal) in der Bitmap
        var x_dp_11 = 627;							// distal 11
        var x_mp_11 = 658;							// mesial 11
        var x_p_11 = (x_dp_11 + x_mp_11)/2;			// palatinal 11
        
    // Set der vertikalen Koordinaten von Zahn 11 (bukkal) aus dem Formular
        var y_mg_11_db = mg_OK_b + 6.5 * mg_11_db;	// Margo Gingivae distobukkal 11
        var y_mg_11_b = mg_OK_b + 6.5 * mg_11_b;	// Margo Gingivae bukkal 11
        var y_mg_11_mb = mg_OK_b + 6.5 * mg_11_mb;	// Margo Gingivae mesiobukkal 11
        var y_st_11_db = 6.5 * st_11_db;			// Sondierungstiefe distobukkal 11
        var y_st_11_b = 6.5 * st_11_b;				// Sondierungstiefe bukkal 11
        var y_st_11_mb = 6.5 * st_11_mb;			// Sondierungstiefe mesiobukkal 11
        
    // Set der vertikalen Koordinaten von Zahn 11 (palatinal) aus dem Formular
        var y_mg_11_dp = mg_OK_p - 6.5 * mg_11_dp;	// Margo Gingivae distopalatinal 11
        var y_mg_11_p = mg_OK_p - 6.5 * mg_11_p;	// Margo Gingivae palatinal 11
        var y_mg_11_mp = mg_OK_p - 6.5 * mg_11_mp;	// Margo Gingivae mesiopalatinal 11
        var y_st_11_dp = 6.5 * st_11_dp;			// Sondierungstiefe distopalatinal 11
        var y_st_11_p = 6.5 * st_11_p;				// Sondierungstiefe palatinal 11
        var y_st_11_mp = 6.5 * st_11_mp;			// Sondierungstiefe mesiopalatinal 11
        
    // Berechnung des Attachmentniveaus 11 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_11_db = y_mg_11_db - y_st_11_db;	// Attachmentniveau distobukkal 11
        var y_an_11_b = y_mg_11_b - y_st_11_b;		// Attachmentniveau bukkal 11
        var y_an_11_mb = y_mg_11_mb - y_st_11_mb;	// Attachmentniveau mesiobukkal 11
        
    // Berechnung des Attachmentniveaus 11 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_11_dp = y_mg_11_dp + y_st_11_dp;	// Attachmentniveau distopalatinal 11
        var y_an_11_p = y_mg_11_p + y_st_11_p;		// Attachmentniveau palatinal 11
        var y_an_11_mp = y_mg_11_mp + y_st_11_mp;	// Attachmentniveau mesiopalatinal 11
        
    // Parodontaltasche 11 bukkal zeichnen
        var string = 
            x_db_11 + ", " + y_an_11_db + "  " + 
            x_b_11 + ", " + y_an_11_b + "  " + 
            x_mb_11 + ", " + y_an_11_mb + "  " + 
            x_mb_11 + ", " + y_mg_11_mb + "  " + 
            x_b_11 + ", " + y_mg_11_b + "  " + 
            x_db_11 + ", " + y_mg_11_db;
        document.getElementById("polygon_11_b").setAttribute("points", string);
    // Attachmentniveau 11 bukkal zeichnen
        var string = 
            x_db_11 + ", " + y_an_11_db + "  " + 
            x_b_11 + ", " + y_an_11_b + "  " + 
            x_mb_11 + ", " + y_an_11_mb;
        document.getElementById("polyline_an_11_b").setAttribute("points", string);
    // Margo Gingivae 11 bukkal zeichnen
        var string =
            x_db_11 + ", " + y_mg_11_db + "  " + 
            x_b_11 + ", " + y_mg_11_b + "  " + 
            x_mb_11 + ", " + y_mg_11_mb;
        document.getElementById("polyline_mg_11_b").setAttribute("points", string);

    // Parodontaltasche 11 palatinal zeichnen
        var string = 
            x_dp_11 + ", " + y_an_11_dp + "  " + 
            x_p_11 + ", " + y_an_11_p + "  " + 
            x_mp_11 + ", " + y_an_11_mp + "  " + 
            x_mp_11 + ", " + y_mg_11_mp + "  " + 
            x_p_11 + ", " + y_mg_11_p + "  " + 
            x_dp_11 + ", " + y_mg_11_dp;
        document.getElementById("polygon_11_p").setAttribute("points", string);
    // Attachmentniveau 11 palatinal zeichnen
        var string = 
            x_dp_11 + ", " + y_an_11_dp + "  " + 
            x_p_11 + ", " + y_an_11_p + "  " + 
            x_mp_11 + ", " + y_an_11_mp;
        document.getElementById("polyline_an_11_p").setAttribute("points", string);
    // Margo Gingivae 11 palatinal zeichnen
        var string =
            x_dp_11 + ", " + y_mg_11_dp + "  " + 
            x_p_11 + ", " + y_mg_11_p + "  " + 
            x_mp_11 + ", " + y_mg_11_mp;
        document.getElementById("polyline_mg_11_p").setAttribute("points", string);
    }
    if (Tooth_12 == 1 && Tooth_11 == 1) {

        st_12_mb = document.forms[0]["st_12_mb"].value;
        mg_12_mb = document.forms[0]["mg_12_mb"].value;
        
        st_12_mp = document.forms[0]["st_12_mp"].value;
        mg_12_mp = document.forms[0]["mg_12_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
        var x_mb_12 = 612;							// mesial 12
        
    // Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
        var x_mp_12 = 612;							// mesial 12
        
    // Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
        var y_mg_12_mb = mg_OK_b + 6.5 * mg_12_mb;	// Margo Gingivae mesiobukkal 12
        var y_st_12_mb = 6.5 * st_12_mb;			// Sondierungstiefe mesiobukkal 12
        
    // Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
        var y_mg_12_mp = mg_OK_p - 6.5 * mg_12_mp;	// Margo Gingivae mesiopalatinal 12
        var y_st_12_mp = 6.5 * st_12_mp;			// Sondierungstiefe mesiopalatinal 12
        
    // Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_12_mb = y_mg_12_mb - y_st_12_mb;	// Attachmentniveau mesiobukkal 12
        
    // Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_12_mp = y_mg_12_mp + y_st_12_mp;	// Attachmentniveau mesiopalatinal 12

    // Parodontaltasche inter_12_11 bukkal zeichnen
        var string = 
            x_mb_12 + ", " + y_an_12_mb + "  " + 
            x_db_11 + ", " + y_an_11_db + "  " + 
            x_db_11 + ", " + y_mg_11_db + "  " + 
            x_mb_12 + ", " + y_mg_12_mb;
        document.getElementById("polygon_inter_12_11_b").setAttribute("points", string);
    // Attachmentniveau inter_12_11 bukkal zeichnen
        var string = 
            x_mb_12 + ", " + y_an_12_mb + "  " + 
            x_db_11 + ", " + y_an_11_db;
        document.getElementById("polyline_an_inter_12_11_b").setAttribute("points", string);
    // Margo Gingivae inter_12_11 bukkal zeichnen
        var string =
            x_mb_12 + ", " + y_mg_12_mb + "  " + 
            x_db_11 + ", " + y_mg_11_db;
        document.getElementById("polyline_mg_inter_12_11_b").setAttribute("points", string);

    // Parodontaltasche inter_12_11 palatinal zeichnen
        var string = 
            x_mp_12 + ", " + y_an_12_mp + "  " + 
            x_dp_11 + ", " + y_an_11_dp + "  " + 
            x_dp_11 + ", " + y_mg_11_dp + "  " + 
            x_mp_12 + ", " + y_mg_12_mp;
        document.getElementById("polygon_inter_12_11_p").setAttribute("points", string);
    // Attachmentniveau inter_12_11 palatinal zeichnen
        var string = 
            x_mp_12 + ", " + y_an_12_mp + "  " + 
            x_dp_11 + ", " + y_an_11_dp;
        document.getElementById("polyline_an_inter_12_11_p").setAttribute("points", string);
    // Margo Gingivae inter_12_11 palatinal zeichnen
        var string =
            x_mp_12 + ", " + y_mg_12_mp + "  " + 
            x_dp_11 + ", " + y_mg_11_dp;
        document.getElementById("polyline_mg_inter_12_11_p").setAttribute("points", string);
    }
}