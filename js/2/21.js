	// Definition der Variablen fÃ¼r das Formular
    var Tooth_21 = 1;
    var Implant_21 = 0;
    var BOP_21_db = 0;
    var BOP_21_b = 0;
    var BOP_21_mb = 0;
    var PI_21_db = 0;
    var PI_21_b = 0;
    var PI_21_mb = 0;
    var BOP_21_dp = 0;
    var BOP_21_p = 0;
    var BOP_21_mp = 0;
    var PI_21_dp = 0;
    var PI_21_p = 0;
    var PI_21_mp = 0;
    var mg_21_db = 0;
    var mg_21_b = 0;
    var mg_21_mb = 0;
    var st_21_db = 0;
    var st_21_b = 0;
    var st_21_mb = 0;
    var mg_21_dp = 0;
    var mg_21_p = 0;
    var mg_21_mp = 0;
    var st_21_dp = 0;
    var st_21_p = 0;
    var st_21_mp = 0;

function clear_data_21() {
    if (Tooth_21 == 1) {
        mg_21_db = 0;
        mg_21_b = 0;
        mg_21_mb = 0;
        st_21_db = 0;
        st_21_b = 0;
        st_21_mb = 0;

            document.getElementById('mg_21_db_txt').value = 0;
            document.getElementById('mg_21_b_txt').value = 0;
            document.getElementById('mg_21_mb_txt').value = 0;
            
            document.getElementById('st_21_db_txt').value = 0;
            document.getElementById('st_21_b_txt').value = 0;
            document.getElementById('st_21_mb_txt').value = 0;
        
            document.forms[0]["st_21_db"].style.color = 'black'
            document.forms[0]["st_21_b"].style.color = 'black'
            document.forms[0]["st_21_mb"].style.color = 'black'
        
        mg_21_dp = 0;
        mg_21_p = 0;
        mg_21_mp = 0;
        st_21_dp = 0;
        st_21_p = 0;
        st_21_mp = 0;

            document.getElementById('mg_21_dp_txt').value = 0;
            document.getElementById('mg_21_p_txt').value = 0;
            document.getElementById('mg_21_mp_txt').value = 0;
            
            document.getElementById('st_21_dp_txt').value = 0;
            document.getElementById('st_21_p_txt').value = 0;
            document.getElementById('st_21_mp_txt').value = 0;

            document.forms[0]["st_21_dp"].style.color = 'black'
            document.forms[0]["st_21_p"].style.color = 'black'
            document.forms[0]["st_21_mp"].style.color = 'black'
        
        change_probing_21();
        
        mobility_21 = 0;

            document.getElementById('mobility_21_txt').value = "0";

        note_21 = "";

            document.getElementById('note_21_txt').value = "";

        BOP_21_db = 0;
        BOP_21_b = 0;
        BOP_21_mb = 0;
                
        BOP_21_dp = 0;
        BOP_21_p = 0;
        BOP_21_mp = 0;
                
            document.getElementById('BOP_21_db_rectangle').style.display = 'none';
            document.getElementById('BOP_21_b_rectangle').style.display = 'none';
            document.getElementById('BOP_21_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_21_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_21_p_rectangle').style.display = 'none';
            document.getElementById('BOP_21_mp_rectangle').style.display = 'none';
            
        PI_21_db = 0;
        PI_21_b = 0;
        PI_21_mb = 0;
                
        PI_21_dp = 0;
        PI_21_p = 0;
        PI_21_mp = 0;

            document.getElementById('PI_21_db_rectangle').style.display = 'none';
            document.getElementById('PI_21_b_rectangle').style.display = 'none';
            document.getElementById('PI_21_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_21_dp_rectangle').style.display = 'none';
            document.getElementById('PI_21_p_rectangle').style.display = 'none';
            document.getElementById('PI_21_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_21() {
    if (Tooth_21 === 1) {
        Tooth_21 = 0;
        document.getElementById('tooth_line_21_b').style.display = 'block';
        document.getElementById('tooth_line_21_p').style.display = 'block';
        
        document.getElementById('mobility_21_txt').style.display = 'none';
        
        document.getElementById('implant_21_btn').style.display = 'none';
        document.getElementById('implant_21_tab').style.display = 'none';
        document.getElementById('implant_21_b_image').style.display = 'none';
        document.getElementById('implant_21_p_image').style.display = 'none';

        document.getElementById('mg_21_db_txt').style.display = 'none';
        document.getElementById('mg_21_b_txt').style.display = 'none';
        document.getElementById('mg_21_mb_txt').style.display = 'none';
        
        document.getElementById('st_21_db_txt').style.display = 'none';
        document.getElementById('st_21_b_txt').style.display = 'none';
        document.getElementById('st_21_mb_txt').style.display = 'none';
        
        document.getElementById('mg_21_dp_txt').style.display = 'none';
        document.getElementById('mg_21_p_txt').style.display = 'none';
        document.getElementById('mg_21_mp_txt').style.display = 'none';
        
        document.getElementById('st_21_dp_txt').style.display = 'none';
        document.getElementById('st_21_p_txt').style.display = 'none';
        document.getElementById('st_21_mp_txt').style.display = 'none';
            
        document.getElementById('BOP_21_db_rectangle').style.display = 'none';
        document.getElementById('BOP_21_b_rectangle').style.display = 'none';
        document.getElementById('BOP_21_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_21_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_21_p_rectangle').style.display = 'none';
        document.getElementById('BOP_21_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_21_db_btn').style.display = 'none';
        document.getElementById('BOP_21_b_btn').style.display = 'none';
        document.getElementById('BOP_21_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_21_dp_btn').style.display = 'none';
        document.getElementById('BOP_21_p_btn').style.display = 'none';
        document.getElementById('BOP_21_mp_btn').style.display = 'none';
        
        document.getElementById('PI_21_db_rectangle').style.display = 'none';
        document.getElementById('PI_21_b_rectangle').style.display = 'none';
        document.getElementById('PI_21_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_21_dp_rectangle').style.display = 'none';
        document.getElementById('PI_21_p_rectangle').style.display = 'none';
        document.getElementById('PI_21_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_21_db_btn').style.display = 'none';
        document.getElementById('PI_21_b_btn').style.display = 'none';
        document.getElementById('PI_21_mb_btn').style.display = 'none';
        
        document.getElementById('PI_21_dp_btn').style.display = 'none';
        document.getElementById('PI_21_p_btn').style.display = 'none';
        document.getElementById('PI_21_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_21_b').style.display = 'none';
        document.getElementById('polyline_an_21_b').style.display = 'none';
        document.getElementById('polyline_mg_21_b').style.display = 'none';
        
        document.getElementById('polygon_21_p').style.display = 'none';
        document.getElementById('polyline_an_21_p').style.display = 'none';
        document.getElementById('polyline_mg_21_p').style.display = 'none';
        
        document.getElementById('polygon_inter_22_21_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_22_21_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_22_21_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_22_21_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_22_21_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_22_21_p').style.display = 'none';            
        
        document.getElementById('note_21_txt').style.display = 'none';
    }
    else if (Implant_21 !== 1) {
        Tooth_21 = 1;
        document.getElementById('tooth_line_21_b').style.display = 'none';
        document.getElementById('tooth_line_21_p').style.display = 'none';

        document.getElementById('mobility_21_txt').style.display = 'block';

        document.getElementById('implant_21_btn').style.display = 'block';

        document.getElementById('mg_21_db_txt').style.display = 'block';
        document.getElementById('mg_21_b_txt').style.display = 'block';
        document.getElementById('mg_21_mb_txt').style.display = 'block';
        
        document.getElementById('st_21_db_txt').style.display = 'block';
        document.getElementById('st_21_b_txt').style.display = 'block';
        document.getElementById('st_21_mb_txt').style.display = 'block';
        
        document.getElementById('mg_21_dp_txt').style.display = 'block';
        document.getElementById('mg_21_p_txt').style.display = 'block';
        document.getElementById('mg_21_mp_txt').style.display = 'block';
        
        document.getElementById('st_21_dp_txt').style.display = 'block';
        document.getElementById('st_21_p_txt').style.display = 'block';
        document.getElementById('st_21_mp_txt').style.display = 'block';
        
        document.getElementById('note_21_txt').style.display = 'block';

        document.getElementById('polygon_21_b').style.display = 'block';
        document.getElementById('polyline_an_21_b').style.display = 'block';
        document.getElementById('polyline_mg_21_b').style.display = 'block';
        
        document.getElementById('polygon_21_p').style.display = 'block';
        document.getElementById('polyline_an_21_p').style.display = 'block';
        document.getElementById('polyline_mg_21_p').style.display = 'block';

        if (Tooth_22 == 1 && Tooth_21 == 1) {
            document.getElementById('polygon_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_p').style.display = 'block';            
        }

        document.getElementById('BOP_21_db_btn').style.display = 'block';
        document.getElementById('BOP_21_b_btn').style.display = 'block';
        document.getElementById('BOP_21_mb_btn').style.display = 'block';

        document.getElementById('BOP_21_dp_btn').style.display = 'block';
        document.getElementById('BOP_21_p_btn').style.display = 'block';
        document.getElementById('BOP_21_mp_btn').style.display = 'block';
        
        if (BOP_21_db == 1) {
            document.getElementById('BOP_21_db_rectangle').style.display = 'block';
        }
        if (BOP_21_b == 1) {
            document.getElementById('BOP_21_b_rectangle').style.display = 'block';
        }
        if (BOP_21_mb == 1) {
            document.getElementById('BOP_21_mb_rectangle').style.display = 'block';
        }
        if (BOP_21_dp == 1) {
            document.getElementById('BOP_21_dp_rectangle').style.display = 'block';
        }
        if (BOP_21_p == 1) {
            document.getElementById('BOP_21_p_rectangle').style.display = 'block';
        }
        if (BOP_21_mp == 1) {
            document.getElementById('BOP_21_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_21_db_btn').style.display = 'block';
        document.getElementById('PI_21_b_btn').style.display = 'block';
        document.getElementById('PI_21_mb_btn').style.display = 'block';

        document.getElementById('PI_21_dp_btn').style.display = 'block';
        document.getElementById('PI_21_p_btn').style.display = 'block';
        document.getElementById('PI_21_mp_btn').style.display = 'block';
        
        if (PI_21_db == 1) {
            document.getElementById('PI_21_db_rectangle').style.display = 'block';
        }
        if (PI_21_b == 1) {
            document.getElementById('PI_21_b_rectangle').style.display = 'block';
        }
        if (PI_21_mb == 1) {
            document.getElementById('PI_21_mb_rectangle').style.display = 'block';
        }
        if (PI_21_dp == 1) {
            document.getElementById('PI_21_dp_rectangle').style.display = 'block';
        }
        if (PI_21_p == 1) {
            document.getElementById('PI_21_p_rectangle').style.display = 'block';
        }
        if (PI_21_mp == 1) {
            document.getElementById('PI_21_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_21 == 1) {
        Tooth_21 = 1;
        document.getElementById('tooth_line_21_b').style.display = 'none';
        document.getElementById('tooth_line_21_p').style.display = 'none';

        document.getElementById('mobility_21_txt').style.display = 'block';
        
        document.getElementById('note_21_txt').style.display = 'block';

        document.getElementById('implant_21_btn').style.display = 'block';
        document.getElementById('implant_21_tab').style.display = 'block';
        document.getElementById('implant_21_b_image').style.display = 'block';
        document.getElementById('implant_21_p_image').style.display = 'block';

        document.getElementById('mg_21_db_txt').style.display = 'block';
        document.getElementById('mg_21_b_txt').style.display = 'block';
        document.getElementById('mg_21_mb_txt').style.display = 'block';
        
        document.getElementById('st_21_db_txt').style.display = 'block';
        document.getElementById('st_21_b_txt').style.display = 'block';
        document.getElementById('st_21_mb_txt').style.display = 'block';
        
        document.getElementById('mg_21_dp_txt').style.display = 'block';
        document.getElementById('mg_21_p_txt').style.display = 'block';
        document.getElementById('mg_21_mp_txt').style.display = 'block';
        
        document.getElementById('st_21_dp_txt').style.display = 'block';
        document.getElementById('st_21_p_txt').style.display = 'block';
        document.getElementById('st_21_mp_txt').style.display = 'block';

        document.getElementById('polygon_21_b').style.display = 'block';
        document.getElementById('polyline_an_21_b').style.display = 'block';
        document.getElementById('polyline_mg_21_b').style.display = 'block';
        
        document.getElementById('polygon_21_p').style.display = 'block';
        document.getElementById('polyline_an_21_p').style.display = 'block';
        document.getElementById('polyline_mg_21_p').style.display = 'block';

        if (Tooth_22 == 1 && Tooth_21 == 1) {
            document.getElementById('polygon_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_p').style.display = 'block';            
        }

        document.getElementById('BOP_21_db_btn').style.display = 'block';
        document.getElementById('BOP_21_b_btn').style.display = 'block';
        document.getElementById('BOP_21_mb_btn').style.display = 'block';

        document.getElementById('BOP_21_dp_btn').style.display = 'block';
        document.getElementById('BOP_21_p_btn').style.display = 'block';
        document.getElementById('BOP_21_mp_btn').style.display = 'block';
        
        document.getElementById('PI_21_db_btn').style.display = 'block';
        document.getElementById('PI_21_b_btn').style.display = 'block';
        document.getElementById('PI_21_mb_btn').style.display = 'block';

        document.getElementById('PI_21_dp_btn').style.display = 'block';
        document.getElementById('PI_21_p_btn').style.display = 'block';
        document.getElementById('PI_21_mp_btn').style.display = 'block';
        
        if (BOP_21_db == 1) {
            document.getElementById('BOP_21_db_rectangle').style.display = 'block';
        }
        if (BOP_21_b == 1) {
            document.getElementById('BOP_21_b_rectangle').style.display = 'block';
        }
        if (BOP_21_mb == 1) {
            document.getElementById('BOP_21_mb_rectangle').style.display = 'block';
        }
        if (BOP_21_dp == 1) {
            document.getElementById('BOP_21_dp_rectangle').style.display = 'block';
        }
        if (BOP_21_p == 1) {
            document.getElementById('BOP_21_p_rectangle').style.display = 'block';
        }
        if (BOP_21_mp == 1) {
            document.getElementById('BOP_21_mp_rectangle').style.display = 'block';
        }
        
        if (PI_21_db == 1) {
            document.getElementById('PI_21_db_rectangle').style.display = 'block';
        }
        if (PI_21_b == 1) {
            document.getElementById('PI_21_b_rectangle').style.display = 'block';
        }
        if (PI_21_mb == 1) {
            document.getElementById('PI_21_mb_rectangle').style.display = 'block';
        }
        if (PI_21_dp == 1) {
            document.getElementById('PI_21_dp_rectangle').style.display = 'block';
        }
        if (PI_21_p == 1) {
            document.getElementById('PI_21_p_rectangle').style.display = 'block';
        }
        if (PI_21_mp == 1) {
            document.getElementById('PI_21_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_21() {
    if (Implant_21 == 0) {
        Implant_21 = 1;
        
        document.getElementById('implant_21_b_image').style.display = 'block';
        document.getElementById('implant_21_p_image').style.display = 'block';
        document.getElementById('implant_21_tab').style.display = 'block';
    }
    else {
        Implant_21 = 0;
        
        document.getElementById('implant_21_b_image').style.display = 'none';
        document.getElementById('implant_21_p_image').style.display = 'none';
        document.getElementById('implant_21_tab').style.display = 'none';
    }
}

function toggle_BOP_21_db() {
    if (BOP_21_db == 0) {
        BOP_21_db = 1;
        document.getElementById('BOP_21_db_rectangle').style.display = 'block';
    }
    else {
        BOP_21_db = 0;
        document.getElementById('BOP_21_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_21_b() {
    if (BOP_21_b == 0) {
        BOP_21_b = 1;
        document.getElementById('BOP_21_b_rectangle').style.display = 'block';
    }
    else {
        BOP_21_b = 0;
        document.getElementById('BOP_21_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_21_mb() {
    if (BOP_21_mb == 0) {
        BOP_21_mb = 1;
        document.getElementById('BOP_21_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_21_mb = 0;
        document.getElementById('BOP_21_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_21_db() {
    if (PI_21_db == 0) {
        PI_21_db = 1;
        document.getElementById('PI_21_db_rectangle').style.display = 'block';
    }
    else {
        PI_21_db = 0;
        document.getElementById('PI_21_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_21_b() {
    if (PI_21_b == 0) {
        PI_21_b = 1;
        document.getElementById('PI_21_b_rectangle').style.display = 'block';
    }
    else {
        PI_21_b = 0;
        document.getElementById('PI_21_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_21_mb() {
    if (PI_21_mb == 0) {
        PI_21_mb = 1;
        document.getElementById('PI_21_mb_rectangle').style.display = 'block';
    }
    else {
        PI_21_mb = 0;
        document.getElementById('PI_21_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_21_dp() {
    if (BOP_21_dp == 0) {
        BOP_21_dp = 1;
        document.getElementById('BOP_21_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_21_dp = 0;
        document.getElementById('BOP_21_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_21_p() {
    if (BOP_21_p == 0) {
        BOP_21_p = 1;
        document.getElementById('BOP_21_p_rectangle').style.display = 'block';
    }
    else {
        BOP_21_p = 0;
        document.getElementById('BOP_21_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_21_mp() {
    if (BOP_21_mp == 0) {
        BOP_21_mp = 1;
        document.getElementById('BOP_21_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_21_mp = 0;
        document.getElementById('BOP_21_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_21_dp() {
    if (PI_21_dp == 0) {
        PI_21_dp = 1;
        document.getElementById('PI_21_dp_rectangle').style.display = 'block';
    }
    else {
        PI_21_dp = 0;
        document.getElementById('PI_21_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_21_p() {
    if (PI_21_p == 0) {
        PI_21_p = 1;
        document.getElementById('PI_21_p_rectangle').style.display = 'block';
    }
    else {
        PI_21_p = 0;
        document.getElementById('PI_21_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_21_mp() {
    if (PI_21_mp == 0) {
        PI_21_mp = 1;
        document.getElementById('PI_21_mp_rectangle').style.display = 'block';
    }
    else {
        PI_21_mp = 0;
        document.getElementById('PI_21_mp_rectangle').style.display = 'none';
    }
}

function change_probing_21() {
    if (Tooth_21 == 1) {
        
    // Variablen aus dem Formular
        st_21_db = document.forms[0]["st_21_db"].value;
        st_21_b = document.forms[0]["st_21_b"].value;
        st_21_mb = document.forms[0]["st_21_mb"].value;

        if (document.forms[0]["st_21_dp"].value > 3) {document.forms[0]["st_21_dp"].style.color = 'red';} else {document.forms[0]["st_21_dp"].style.color = 'black'};
        if (document.forms[0]["st_21_p"].value > 3) {document.forms[0]["st_21_p"].style.color = 'red';} else {document.forms[0]["st_21_p"].style.color = 'black'};
        if (document.forms[0]["st_21_mp"].value > 3) {document.forms[0]["st_21_mp"].style.color = 'red';} else {document.forms[0]["st_21_mp"].style.color = 'black'};
        
        mg_21_db = document.forms[0]["mg_21_db"].value;
        mg_21_b = document.forms[0]["mg_21_b"].value;
        mg_21_mb = document.forms[0]["mg_21_mb"].value;
        
        st_21_dp = document.forms[0]["st_21_dp"].value;
        st_21_p = document.forms[0]["st_21_p"].value;
        st_21_mp = document.forms[0]["st_21_mp"].value;

        if (document.forms[0]["st_21_db"].value > 3) {document.forms[0]["st_21_db"].style.color = 'red';} else {document.forms[0]["st_21_db"].style.color = 'black'};
        if (document.forms[0]["st_21_b"].value > 3) {document.forms[0]["st_21_b"].style.color = 'red';} else {document.forms[0]["st_21_b"].style.color = 'black'};
        if (document.forms[0]["st_21_mb"].value > 3) {document.forms[0]["st_21_mb"].style.color = 'red';} else {document.forms[0]["st_21_mb"].style.color = 'black'};
        
        mg_21_dp = document.forms[0]["mg_21_dp"].value;
        mg_21_p = document.forms[0]["mg_21_p"].value;
        mg_21_mp = document.forms[0]["mg_21_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 21 (bukkal) in der Bitmap
        var x_db_21 = 729;							// distal 21
        var x_mb_21 = 698;							// mesial 21
        var x_b_21 = (x_db_21 + x_mb_21)/2;			// bukkal 21
        
    // Set der horizontalen Koordinaten von Zahn 21 (palatinal) in der Bitmap
        var x_dp_21 = 731;							// distal 21
        var x_mp_21 = 700;							// mesial 21
        var x_p_21 = (x_dp_21 + x_mp_21)/2;			// palatinal 21
        
    // Set der vertikalen Koordinaten von Zahn 21 (bukkal) aus dem Formular
        var y_mg_21_db = mg_OK_b + 6.5 * mg_21_db;	// Margo Gingivae distobukkal 21
        var y_mg_21_b = mg_OK_b + 6.5 * mg_21_b;	// Margo Gingivae bukkal 21
        var y_mg_21_mb = mg_OK_b + 6.5 * mg_21_mb;	// Margo Gingivae mesiobukkal 21
        var y_st_21_db = 6.5 * st_21_db;			// Sondierungstiefe distobukkal 21
        var y_st_21_b = 6.5 * st_21_b;				// Sondierungstiefe bukkal 21
        var y_st_21_mb = 6.5 * st_21_mb;			// Sondierungstiefe mesiobukkal 21
        
    // Set der vertikalen Koordinaten von Zahn 21 (palatinal) aus dem Formular
        var y_mg_21_dp = mg_OK_p - 6.5 * mg_21_dp;	// Margo Gingivae distopalatinal 21
        var y_mg_21_p = mg_OK_p - 6.5 * mg_21_p;	// Margo Gingivae palatinal 21
        var y_mg_21_mp = mg_OK_p - 6.5 * mg_21_mp;	// Margo Gingivae mesiopalatinal 21
        var y_st_21_dp = 6.5 * st_21_dp;			// Sondierungstiefe distopalatinal 21
        var y_st_21_p = 6.5 * st_21_p;				// Sondierungstiefe palatinal 21
        var y_st_21_mp = 6.5 * st_21_mp;			// Sondierungstiefe mesiopalatinal 21
        
    // Berechnung des Attachmentniveaus 21 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_21_db = y_mg_21_db - y_st_21_db;	// Attachmentniveau distobukkal 21
        var y_an_21_b = y_mg_21_b - y_st_21_b;		// Attachmentniveau bukkal 21
        var y_an_21_mb = y_mg_21_mb - y_st_21_mb;	// Attachmentniveau mesiobukkal 21
        
    // Berechnung des Attachmentniveaus 21 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_21_dp = y_mg_21_dp + y_st_21_dp;	// Attachmentniveau distopalatinal 21
        var y_an_21_p = y_mg_21_p + y_st_21_p;		// Attachmentniveau palatinal 21
        var y_an_21_mp = y_mg_21_mp + y_st_21_mp;	// Attachmentniveau mesiopalatinal 21
        
    // Parodontaltasche 21 bukkal zeichnen
        var string = 
            x_db_21 + ", " + y_an_21_db + "  " + 
            x_b_21 + ", " + y_an_21_b + "  " + 
            x_mb_21 + ", " + y_an_21_mb + "  " + 
            x_mb_21 + ", " + y_mg_21_mb + "  " + 
            x_b_21 + ", " + y_mg_21_b + "  " + 
            x_db_21 + ", " + y_mg_21_db;
        document.getElementById("polygon_21_b").setAttribute("points", string);
    // Attachmentniveau 21 bukkal zeichnen
        var string = 
            x_db_21 + ", " + y_an_21_db + "  " + 
            x_b_21 + ", " + y_an_21_b + "  " + 
            x_mb_21 + ", " + y_an_21_mb;
        document.getElementById("polyline_an_21_b").setAttribute("points", string);
    // Margo Gingivae 21 bukkal zeichnen
        var string =
            x_db_21 + ", " + y_mg_21_db + "  " + 
            x_b_21 + ", " + y_mg_21_b + "  " + 
            x_mb_21 + ", " + y_mg_21_mb;
        document.getElementById("polyline_mg_21_b").setAttribute("points", string);

    // Parodontaltasche 21 palatinal zeichnen
        var string = 
            x_dp_21 + ", " + y_an_21_dp + "  " + 
            x_p_21 + ", " + y_an_21_p + "  " + 
            x_mp_21 + ", " + y_an_21_mp + "  " + 
            x_mp_21 + ", " + y_mg_21_mp + "  " + 
            x_p_21 + ", " + y_mg_21_p + "  " + 
            x_dp_21 + ", " + y_mg_21_dp;
        document.getElementById("polygon_21_p").setAttribute("points", string);
    // Attachmentniveau 21 palatinal zeichnen
        var string = 
            x_dp_21 + ", " + y_an_21_dp + "  " + 
            x_p_21 + ", " + y_an_21_p + "  " + 
            x_mp_21 + ", " + y_an_21_mp;
        document.getElementById("polyline_an_21_p").setAttribute("points", string);
    // Margo Gingivae 21 palatinal zeichnen
        var string =
            x_dp_21 + ", " + y_mg_21_dp + "  " + 
            x_p_21 + ", " + y_mg_21_p + "  " + 
            x_mp_21 + ", " + y_mg_21_mp;
        document.getElementById("polyline_mg_21_p").setAttribute("points", string);
    }
    if (Tooth_22 == 1 && Tooth_21 == 1) {

        st_22_mb = document.forms[0]["st_22_mb"].value;
        mg_22_mb = document.forms[0]["mg_22_mb"].value;
        
        st_22_mp = document.forms[0]["st_22_mp"].value;
        mg_22_mp = document.forms[0]["mg_22_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
        var x_mb_22 = 746;							// mesial 22
        
    // Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
        var x_mp_22 = 746;							// mesial 22
        
    // Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
        var y_mg_22_mb = mg_OK_b + 6.5 * mg_22_mb;	// Margo Gingivae mesiobukkal 22
        var y_st_22_mb = 6.5 * st_22_mb;			// Sondierungstiefe mesiobukkal 22
        
    // Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
        var y_mg_22_mp = mg_OK_p - 6.5 * mg_22_mp;	// Margo Gingivae mesiopalatinal 22
        var y_st_22_mp = 6.5 * st_22_mp;			// Sondierungstiefe mesiopalatinal 22
        
    // Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_22_mb = y_mg_22_mb - y_st_22_mb;	// Attachmentniveau mesiobukkal 22
        
    // Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_22_mp = y_mg_22_mp + y_st_22_mp;	// Attachmentniveau mesiopalatinal 22

    // Parodontaltasche inter_22_21 bukkal zeichnen
        var string = 
            x_mb_22 + ", " + y_an_22_mb + "  " + 
            x_db_21 + ", " + y_an_21_db + "  " + 
            x_db_21 + ", " + y_mg_21_db + "  " + 
            x_mb_22 + ", " + y_mg_22_mb;
        document.getElementById("polygon_inter_22_21_b").setAttribute("points", string);
    // Attachmentniveau inter_22_21 bukkal zeichnen
        var string = 
            x_mb_22 + ", " + y_an_22_mb + "  " + 
            x_db_21 + ", " + y_an_21_db;
        document.getElementById("polyline_an_inter_22_21_b").setAttribute("points", string);
    // Margo Gingivae inter_22_21 bukkal zeichnen
        var string =
            x_mb_22 + ", " + y_mg_22_mb + "  " + 
            x_db_21 + ", " + y_mg_21_db;
        document.getElementById("polyline_mg_inter_22_21_b").setAttribute("points", string);

    // Parodontaltasche inter_22_21 palatinal zeichnen
        var string = 
            x_mp_22 + ", " + y_an_22_mp + "  " + 
            x_dp_21 + ", " + y_an_21_dp + "  " + 
            x_dp_21 + ", " + y_mg_21_dp + "  " + 
            x_mp_22 + ", " + y_mg_22_mp;
        document.getElementById("polygon_inter_22_21_p").setAttribute("points", string);
    // Attachmentniveau inter_22_21 palatinal zeichnen
        var string = 
            x_mp_22 + ", " + y_an_22_mp + "  " + 
            x_dp_21 + ", " + y_an_21_dp;
        document.getElementById("polyline_an_inter_22_21_p").setAttribute("points", string);
    // Margo Gingivae inter_22_21 palatinal zeichnen
        var string =
            x_mp_22 + ", " + y_mg_22_mp + "  " + 
            x_dp_21 + ", " + y_mg_21_dp;
        document.getElementById("polyline_mg_inter_22_21_p").setAttribute("points", string);
    }
}