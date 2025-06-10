	// Definition der Variablen fÃ¼r das Formular
    var Tooth_23 = 1;
    var Implant_23 = 0;
    var BOP_23_db = 0;
    var BOP_23_b = 0;
    var BOP_23_mb = 0;
    var PI_23_db = 0;
    var PI_23_b = 0;
    var PI_23_mb = 0;
    var BOP_23_dp = 0;
    var BOP_23_p = 0;
    var BOP_23_mp = 0;
    var PI_23_dp = 0;
    var PI_23_p = 0;
    var PI_23_mp = 0;
    var mg_23_db = 0;
    var mg_23_b = 0;
    var mg_23_mb = 0;
    var st_23_db = 0;
    var st_23_b = 0;
    var st_23_mb = 0;
    var mg_23_dp = 0;
    var mg_23_p = 0;
    var mg_23_mp = 0;
    var st_23_dp = 0;
    var st_23_p = 0;
    var st_23_mp = 0;

function clear_data_23() {
    if (Tooth_23 == 1) {
        mg_23_db = 0;
        mg_23_b = 0;
        mg_23_mb = 0;
        st_23_db = 0;
        st_23_b = 0;
        st_23_mb = 0;

            document.getElementById('mg_23_db_txt').value = 0;
            document.getElementById('mg_23_b_txt').value = 0;
            document.getElementById('mg_23_mb_txt').value = 0;
            
            document.getElementById('st_23_db_txt').value = 0;
            document.getElementById('st_23_b_txt').value = 0;
            document.getElementById('st_23_mb_txt').value = 0;
        
            document.forms[0]["st_23_db"].style.color = 'black'
            document.forms[0]["st_23_b"].style.color = 'black'
            document.forms[0]["st_23_mb"].style.color = 'black'
        
        mg_23_dp = 0;
        mg_23_p = 0;
        mg_23_mp = 0;
        st_23_dp = 0;
        st_23_p = 0;
        st_23_mp = 0;

            document.getElementById('mg_23_dp_txt').value = 0;
            document.getElementById('mg_23_p_txt').value = 0;
            document.getElementById('mg_23_mp_txt').value = 0;
            
            document.getElementById('st_23_dp_txt').value = 0;
            document.getElementById('st_23_p_txt').value = 0;
            document.getElementById('st_23_mp_txt').value = 0;

            document.forms[0]["st_23_dp"].style.color = 'black'
            document.forms[0]["st_23_p"].style.color = 'black'
            document.forms[0]["st_23_mp"].style.color = 'black'
        
        change_probing_23();
        
        mobility_23 = 0;

            document.getElementById('mobility_23_txt').value = "0";

        note_23 = "";

            document.getElementById('note_23_txt').value = "";

        BOP_23_db = 0;
        BOP_23_b = 0;
        BOP_23_mb = 0;
                
        BOP_23_dp = 0;
        BOP_23_p = 0;
        BOP_23_mp = 0;
                
            document.getElementById('BOP_23_db_rectangle').style.display = 'none';
            document.getElementById('BOP_23_b_rectangle').style.display = 'none';
            document.getElementById('BOP_23_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_23_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_23_p_rectangle').style.display = 'none';
            document.getElementById('BOP_23_mp_rectangle').style.display = 'none';
            
        PI_23_db = 0;
        PI_23_b = 0;
        PI_23_mb = 0;
                
        PI_23_dp = 0;
        PI_23_p = 0;
        PI_23_mp = 0;

            document.getElementById('PI_23_db_rectangle').style.display = 'none';
            document.getElementById('PI_23_b_rectangle').style.display = 'none';
            document.getElementById('PI_23_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_23_dp_rectangle').style.display = 'none';
            document.getElementById('PI_23_p_rectangle').style.display = 'none';
            document.getElementById('PI_23_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_23() {
    if (Tooth_23 === 1) {
        Tooth_23 = 0;
        document.getElementById('tooth_line_23_b').style.display = 'block';
        document.getElementById('tooth_line_23_p').style.display = 'block';
        
        document.getElementById('mobility_23_txt').style.display = 'none';
        
        document.getElementById('implant_23_btn').style.display = 'none';
        document.getElementById('implant_23_tab').style.display = 'none';
        document.getElementById('implant_23_b_image').style.display = 'none';
        document.getElementById('implant_23_p_image').style.display = 'none';

        document.getElementById('mg_23_db_txt').style.display = 'none';
        document.getElementById('mg_23_b_txt').style.display = 'none';
        document.getElementById('mg_23_mb_txt').style.display = 'none';
        
        document.getElementById('st_23_db_txt').style.display = 'none';
        document.getElementById('st_23_b_txt').style.display = 'none';
        document.getElementById('st_23_mb_txt').style.display = 'none';
        
        document.getElementById('mg_23_dp_txt').style.display = 'none';
        document.getElementById('mg_23_p_txt').style.display = 'none';
        document.getElementById('mg_23_mp_txt').style.display = 'none';
        
        document.getElementById('st_23_dp_txt').style.display = 'none';
        document.getElementById('st_23_p_txt').style.display = 'none';
        document.getElementById('st_23_mp_txt').style.display = 'none';
            
        document.getElementById('BOP_23_db_rectangle').style.display = 'none';
        document.getElementById('BOP_23_b_rectangle').style.display = 'none';
        document.getElementById('BOP_23_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_23_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_23_p_rectangle').style.display = 'none';
        document.getElementById('BOP_23_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_23_db_btn').style.display = 'none';
        document.getElementById('BOP_23_b_btn').style.display = 'none';
        document.getElementById('BOP_23_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_23_dp_btn').style.display = 'none';
        document.getElementById('BOP_23_p_btn').style.display = 'none';
        document.getElementById('BOP_23_mp_btn').style.display = 'none';
        
        document.getElementById('PI_23_db_rectangle').style.display = 'none';
        document.getElementById('PI_23_b_rectangle').style.display = 'none';
        document.getElementById('PI_23_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_23_dp_rectangle').style.display = 'none';
        document.getElementById('PI_23_p_rectangle').style.display = 'none';
        document.getElementById('PI_23_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_23_db_btn').style.display = 'none';
        document.getElementById('PI_23_b_btn').style.display = 'none';
        document.getElementById('PI_23_mb_btn').style.display = 'none';
        
        document.getElementById('PI_23_dp_btn').style.display = 'none';
        document.getElementById('PI_23_p_btn').style.display = 'none';
        document.getElementById('PI_23_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_23_b').style.display = 'none';
        document.getElementById('polyline_an_23_b').style.display = 'none';
        document.getElementById('polyline_mg_23_b').style.display = 'none';
        
        document.getElementById('polygon_23_p').style.display = 'none';
        document.getElementById('polyline_an_23_p').style.display = 'none';
        document.getElementById('polyline_mg_23_p').style.display = 'none';
        
        document.getElementById('polygon_inter_24_23_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_24_23_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_24_23_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_24_23_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_24_23_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_24_23_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_23_22_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_23_22_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_23_22_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_23_22_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_23_22_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_23_22_p').style.display = 'none';            
        
        document.getElementById('note_23_txt').style.display = 'none';
    }
    else if (Implant_23 !== 1) {
        Tooth_23 = 1;
        document.getElementById('tooth_line_23_b').style.display = 'none';
        document.getElementById('tooth_line_23_p').style.display = 'none';

        document.getElementById('mobility_23_txt').style.display = 'block';

        document.getElementById('implant_23_btn').style.display = 'block';

        document.getElementById('mg_23_db_txt').style.display = 'block';
        document.getElementById('mg_23_b_txt').style.display = 'block';
        document.getElementById('mg_23_mb_txt').style.display = 'block';
        
        document.getElementById('st_23_db_txt').style.display = 'block';
        document.getElementById('st_23_b_txt').style.display = 'block';
        document.getElementById('st_23_mb_txt').style.display = 'block';
        
        document.getElementById('mg_23_dp_txt').style.display = 'block';
        document.getElementById('mg_23_p_txt').style.display = 'block';
        document.getElementById('mg_23_mp_txt').style.display = 'block';
        
        document.getElementById('st_23_dp_txt').style.display = 'block';
        document.getElementById('st_23_p_txt').style.display = 'block';
        document.getElementById('st_23_mp_txt').style.display = 'block';
        
        document.getElementById('note_23_txt').style.display = 'block';

        document.getElementById('polygon_23_b').style.display = 'block';
        document.getElementById('polyline_an_23_b').style.display = 'block';
        document.getElementById('polyline_mg_23_b').style.display = 'block';
        
        document.getElementById('polygon_23_p').style.display = 'block';
        document.getElementById('polyline_an_23_p').style.display = 'block';
        document.getElementById('polyline_mg_23_p').style.display = 'block';

        if (Tooth_24 == 1 && Tooth_23 == 1) {
            document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_p').style.display = 'block';            
        }
        
        if (Tooth_23 == 1 && Tooth_22 == 1) {
            document.getElementById('polygon_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_p').style.display = 'block';            
        }

        document.getElementById('BOP_23_db_btn').style.display = 'block';
        document.getElementById('BOP_23_b_btn').style.display = 'block';
        document.getElementById('BOP_23_mb_btn').style.display = 'block';

        document.getElementById('BOP_23_dp_btn').style.display = 'block';
        document.getElementById('BOP_23_p_btn').style.display = 'block';
        document.getElementById('BOP_23_mp_btn').style.display = 'block';
        
        if (BOP_23_db == 1) {
            document.getElementById('BOP_23_db_rectangle').style.display = 'block';
        }
        if (BOP_23_b == 1) {
            document.getElementById('BOP_23_b_rectangle').style.display = 'block';
        }
        if (BOP_23_mb == 1) {
            document.getElementById('BOP_23_mb_rectangle').style.display = 'block';
        }
        if (BOP_23_dp == 1) {
            document.getElementById('BOP_23_dp_rectangle').style.display = 'block';
        }
        if (BOP_23_p == 1) {
            document.getElementById('BOP_23_p_rectangle').style.display = 'block';
        }
        if (BOP_23_mp == 1) {
            document.getElementById('BOP_23_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_23_db_btn').style.display = 'block';
        document.getElementById('PI_23_b_btn').style.display = 'block';
        document.getElementById('PI_23_mb_btn').style.display = 'block';

        document.getElementById('PI_23_dp_btn').style.display = 'block';
        document.getElementById('PI_23_p_btn').style.display = 'block';
        document.getElementById('PI_23_mp_btn').style.display = 'block';
        
        if (PI_23_db == 1) {
            document.getElementById('PI_23_db_rectangle').style.display = 'block';
        }
        if (PI_23_b == 1) {
            document.getElementById('PI_23_b_rectangle').style.display = 'block';
        }
        if (PI_23_mb == 1) {
            document.getElementById('PI_23_mb_rectangle').style.display = 'block';
        }
        if (PI_23_dp == 1) {
            document.getElementById('PI_23_dp_rectangle').style.display = 'block';
        }
        if (PI_23_p == 1) {
            document.getElementById('PI_23_p_rectangle').style.display = 'block';
        }
        if (PI_23_mp == 1) {
            document.getElementById('PI_23_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_23 == 1) {
        Tooth_23 = 1;
        document.getElementById('tooth_line_23_b').style.display = 'none';
        document.getElementById('tooth_line_23_p').style.display = 'none';

        document.getElementById('mobility_23_txt').style.display = 'block';
        
        document.getElementById('note_23_txt').style.display = 'block';

        document.getElementById('implant_23_btn').style.display = 'block';
        document.getElementById('implant_23_tab').style.display = 'block';
        document.getElementById('implant_23_b_image').style.display = 'block';
        document.getElementById('implant_23_p_image').style.display = 'block';

        document.getElementById('mg_23_db_txt').style.display = 'block';
        document.getElementById('mg_23_b_txt').style.display = 'block';
        document.getElementById('mg_23_mb_txt').style.display = 'block';
        
        document.getElementById('st_23_db_txt').style.display = 'block';
        document.getElementById('st_23_b_txt').style.display = 'block';
        document.getElementById('st_23_mb_txt').style.display = 'block';
        
        document.getElementById('mg_23_dp_txt').style.display = 'block';
        document.getElementById('mg_23_p_txt').style.display = 'block';
        document.getElementById('mg_23_mp_txt').style.display = 'block';
        
        document.getElementById('st_23_dp_txt').style.display = 'block';
        document.getElementById('st_23_p_txt').style.display = 'block';
        document.getElementById('st_23_mp_txt').style.display = 'block';

        document.getElementById('polygon_23_b').style.display = 'block';
        document.getElementById('polyline_an_23_b').style.display = 'block';
        document.getElementById('polyline_mg_23_b').style.display = 'block';
        
        document.getElementById('polygon_23_p').style.display = 'block';
        document.getElementById('polyline_an_23_p').style.display = 'block';
        document.getElementById('polyline_mg_23_p').style.display = 'block';

        if (Tooth_24 == 1 && Tooth_23 == 1) {
            document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_p').style.display = 'block';            
        }
        
        if (Tooth_23 == 1 && Tooth_22 == 1) {
            document.getElementById('polygon_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_23_22_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_23_22_p').style.display = 'block';            
        }            

        document.getElementById('BOP_23_db_btn').style.display = 'block';
        document.getElementById('BOP_23_b_btn').style.display = 'block';
        document.getElementById('BOP_23_mb_btn').style.display = 'block';

        document.getElementById('BOP_23_dp_btn').style.display = 'block';
        document.getElementById('BOP_23_p_btn').style.display = 'block';
        document.getElementById('BOP_23_mp_btn').style.display = 'block';
        
        document.getElementById('PI_23_db_btn').style.display = 'block';
        document.getElementById('PI_23_b_btn').style.display = 'block';
        document.getElementById('PI_23_mb_btn').style.display = 'block';

        document.getElementById('PI_23_dp_btn').style.display = 'block';
        document.getElementById('PI_23_p_btn').style.display = 'block';
        document.getElementById('PI_23_mp_btn').style.display = 'block';
        
        if (BOP_23_db == 1) {
            document.getElementById('BOP_23_db_rectangle').style.display = 'block';
        }
        if (BOP_23_b == 1) {
            document.getElementById('BOP_23_b_rectangle').style.display = 'block';
        }
        if (BOP_23_mb == 1) {
            document.getElementById('BOP_23_mb_rectangle').style.display = 'block';
        }
        if (BOP_23_dp == 1) {
            document.getElementById('BOP_23_dp_rectangle').style.display = 'block';
        }
        if (BOP_23_p == 1) {
            document.getElementById('BOP_23_p_rectangle').style.display = 'block';
        }
        if (BOP_23_mp == 1) {
            document.getElementById('BOP_23_mp_rectangle').style.display = 'block';
        }
        
        if (PI_23_db == 1) {
            document.getElementById('PI_23_db_rectangle').style.display = 'block';
        }
        if (PI_23_b == 1) {
            document.getElementById('PI_23_b_rectangle').style.display = 'block';
        }
        if (PI_23_mb == 1) {
            document.getElementById('PI_23_mb_rectangle').style.display = 'block';
        }
        if (PI_23_dp == 1) {
            document.getElementById('PI_23_dp_rectangle').style.display = 'block';
        }
        if (PI_23_p == 1) {
            document.getElementById('PI_23_p_rectangle').style.display = 'block';
        }
        if (PI_23_mp == 1) {
            document.getElementById('PI_23_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_23() {
    if (Implant_23 == 0) {
        Implant_23 = 1;
        
        document.getElementById('implant_23_b_image').style.display = 'block';
        document.getElementById('implant_23_p_image').style.display = 'block';
        document.getElementById('implant_23_tab').style.display = 'block';
    }
    else {
        Implant_23 = 0;
        
        document.getElementById('implant_23_b_image').style.display = 'none';
        document.getElementById('implant_23_p_image').style.display = 'none';
        document.getElementById('implant_23_tab').style.display = 'none';
    }
}

function toggle_BOP_23_db() {
    if (BOP_23_db == 0) {
        BOP_23_db = 1;
        document.getElementById('BOP_23_db_rectangle').style.display = 'block';
    }
    else {
        BOP_23_db = 0;
        document.getElementById('BOP_23_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_23_b() {
    if (BOP_23_b == 0) {
        BOP_23_b = 1;
        document.getElementById('BOP_23_b_rectangle').style.display = 'block';
    }
    else {
        BOP_23_b = 0;
        document.getElementById('BOP_23_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_23_mb() {
    if (BOP_23_mb == 0) {
        BOP_23_mb = 1;
        document.getElementById('BOP_23_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_23_mb = 0;
        document.getElementById('BOP_23_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_23_db() {
    if (PI_23_db == 0) {
        PI_23_db = 1;
        document.getElementById('PI_23_db_rectangle').style.display = 'block';
    }
    else {
        PI_23_db = 0;
        document.getElementById('PI_23_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_23_b() {
    if (PI_23_b == 0) {
        PI_23_b = 1;
        document.getElementById('PI_23_b_rectangle').style.display = 'block';
    }
    else {
        PI_23_b = 0;
        document.getElementById('PI_23_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_23_mb() {
    if (PI_23_mb == 0) {
        PI_23_mb = 1;
        document.getElementById('PI_23_mb_rectangle').style.display = 'block';
    }
    else {
        PI_23_mb = 0;
        document.getElementById('PI_23_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_23_dp() {
    if (BOP_23_dp == 0) {
        BOP_23_dp = 1;
        document.getElementById('BOP_23_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_23_dp = 0;
        document.getElementById('BOP_23_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_23_p() {
    if (BOP_23_p == 0) {
        BOP_23_p = 1;
        document.getElementById('BOP_23_p_rectangle').style.display = 'block';
    }
    else {
        BOP_23_p = 0;
        document.getElementById('BOP_23_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_23_mp() {
    if (BOP_23_mp == 0) {
        BOP_23_mp = 1;
        document.getElementById('BOP_23_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_23_mp = 0;
        document.getElementById('BOP_23_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_23_dp() {
    if (PI_23_dp == 0) {
        PI_23_dp = 1;
        document.getElementById('PI_23_dp_rectangle').style.display = 'block';
    }
    else {
        PI_23_dp = 0;
        document.getElementById('PI_23_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_23_p() {
    if (PI_23_p == 0) {
        PI_23_p = 1;
        document.getElementById('PI_23_p_rectangle').style.display = 'block';
    }
    else {
        PI_23_p = 0;
        document.getElementById('PI_23_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_23_mp() {
    if (PI_23_mp == 0) {
        PI_23_mp = 1;
        document.getElementById('PI_23_mp_rectangle').style.display = 'block';
    }
    else {
        PI_23_mp = 0;
        document.getElementById('PI_23_mp_rectangle').style.display = 'none';
    }
}

function change_probing_23(probing_depth_min = 0) {
    if (Tooth_23 == 1) {
        
    // Variablen aus dem Formular
        st_23_db = document.forms[0]["st_23_db"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_23_db"].value - probing_depth_min;
        st_23_b = document.forms[0]["st_23_b"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_23_b"].value - probing_depth_min;
        st_23_mb = document.forms[0]["st_23_mb"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_23_mb"].value - probing_depth_min;

        if (document.forms[0]["st_23_dp"].value > probing_depth_min) {document.forms[0]["st_23_dp"].style.color = 'red';} else {document.forms[0]["st_23_dp"].style.color = 'black'};
        if (document.forms[0]["st_23_p"].value > probing_depth_min) {document.forms[0]["st_23_p"].style.color = 'red';} else {document.forms[0]["st_23_p"].style.color = 'black'};
        if (document.forms[0]["st_23_mp"].value > probing_depth_min) {document.forms[0]["st_23_mp"].style.color = 'red';} else {document.forms[0]["st_23_mp"].style.color = 'black'};
        
        mg_23_db = document.forms[0]["mg_23_db"].value;
        mg_23_b = document.forms[0]["mg_23_b"].value;
        mg_23_mb = document.forms[0]["mg_23_mb"].value;
        
        st_23_dp = document.forms[0]["st_23_dp"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_23_dp"].value - probing_depth_min;
        st_23_p = document.forms[0]["st_23_p"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_23_p"].value - probing_depth_min;
        st_23_mp = document.forms[0]["st_23_mp"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_23_mp"].value - probing_depth_min;

        if (document.forms[0]["st_23_db"].value > probing_depth_min) {document.forms[0]["st_23_db"].style.color = 'red';} else {document.forms[0]["st_23_db"].style.color = 'black'};
        if (document.forms[0]["st_23_b"].value > probing_depth_min) {document.forms[0]["st_23_b"].style.color = 'red';} else {document.forms[0]["st_23_b"].style.color = 'black'};
        if (document.forms[0]["st_23_mb"].value > probing_depth_min) {document.forms[0]["st_23_mb"].style.color = 'red';} else {document.forms[0]["st_23_mb"].style.color = 'black'};
        
        mg_23_dp = document.forms[0]["mg_23_dp"].value;
        mg_23_p = document.forms[0]["mg_23_p"].value;
        mg_23_mp = document.forms[0]["mg_23_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
        var x_db_23 = 815;							// distal 23
        var x_mb_23 = 787;							// mesial 23
        var x_b_23 = (x_db_23 + x_mb_23)/2;			// bukkal 23
        
    // Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
        var x_dp_23 = 813;							// distal 23
        var x_mp_23 = 785;							// mesial 23
        var x_p_23 = (x_dp_23 + x_mp_23)/2;			// palatinal 23
        
    // Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
        var y_mg_23_db = mg_OK_b + 6.5 * mg_23_db;	// Margo Gingivae distobukkal 23
        var y_mg_23_b = mg_OK_b + 6.5 * mg_23_b;	// Margo Gingivae bukkal 23
        var y_mg_23_mb = mg_OK_b + 6.5 * mg_23_mb;	// Margo Gingivae mesiobukkal 23
        var y_st_23_db = 6.5 * st_23_db;			// Sondierungstiefe distobukkal 23
        var y_st_23_b = 6.5 * st_23_b;				// Sondierungstiefe bukkal 23
        var y_st_23_mb = 6.5 * st_23_mb;			// Sondierungstiefe mesiobukkal 23
        
    // Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
        var y_mg_23_dp = mg_OK_p - 6.5 * mg_23_dp;	// Margo Gingivae distopalatinal 23
        var y_mg_23_p = mg_OK_p - 6.5 * mg_23_p;	// Margo Gingivae palatinal 23
        var y_mg_23_mp = mg_OK_p - 6.5 * mg_23_mp;	// Margo Gingivae mesiopalatinal 23
        var y_st_23_dp = 6.5 * st_23_dp;			// Sondierungstiefe distopalatinal 23
        var y_st_23_p = 6.5 * st_23_p;				// Sondierungstiefe palatinal 23
        var y_st_23_mp = 6.5 * st_23_mp;			// Sondierungstiefe mesiopalatinal 23
        
    // Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_23_db = y_mg_23_db - y_st_23_db;	// Attachmentniveau distobukkal 23
        var y_an_23_b = y_mg_23_b - y_st_23_b;		// Attachmentniveau bukkal 23
        var y_an_23_mb = y_mg_23_mb - y_st_23_mb;	// Attachmentniveau mesiobukkal 23
        
    // Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_23_dp = y_mg_23_dp + y_st_23_dp;	// Attachmentniveau distopalatinal 23
        var y_an_23_p = y_mg_23_p + y_st_23_p;		// Attachmentniveau palatinal 23
        var y_an_23_mp = y_mg_23_mp + y_st_23_mp;	// Attachmentniveau mesiopalatinal 23
        
    // Parodontaltasche 23 bukkal zeichnen
        var string = 
            x_db_23 + ", " + y_an_23_db + "  " + 
            x_b_23 + ", " + y_an_23_b + "  " + 
            x_mb_23 + ", " + y_an_23_mb + "  " + 
            x_mb_23 + ", " + y_mg_23_mb + "  " + 
            x_b_23 + ", " + y_mg_23_b + "  " + 
            x_db_23 + ", " + y_mg_23_db;
        document.getElementById("polygon_23_b").setAttribute("points", string);
    // Attachmentniveau 23 bukkal zeichnen
        var string = 
            x_db_23 + ", " + y_an_23_db + "  " + 
            x_b_23 + ", " + y_an_23_b + "  " + 
            x_mb_23 + ", " + y_an_23_mb;
        document.getElementById("polyline_an_23_b").setAttribute("points", string);
    // Margo Gingivae 23 bukkal zeichnen
        var string =
            x_db_23 + ", " + y_mg_23_db + "  " + 
            x_b_23 + ", " + y_mg_23_b + "  " + 
            x_mb_23 + ", " + y_mg_23_mb;
        document.getElementById("polyline_mg_23_b").setAttribute("points", string);

    // Parodontaltasche 23 palatinal zeichnen
        var string = 
            x_dp_23 + ", " + y_an_23_dp + "  " + 
            x_p_23 + ", " + y_an_23_p + "  " + 
            x_mp_23 + ", " + y_an_23_mp + "  " + 
            x_mp_23 + ", " + y_mg_23_mp + "  " + 
            x_p_23 + ", " + y_mg_23_p + "  " + 
            x_dp_23 + ", " + y_mg_23_dp;
        document.getElementById("polygon_23_p").setAttribute("points", string);
    // Attachmentniveau 23 palatinal zeichnen
        var string = 
            x_dp_23 + ", " + y_an_23_dp + "  " + 
            x_p_23 + ", " + y_an_23_p + "  " + 
            x_mp_23 + ", " + y_an_23_mp;
        document.getElementById("polyline_an_23_p").setAttribute("points", string);
    // Margo Gingivae 23 palatinal zeichnen
        var string =
            x_dp_23 + ", " + y_mg_23_dp + "  " + 
            x_p_23 + ", " + y_mg_23_p + "  " + 
            x_mp_23 + ", " + y_mg_23_mp;
        document.getElementById("polyline_mg_23_p").setAttribute("points", string);
    }
    if (Tooth_23 == 1 && Tooth_22 == 1) {

        st_22_db = document.forms[0]["st_22_db"].value;
        mg_22_db = document.forms[0]["mg_22_db"].value;
        
        st_22_dp = document.forms[0]["st_22_dp"].value;
        mg_22_dp = document.forms[0]["mg_22_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
        var x_db_22 = 770;							// distal 22
        
    // Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
        var x_dp_22 = 772;							// distal 22
        
    // Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
        var y_mg_22_db = mg_OK_b + 6.5 * mg_22_db;	// Margo Gingivae distobukkal 22
        var y_st_22_db = 6.5 * st_22_db;			// Sondierungstiefe distobukkal 22
        
    // Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
        var y_mg_22_dp = mg_OK_p - 6.5 * mg_22_dp;	// Margo Gingivae distopalatinal 22
        var y_st_22_dp = 6.5 * st_22_dp;			// Sondierungstiefe distopalatinal 22
        
    // Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_22_db = y_mg_22_db - y_st_22_db;	// Attachmentniveau distobukkal 22
        
    // Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_22_dp = y_mg_22_dp + y_st_22_dp;	// Attachmentniveau distopalatinal 22

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
    if (Tooth_24 == 1 && Tooth_23 == 1) {

        st_24_mb = document.forms[0]["st_24_mb"].value;
        mg_24_mb = document.forms[0]["mg_24_mb"].value;
        
        st_24_mp = document.forms[0]["st_24_mp"].value;
        mg_24_mp = document.forms[0]["mg_24_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
        var x_mb_24 = 829;							// mesial 24
        
    // Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
        var x_mp_24 = 829;							// mesial 24
        
    // Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
        var y_mg_24_mb = mg_OK_b + 6.5 * mg_24_mb;	// Margo Gingivae mesiobukkal 24
        var y_st_24_mb = 6.5 * st_24_mb;			// Sondierungstiefe mesiobukkal 24
        
    // Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
        var y_mg_24_mp = mg_OK_p - 6.5 * mg_24_mp;	// Margo Gingivae mesiopalatinal 24
        var y_st_24_mp = 6.5 * st_24_mp;			// Sondierungstiefe mesiopalatinal 24
        
    // Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_24_mb = y_mg_24_mb - y_st_24_mb;	// Attachmentniveau mesiobukkal 24
        
    // Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_24_mp = y_mg_24_mp + y_st_24_mp;	// Attachmentniveau mesiopalatinal 24

    // Parodontaltasche inter_24_23 bukkal zeichnen
        var string = 
            x_mb_24 + ", " + y_an_24_mb + "  " + 
            x_db_23 + ", " + y_an_23_db + "  " + 
            x_db_23 + ", " + y_mg_23_db + "  " + 
            x_mb_24 + ", " + y_mg_24_mb;
        document.getElementById("polygon_inter_24_23_b").setAttribute("points", string);
    // Attachmentniveau inter_24_23 bukkal zeichnen
        var string = 
            x_mb_24 + ", " + y_an_24_mb + "  " + 
            x_db_23 + ", " + y_an_23_db;
        document.getElementById("polyline_an_inter_24_23_b").setAttribute("points", string);
    // Margo Gingivae inter_24_23 bukkal zeichnen
        var string =
            x_mb_24 + ", " + y_mg_24_mb + "  " + 
            x_db_23 + ", " + y_mg_23_db;
        document.getElementById("polyline_mg_inter_24_23_b").setAttribute("points", string);

    // Parodontaltasche inter_24_23 palatinal zeichnen
        var string = 
            x_mp_24 + ", " + y_an_24_mp + "  " + 
            x_dp_23 + ", " + y_an_23_dp + "  " + 
            x_dp_23 + ", " + y_mg_23_dp + "  " + 
            x_mp_24 + ", " + y_mg_24_mp;
        document.getElementById("polygon_inter_24_23_p").setAttribute("points", string);
    // Attachmentniveau inter_24_23 palatinal zeichnen
        var string = 
            x_mp_24 + ", " + y_an_24_mp + "  " + 
            x_dp_23 + ", " + y_an_23_dp;
        document.getElementById("polyline_an_inter_24_23_p").setAttribute("points", string);
    // Margo Gingivae inter_24_23 palatinal zeichnen
        var string =
            x_mp_24 + ", " + y_mg_24_mp + "  " + 
            x_dp_23 + ", " + y_mg_23_dp;
        document.getElementById("polyline_mg_inter_24_23_p").setAttribute("points", string);
    }
}