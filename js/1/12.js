	// Definition of variables for the form
    var Tooth_12 = 1;
    var Implant_12 = 0;
    var BOP_12_db = 0;
    var BOP_12_b = 0;
    var BOP_12_mb = 0;
    var PI_12_db = 0;
    var PI_12_b = 0;
    var PI_12_mb = 0;
    var BOP_12_dp = 0;
    var BOP_12_p = 0;
    var BOP_12_mp = 0;
    var PI_12_dp = 0;
    var PI_12_p = 0;
    var PI_12_mp = 0;
    var mg_12_db = 0;
    var mg_12_b = 0;
    var mg_12_mb = 0;
    var st_12_db = 0;
    var st_12_b = 0;
    var st_12_mb = 0;
    var mg_12_dp = 0;
    var mg_12_p = 0;
    var mg_12_mp = 0;
    var st_12_dp = 0;
    var st_12_p = 0;
    var st_12_mp = 0;

function clear_data_12() {
    if (Tooth_12 == 1) {
        mg_12_db = 0;
        mg_12_b = 0;
        mg_12_mb = 0;
        st_12_db = 0;
        st_12_b = 0;
        st_12_mb = 0;

            document.getElementById('mg_12_db_txt').value = 0;
            document.getElementById('mg_12_b_txt').value = 0;
            document.getElementById('mg_12_mb_txt').value = 0;
            
            document.getElementById('st_12_db_txt').value = 0;
            document.getElementById('st_12_b_txt').value = 0;
            document.getElementById('st_12_mb_txt').value = 0;
        
            document.forms[0]["st_12_db"].style.color = 'black'
            document.forms[0]["st_12_b"].style.color = 'black'
            document.forms[0]["st_12_mb"].style.color = 'black'
        
        mg_12_dp = 0;
        mg_12_p = 0;
        mg_12_mp = 0;
        st_12_dp = 0;
        st_12_p = 0;
        st_12_mp = 0;

            document.getElementById('mg_12_dp_txt').value = 0;
            document.getElementById('mg_12_p_txt').value = 0;
            document.getElementById('mg_12_mp_txt').value = 0;
            
            document.getElementById('st_12_dp_txt').value = 0;
            document.getElementById('st_12_p_txt').value = 0;
            document.getElementById('st_12_mp_txt').value = 0;

            document.forms[0]["st_12_dp"].style.color = 'black'
            document.forms[0]["st_12_p"].style.color = 'black'
            document.forms[0]["st_12_mp"].style.color = 'black'
        
        change_probing_12();
        
        mobility_12 = 0;

            document.getElementById('mobility_12_txt').value = "0";

        note_12 = "";

            document.getElementById('note_12_txt').value = "";

        BOP_12_db = 0;
        BOP_12_b = 0;
        BOP_12_mb = 0;
                
        BOP_12_dp = 0;
        BOP_12_p = 0;
        BOP_12_mp = 0;
                
            document.getElementById('BOP_12_db_rectangle').style.display = 'none';
            document.getElementById('BOP_12_b_rectangle').style.display = 'none';
            document.getElementById('BOP_12_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_12_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_12_p_rectangle').style.display = 'none';
            document.getElementById('BOP_12_mp_rectangle').style.display = 'none';
            
        PI_12_db = 0;
        PI_12_b = 0;
        PI_12_mb = 0;
                
        PI_12_dp = 0;
        PI_12_p = 0;
        PI_12_mp = 0;

            document.getElementById('PI_12_db_rectangle').style.display = 'none';
            document.getElementById('PI_12_b_rectangle').style.display = 'none';
            document.getElementById('PI_12_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_12_dp_rectangle').style.display = 'none';
            document.getElementById('PI_12_p_rectangle').style.display = 'none';
            document.getElementById('PI_12_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_12() {
    if (Tooth_12 === 1) {
        Tooth_12 = 0;
        document.getElementById('tooth_line_12_b').style.display = 'block';
        document.getElementById('tooth_line_12_p').style.display = 'block';
        
        document.getElementById('mobility_12_txt').style.display = 'none';
        
        document.getElementById('implant_12_btn').style.display = 'none';
        document.getElementById('implant_12_tab').style.display = 'none';
        document.getElementById('implant_12_b_image').style.display = 'none';
        document.getElementById('implant_12_p_image').style.display = 'none';

        document.getElementById('mg_12_db_txt').style.display = 'none';
        document.getElementById('mg_12_b_txt').style.display = 'none';
        document.getElementById('mg_12_mb_txt').style.display = 'none';
        
        document.getElementById('st_12_db_txt').style.display = 'none';
        document.getElementById('st_12_b_txt').style.display = 'none';
        document.getElementById('st_12_mb_txt').style.display = 'none';
        
        document.getElementById('mg_12_dp_txt').style.display = 'none';
        document.getElementById('mg_12_p_txt').style.display = 'none';
        document.getElementById('mg_12_mp_txt').style.display = 'none';
        
        document.getElementById('st_12_dp_txt').style.display = 'none';
        document.getElementById('st_12_p_txt').style.display = 'none';
        document.getElementById('st_12_mp_txt').style.display = 'none';
                    
        document.getElementById('BOP_12_db_rectangle').style.display = 'none';
        document.getElementById('BOP_12_b_rectangle').style.display = 'none';
        document.getElementById('BOP_12_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_12_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_12_p_rectangle').style.display = 'none';
        document.getElementById('BOP_12_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_12_db_btn').style.display = 'none';
        document.getElementById('BOP_12_b_btn').style.display = 'none';
        document.getElementById('BOP_12_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_12_dp_btn').style.display = 'none';
        document.getElementById('BOP_12_p_btn').style.display = 'none';
        document.getElementById('BOP_12_mp_btn').style.display = 'none';
        
        document.getElementById('PI_12_db_rectangle').style.display = 'none';
        document.getElementById('PI_12_b_rectangle').style.display = 'none';
        document.getElementById('PI_12_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_12_dp_rectangle').style.display = 'none';
        document.getElementById('PI_12_p_rectangle').style.display = 'none';
        document.getElementById('PI_12_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_12_db_btn').style.display = 'none';
        document.getElementById('PI_12_b_btn').style.display = 'none';
        document.getElementById('PI_12_mb_btn').style.display = 'none';
        
        document.getElementById('PI_12_dp_btn').style.display = 'none';
        document.getElementById('PI_12_p_btn').style.display = 'none';
        document.getElementById('PI_12_mp_btn').style.display = 'none';
        
        
        document.getElementById('polygon_12_b').style.display = 'none';
        document.getElementById('polyline_an_12_b').style.display = 'none';
        document.getElementById('polyline_mg_12_b').style.display = 'none';
        
        document.getElementById('polygon_12_p').style.display = 'none';
        document.getElementById('polyline_an_12_p').style.display = 'none';
        document.getElementById('polyline_mg_12_p').style.display = 'none';
        
        document.getElementById('polygon_inter_13_12_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_13_12_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_13_12_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_13_12_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_13_12_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_13_12_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_12_11_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_12_11_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_12_11_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_12_11_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_12_11_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_12_11_p').style.display = 'none';            
        
        document.getElementById('note_12_txt').style.display = 'none';
    }
    else if (Implant_12 !== 1) {
        Tooth_12 = 1;
        document.getElementById('tooth_line_12_b').style.display = 'none';
        document.getElementById('tooth_line_12_p').style.display = 'none';

        document.getElementById('mobility_12_txt').style.display = 'block';

        document.getElementById('implant_12_btn').style.display = 'block';

        document.getElementById('mg_12_db_txt').style.display = 'block';
        document.getElementById('mg_12_b_txt').style.display = 'block';
        document.getElementById('mg_12_mb_txt').style.display = 'block';
        
        document.getElementById('st_12_db_txt').style.display = 'block';
        document.getElementById('st_12_b_txt').style.display = 'block';
        document.getElementById('st_12_mb_txt').style.display = 'block';
        
        document.getElementById('mg_12_dp_txt').style.display = 'block';
        document.getElementById('mg_12_p_txt').style.display = 'block';
        document.getElementById('mg_12_mp_txt').style.display = 'block';
        
        document.getElementById('st_12_dp_txt').style.display = 'block';
        document.getElementById('st_12_p_txt').style.display = 'block';
        document.getElementById('st_12_mp_txt').style.display = 'block';
        
        document.getElementById('note_12_txt').style.display = 'block';

        document.getElementById('polygon_12_b').style.display = 'block';
        document.getElementById('polyline_an_12_b').style.display = 'block';
        document.getElementById('polyline_mg_12_b').style.display = 'block';
        
        document.getElementById('polygon_12_p').style.display = 'block';
        document.getElementById('polyline_an_12_p').style.display = 'block';
        document.getElementById('polyline_mg_12_p').style.display = 'block';

        if (Tooth_13 == 1 && Tooth_12 == 1) {
            document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_p').style.display = 'block';            
        }
        
        if (Tooth_12 == 1 && Tooth_11 == 1) {
            document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_p').style.display = 'block';            
        }

        document.getElementById('BOP_12_db_btn').style.display = 'block';
        document.getElementById('BOP_12_b_btn').style.display = 'block';
        document.getElementById('BOP_12_mb_btn').style.display = 'block';

        document.getElementById('BOP_12_dp_btn').style.display = 'block';
        document.getElementById('BOP_12_p_btn').style.display = 'block';
        document.getElementById('BOP_12_mp_btn').style.display = 'block';
        
        if (BOP_12_db == 1) {
            document.getElementById('BOP_12_db_rectangle').style.display = 'block';
        }
        if (BOP_12_b == 1) {
            document.getElementById('BOP_12_b_rectangle').style.display = 'block';
        }
        if (BOP_12_mb == 1) {
            document.getElementById('BOP_12_mb_rectangle').style.display = 'block';
        }
        if (BOP_12_dp == 1) {
            document.getElementById('BOP_12_dp_rectangle').style.display = 'block';
        }
        if (BOP_12_p == 1) {
            document.getElementById('BOP_12_p_rectangle').style.display = 'block';
        }
        if (BOP_12_mp == 1) {
            document.getElementById('BOP_12_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_12_db_btn').style.display = 'block';
        document.getElementById('PI_12_b_btn').style.display = 'block';
        document.getElementById('PI_12_mb_btn').style.display = 'block';

        document.getElementById('PI_12_dp_btn').style.display = 'block';
        document.getElementById('PI_12_p_btn').style.display = 'block';
        document.getElementById('PI_12_mp_btn').style.display = 'block';
        
        if (PI_12_db == 1) {
            document.getElementById('PI_12_db_rectangle').style.display = 'block';
        }
        if (PI_12_b == 1) {
            document.getElementById('PI_12_b_rectangle').style.display = 'block';
        }
        if (PI_12_mb == 1) {
            document.getElementById('PI_12_mb_rectangle').style.display = 'block';
        }
        if (PI_12_dp == 1) {
            document.getElementById('PI_12_dp_rectangle').style.display = 'block';
        }
        if (PI_12_p == 1) {
            document.getElementById('PI_12_p_rectangle').style.display = 'block';
        }
        if (PI_12_mp == 1) {
            document.getElementById('PI_12_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_12 == 1) {
        Tooth_12 = 1;
        document.getElementById('tooth_line_12_b').style.display = 'none';
        document.getElementById('tooth_line_12_p').style.display = 'none';

        document.getElementById('mobility_12_txt').style.display = 'block';
        
        document.getElementById('note_12_txt').style.display = 'block';

        document.getElementById('implant_12_btn').style.display = 'block';
        document.getElementById('implant_12_tab').style.display = 'block';
        document.getElementById('implant_12_b_image').style.display = 'block';
        document.getElementById('implant_12_p_image').style.display = 'block';

        document.getElementById('mg_12_db_txt').style.display = 'block';
        document.getElementById('mg_12_b_txt').style.display = 'block';
        document.getElementById('mg_12_mb_txt').style.display = 'block';
        
        document.getElementById('st_12_db_txt').style.display = 'block';
        document.getElementById('st_12_b_txt').style.display = 'block';
        document.getElementById('st_12_mb_txt').style.display = 'block';
        
        document.getElementById('mg_12_dp_txt').style.display = 'block';
        document.getElementById('mg_12_p_txt').style.display = 'block';
        document.getElementById('mg_12_mp_txt').style.display = 'block';
        
        document.getElementById('st_12_dp_txt').style.display = 'block';
        document.getElementById('st_12_p_txt').style.display = 'block';
        document.getElementById('st_12_mp_txt').style.display = 'block';

        document.getElementById('polygon_12_b').style.display = 'block';
        document.getElementById('polyline_an_12_b').style.display = 'block';
        document.getElementById('polyline_mg_12_b').style.display = 'block';
        
        document.getElementById('polygon_12_p').style.display = 'block';
        document.getElementById('polyline_an_12_p').style.display = 'block';
        document.getElementById('polyline_mg_12_p').style.display = 'block';

        if (Tooth_13 == 1 && Tooth_12 == 1) {
            document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_p').style.display = 'block';            
        }
        
        if (Tooth_12 == 1 && Tooth_11 == 1) {
            document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_12_11_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_12_11_p').style.display = 'block';            
        }

        document.getElementById('BOP_12_db_btn').style.display = 'block';
        document.getElementById('BOP_12_b_btn').style.display = 'block';
        document.getElementById('BOP_12_mb_btn').style.display = 'block';

        document.getElementById('BOP_12_dp_btn').style.display = 'block';
        document.getElementById('BOP_12_p_btn').style.display = 'block';
        document.getElementById('BOP_12_mp_btn').style.display = 'block';
        
        document.getElementById('PI_12_db_btn').style.display = 'block';
        document.getElementById('PI_12_b_btn').style.display = 'block';
        document.getElementById('PI_12_mb_btn').style.display = 'block';

        document.getElementById('PI_12_dp_btn').style.display = 'block';
        document.getElementById('PI_12_p_btn').style.display = 'block';
        document.getElementById('PI_12_mp_btn').style.display = 'block';
        
        if (BOP_12_db == 1) {
            document.getElementById('BOP_12_db_rectangle').style.display = 'block';
        }
        if (BOP_12_b == 1) {
            document.getElementById('BOP_12_b_rectangle').style.display = 'block';
        }
        if (BOP_12_mb == 1) {
            document.getElementById('BOP_12_mb_rectangle').style.display = 'block';
        }
        if (BOP_12_dp == 1) {
            document.getElementById('BOP_12_dp_rectangle').style.display = 'block';
        }
        if (BOP_12_p == 1) {
            document.getElementById('BOP_12_p_rectangle').style.display = 'block';
        }
        if (BOP_12_mp == 1) {
            document.getElementById('BOP_12_mp_rectangle').style.display = 'block';
        }
        
        if (PI_12_db == 1) {
            document.getElementById('PI_12_db_rectangle').style.display = 'block';
        }
        if (PI_12_b == 1) {
            document.getElementById('PI_12_b_rectangle').style.display = 'block';
        }
        if (PI_12_mb == 1) {
            document.getElementById('PI_12_mb_rectangle').style.display = 'block';
        }
        if (PI_12_dp == 1) {
            document.getElementById('PI_12_dp_rectangle').style.display = 'block';
        }
        if (PI_12_p == 1) {
            document.getElementById('PI_12_p_rectangle').style.display = 'block';
        }
        if (PI_12_mp == 1) {
            document.getElementById('PI_12_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_12() {
    if (Implant_12 == 0) {
        Implant_12 = 1;
        
        document.getElementById('implant_12_b_image').style.display = 'block';
        document.getElementById('implant_12_p_image').style.display = 'block';
        document.getElementById('implant_12_tab').style.display = 'block';
    }
    else {
        Implant_12 = 0;
        
        document.getElementById('implant_12_b_image').style.display = 'none';
        document.getElementById('implant_12_p_image').style.display = 'none';
        document.getElementById('implant_12_tab').style.display = 'none';
    }
}

function toggle_BOP_12_db() {
    if (BOP_12_db == 0) {
        BOP_12_db = 1;
        document.getElementById('BOP_12_db_rectangle').style.display = 'block';
    }
    else {
        BOP_12_db = 0;
        document.getElementById('BOP_12_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_12_b() {
    if (BOP_12_b == 0) {
        BOP_12_b = 1;
        document.getElementById('BOP_12_b_rectangle').style.display = 'block';
    }
    else {
        BOP_12_b = 0;
        document.getElementById('BOP_12_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_12_mb() {
    if (BOP_12_mb == 0) {
        BOP_12_mb = 1;
        document.getElementById('BOP_12_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_12_mb = 0;
        document.getElementById('BOP_12_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_12_db() {
    if (PI_12_db == 0) {
        PI_12_db = 1;
        document.getElementById('PI_12_db_rectangle').style.display = 'block';
    }
    else {
        PI_12_db = 0;
        document.getElementById('PI_12_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_12_b() {
    if (PI_12_b == 0) {
        PI_12_b = 1;
        document.getElementById('PI_12_b_rectangle').style.display = 'block';
    }
    else {
        PI_12_b = 0;
        document.getElementById('PI_12_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_12_mb() {
    if (PI_12_mb == 0) {
        PI_12_mb = 1;
        document.getElementById('PI_12_mb_rectangle').style.display = 'block';
    }
    else {
        PI_12_mb = 0;
        document.getElementById('PI_12_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_12_dp() {
    if (BOP_12_dp == 0) {
        BOP_12_dp = 1;
        document.getElementById('BOP_12_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_12_dp = 0;
        document.getElementById('BOP_12_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_12_p() {
    if (BOP_12_p == 0) {
        BOP_12_p = 1;
        document.getElementById('BOP_12_p_rectangle').style.display = 'block';
    }
    else {
        BOP_12_p = 0;
        document.getElementById('BOP_12_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_12_mp() {
    if (BOP_12_mp == 0) {
        BOP_12_mp = 1;
        document.getElementById('BOP_12_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_12_mp = 0;
        document.getElementById('BOP_12_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_12_dp() {
    if (PI_12_dp == 0) {
        PI_12_dp = 1;
        document.getElementById('PI_12_dp_rectangle').style.display = 'block';
    }
    else {
        PI_12_dp = 0;
        document.getElementById('PI_12_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_12_p() {
    if (PI_12_p == 0) {
        PI_12_p = 1;
        document.getElementById('PI_12_p_rectangle').style.display = 'block';
    }
    else {
        PI_12_p = 0;
        document.getElementById('PI_12_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_12_mp() {
    if (PI_12_mp == 0) {
        PI_12_mp = 1;
        document.getElementById('PI_12_mp_rectangle').style.display = 'block';
    }
    else {
        PI_12_mp = 0;
        document.getElementById('PI_12_mp_rectangle').style.display = 'none';
    }
}

function change_probing_12(probing_depth_min = 0) {
    if (Tooth_12 == 1) {
        
    // Variablen aus dem Formular
        st_12_db = document.forms[0]["st_12_db"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_12_db"].value - probing_depth_min;
        st_12_b = document.forms[0]["st_12_b"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_12_b"].value - probing_depth_min;
        st_12_mb = document.forms[0]["st_12_mb"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_12_mb"].value - probing_depth_min;

        if (document.forms[0]["st_12_dp"].value > probing_depth_min) {document.forms[0]["st_12_dp"].style.color = 'red';} else {document.forms[0]["st_12_dp"].style.color = 'black'}
        if (document.forms[0]["st_12_p"].value > probing_depth_min) {document.forms[0]["st_12_p"].style.color = 'red';} else {document.forms[0]["st_12_p"].style.color = 'black'}
        if (document.forms[0]["st_12_mp"].value > probing_depth_min) {document.forms[0]["st_12_mp"].style.color = 'red';} else {document.forms[0]["st_12_mp"].style.color = 'black'}
        
        mg_12_db = document.forms[0]["mg_12_db"].value;
        mg_12_b = document.forms[0]["mg_12_b"].value;
        mg_12_mb = document.forms[0]["mg_12_mb"].value;
        
        st_12_dp = document.forms[0]["st_12_dp"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_12_dp"].value - probing_depth_min;
        st_12_p = document.forms[0]["st_12_p"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_12_p"].value - probing_depth_min;
        st_12_mp = document.forms[0]["st_12_mp"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_12_mp"].value - probing_depth_min;

        if (document.forms[0]["st_12_db"].value > probing_depth_min) {document.forms[0]["st_12_db"].style.color = 'red';} else {document.forms[0]["st_12_db"].style.color = 'black'}
        if (document.forms[0]["st_12_b"].value > probing_depth_min) {document.forms[0]["st_12_b"].style.color = 'red';} else {document.forms[0]["st_12_b"].style.color = 'black'}
        if (document.forms[0]["st_12_mb"].value > probing_depth_min) {document.forms[0]["st_12_mb"].style.color = 'red';} else {document.forms[0]["st_12_mb"].style.color = 'black'}
        
        mg_12_dp = document.forms[0]["mg_12_dp"].value;
        mg_12_p = document.forms[0]["mg_12_p"].value;
        mg_12_mp = document.forms[0]["mg_12_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
        var x_db_12 = 588;							// distal 12
        var x_mb_12 = 612;							// mesial 12
        var x_b_12 = (x_db_12 + x_mb_12)/2;			// bukkal 12
        
    // Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
        var x_dp_12 = 586;							// distal 12
        var x_mp_12 = 612;							// mesial 12
        var x_p_12 = (x_dp_12 + x_mp_12)/2;			// palatinal 12
        
    // Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
        var y_mg_12_db = mg_OK_b + 6.5 * mg_12_db;	// Margo Gingivae distobukkal 12
        var y_mg_12_b = mg_OK_b + 6.5 * mg_12_b;	// Margo Gingivae bukkal 12
        var y_mg_12_mb = mg_OK_b + 6.5 * mg_12_mb;	// Margo Gingivae mesiobukkal 12
        var y_st_12_db = 6.5 * st_12_db;			// Sondierungstiefe distobukkal 12
        var y_st_12_b = 6.5 * st_12_b;				// Sondierungstiefe bukkal 12
        var y_st_12_mb = 6.5 * st_12_mb;			// Sondierungstiefe mesiobukkal 12
        
    // Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
        var y_mg_12_dp = mg_OK_p - 6.5 * mg_12_dp;	// Margo Gingivae distopalatinal 12
        var y_mg_12_p = mg_OK_p - 6.5 * mg_12_p;	// Margo Gingivae palatinal 12
        var y_mg_12_mp = mg_OK_p - 6.5 * mg_12_mp;	// Margo Gingivae mesiopalatinal 12
        var y_st_12_dp = 6.5 * st_12_dp;			// Sondierungstiefe distopalatinal 12
        var y_st_12_p = 6.5 * st_12_p;				// Sondierungstiefe palatinal 12
        var y_st_12_mp = 6.5 * st_12_mp;			// Sondierungstiefe mesiopalatinal 12
        
    // Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_12_db = y_mg_12_db - y_st_12_db;	// Attachmentniveau distobukkal 12
        var y_an_12_b = y_mg_12_b - y_st_12_b;		// Attachmentniveau bukkal 12
        var y_an_12_mb = y_mg_12_mb - y_st_12_mb;	// Attachmentniveau mesiobukkal 12
        
    // Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_12_dp = y_mg_12_dp + y_st_12_dp;	// Attachmentniveau distopalatinal 12
        var y_an_12_p = y_mg_12_p + y_st_12_p;		// Attachmentniveau palatinal 12
        var y_an_12_mp = y_mg_12_mp + y_st_12_mp;	// Attachmentniveau mesiopalatinal 12
        
    // Parodontaltasche 12 bukkal zeichnen
        var string = 
            x_db_12 + ", " + y_an_12_db + "  " + 
            x_b_12 + ", " + y_an_12_b + "  " + 
            x_mb_12 + ", " + y_an_12_mb + "  " + 
            x_mb_12 + ", " + y_mg_12_mb + "  " + 
            x_b_12 + ", " + y_mg_12_b + "  " + 
            x_db_12 + ", " + y_mg_12_db;
        document.getElementById("polygon_12_b").setAttribute("points", string);
    // Attachmentniveau 12 bukkal zeichnen
        var string = 
            x_db_12 + ", " + y_an_12_db + "  " + 
            x_b_12 + ", " + y_an_12_b + "  " + 
            x_mb_12 + ", " + y_an_12_mb;
        document.getElementById("polyline_an_12_b").setAttribute("points", string);
    // Margo Gingivae 12 bukkal zeichnen
        var string =
            x_db_12 + ", " + y_mg_12_db + "  " + 
            x_b_12 + ", " + y_mg_12_b + "  " + 
            x_mb_12 + ", " + y_mg_12_mb;
        document.getElementById("polyline_mg_12_b").setAttribute("points", string);

    // Parodontaltasche 12 palatinal zeichnen
        var string = 
            x_dp_12 + ", " + y_an_12_dp + "  " + 
            x_p_12 + ", " + y_an_12_p + "  " + 
            x_mp_12 + ", " + y_an_12_mp + "  " + 
            x_mp_12 + ", " + y_mg_12_mp + "  " + 
            x_p_12 + ", " + y_mg_12_p + "  " + 
            x_dp_12 + ", " + y_mg_12_dp;
        document.getElementById("polygon_12_p").setAttribute("points", string);
    // Attachmentniveau 12 palatinal zeichnen
        var string = 
            x_dp_12 + ", " + y_an_12_dp + "  " + 
            x_p_12 + ", " + y_an_12_p + "  " + 
            x_mp_12 + ", " + y_an_12_mp;
        document.getElementById("polyline_an_12_p").setAttribute("points", string);
    // Margo Gingivae 12 palatinal zeichnen
        var string =
            x_dp_12 + ", " + y_mg_12_dp + "  " + 
            x_p_12 + ", " + y_mg_12_p + "  " + 
            x_mp_12 + ", " + y_mg_12_mp;
        document.getElementById("polyline_mg_12_p").setAttribute("points", string);
    }
    if (Tooth_12 == 1 && Tooth_11 == 1) {

        st_11_db = document.forms[0]["st_11_db"].value;
        mg_11_db = document.forms[0]["mg_11_db"].value;
        
        st_11_dp = document.forms[0]["st_11_dp"].value;
        mg_11_dp = document.forms[0]["mg_11_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 11 (bukkal) in der Bitmap
        var x_db_11 = 628;							// distal 11
        
    // Set der horizontalen Koordinaten von Zahn 11 (palatinal) in der Bitmap
        var x_dp_11 = 627;							// distal 11
        
    // Set der vertikalen Koordinaten von Zahn 11 (bukkal) aus dem Formular
        var y_mg_11_db = mg_OK_b + 6.5 * mg_11_db;	// Margo Gingivae distobukkal 11
        var y_st_11_db = 6.5 * st_11_db;			// Sondierungstiefe distobukkal 11
        
    // Set der vertikalen Koordinaten von Zahn 11 (palatinal) aus dem Formular
        var y_mg_11_dp = mg_OK_p - 6.5 * mg_11_dp;	// Margo Gingivae distopalatinal 11
        var y_st_11_dp = 6.5 * st_11_dp;			// Sondierungstiefe distopalatinal 11
        
    // Berechnung des Attachmentniveaus 11 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_11_db = y_mg_11_db - y_st_11_db;	// Attachmentniveau distobukkal 11
        
    // Berechnung des Attachmentniveaus 11 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_11_dp = y_mg_11_dp + y_st_11_dp;	// Attachmentniveau distopalatinal 11

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
    if (Tooth_13 == 1 && Tooth_12 == 1) {

        st_13_mb = document.forms[0]["st_13_mb"].value;
        mg_13_mb = document.forms[0]["mg_13_mb"].value;
        
        st_13_mp = document.forms[0]["st_13_mp"].value;
        mg_13_mp = document.forms[0]["mg_13_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
        var x_mb_13 = 570;							// mesial 13
        
    // Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
        var x_mp_13 = 573;							// mesial 13
        
    // Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
        var y_mg_13_mb = mg_OK_b + 6.5 * mg_13_mb;	// Margo Gingivae mesiobukkal 13
        var y_st_13_mb = 6.5 * st_13_mb;			// Sondierungstiefe mesiobukkal 13
        
    // Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
        var y_mg_13_mp = mg_OK_p - 6.5 * mg_13_mp;	// Margo Gingivae mesiopalatinal 13
        var y_st_13_mp = 6.5 * st_13_mp;			// Sondierungstiefe mesiopalatinal 13
        
    // Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_13_mb = y_mg_13_mb - y_st_13_mb;	// Attachmentniveau mesiobukkal 13
        
    // Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_13_mp = y_mg_13_mp + y_st_13_mp;	// Attachmentniveau mesiopalatinal 13

    // Parodontaltasche inter_13_12 bukkal zeichnen
        var string = 
            x_mb_13 + ", " + y_an_13_mb + "  " + 
            x_db_12 + ", " + y_an_12_db + "  " + 
            x_db_12 + ", " + y_mg_12_db + "  " + 
            x_mb_13 + ", " + y_mg_13_mb;
        document.getElementById("polygon_inter_13_12_b").setAttribute("points", string);
    // Attachmentniveau inter_13_12 bukkal zeichnen
        var string = 
            x_mb_13 + ", " + y_an_13_mb + "  " + 
            x_db_12 + ", " + y_an_12_db;
        document.getElementById("polyline_an_inter_13_12_b").setAttribute("points", string);
    // Margo Gingivae inter_13_12 bukkal zeichnen
        var string =
            x_mb_13 + ", " + y_mg_13_mb + "  " + 
            x_db_12 + ", " + y_mg_12_db;
        document.getElementById("polyline_mg_inter_13_12_b").setAttribute("points", string);

    // Parodontaltasche inter_13_12 palatinal zeichnen
        var string = 
            x_mp_13 + ", " + y_an_13_mp + "  " + 
            x_dp_12 + ", " + y_an_12_dp + "  " + 
            x_dp_12 + ", " + y_mg_12_dp + "  " + 
            x_mp_13 + ", " + y_mg_13_mp;
        document.getElementById("polygon_inter_13_12_p").setAttribute("points", string);
    // Attachmentniveau inter_13_12 palatinal zeichnen
        var string = 
            x_mp_13 + ", " + y_an_13_mp + "  " + 
            x_dp_12 + ", " + y_an_12_dp;
        document.getElementById("polyline_an_inter_13_12_p").setAttribute("points", string);
    // Margo Gingivae inter_13_12 palatinal zeichnen
        var string =
            x_mp_13 + ", " + y_mg_13_mp + "  " + 
            x_dp_12 + ", " + y_mg_12_dp;
        document.getElementById("polyline_mg_inter_13_12_p").setAttribute("points", string);
    }
}