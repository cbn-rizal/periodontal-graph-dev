	// Definition der Variablen fÃ¼r das Formular
    var Tooth_22 = 1;
    var Implant_22 = 0;
    var BOP_22_db = 0;
    var BOP_22_b = 0;
    var BOP_22_mb = 0;
    var PI_22_db = 0;
    var PI_22_b = 0;
    var PI_22_mb = 0;
    var BOP_22_dp = 0;
    var BOP_22_p = 0;
    var BOP_22_mp = 0;
    var PI_22_dp = 0;
    var PI_22_p = 0;
    var PI_22_mp = 0;
    var mg_22_db = 0;
    var mg_22_b = 0;
    var mg_22_mb = 0;
    var st_22_db = 0;
    var st_22_b = 0;
    var st_22_mb = 0;
    var mg_22_dp = 0;
    var mg_22_p = 0;
    var mg_22_mp = 0;
    var st_22_dp = 0;
    var st_22_p = 0;
    var st_22_mp = 0;

function clear_data_22() {
    if (Tooth_22 == 1) {
        mg_22_db = 0;
        mg_22_b = 0;
        mg_22_mb = 0;
        st_22_db = 0;
        st_22_b = 0;
        st_22_mb = 0;

            document.getElementById('mg_22_db_txt').value = 0;
            document.getElementById('mg_22_b_txt').value = 0;
            document.getElementById('mg_22_mb_txt').value = 0;
            
            document.getElementById('st_22_db_txt').value = 0;
            document.getElementById('st_22_b_txt').value = 0;
            document.getElementById('st_22_mb_txt').value = 0;
        
            document.forms[0]["st_22_db"].style.color = 'black'
            document.forms[0]["st_22_b"].style.color = 'black'
            document.forms[0]["st_22_mb"].style.color = 'black'
        
        mg_22_dp = 0;
        mg_22_p = 0;
        mg_22_mp = 0;
        st_22_dp = 0;
        st_22_p = 0;
        st_22_mp = 0;

            document.getElementById('mg_22_dp_txt').value = 0;
            document.getElementById('mg_22_p_txt').value = 0;
            document.getElementById('mg_22_mp_txt').value = 0;
            
            document.getElementById('st_22_dp_txt').value = 0;
            document.getElementById('st_22_p_txt').value = 0;
            document.getElementById('st_22_mp_txt').value = 0;

            document.forms[0]["st_22_dp"].style.color = 'black'
            document.forms[0]["st_22_p"].style.color = 'black'
            document.forms[0]["st_22_mp"].style.color = 'black'
        
        change_probing_22();
        
        mobility_22 = 0;

            document.getElementById('mobility_22_txt').value = "0";

        note_22 = "";

            document.getElementById('note_22_txt').value = "";

        BOP_22_db = 0;
        BOP_22_b = 0;
        BOP_22_mb = 0;
                
        BOP_22_dp = 0;
        BOP_22_p = 0;
        BOP_22_mp = 0;
                
            document.getElementById('BOP_22_db_rectangle').style.display = 'none';
            document.getElementById('BOP_22_b_rectangle').style.display = 'none';
            document.getElementById('BOP_22_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_22_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_22_p_rectangle').style.display = 'none';
            document.getElementById('BOP_22_mp_rectangle').style.display = 'none';
            
        PI_22_db = 0;
        PI_22_b = 0;
        PI_22_mb = 0;
                
        PI_22_dp = 0;
        PI_22_p = 0;
        PI_22_mp = 0;

            document.getElementById('PI_22_db_rectangle').style.display = 'none';
            document.getElementById('PI_22_b_rectangle').style.display = 'none';
            document.getElementById('PI_22_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_22_dp_rectangle').style.display = 'none';
            document.getElementById('PI_22_p_rectangle').style.display = 'none';
            document.getElementById('PI_22_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_22() {
    if (Tooth_22 === 1) {
        Tooth_22 = 0;
        document.getElementById('tooth_line_22_b').style.display = 'block';
        document.getElementById('tooth_line_22_p').style.display = 'block';
        
        document.getElementById('mobility_22_txt').style.display = 'none';
        
        document.getElementById('implant_22_btn').style.display = 'none';
        document.getElementById('implant_22_tab').style.display = 'none';
        document.getElementById('implant_22_b_image').style.display = 'none';
        document.getElementById('implant_22_p_image').style.display = 'none';
        
        document.getElementById('mg_22_db_txt').style.display = 'none';
        document.getElementById('mg_22_b_txt').style.display = 'none';
        document.getElementById('mg_22_mb_txt').style.display = 'none';
        
        document.getElementById('st_22_db_txt').style.display = 'none';
        document.getElementById('st_22_b_txt').style.display = 'none';
        document.getElementById('st_22_mb_txt').style.display = 'none';
        
        document.getElementById('mg_22_dp_txt').style.display = 'none';
        document.getElementById('mg_22_p_txt').style.display = 'none';
        document.getElementById('mg_22_mp_txt').style.display = 'none';
        
        document.getElementById('st_22_dp_txt').style.display = 'none';
        document.getElementById('st_22_p_txt').style.display = 'none';
        document.getElementById('st_22_mp_txt').style.display = 'none';
            
        document.getElementById('BOP_22_db_rectangle').style.display = 'none';
        document.getElementById('BOP_22_b_rectangle').style.display = 'none';
        document.getElementById('BOP_22_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_22_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_22_p_rectangle').style.display = 'none';
        document.getElementById('BOP_22_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_22_db_btn').style.display = 'none';
        document.getElementById('BOP_22_b_btn').style.display = 'none';
        document.getElementById('BOP_22_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_22_dp_btn').style.display = 'none';
        document.getElementById('BOP_22_p_btn').style.display = 'none';
        document.getElementById('BOP_22_mp_btn').style.display = 'none';
        
        document.getElementById('PI_22_db_rectangle').style.display = 'none';
        document.getElementById('PI_22_b_rectangle').style.display = 'none';
        document.getElementById('PI_22_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_22_dp_rectangle').style.display = 'none';
        document.getElementById('PI_22_p_rectangle').style.display = 'none';
        document.getElementById('PI_22_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_22_db_btn').style.display = 'none';
        document.getElementById('PI_22_b_btn').style.display = 'none';
        document.getElementById('PI_22_mb_btn').style.display = 'none';
        
        document.getElementById('PI_22_dp_btn').style.display = 'none';
        document.getElementById('PI_22_p_btn').style.display = 'none';
        document.getElementById('PI_22_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_22_b').style.display = 'none';
        document.getElementById('polyline_an_22_b').style.display = 'none';
        document.getElementById('polyline_mg_22_b').style.display = 'none';
        
        document.getElementById('polygon_22_p').style.display = 'none';
        document.getElementById('polyline_an_22_p').style.display = 'none';
        document.getElementById('polyline_mg_22_p').style.display = 'none';
        
        document.getElementById('polygon_inter_23_22_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_23_22_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_23_22_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_23_22_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_23_22_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_23_22_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_22_21_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_22_21_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_22_21_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_22_21_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_22_21_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_22_21_p').style.display = 'none';            
        
        document.getElementById('note_22_txt').style.display = 'none';
    }
    else if (Implant_22 !== 1) {
        Tooth_22 = 1;
        document.getElementById('tooth_line_22_b').style.display = 'none';
        document.getElementById('tooth_line_22_p').style.display = 'none';

        document.getElementById('mobility_22_txt').style.display = 'block';

        document.getElementById('implant_22_btn').style.display = 'block';

        document.getElementById('mg_22_db_txt').style.display = 'block';
        document.getElementById('mg_22_b_txt').style.display = 'block';
        document.getElementById('mg_22_mb_txt').style.display = 'block';
        
        document.getElementById('st_22_db_txt').style.display = 'block';
        document.getElementById('st_22_b_txt').style.display = 'block';
        document.getElementById('st_22_mb_txt').style.display = 'block';
        
        document.getElementById('mg_22_dp_txt').style.display = 'block';
        document.getElementById('mg_22_p_txt').style.display = 'block';
        document.getElementById('mg_22_mp_txt').style.display = 'block';
        
        document.getElementById('st_22_dp_txt').style.display = 'block';
        document.getElementById('st_22_p_txt').style.display = 'block';
        document.getElementById('st_22_mp_txt').style.display = 'block';
        
        document.getElementById('note_22_txt').style.display = 'block';

        document.getElementById('polygon_22_b').style.display = 'block';
        document.getElementById('polyline_an_22_b').style.display = 'block';
        document.getElementById('polyline_mg_22_b').style.display = 'block';
        
        document.getElementById('polygon_22_p').style.display = 'block';
        document.getElementById('polyline_an_22_p').style.display = 'block';
        document.getElementById('polyline_mg_22_p').style.display = 'block';

        if (Tooth_23 == 1 && Tooth_22 == 1) {
            document.getElementById('polygon_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_p').style.display = 'block';            
        }
        
        if (Tooth_22 == 1 && Tooth_21 == 1) {
            document.getElementById('polygon_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_p').style.display = 'block';            
        }
        
        document.getElementById('BOP_22_db_btn').style.display = 'block';
        document.getElementById('BOP_22_b_btn').style.display = 'block';
        document.getElementById('BOP_22_mb_btn').style.display = 'block';

        document.getElementById('BOP_22_dp_btn').style.display = 'block';
        document.getElementById('BOP_22_p_btn').style.display = 'block';
        document.getElementById('BOP_22_mp_btn').style.display = 'block';
        
        if (BOP_22_db == 1) {
            document.getElementById('BOP_22_db_rectangle').style.display = 'block';
        }
        if (BOP_22_b == 1) {
            document.getElementById('BOP_22_b_rectangle').style.display = 'block';
        }
        if (BOP_22_mb == 1) {
            document.getElementById('BOP_22_mb_rectangle').style.display = 'block';
        }
        if (BOP_22_dp == 1) {
            document.getElementById('BOP_22_dp_rectangle').style.display = 'block';
        }
        if (BOP_22_p == 1) {
            document.getElementById('BOP_22_p_rectangle').style.display = 'block';
        }
        if (BOP_22_mp == 1) {
            document.getElementById('BOP_22_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_22_db_btn').style.display = 'block';
        document.getElementById('PI_22_b_btn').style.display = 'block';
        document.getElementById('PI_22_mb_btn').style.display = 'block';

        document.getElementById('PI_22_dp_btn').style.display = 'block';
        document.getElementById('PI_22_p_btn').style.display = 'block';
        document.getElementById('PI_22_mp_btn').style.display = 'block';
        
        if (PI_22_db == 1) {
            document.getElementById('PI_22_db_rectangle').style.display = 'block';
        }
        if (PI_22_b == 1) {
            document.getElementById('PI_22_b_rectangle').style.display = 'block';
        }
        if (PI_22_mb == 1) {
            document.getElementById('PI_22_mb_rectangle').style.display = 'block';
        }
        if (PI_22_dp == 1) {
            document.getElementById('PI_22_dp_rectangle').style.display = 'block';
        }
        if (PI_22_p == 1) {
            document.getElementById('PI_22_p_rectangle').style.display = 'block';
        }
        if (PI_22_mp == 1) {
            document.getElementById('PI_22_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_22 == 1) {
        Tooth_22 = 1;
        document.getElementById('tooth_line_22_b').style.display = 'none';
        document.getElementById('tooth_line_22_p').style.display = 'none';

        document.getElementById('mobility_22_txt').style.display = 'block';
        
        document.getElementById('note_22_txt').style.display = 'block';

        document.getElementById('implant_22_btn').style.display = 'block';
        document.getElementById('implant_22_tab').style.display = 'block';
        document.getElementById('implant_22_b_image').style.display = 'block';
        document.getElementById('implant_22_p_image').style.display = 'block';

        document.getElementById('mg_22_db_txt').style.display = 'block';
        document.getElementById('mg_22_b_txt').style.display = 'block';
        document.getElementById('mg_22_mb_txt').style.display = 'block';
        
        document.getElementById('st_22_db_txt').style.display = 'block';
        document.getElementById('st_22_b_txt').style.display = 'block';
        document.getElementById('st_22_mb_txt').style.display = 'block';
        
        document.getElementById('mg_22_dp_txt').style.display = 'block';
        document.getElementById('mg_22_p_txt').style.display = 'block';
        document.getElementById('mg_22_mp_txt').style.display = 'block';
        
        document.getElementById('st_22_dp_txt').style.display = 'block';
        document.getElementById('st_22_p_txt').style.display = 'block';
        document.getElementById('st_22_mp_txt').style.display = 'block';

        document.getElementById('polygon_22_b').style.display = 'block';
        document.getElementById('polyline_an_22_b').style.display = 'block';
        document.getElementById('polyline_mg_22_b').style.display = 'block';
        
        document.getElementById('polygon_22_p').style.display = 'block';
        document.getElementById('polyline_an_22_p').style.display = 'block';
        document.getElementById('polyline_mg_22_p').style.display = 'block';

        if (Tooth_23 == 1 && Tooth_22 == 1) {
            document.getElementById('polygon_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_p').style.display = 'block';            
        }
        
        if (Tooth_22 == 1 && Tooth_21 == 1) {
            document.getElementById('polygon_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_22_21_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_22_21_p').style.display = 'block';            
        }

        document.getElementById('BOP_22_db_btn').style.display = 'block';
        document.getElementById('BOP_22_b_btn').style.display = 'block';
        document.getElementById('BOP_22_mb_btn').style.display = 'block';

        document.getElementById('BOP_22_dp_btn').style.display = 'block';
        document.getElementById('BOP_22_p_btn').style.display = 'block';
        document.getElementById('BOP_22_mp_btn').style.display = 'block';
        
        document.getElementById('PI_22_db_btn').style.display = 'block';
        document.getElementById('PI_22_b_btn').style.display = 'block';
        document.getElementById('PI_22_mb_btn').style.display = 'block';

        document.getElementById('PI_22_dp_btn').style.display = 'block';
        document.getElementById('PI_22_p_btn').style.display = 'block';
        document.getElementById('PI_22_mp_btn').style.display = 'block';
        
        if (BOP_22_db == 1) {
            document.getElementById('BOP_22_db_rectangle').style.display = 'block';
        }
        if (BOP_22_b == 1) {
            document.getElementById('BOP_22_b_rectangle').style.display = 'block';
        }
        if (BOP_22_mb == 1) {
            document.getElementById('BOP_22_mb_rectangle').style.display = 'block';
        }
        if (BOP_22_dp == 1) {
            document.getElementById('BOP_22_dp_rectangle').style.display = 'block';
        }
        if (BOP_22_p == 1) {
            document.getElementById('BOP_22_p_rectangle').style.display = 'block';
        }
        if (BOP_22_mp == 1) {
            document.getElementById('BOP_22_mp_rectangle').style.display = 'block';
        }
        
        if (PI_22_db == 1) {
            document.getElementById('PI_22_db_rectangle').style.display = 'block';
        }
        if (PI_22_b == 1) {
            document.getElementById('PI_22_b_rectangle').style.display = 'block';
        }
        if (PI_22_mb == 1) {
            document.getElementById('PI_22_mb_rectangle').style.display = 'block';
        }
        if (PI_22_dp == 1) {
            document.getElementById('PI_22_dp_rectangle').style.display = 'block';
        }
        if (PI_22_p == 1) {
            document.getElementById('PI_22_p_rectangle').style.display = 'block';
        }
        if (PI_22_mp == 1) {
            document.getElementById('PI_22_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_22() {
    if (Implant_22 == 0) {
        Implant_22 = 1;
        
        document.getElementById('implant_22_b_image').style.display = 'block';
        document.getElementById('implant_22_p_image').style.display = 'block';
        document.getElementById('implant_22_tab').style.display = 'block';
    }
    else {
        Implant_22 = 0;
        
        document.getElementById('implant_22_b_image').style.display = 'none';
        document.getElementById('implant_22_p_image').style.display = 'none';
        document.getElementById('implant_22_tab').style.display = 'none';
    }
}

function toggle_BOP_22_db() {
    if (BOP_22_db == 0) {
        BOP_22_db = 1;
        document.getElementById('BOP_22_db_rectangle').style.display = 'block';
    }
    else {
        BOP_22_db = 0;
        document.getElementById('BOP_22_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_22_b() {
    if (BOP_22_b == 0) {
        BOP_22_b = 1;
        document.getElementById('BOP_22_b_rectangle').style.display = 'block';
    }
    else {
        BOP_22_b = 0;
        document.getElementById('BOP_22_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_22_mb() {
    if (BOP_22_mb == 0) {
        BOP_22_mb = 1;
        document.getElementById('BOP_22_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_22_mb = 0;
        document.getElementById('BOP_22_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_22_db() {
    if (PI_22_db == 0) {
        PI_22_db = 1;
        document.getElementById('PI_22_db_rectangle').style.display = 'block';
    }
    else {
        PI_22_db = 0;
        document.getElementById('PI_22_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_22_b() {
    if (PI_22_b == 0) {
        PI_22_b = 1;
        document.getElementById('PI_22_b_rectangle').style.display = 'block';
    }
    else {
        PI_22_b = 0;
        document.getElementById('PI_22_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_22_mb() {
    if (PI_22_mb == 0) {
        PI_22_mb = 1;
        document.getElementById('PI_22_mb_rectangle').style.display = 'block';
    }
    else {
        PI_22_mb = 0;
        document.getElementById('PI_22_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_22_dp() {
    if (BOP_22_dp == 0) {
        BOP_22_dp = 1;
        document.getElementById('BOP_22_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_22_dp = 0;
        document.getElementById('BOP_22_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_22_p() {
    if (BOP_22_p == 0) {
        BOP_22_p = 1;
        document.getElementById('BOP_22_p_rectangle').style.display = 'block';
    }
    else {
        BOP_22_p = 0;
        document.getElementById('BOP_22_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_22_mp() {
    if (BOP_22_mp == 0) {
        BOP_22_mp = 1;
        document.getElementById('BOP_22_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_22_mp = 0;
        document.getElementById('BOP_22_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_22_dp() {
    if (PI_22_dp == 0) {
        PI_22_dp = 1;
        document.getElementById('PI_22_dp_rectangle').style.display = 'block';
    }
    else {
        PI_22_dp = 0;
        document.getElementById('PI_22_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_22_p() {
    if (PI_22_p == 0) {
        PI_22_p = 1;
        document.getElementById('PI_22_p_rectangle').style.display = 'block';
    }
    else {
        PI_22_p = 0;
        document.getElementById('PI_22_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_22_mp() {
    if (PI_22_mp == 0) {
        PI_22_mp = 1;
        document.getElementById('PI_22_mp_rectangle').style.display = 'block';
    }
    else {
        PI_22_mp = 0;
        document.getElementById('PI_22_mp_rectangle').style.display = 'none';
    }
}

function change_probing_22() {
    if (Tooth_22 == 1) {
        
    // Variablen aus dem Formular
        st_22_db = document.forms[0]["st_22_db"].value;
        st_22_b = document.forms[0]["st_22_b"].value;
        st_22_mb = document.forms[0]["st_22_mb"].value;

        if (document.forms[0]["st_22_dp"].value > 3) {document.forms[0]["st_22_dp"].style.color = 'red';} else {document.forms[0]["st_22_dp"].style.color = 'black'};
        if (document.forms[0]["st_22_p"].value > 3) {document.forms[0]["st_22_p"].style.color = 'red';} else {document.forms[0]["st_22_p"].style.color = 'black'};
        if (document.forms[0]["st_22_mp"].value > 3) {document.forms[0]["st_22_mp"].style.color = 'red';} else {document.forms[0]["st_22_mp"].style.color = 'black'};
        
        mg_22_db = document.forms[0]["mg_22_db"].value;
        mg_22_b = document.forms[0]["mg_22_b"].value;
        mg_22_mb = document.forms[0]["mg_22_mb"].value;
        
        st_22_dp = document.forms[0]["st_22_dp"].value;
        st_22_p = document.forms[0]["st_22_p"].value;
        st_22_mp = document.forms[0]["st_22_mp"].value;

        if (document.forms[0]["st_22_db"].value > 3) {document.forms[0]["st_22_db"].style.color = 'red';} else {document.forms[0]["st_22_db"].style.color = 'black'};
        if (document.forms[0]["st_22_b"].value > 3) {document.forms[0]["st_22_b"].style.color = 'red';} else {document.forms[0]["st_22_b"].style.color = 'black'};
        if (document.forms[0]["st_22_mb"].value > 3) {document.forms[0]["st_22_mb"].style.color = 'red';} else {document.forms[0]["st_22_mb"].style.color = 'black'};
        
        mg_22_dp = document.forms[0]["mg_22_dp"].value;
        mg_22_p = document.forms[0]["mg_22_p"].value;
        mg_22_mp = document.forms[0]["mg_22_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
        var x_db_22 = 770;							// distal 22
        var x_mb_22 = 746;							// mesial 22
        var x_b_22 = (x_db_22 + x_mb_22)/2;			// bukkal 22
        
    // Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
        var x_dp_22 = 772;							// distal 22
        var x_mp_22 = 746;							// mesial 22
        var x_p_22 = (x_dp_22 + x_mp_22)/2;			// palatinal 22
        
    // Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
        var y_mg_22_db = mg_OK_b + 6.5 * mg_22_db;	// Margo Gingivae distobukkal 22
        var y_mg_22_b = mg_OK_b + 6.5 * mg_22_b;	// Margo Gingivae bukkal 22
        var y_mg_22_mb = mg_OK_b + 6.5 * mg_22_mb;	// Margo Gingivae mesiobukkal 22
        var y_st_22_db = 6.5 * st_22_db;			// Sondierungstiefe distobukkal 22
        var y_st_22_b = 6.5 * st_22_b;				// Sondierungstiefe bukkal 22
        var y_st_22_mb = 6.5 * st_22_mb;			// Sondierungstiefe mesiobukkal 22
        
    // Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
        var y_mg_22_dp = mg_OK_p - 6.5 * mg_22_dp;	// Margo Gingivae distopalatinal 22
        var y_mg_22_p = mg_OK_p - 6.5 * mg_22_p;	// Margo Gingivae palatinal 22
        var y_mg_22_mp = mg_OK_p - 6.5 * mg_22_mp;	// Margo Gingivae mesiopalatinal 22
        var y_st_22_dp = 6.5 * st_22_dp;			// Sondierungstiefe distopalatinal 22
        var y_st_22_p = 6.5 * st_22_p;				// Sondierungstiefe palatinal 22
        var y_st_22_mp = 6.5 * st_22_mp;			// Sondierungstiefe mesiopalatinal 22
        
    // Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_22_db = y_mg_22_db - y_st_22_db;	// Attachmentniveau distobukkal 22
        var y_an_22_b = y_mg_22_b - y_st_22_b;		// Attachmentniveau bukkal 22
        var y_an_22_mb = y_mg_22_mb - y_st_22_mb;	// Attachmentniveau mesiobukkal 22
        
    // Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_22_dp = y_mg_22_dp + y_st_22_dp;	// Attachmentniveau distopalatinal 22
        var y_an_22_p = y_mg_22_p + y_st_22_p;		// Attachmentniveau palatinal 22
        var y_an_22_mp = y_mg_22_mp + y_st_22_mp;	// Attachmentniveau mesiopalatinal 22
        
    // Parodontaltasche 22 bukkal zeichnen
        var string = 
            x_db_22 + ", " + y_an_22_db + "  " + 
            x_b_22 + ", " + y_an_22_b + "  " + 
            x_mb_22 + ", " + y_an_22_mb + "  " + 
            x_mb_22 + ", " + y_mg_22_mb + "  " + 
            x_b_22 + ", " + y_mg_22_b + "  " + 
            x_db_22 + ", " + y_mg_22_db;
        document.getElementById("polygon_22_b").setAttribute("points", string);
    // Attachmentniveau 22 bukkal zeichnen
        var string = 
            x_db_22 + ", " + y_an_22_db + "  " + 
            x_b_22 + ", " + y_an_22_b + "  " + 
            x_mb_22 + ", " + y_an_22_mb;
        document.getElementById("polyline_an_22_b").setAttribute("points", string);
    // Margo Gingivae 22 bukkal zeichnen
        var string =
            x_db_22 + ", " + y_mg_22_db + "  " + 
            x_b_22 + ", " + y_mg_22_b + "  " + 
            x_mb_22 + ", " + y_mg_22_mb;
        document.getElementById("polyline_mg_22_b").setAttribute("points", string);

    // Parodontaltasche 22 palatinal zeichnen
        var string = 
            x_dp_22 + ", " + y_an_22_dp + "  " + 
            x_p_22 + ", " + y_an_22_p + "  " + 
            x_mp_22 + ", " + y_an_22_mp + "  " + 
            x_mp_22 + ", " + y_mg_22_mp + "  " + 
            x_p_22 + ", " + y_mg_22_p + "  " + 
            x_dp_22 + ", " + y_mg_22_dp;
        document.getElementById("polygon_22_p").setAttribute("points", string);
    // Attachmentniveau 22 palatinal zeichnen
        var string = 
            x_dp_22 + ", " + y_an_22_dp + "  " + 
            x_p_22 + ", " + y_an_22_p + "  " + 
            x_mp_22 + ", " + y_an_22_mp;
        document.getElementById("polyline_an_22_p").setAttribute("points", string);
    // Margo Gingivae 22 palatinal zeichnen
        var string =
            x_dp_22 + ", " + y_mg_22_dp + "  " + 
            x_p_22 + ", " + y_mg_22_p + "  " + 
            x_mp_22 + ", " + y_mg_22_mp;
        document.getElementById("polyline_mg_22_p").setAttribute("points", string);
    }
    if (Tooth_22 == 1 && Tooth_21 == 1) {

        st_21_db = document.forms[0]["st_21_db"].value;
        mg_21_db = document.forms[0]["mg_21_db"].value;
        
        st_21_dp = document.forms[0]["st_21_dp"].value;
        mg_21_dp = document.forms[0]["mg_21_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 21 (bukkal) in der Bitmap
        var x_db_21 = 729;							// distal 21
        
    // Set der horizontalen Koordinaten von Zahn 21 (palatinal) in der Bitmap
        var x_dp_21 = 731;							// distal 21
        
    // Set der vertikalen Koordinaten von Zahn 21 (bukkal) aus dem Formular
        var y_mg_21_db = mg_OK_b + 6.5 * mg_21_db;	// Margo Gingivae distobukkal 21
        var y_st_21_db = 6.5 * st_21_db;			// Sondierungstiefe distobukkal 21
        
    // Set der vertikalen Koordinaten von Zahn 21 (palatinal) aus dem Formular
        var y_mg_21_dp = mg_OK_p - 6.5 * mg_21_dp;	// Margo Gingivae distopalatinal 21
        var y_st_21_dp = 6.5 * st_21_dp;			// Sondierungstiefe distopalatinal 21
        
    // Berechnung des Attachmentniveaus 21 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_21_db = y_mg_21_db - y_st_21_db;	// Attachmentniveau distobukkal 21
        
    // Berechnung des Attachmentniveaus 21 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_21_dp = y_mg_21_dp + y_st_21_dp;	// Attachmentniveau distopalatinal 21

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
    if (Tooth_23 == 1 && Tooth_22 == 1) {

        st_23_mb = document.forms[0]["st_23_mb"].value;
        mg_23_mb = document.forms[0]["mg_23_mb"].value;
        
        st_23_mp = document.forms[0]["st_23_mp"].value;
        mg_23_mp = document.forms[0]["mg_23_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
        var x_mb_23 = 787;							// mesial 23
        
    // Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
        var x_mp_23 = 785;							// mesial 23
        
    // Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
        var y_mg_23_mb = mg_OK_b + 6.5 * mg_23_mb;	// Margo Gingivae mesiobukkal 23
        var y_st_23_mb = 6.5 * st_23_mb;			// Sondierungstiefe mesiobukkal 23
        
    // Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
        var y_mg_23_mp = mg_OK_p - 6.5 * mg_23_mp;	// Margo Gingivae mesiopalatinal 23
        var y_st_23_mp = 6.5 * st_23_mp;			// Sondierungstiefe mesiopalatinal 23
        
    // Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_23_mb = y_mg_23_mb - y_st_23_mb;	// Attachmentniveau mesiobukkal 23
        
    // Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_23_mp = y_mg_23_mp + y_st_23_mp;	// Attachmentniveau mesiopalatinal 23

    // Parodontaltasche inter_23_22 bukkal zeichnen
        var string = 
            x_mb_23 + ", " + y_an_23_mb + "  " + 
            x_db_22 + ", " + y_an_22_db + "  " + 
            x_db_22 + ", " + y_mg_22_db + "  " + 
            x_mb_23 + ", " + y_mg_23_mb;
        document.getElementById("polygon_inter_23_22_b").setAttribute("points", string);
    // Attachmentniveau inter_23_22 bukkal zeichnen
        var string = 
            x_mb_23 + ", " + y_an_23_mb + "  " + 
            x_db_22 + ", " + y_an_22_db;
        document.getElementById("polyline_an_inter_23_22_b").setAttribute("points", string);
    // Margo Gingivae inter_23_22 bukkal zeichnen
        var string =
            x_mb_23 + ", " + y_mg_23_mb + "  " + 
            x_db_22 + ", " + y_mg_22_db;
        document.getElementById("polyline_mg_inter_23_22_b").setAttribute("points", string);

    // Parodontaltasche inter_23_22 palatinal zeichnen
        var string = 
            x_mp_23 + ", " + y_an_23_mp + "  " + 
            x_dp_22 + ", " + y_an_22_dp + "  " + 
            x_dp_22 + ", " + y_mg_22_dp + "  " + 
            x_mp_23 + ", " + y_mg_23_mp;
        document.getElementById("polygon_inter_23_22_p").setAttribute("points", string);
    // Attachmentniveau inter_23_22 palatinal zeichnen
        var string = 
            x_mp_23 + ", " + y_an_23_mp + "  " + 
            x_dp_22 + ", " + y_an_22_dp;
        document.getElementById("polyline_an_inter_23_22_p").setAttribute("points", string);
    // Margo Gingivae inter_23_22 palatinal zeichnen
        var string =
            x_mp_23 + ", " + y_mg_23_mp + "  " + 
            x_dp_22 + ", " + y_mg_22_dp;
        document.getElementById("polyline_mg_inter_23_22_p").setAttribute("points", string);
    }
}